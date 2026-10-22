import { JSX, useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";

type Student = {
    uid: string;
    studentId: string;
    fullName: string;
    email: string;
    program: string;
    university: string;
    fileName: string;
};

type RecordItem = {
    studentName: string;
    studentId: string;
    program: string;
    credential: string;
    status: string;
};

const mockRecords: RecordItem[] = [
    {
        studentName: "King Kong",
        studentId: "20260001",
        program: "BS Information Technology",
        credential: "Academic Record",
        status: "verified",
    },
    {
        studentName: "Elmar Sam Diza",
        studentId: "20260002",
        program: "BS Information Technology",
        credential: "Academic Record",
        status: "verified",
    },
    {
        studentName: "Randy Gonzales",
        studentId: "20260003",
        program: "BS Information Technology",
        credential: "Academic Record",
        status: "verified",
    },
];

const PROGRAM_SUGGESTIONS = [
    "BS Information Technology",
    "BSIT",
    "BS Computer Science",
    "BSCS",
    "BS Accountancy",
    "BSA",
    "BS Business Administration",
    "BSBA",
    "BS Nursing",
    "BSN",
    "Master of Information Technology",
    "Doctor of Philosophy",
];

const DEFAULT_UNIVERSITY = "UCU";

const newStudent = (): Student => ({
    uid: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    studentId: "",
    fullName: "",
    email: "",
    program: "",
    university: DEFAULT_UNIVERSITY,
    fileName: "",
});

async function sha256Hex(text: string): Promise<string> {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

/* ---------- Icons ---------- */

const iconProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const IdIcon = () => (
    <svg {...iconProps}>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M9 5V3.5h6V5" />
        <circle cx="9.5" cy="11" r="1.5" />
        <path d="M13.5 10.5H17M13.5 13.5H17M7.5 16.5h4" />
    </svg>
);

const PersonIcon = () => (
    <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.8" />
        <path d="M4.5 20c.8-3.8 4-5.5 7.5-5.5s6.7 1.7 7.5 5.5" />
    </svg>
);

const MailIcon = () => (
    <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
);

const CapIcon = () => (
    <svg {...iconProps}>
        <path d="M12 4L2 9l10 5 10-5-10-5z" />
        <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    </svg>
);

const SearchIcon = () => (
    <svg {...iconProps}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M20 20l-4-4" />
    </svg>
);

const BankIcon = () => (
    <svg {...iconProps}>
        <path d="M3 9l9-5 9 5" />
        <path d="M4 9h16M5.5 12v5M10 12v5M14 12v5M18.5 12v5M3.5 20h17" />
    </svg>
);

const ClipIcon = () => (
    <svg {...iconProps}>
        <path d="M20 11.5l-8.3 8.3a5 5 0 0 1-7.1-7.1l8.8-8.8a3.3 3.3 0 0 1 4.7 4.7l-8.8 8.8a1.7 1.7 0 0 1-2.4-2.4l8-8" />
    </svg>
);

const TrashIcon = () => (
    <svg {...iconProps}>
        <path d="M4 7h16" />
        <path d="M9 7V4h6v3" />
        <path d="M6 7l1 13h10l1-13" />
    </svg>
);

const AddPersonIcon = () => (
    <svg {...iconProps}>
        <circle cx="10" cy="8" r="3.6" />
        <path d="M3.5 20c.7-3.6 3.4-5.3 6.5-5.3s5.8 1.7 6.5 5.3" />
        <path d="M19 6v6M16 9h6" />
    </svg>
);

const CloudUploadIcon = () => (
    <svg {...iconProps}>
        <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5 4.8 4.8 0 0 1 17.5 18H7z" />
        <path d="M12 16v-6M9.5 12.5L12 10l2.5 2.5" />
    </svg>
);

/* ---------- QR placeholder rendered from the hash ---------- */

function HashQr({ hash }: { hash: string }) {
    const N = 25;
    const bits: number[] = [];
    for (let i = 0; i < hash.length; i++) {
        const v = parseInt(hash[i], 16);
        bits.push((v >> 3) & 1, (v >> 2) & 1, (v >> 1) & 1, v & 1);
    }
    const isFinder = (x: number, y: number) => {
        const inBox = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
        return inBox(0, 0) || inBox(N - 7, 0) || inBox(0, N - 7);
    };
    const finderOn = (x: number, y: number) => {
        const local = (ox: number, oy: number) => {
            const lx = x - ox;
            const ly = y - oy;
            if (lx < 0 || ly < 0 || lx > 6 || ly > 6) return null;
            const ring = Math.max(Math.abs(lx - 3), Math.abs(ly - 3));
            return ring !== 2;
        };
        return local(0, 0) ?? local(N - 7, 0) ?? local(0, N - 7) ?? false;
    };

    const cells: JSX.Element[] = [];
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            let on = false;
            if (isFinder(x, y)) {
                on = finderOn(x, y);
            } else if (bits.length > 0) {
                const i = y * N + x;
                on = (bits[i % bits.length] ^ bits[(i * 7 + 3) % bits.length]) === 1;
            }
            if (on) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
        }
    }

    return (
        <svg
            viewBox={`-1 -1 ${N + 2} ${N + 2}`}
            className="w-28 h-28 shrink-0 text-[#0A192F]"
            fill="currentColor"
            shapeRendering="crispEdges"
            role="img"
            aria-label="Credential QR payload"
        >
            <rect x="-1" y="-1" width={N + 2} height={N + 2} fill="#F1F3F9" />
            {cells}
        </svg>
    );
}

