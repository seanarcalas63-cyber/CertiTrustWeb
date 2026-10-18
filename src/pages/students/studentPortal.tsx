
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import StudentSidebar from "../../components/StudentSidebar";
import { useUserVerification } from "../../context/studentContext";

type CredentialRecord = {
    id: string;
    studentName: string;
    studentId: string;
    program: string;
    email: string;
    issueDate: string;
    issuingInstitution: string;
    blockchainAnchor: string;
    certificateHash: string;
};

const STUDENT_DB: Record<string, CredentialRecord> = {
    "20260001": {
        id: "CERT-2026-0001",
        studentName: "UcuUser T. Student",
        studentId: "20260001",
        program: "Bachelor of Science in Information Technology (BSIT)",
        email: "userucu7@gmail.com",
        issueDate: "2026-10-13",
        issuingInstitution: "Urdaneta City University (UCU)",
        blockchainAnchor: "Polygon",
        certificateHash: "0x4f3a7c1e2b9d0aa1c8f312203efab7710c98e21",
    },
};

const RECORDS: CredentialRecord[] = [
    STUDENT_DB["20260001"],
    {
        id: "CERT-2025-0117",
        studentName: "UcuUser T. Student",
        studentId: "20260001",
        program: "Senior High School — STEM Strand",
        email: "userucu7@gmail.com",
        issueDate: "2022-05-20",
        issuingInstitution: "Urdaneta City University (UCU)",
        blockchainAnchor: "Polygon",
        certificateHash: "0x9a12ef44d0b7c6a51f0938ab21ee7710aa88b3c",
    },
];

type Toast = { message: string } | null;

