import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import SuperAdminSideBar from "../../components/SuperAdminSideBar";

type Student = {
    id: string;
    name: string;
    studentId: string;
    program: string;
    degreeLevel: string;
    email: string;
    level: string;
    year: string;
    universityCode: string;
    frozen: boolean;
};

const universityNames: Record<string, string> = {
    PSU: "Pangasinan State University",
    UCU: "Urdaneta City University",
};

const degreeOptions = [
    "All degrees",
    "Masteral",
    "Doctoral",
    "Multiple degrees",
    "1st degree",
    "BSIT",
];

const initialStudents: Student[] = [
    {
        id: "1",
        name: "PsuUser T. Student",
        email: "psuusertest@gmail.com",
        studentId: "20260002",
        program: "BSIT",
        degreeLevel: "1st degree",
        level: "Undergraduate",
        year: "2026",
        universityCode: "PSU",
        frozen: false,
    },
    {
        id: "2",
        name: "UcuUser T. Student",
        email: "userucu7@gmail.com",
        studentId: "20260001",
        program: "BSIT",
        degreeLevel: "1st degree",
        level: "Undergraduate",
        year: "2026",
        universityCode: "UCU",
        frozen: false,
    },
];

export default function SuperAdminStudentAccess() {
    const { code } = useParams<{ code: string }>();
    const universityCode = (code ?? "").toUpperCase();
    const universityName = universityNames[universityCode];

    const [students, setStudents] = useState<Student[]>(initialStudents);
    const [search, setSearch] = useState("");
    const [selectedYear, setSelectedYear] = useState("all");
    const [degree, setDegree] = useState("All degrees");
    const [degreeOpen, setDegreeOpen] = useState(false);
    const [degreeSearch, setDegreeSearch] = useState("");
    const [openIds, setOpenIds] = useState<string[]>([]);
    const [menuId, setMenuId] = useState<string | null>(null);

    const universityStudents = useMemo(
        () => students.filter((s) => s.universityCode === universityCode),
        [students, universityCode]
    );

    const years = useMemo(
        () =>
            Array.from(new Set(universityStudents.map((s) => s.year))).sort((a, b) =>
                b.localeCompare(a)
            ),
        [universityStudents]
    );

    const visibleDegreeOptions = degreeOptions.filter((o) =>
        o.toLowerCase().includes(degreeSearch.trim().toLowerCase())
    );

    useEffect(() => {
        if (!degreeOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setDegreeOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [degreeOpen]);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();

        return universityStudents.filter((s) => {
            const matchesYear = selectedYear === "all" || s.year === selectedYear;
            const matchesDegree =
                degree === "All degrees" ||
                s.program === degree ||
                s.degreeLevel === degree;
            const matchesSearch =
                q === "" ||
                [s.name, s.studentId, s.program].join(" ").toLowerCase().includes(q);

            return matchesYear && matchesDegree && matchesSearch;
        });
    }, [universityStudents, search, selectedYear, degree]);

    const toggleOpen = (id: string) => {
        setOpenIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const setFrozen = (id: string, frozen: boolean) => {
        // TODO: connect to your API to freeze / restore student access
        setStudents((prev) =>
            prev.map((s) => (s.id === id ? { ...s, frozen } : s))
        );
    };

    const chipClass = (active: boolean) =>
        `px-6 py-3 rounded-xl border text-base font-medium flex items-center gap-2 transition-all ${active
            ? "bg-[#D9E6F7] border-[#D9E6F7] text-[#0A192F]"
            : "bg-white border-gray-300 text-[#0A192F] hover:bg-gray-50"
        }`;

    const check = (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );

    return (
        <div className="flex min-h-screen bg-[#F5F7FB]">

            <SuperAdminSideBar />

            <main className="flex-1 min-w-0 h-screen overflow-y-auto p-6 md:p-10">

                <div className="max-w-3xl mx-auto">

                    {!universityName ? (
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">
                            University not found.
                        </div>
                    ) : (
                        <>
                            {/* HEADER */}
                            <h1 className="text-3xl font-extrabold text-[#0A192F] leading-tight">
                                {universityName} students
                            </h1>

                            <p className="text-gray-500 mt-4 mb-8 leading-7">
                                Search and filter student accounts at this university.
                                Student freeze controls are available from each account
                                menu.
                            </p>

                            {/* SEARCH */}
                            <div className="relative mb-8">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="7" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search students or credentials"
                                    className="w-full pl-14 pr-4 py-5 bg-white rounded-xl border border-gray-400 text-[#0A192F] placeholder-gray-500 outline-none focus:border-[#0A3A6B] focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                            </div>

                            {/* BATCH YEAR */}
                            <h2 className="text-lg font-bold text-[#0A192F] mb-3">
                                Student batch year
                            </h2>

                            <div className="flex flex-wrap gap-3 mb-6">
                                <button
                                    type="button"
                                    onClick={() => setSelectedYear("all")}
                                    className={chipClass(selectedYear === "all")}
                                >
                                    {selectedYear === "all" && check}
                                    All batches
                                </button>

                                {years.map((year) => (
                                    <button
                                        key={year}
                                        type="button"
                                        onClick={() => setSelectedYear(year)}
                                        className={chipClass(selectedYear === year)}
                                    >
                                        {selectedYear === year && check}
                                        {year}
                                    </button>
                                ))}
                            </div>

                            {/* DEGREE FILTER */}
                            <div className="relative mb-8">

                                <label className="absolute -top-3 left-4 px-2 bg-[#F5F7FB] text-sm font-medium text-[#0A192F] z-10 pointer-events-none">
                                    Filter by degree or program
                                </label>

                                <button
                                    type="button"
                                    aria-haspopup="dialog"
                                    onClick={() => {
                                        setDegreeSearch("");
                                        setDegreeOpen(true);
                                    }}
                                    className="w-full flex items-center justify-between rounded-xl border border-gray-400 px-5 py-5 text-left text-lg text-[#0A192F] hover:border-[#0A3A6B] transition-colors"
                                >
                                    <span>{degree}</span>

                                    <span className="text-[#333F4F]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="3 7 21 7 12 18" />
                                        </svg>
                                    </span>
                                </button>

                            </div>

                            {/* DEGREE PICKER */}
                            {degreeOpen && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                                    role="dialog"
                                    aria-modal="true"
                                >
                                    <div
                                        className="absolute inset-0 bg-black/50"
                                        onClick={() => setDegreeOpen(false)}
                                    />

                                    <div className="relative w-full max-w-md max-h-[80vh] overflow-y-auto bg-[#F2F4F9] rounded-3xl shadow-2xl px-6 py-8">

                                        {/* SEARCH */}
                                        <div className="relative mb-6">

                                            <label
                                                htmlFor="degree-search"
                                                className="absolute -top-3 left-4 px-2 bg-[#F2F4F9] text-sm font-medium text-[#0A3A6B]"
                                            >
                                                Search degree or program
                                            </label>

                                            <div className="flex items-center gap-3 rounded-xl border-2 border-[#0A3A6B] px-4 py-4">
                                                <span className="text-gray-700 shrink-0">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle cx="11" cy="11" r="7" />
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                    </svg>
                                                </span>

                                                <input
                                                    id="degree-search"
                                                    type="text"
                                                    autoFocus
                                                    value={degreeSearch}
                                                    onChange={(e) => setDegreeSearch(e.target.value)}
                                                    className="flex-1 min-w-0 bg-transparent outline-none text-lg text-[#0A192F]"
                                                />
                                            </div>

                                        </div>

                                        {/* OPTIONS */}
                                        <div>
                                            {visibleDegreeOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => {
                                                        setDegree(option);
                                                        setDegreeOpen(false);
                                                    }}
                                                    className={`w-full text-left px-2 py-5 text-lg hover:bg-white/70 rounded-lg transition-colors ${degree === option
                                                            ? "text-[#0A3A6B]"
                                                            : "text-[#0A192F]"
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}

                                            {visibleDegreeOptions.length === 0 && (
                                                <p className="px-2 py-5 text-gray-500">
                                                    No degrees found.
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* STUDENTS */}
                            <div className="space-y-4">

                                {filtered.map((s) => {
                                    const isOpen = openIds.includes(s.id);

                                    return (
                                        <div
                                            key={s.id}
                                            className="bg-[#F3F5F9] rounded-2xl border border-gray-200 shadow-md"
                                        >

                                            <button
                                                type="button"
                                                onClick={() => toggleOpen(s.id)}
                                                aria-expanded={isOpen}
                                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left rounded-2xl hover:bg-[#E9EEF6] transition-colors"
                                            >
                                                <span className="flex items-center gap-5 min-w-0">

                                                    <span className="text-[#0F9D8A] shrink-0">
                                                        <svg
                                                            width="34"
                                                            height="34"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M22 10L12 5 2 10l10 5 10-5z" />
                                                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                                        </svg>
                                                    </span>

                                                    <span className="min-w-0">
                                                        <span className="block text-xl font-semibold text-[#0A192F] truncate">
                                                            {s.name}
                                                        </span>

                                                        <span className="block text-[17px] text-[#0A192F]">
                                                            Student ID: {s.studentId}
                                                        </span>
                                                    </span>

                                                </span>

                                                <span
                                                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0A3A6B]" : "text-[#333F4F]"
                                                        }`}
                                                >
                                                    <svg
                                                        width="26"
                                                        height="26"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </span>
                                            </button>

                                            {isOpen && (
                                                <div className="px-6 pb-4">

                                                    <div className="pl-1 text-[17px] text-[#0A192F] leading-8">
                                                        <p>{s.email}</p>
                                                        <p>
                                                            {s.degreeLevel}: {s.program} ({s.level})
                                                        </p>
                                                        <p>Batch: {s.year}</p>
                                                    </div>

                                                    <div className="relative flex justify-end mt-8">

                                                        <button
                                                            type="button"
                                                            aria-label="Student account menu"
                                                            aria-haspopup="menu"
                                                            aria-expanded={menuId === s.id}
                                                            onClick={() =>
                                                                setMenuId(menuId === s.id ? null : s.id)
                                                            }
                                                            className="p-2 rounded-lg text-[#0A192F] hover:bg-gray-200/70 transition-colors"
                                                        >
                                                            <svg
                                                                width="26"
                                                                height="26"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                            >
                                                                <circle cx="12" cy="5" r="2" />
                                                                <circle cx="12" cy="12" r="2" />
                                                                <circle cx="12" cy="19" r="2" />
                                                            </svg>
                                                        </button>

                                                        {menuId === s.id && (
                                                            <>
                                                                <div
                                                                    className="fixed inset-0 z-10"
                                                                    onClick={() => setMenuId(null)}
                                                                />

                                                                <div
                                                                    role="menu"
                                                                    className="absolute right-0 bottom-full mb-1 z-20 w-64 bg-white rounded-xl border border-gray-200 shadow-xl py-2"
                                                                >
                                                                    <button
                                                                        type="button"
                                                                        role="menuitem"
                                                                        disabled={s.frozen}
                                                                        onClick={() => {
                                                                            setFrozen(s.id, true);
                                                                            setMenuId(null);
                                                                        }}
                                                                        className="w-full text-left px-4 py-3 text-sm font-semibold text-red-600 hover:bg-gray-50 transition-colors disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                                                                    >
                                                                        Freeze student access
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )}

                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    );
                                })}

                                {filtered.length === 0 && (
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">
                                        No students found.
                                    </div>
                                )}

                            </div>
                        </>
                    )}

                </div>

            </main>

        </div>
    );
}