/* ---------- Outlined field ---------- */

function Field({
    icon,
    children,
}: {
    icon: JSX.Element;
    children: JSX.Element;
}) {
    return (
        <div className="relative flex items-center min-h-14 border border-slate-400 rounded-xl bg-[#F1F3F9] focus-within:border-[#00356B] focus-within:ring-4 focus-within:ring-[#00356B]/10 transition">
            <span className="pl-4 pr-3 text-[#0A192F] shrink-0">{icon}</span>
            {children}
        </div>
    );
}

const inputClass =
    "flex-1 min-w-0 h-14 bg-transparent pr-4 text-base text-[#0A192F] placeholder:text-slate-600 outline-none";

/* ---------- Student card ---------- */

function StudentCard({
    student,
    index,
    onChange,
    onRemove,
}: {
    student: Student;
    index: number;
    onChange: (patch: Partial<Student>) => void;
    onRemove: () => void;
}) {
    const [hash, setHash] = useState<string>("");
    const fileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let cancelled = false;
        const payload = JSON.stringify({
            studentId: student.studentId.trim(),
            fullName: student.fullName.trim(),
            email: student.email.trim(),
            program: student.program.trim(),
            university: student.university.trim(),
            file: student.fileName,
        });
        sha256Hex(payload).then((h) => {
            if (!cancelled) setHash(h);
        });
        return () => {
            cancelled = true;
        };
    }, [
        student.studentId,
        student.fullName,
        student.email,
        student.program,
        student.university,
        student.fileName,
    ]);

    return (
        <div className="bg-[#F1F3F9] rounded-2xl shadow-[0_4px_14px_rgba(15,23,42,0.12)] p-5 md:p-7">
            <div className="flex items-center justify-between mb-5">
                <h3 className="m-0 text-lg font-extrabold text-[#0A192F]">
                    Student {index + 1}
                </h3>
                <button
                    type="button"
                    onClick={onRemove}
                    aria-label={`Remove student ${index + 1}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-[#0A192F] hover:bg-white transition"
                >
                    <TrashIcon />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field icon={<IdIcon />}>
                    <input
                        type="text"
                        value={student.studentId}
                        onChange={(e) => onChange({ studentId: e.target.value })}
                        placeholder="Student ID"
                        aria-label="Student ID"
                        className={inputClass}
                    />
                </Field>

                <Field icon={<PersonIcon />}>
                    <input
                        type="text"
                        value={student.fullName}
                        onChange={(e) => onChange({ fullName: e.target.value })}
                        placeholder="Full name"
                        aria-label="Full name"
                        className={inputClass}
                    />
                </Field>

                <div className="sm:col-span-2">
                    <Field icon={<MailIcon />}>
                        <input
                            type="email"
                            value={student.email}
                            onChange={(e) => onChange({ email: e.target.value })}
                            placeholder="Google/institutional email"
                            aria-label="Google/institutional email"
                            className={inputClass}
                        />
                    </Field>
                </div>

                <div className="sm:col-span-2">
                    <Field icon={<CapIcon />}>
                        <>
                            <input
                                type="text"
                                list={`programs-${student.uid}`}
                                value={student.program}
                                onChange={(e) => onChange({ program: e.target.value })}
                                placeholder="Degree / program"
                                aria-label="Degree / program"
                                className={inputClass}
                            />
                            <datalist id={`programs-${student.uid}`}>
                                {PROGRAM_SUGGESTIONS.map((p) => (
                                    <option key={p} value={p} />
                                ))}
                            </datalist>
                            <span className="pr-4 text-[#0A192F]">
                                <SearchIcon />
                            </span>
                        </>
                    </Field>
                    <p className="mt-2 mb-0 px-4 text-sm text-slate-600">
                        Search by full name or acronym; custom programs allowed.
                    </p>
                </div>

                <div className="sm:col-span-2 relative">
                    <span className="absolute -top-2.5 left-4 px-1.5 bg-[#F1F3F9] text-sm text-slate-600 z-10">
                        University/School
                    </span>
                    <Field icon={<BankIcon />}>
                        <input
                            type="text"
                            value={student.university}
                            onChange={(e) => onChange({ university: e.target.value })}
                            aria-label="University/School"
                            className={inputClass}
                        />
                    </Field>
                </div>
            </div>

            {/* Attach diploma */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
                <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onChange({ fileName: file.name });
                    }}
                />
                <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="inline-flex items-center gap-3 min-h-12 px-6 rounded-full border border-slate-400 text-[#00356B] font-bold hover:bg-white transition"
                >
                    <ClipIcon />
                    Attach diploma (optional)
                </button>
                {student.fileName && (
                    <span className="text-sm font-bold text-[#0A192F] break-all">
                        {student.fileName}
                    </span>
                )}
            </div>

            {/* Hash + QR */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <p className="m-0 font-mono text-sm leading-relaxed text-[#172033] break-all">
                    SHA-256 of credential details: {hash}
                </p>
                <HashQr hash={hash} />
            </div>
        </div>
    );
}

/* ---------- Page ---------- */

export default function Records() {
    const [students, setStudents] = useState<Student[]>([]);
    const [records, setRecords] = useState<RecordItem[]>(mockRecords);
    const [reviewOpen, setReviewOpen] = useState<boolean>(false);
    const [toast, setToast] = useState<string>("");
    const toastTimer = useRef<number | undefined>(undefined);

    const showToast = (message: string) => {
        setToast(message);
        window.clearTimeout(toastTimer.current);
        toastTimer.current = window.setTimeout(() => setToast(""), 2600);
    };

    const addStudent = () => setStudents((prev) => [...prev, newStudent()]);

    const updateStudent = (uid: string, patch: Partial<Student>) =>
        setStudents((prev) => prev.map((s) => (s.uid === uid ? { ...s, ...patch } : s)));

    const removeStudent = (uid: string) =>
        setStudents((prev) => prev.filter((s) => s.uid !== uid));

    const handleReview = () => {
        if (students.length === 0) {
            showToast('Add at least one student first.');
            return;
        }
        const incomplete = students.findIndex(
            (s) => !s.studentId.trim() || !s.fullName.trim() || !s.email.trim() || !s.program.trim() || !s.university.trim()
        );
        if (incomplete !== -1) {
            showToast(`Please complete all required fields for Student ${incomplete + 1}.`);
            return;
        }
        setReviewOpen(true);
    };

    const handleIssue = () => {
        const issued: RecordItem[] = students.map((s) => ({
            studentName: s.fullName.trim(),
            studentId: s.studentId.trim(),
            program: s.program.trim(),
            credential: "Academic Record",
            status: "verified",
        }));
        setRecords((prev) => [...issued, ...prev]);
        setStudents([]);
        setReviewOpen(false);
        showToast(`${issued.length} credential(s) issued successfully.`);
    };

    return (
        <>
            <div className="min-h-screen bg-[#F6F8FC] grid grid-cols-1 md:grid-cols-[286px_1fr]">

                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <main className="min-w-0 p-5 overflow-y-auto h-screen md:p-8">
                    <div className="max-w-4xl mx-auto">

                        {/* Header */}
                        <header className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div>
                                <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                    Issue Academic Credentials
                                </p>

                                <h1 className="mt-1.5 mb-2 text-[#0A192F] text-3xl md:text-4xl font-normal">
                                    Credential batch
                                </h1>

                                <p className="m-0 text-[#172033] text-base">
                                    Add students, review every credential and QR payload, then submit the batch once.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={addStudent}
                                className="inline-flex items-center justify-center gap-3 whitespace-nowrap min-h-14 px-8 rounded-full bg-[#00356B] text-white font-bold text-base shadow-[0_8px_20px_rgba(0,53,107,0.22)] hover:-translate-y-0.5 transition"
                            >
                                <AddPersonIcon />
                                Add student
                            </button>
                        </header>

                        {/* Student cards */}
                        {students.length === 0 ? (
                            <p className="my-16 text-base text-slate-500">
                                No students added yet. Click "Add student" above to start uploading.
                            </p>
                        ) : (
                            <div className="grid gap-6 mt-8 mb-8">
                                {students.map((student, index) => (
                                    <StudentCard
                                        key={student.uid}
                                        student={student}
                                        index={index}
                                        onChange={(patch) => updateStudent(student.uid, patch)}
                                        onRemove={() => removeStudent(student.uid)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Review and issue */}
                        <button
                            type="button"
                            onClick={handleReview}
                            className="w-full inline-flex items-center justify-center gap-3 min-h-16 px-8 rounded-full bg-[#00356B] text-white font-bold text-lg shadow-[0_8px_20px_rgba(0,53,107,0.22)] hover:bg-[#002B57] transition"
                        >
                            <CloudUploadIcon />
                            Review and issue {students.length} credential(s)
                        </button>

                        {/* Issued records */}
                        <section className="mt-12" aria-label="Issued records">
                            <h2 className="mb-4 text-xl font-extrabold text-[#0A192F]">
                                Issued records
                            </h2>

                            {records.length === 0 ? (
                                <p className="text-sm text-slate-500">
                                    Uploaded academic records will appear here.
                                </p>
                            ) : (
                                <div className="grid gap-3">
                                    {records.map((record) => (
                                        <div
                                            key={`${record.studentId}-${record.studentName}`}
                                            className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-[#F1F3F9] shadow-[0_4px_14px_rgba(15,23,42,0.1)]"
                                        >
                                            <span className="text-[#0A192F] shrink-0">
                                                <CapIcon />
                                            </span>

                                            <div className="min-w-0 flex-1">
                                                <p className="m-0 font-extrabold text-[#0A192F] truncate">
                                                    {record.studentName}
                                                </p>
                                                <p className="mt-1 mb-0 text-sm text-slate-600 truncate">
                                                    {record.studentId} · {record.program} · {record.credential}
                                                </p>
                                            </div>

                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[11px] font-extrabold capitalize">
                                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                {record.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </main>
            </div>

            {/* Review Modal */}
            {reviewOpen && (
                <div className="fixed inset-0 z-40 grid place-items-center p-4 bg-[#0A192F]/60 backdrop-blur-sm">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="reviewTitle"
                        className="relative w-[min(620px,100%)] max-h-[calc(100vh-36px)] overflow-auto p-6 bg-white rounded-2xl shadow-[0_18px_44px_rgba(10,25,47,0.18)]"
                    >
                        <button
                            type="button"
                            onClick={() => setReviewOpen(false)}
                            aria-label="Close"
                            className="absolute top-4 right-4 w-9 h-9 rounded-lg border border-slate-200 bg-white text-[#0A192F] font-extrabold hover:bg-slate-50 transition"
                        >
                            ×
                        </button>

                        <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                            Credential batch
                        </p>
                        <h2 id="reviewTitle" className="mt-1 mb-4 text-xl font-extrabold text-[#0A192F]">
                            Review and issue {students.length} credential(s)
                        </h2>

                        <div className="grid gap-3">
                            {students.map((s, i) => (
                                <div key={s.uid} className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200">
                                    <p className="m-0 text-xs font-bold text-slate-500">Student {i + 1}</p>
                                    <p className="mt-1 mb-0 font-extrabold text-[#0A192F]">{s.fullName}</p>
                                    <p className="mt-1 mb-0 text-sm text-slate-600">
                                        {s.studentId} · {s.program} · {s.university}
                                    </p>
                                    <p className="mt-1 mb-0 text-sm text-slate-600 break-all">{s.email}</p>
                                    <p className="mt-1 mb-0 text-xs text-slate-500 break-all">
                                        Diploma: {s.fileName || "No file attached"}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 flex flex-col-reverse sm:flex-row gap-3">
                            <button
                                type="button"
                                onClick={() => setReviewOpen(false)}
                                className="flex-1 min-h-12 px-5 rounded-full border border-slate-300 text-[#0A192F] font-bold hover:bg-slate-50 transition"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={handleIssue}
                                className="flex-1 inline-flex items-center justify-center gap-2 min-h-12 px-5 rounded-full bg-[#00356B] text-white font-bold hover:bg-[#002B57] transition"
                            >
                                <CloudUploadIcon />
                                Issue credential(s)
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            <div
                role="status"
                aria-live="polite"
                className={`fixed right-4 bottom-4 z-50 pointer-events-none max-w-[min(380px,calc(100%-36px))] px-4 py-3.5 rounded-xl bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.12)] transition-all duration-200 ${
                    toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
                {toast}
            </div>
        </>
    );
}