const initials = (name: string) =>
    name
        .split(" ")
        .map((word) => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase();

const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export default function StudentPortal() {
    const [studentIdInput, setStudentIdInput] = useState("");
    const [showIdWarning, setShowIdWarning] = useState(false);
    const [attemptedId, setAttemptedId] = useState("");
    const [qrRecord, setQrRecord] = useState<CredentialRecord | null>(null);
    const [toast, setToast] = useState<Toast>(null);

    const navigate = useNavigate();
    const user = useUserVerification();

    const record = useMemo(
        () => STUDENT_DB[user.studentId],
        [user.studentId]
    );

    const showToast = (message: string) => {
        setToast({ message });
        window.setTimeout(() => setToast(null), 2600);
    };

    const getVerificationUrl = (credential: CredentialRecord) => {
        return `${window.location.origin}/certificate-verification?studentId=${encodeURIComponent(
            credential.studentId
        )}&certificateId=${encodeURIComponent(credential.id)}`;
    };

    const handleVerify = () => {
        const id = studentIdInput.trim();

        if (!id) {
            showToast("Please enter your Student ID.");
            return;
        }

        if (STUDENT_DB[id]) {
            setShowIdWarning(false);
            user.verifyStudentId(id);
        } else {
            setAttemptedId(id);
            setShowIdWarning(true);
        }
    };

    const handleSaveDiploma = (credential: CredentialRecord) => {
        const content = `
REPUBLIC OF THE PHILIPPINES
URDANETA CITY UNIVERSITY
Urdaneta City, Pangasinan

DIGITAL DIPLOMA COPY

TO ALL WHOM THESE PRESENTS MAY COME, GREETINGS:

BE IT KNOWN THAT

${credential.studentName}

HAS SATISFACTORILY COMPLETED ALL THE REQUIREMENTS
PRESCRIBED BY THE UNIVERSITY AND IS THEREFORE GRANTED
THE DEGREE OF

BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
(BSIT)

Student ID: ${credential.studentId}
Issue Date: ${formatDate(credential.issueDate)}
Certificate ID: ${credential.id}

Certificate Hash:
${credential.certificateHash}

NOTE: This is a sample digital diploma preview, not an
official university-issued diploma.
        `.trim();

        const blob = new Blob([content], {
            type: "text/plain;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = `${credential.studentId}-digital-diploma.txt`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);

        showToast("Digital diploma copy downloaded.");
    };

    const handleVerifyOnChain = (credential: CredentialRecord) => {
        navigate(getVerificationUrl(credential));
    };

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <StudentSidebar />

            <main className="min-h-screen min-w-0 md:ml-64">
                <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 md:py-8 lg:px-8">

                    {/* Dashboard Header */}
                    <header className="mb-7 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-6">
                        <button
                            type="button"
                            data-toggle-sidebar
                            aria-label="Open navigation"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-bold text-[#0A192F] md:hidden"
                        >
                            ☰
                        </button>

                        <div className="min-w-0">
                            <div className="mb-1 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                <p className="m-0 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                                    Student Portal
                                </p>
                            </div>
                            <h1 className="text-2xl font-extrabold text-[#0A192F] md:text-3xl">
                                CertiTrust Dashboard
                            </h1>
                            <p className="mt-1 text-sm text-slate-500">
                                View your academic credentials and digital diploma.
                            </p>
                        </div>
                    </header>

                    {/* Identity Verification */}
                    {!user.isVerified ? (
                        <>
                            <div className="fixed inset-0 z-40 bg-black/60" />

                            <section className="fixed left-1/2 top-1/2 z-50 w-[min(420px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                                <div className="px-6 pb-5 pt-7 text-center">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#EAD9B4] bg-[#FBF3E4] text-2xl text-[#B8862F]">
                                        ♙
                                    </div>

                                    <h2 className="mt-4 text-xl font-bold text-[#0A192F]">
                                        Confirm your identity
                                    </h2>

                                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3 py-1.5 text-xs font-bold text-[#1D4ED8]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#1D4ED8]" />
                                        userucu7@gmail.com
                                    </div>

                                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                                        Enter your official Student ID to complete security validation.
                                    </p>
                                </div>

                                <div className="px-6 pb-6">
                                    <label
                                        htmlFor="student-id"
                                        className="text-sm font-bold text-[#172033]"
                                    >
                                        Student ID
                                    </label>

                                    <input
                                        id="student-id"
                                        type="text"
                                        value={studentIdInput}
                                        onChange={(event) =>
                                            setStudentIdInput(event.target.value)
                                        }
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter") handleVerify();
                                        }}
                                        placeholder="20260001"
                                        className="mt-2 min-h-14 w-full rounded-2xl border-2 border-slate-200 bg-[#F6F8FC] px-4 font-mono text-lg tracking-[0.2em] text-[#0A192F] outline-none transition focus:border-[#1D4ED8] focus:bg-white focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />

                                    <div className="mt-6 flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => navigate("/login")}
                                            className="min-h-12 flex-1 rounded-2xl border border-slate-200 font-bold text-slate-500 hover:bg-slate-50"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleVerify}
                                            className="min-h-12 flex-[1.4] rounded-2xl bg-[#0A192F] font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                                        >
                                            Verify &amp; Proceed
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : record ? (
                        <>
                            {/* Credential Status and Student Details */}
                            <section className="mx-auto mb-7 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                                <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Credential Status
                                        </p>
                                        <h2 className="mt-1 text-xl font-extrabold text-[#0A192F]">
                                            Student Credential
                                        </h2>
                                    </div>

                                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                        Verified
                                    </span>
                                </div>

                                <div className="grid gap-x-8 gap-y-5 p-5 sm:grid-cols-2 sm:p-7">
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Student Name
                                        </p>
                                        <p className="mt-1 break-words font-bold text-[#0A192F]">
                                            {record.studentName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Student ID
                                        </p>
                                        <p className="mt-1 font-mono font-bold text-[#0A192F]">
                                            {record.studentId}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Degree / Program
                                        </p>
                                        <p className="mt-1 break-words font-bold text-[#0A192F]">
                                            BSIT
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Email
                                        </p>
                                        <p className="mt-1 break-all font-bold text-[#0A192F]">
                                            {record.email}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Issue Date
                                        </p>
                                        <p className="mt-1 font-bold text-[#0A192F]">
                                            {formatDate(record.issueDate)}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Certificate ID
                                        </p>
                                        <p className="mt-1 font-mono text-sm font-bold text-[#0A192F]">
                                            {record.id}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Digital Diploma */}
                            <section className="mx-auto mb-7 w-full max-w-4xl">
                                <div className="mb-4">
                                    <h2 className="text-xl font-extrabold text-[#0A192F]">
                                        Digital Diploma Copy
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Preview of your digital academic credential.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:p-5">
                                    <div className="relative overflow-hidden border-[5px] border-double border-[#B99A55] bg-[#FFFEF7] p-5 text-center text-[#252B36] sm:p-9">
                                        <div className="pointer-events-none absolute inset-2 border border-[#B99A55]/40" />

                                        <div className="relative">
                                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#B99A55] text-xl font-black text-[#9B7A36]">
                                                UCU
                                            </div>

                                            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
                                                Republic of the Philippines
                                            </p>

                                            <h3 className="mt-2 text-xl font-black tracking-wide text-[#17345A] sm:text-3xl">
                                                URDANETA CITY UNIVERSITY
                                            </h3>

                                            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                                                Urdaneta City, Pangasinan
                                            </p>

                                            <div className="mx-auto my-5 h-px max-w-lg bg-[#B99A55]" />

                                            <p className="text-[10px] font-semibold uppercase tracking-wide sm:text-xs">
                                                To all whom these presents may come, greetings:
                                            </p>

                                            <p className="mt-5 text-xs sm:text-sm">
                                                Be it known that
                                            </p>

                                            <h4 className="mx-auto mt-3 max-w-xl break-words font-serif text-2xl font-bold italic text-[#17345A] sm:text-4xl">
                                                {record.studentName}
                                            </h4>

                                            <div className="mx-auto mt-2 h-px max-w-md bg-[#B99A55]" />

                                            <p className="mx-auto mt-5 max-w-xl text-xs leading-6 sm:text-sm sm:leading-7">
                                                has satisfactorily completed all the requirements
                                                prescribed by the University and is therefore
                                                granted the degree of
                                            </p>

                                            <h4 className="mx-auto mt-4 max-w-xl text-base font-black leading-relaxed tracking-wide text-[#17345A] sm:text-2xl">
                                                BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                                            </h4>

                                            <p className="mt-1 text-sm font-bold">(BSIT)</p>

                                            <p className="mx-auto mt-5 max-w-xl text-[10px] leading-5 text-slate-600 sm:text-xs">
                                                In witness whereof, this digital diploma preview
                                                displays the credential details recorded in
                                                CertiTrust.
                                            </p>

                                            <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-6">
                                                <div className="border-t border-[#B99A55] pt-2">
                                                    <p className="text-xs font-bold">
                                                        University President
                                                    </p>
                                                    <p className="mt-1 text-[10px] text-slate-500">
                                                        Signature placeholder
                                                    </p>
                                                </div>

                                                <div className="border-t border-[#B99A55] pt-2">
                                                    <p className="text-xs font-bold">
                                                        Campus Executive Director
                                                    </p>
                                                    <p className="mt-1 text-[10px] text-slate-500">
                                                        Signature placeholder
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#B99A55]/40 pt-4 sm:flex-row">
                                                <p className="text-[10px] text-slate-500">
                                                    Issued: {formatDate(record.issueDate)}
                                                </p>
                                                <p className="break-all text-[10px] text-slate-500">
                                                    {record.id}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                                        Sample diploma preview only. The university seal,
                                        signatures, and official diploma design must be
                                        supplied or approved by UCU.
                                    </p>
                                </div>
                            </section>

                            {/* Credential Actions */}
                            <section className="mx-auto mb-8 grid w-full max-w-4xl gap-3 sm:grid-cols-2">
                                <button
                                    type="button"
                                    onClick={() => setQrRecord(record)}
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-5 font-bold text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" />
                                        <path d="M14 14h3v3h-3zM20 14v2M20 20h-3M14 20v-1" />
                                    </svg>
                                    Get QR Code
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleVerifyOnChain(record)}
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#0A192F] bg-white px-5 font-bold text-[#0A192F] transition hover:bg-slate-50"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    Verify on Chain
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleSaveDiploma(record)}
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 font-bold text-[#0A192F] transition hover:bg-slate-50 sm:col-span-2"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <path d="m7 10 5 5 5-5M12 15V3" />
                                    </svg>
                                    Download Diploma Copy
                                </button>
                            </section>

                            {/* Certificate Records */}
                            <section className="mx-auto w-full max-w-4xl">
                                <h2 className="mb-3 text-sm font-extrabold text-[#0A192F]">
                                    Certificate Records
                                </h2>

                                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    {RECORDS.map((credential) => (
                                        <div
                                            key={credential.id}
                                            className="flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                                <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m20 6-11 11-5-5" />
                                                </svg>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="break-words text-sm font-extrabold text-[#0A192F]">
                                                    {credential.program.split(" — ")[0]}
                                                </p>
                                                <p className="mt-1 text-xs text-slate-400">
                                                    {credential.id} · Issued{" "}
                                                    {formatDate(credential.issueDate)}
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setQrRecord(credential)}
                                                title="Get QR Code"
                                                aria-label={`Get QR code for ${credential.id}`}
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A192F] text-white transition hover:-translate-y-0.5"
                                            >
                                                <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <rect x="3" y="3" width="7" height="7" />
                                                    <rect x="14" y="3" width="7" height="7" />
                                                    <rect x="3" y="14" width="7" height="7" />
                                                    <path d="M14 14h3v3h-3zM20 14v2M20 20h-3M14 20v-1" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    ) : (
                        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                            <h2 className="font-bold text-[#0A192F]">
                                No student record found
                            </h2>
                            <p className="mt-2 text-sm text-slate-500">
                                Please verify your Student ID again.
                            </p>
                        </div>
                    )}
                </div>
            </main>

            {/* Student ID Warning */}
            {showIdWarning && (
                <div className="fixed inset-0 z-[60] grid place-items-center bg-[#0A192F]/60 p-4 backdrop-blur-sm">
                    <div
                        role="alertdialog"
                        aria-modal="true"
                        className="w-[min(420px,100%)] rounded-2xl bg-white p-6 shadow-2xl"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                !
                            </div>
                            <div>
                                <h3 className="font-extrabold text-[#0A192F]">
                                    We can't find that ID
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    "{attemptedId}" doesn't match any sample student
                                    record.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowIdWarning(false)}
                                className="min-h-10 rounded-xl bg-[#0A192F] px-5 text-sm font-bold text-white"
                            >
                                Try again
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Real, Scanable QR Code Modal */}
            {qrRecord && (
                <div className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-[#0A192F]/70 p-4 backdrop-blur-sm">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="qr-title"
                        className="relative my-auto w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
                    >
                        <button
                            type="button"
                            onClick={() => setQrRecord(null)}
                            aria-label="Close QR code"
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-500 hover:bg-slate-50"
                        >
                            ×
                        </button>

                        <div className="pr-8">
                            <h2
                                id="qr-title"
                                className="text-lg font-extrabold text-[#0A192F]"
                            >
                                Credential QR Code
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Scan to open this credential's verification link.
                            </p>
                        </div>

                        <div className="mx-auto mt-6 flex w-fit items-center justify-center rounded-xl border border-slate-200 bg-white p-4">
                            <QRCodeSVG
                                value={getVerificationUrl(qrRecord)}
                                size={220}
                                level="H"
                                includeMargin
                                title={`Verification QR code for ${qrRecord.id}`}
                            />
                        </div>

                        <div className="mt-5 rounded-xl bg-slate-50 p-3">
                            <p className="text-xs font-semibold text-slate-400">
                                Student
                            </p>
                            <p className="mt-1 text-sm font-bold text-[#0A192F]">
                                {qrRecord.studentName}
                            </p>

                            <p className="mt-3 text-xs font-semibold text-slate-400">
                                Certificate ID
                            </p>
                            <p className="mt-1 text-sm font-bold text-[#0A192F]">
                                {qrRecord.id}
                            </p>

                            <p className="mt-3 text-xs font-semibold text-slate-400">
                                Certificate Hash
                            </p>
                            <p className="mt-1 break-all font-mono text-[10px] text-slate-600">
                                {qrRecord.certificateHash}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                const link = getVerificationUrl(qrRecord);
                                void navigator.clipboard
                                    .writeText(link)
                                    .then(() => showToast("Verification link copied."))
                                    .catch(() => showToast("Unable to copy link. Please try again."));
                            }}
                            className="mt-4 min-h-11 w-full rounded-xl bg-[#1D4ED8] px-4 font-bold text-white transition hover:bg-blue-700"
                        >
                            Copy Verification Link
                        </button>

                        <button
                            type="button"
                            onClick={() => setQrRecord(null)}
                            className="mt-2 min-h-10 w-full text-sm font-bold text-slate-500 hover:text-[#0A192F]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Toast */}
            <div
                role="status"
                aria-live="polite"
                className={`fixed bottom-5 right-5 z-[70] max-w-[calc(100%-2.5rem)] rounded-xl bg-[#0A192F] px-4 py-3.5 text-sm text-white shadow-xl transition-all duration-200 ${
                    toast
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-6 opacity-0"
                }`}
            >
                {toast?.message}
            </div>
        </div>
    );
}
