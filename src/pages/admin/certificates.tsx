import { useState } from "react";
import Sidebar from "../../components/Sidebar";

type Certificate = {
    id: string;
    studentId: string;
    fullName: string;
    institutionalEmail: string;
    degreeProgram: string;
    fileName: string;
    issuedAt: string;
};

const MOCK_CERTIFICATES: Certificate[] = [
    {
        id: "CERT-2026-0001",
        studentId: "2021-00512",
        fullName: "Johny",
        institutionalEmail: "maria.santos@university.edu",
        degreeProgram: "Bachelor of Science in Computer Science",
        fileName: "santos_diploma.pdf",
        issuedAt: "2026-06-15",
    },
    {
        id: "CERT-2026-0002",
        studentId: "2020-00873",
        fullName: "Hey",
        institutionalEmail: "juan.delacruz@university.edu",
        degreeProgram: "Bachelor of Science in Information Technology",
        fileName: "delacruz_diploma.jpg",
        issuedAt: "2026-06-15",
    },
    {
        id: "CERT-2026-0003",
        studentId: "2021-01190",
        fullName: "Daddy",
        institutionalEmail: "angela.reyes@university.edu",
        degreeProgram: "Bachelor of Science in Accountancy",
        fileName: "reyes_diploma.pdf",
        issuedAt: "2026-06-18",
    },
];

export default function Certificates() {
    const [studentId, setStudentId] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [institutionalEmail, setInstitutionalEmail] = useState<string>("");
    const [degreeProgram, setDegreeProgram] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [certificates, setCertificates] = useState<Certificate[]>(MOCK_CERTIFICATES);
    const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

    const showToast = (message: string) => {
        const toast = document.getElementById("toast");
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        window.clearTimeout((showToast as any)._t);
        (showToast as any)._t = window.setTimeout(() => {
            toast.classList.remove("show");
        }, 2600);
    };

    const resetForm = () => {
        setStudentId("");
        setFullName("");
        setInstitutionalEmail("");
        setDegreeProgram("");
        setFileName("");
    };

    const handleIssueCertificate = () => {
        if (!studentId || !fullName || !institutionalEmail || !degreeProgram) {
            showToast("Please fill in all required fields.");
            return;
        }

        const newCertificate: Certificate = {
            id: `CERT-${Date.now()}`,
            studentId,
            fullName,
            institutionalEmail,
            degreeProgram,
            fileName: fileName || "No file attached",
            issuedAt: new Date().toISOString().slice(0, 10),
        };

        setCertificates((prev) => [newCertificate, ...prev]);
        resetForm();
        document.getElementById("issueModal")?.classList.remove("show");
        showToast("Certificate issued successfully.");
    };

    const openViewer = (certificate: Certificate) => {
        setActiveCertificate(certificate);
        document.getElementById("certificateViewerModal")?.classList.add("show");
    };

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[286px_1fr]">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="min-w-0 overflow-y-auto h-screen p-4 sm:p-5 md:p-8">

                    {/* Header */}
                    <header className="mb-7 p-5 md:p-6 border border-slate-200 rounded-2xl bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">

                        <div className="flex items-center gap-4">

                            <button
                                type="button"
                                data-toggle-sidebar
                                aria-label="Open navigation"
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A192F] font-bold"
                            >
                                ☰
                            </button>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />

                                    <p className="m-0 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                                        Issued credentials
                                    </p>
                                </div>

                                <h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-[#0A192F]">
                                    Certificates
                                </h1>

                                <p className="mt-1 text-sm text-slate-500">
                                    Manage and issue academic certificates.
                                </p>
                            </div>
                        </div>

                        {/* Issue Certificate Button */}
                        <button
                            type="button"
                            onClick={() => {
                                document
                                    .getElementById("issueModal")
                                    ?.classList.add("show");
                            }}
                            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-xl bg-[#0A192F] text-white font-bold shadow-[0_10px_25px_rgba(10,25,47,0.18)] hover:-translate-y-0.5 transition"
                        >
                            <span className="text-lg">+</span>
                            Issue Certificate
                        </button>

                    </header>

                    {/* Certificate Area */}
                    {certificates.length === 0 ? (
                        <section className="min-h-[520px] flex items-center justify-center bg-white border border-slate-200 rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.05)]">

                            <div className="text-center px-6 py-12 max-w-md">

                                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-[#EAF2FF] text-[#1D4ED8] flex items-center justify-center">

                                    <svg
                                        width="38"
                                        height="38"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="4" width="18" height="16" rx="2" />
                                        <path d="M8 9h8" />
                                        <path d="M8 13h5" />
                                        <path d="M8 17h3" />
                                    </svg>

                                </div>

                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0A192F]">
                                    No Certificates Yet
                                </h2>

                                <p className="mt-2 text-sm md:text-base text-slate-500 leading-relaxed">
                                    Certificates that you issue will appear here.
                                    Start by creating a new academic certificate.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        document
                                            .getElementById("issueModal")
                                            ?.classList.add("show");
                                    }}
                                    className="mt-6 inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-xl bg-[#0A192F] text-white font-bold hover:bg-[#122744] transition"
                                >
                                    <span className="text-lg">+</span>
                                    Issue Your First Certificate
                                </button>

                            </div>

                        </section>
                    ) : (
                        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            {certificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="bg-white border border-slate-200 rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.05)] p-5 flex flex-col gap-4"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#EAF2FF] text-[#1D4ED8] flex items-center justify-center">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect x="3" y="4" width="18" height="16" rx="2" />
                                                <path d="M8 9h8" />
                                                <path d="M8 13h5" />
                                                <path d="M8 17h3" />
                                            </svg>
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-400">
                                            {cert.id}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-extrabold text-[#0A192F] leading-snug">
                                            {cert.fullName}
                                        </h3>
                                        <p className="mt-0.5 text-sm text-slate-500">
                                            {cert.degreeProgram}
                                        </p>
                                    </div>

                                    <div className="grid gap-1.5 text-xs text-slate-500">
                                        <p><span className="font-bold text-slate-600">Student ID:</span> {cert.studentId}</p>
                                        <p className="truncate"><span className="font-bold text-slate-600">Email:</span> {cert.institutionalEmail}</p>
                                        <p><span className="font-bold text-slate-600">Issued:</span> {cert.issuedAt}</p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => openViewer(cert)}
                                        className="mt-auto min-h-10 px-4 rounded-xl border border-slate-200 text-[#0A192F] font-bold text-sm hover:bg-slate-50 transition"
                                    >
                                        View Certificate
                                    </button>
                                </div>
                            ))}
                        </section>
                    )}

                </main>
            </div>

            {/* Issue Certificate Modal */}
            <div
                id="issueModal"
                aria-hidden="true"
                className="fixed inset-0 z-40 hidden place-items-center p-4 bg-[#0A192F]/60 backdrop-blur-sm [&.show]:grid"
            >

                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="issueTitle"
                    className="relative w-[min(760px,100%)] max-h-[calc(100vh-36px)] overflow-auto grid gap-5 p-6 md:p-7 bg-white rounded-2xl shadow-[0_25px_70px_rgba(10,25,47,0.2)]"
                >

                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => {
                            document
                                .getElementById("issueModal")
                                ?.classList.remove("show");
                        }}
                        aria-label="Close"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 font-bold hover:bg-slate-50 transition"
                    >
                        ×
                    </button>

                    {/* Modal Header */}
                    <div className="pr-10">

                        <span className="text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                            New credential
                        </span>

                        <h2
                            id="issueTitle"
                            className="mt-1 text-2xl font-extrabold text-[#0A192F]"
                        >
                            Issue Certificate
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Enter the academic credential information.
                        </p>

                    </div>

                    {/* Certificate Form */}
                    <div className="grid grid-cols-1 gap-5">

                        {/* Student ID */}
                        <div className="grid gap-2">
                            <label className="text-[#172033] font-bold text-sm">
                                Student ID
                            </label>
                            <input
                                type="text"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                placeholder="Student ID"
                                className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                            />
                        </div>

                        {/* Student Fullname */}
                        <div className="grid gap-2">
                            <label className="text-[#172033] font-bold text-sm">
                                Student Fullname
                            </label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Student Fullname"
                                className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                            />
                        </div>

                        {/* Student Google/Institutional Email */}
                        <div className="grid gap-2">
                            <label className="text-[#172033] font-bold text-sm">
                                Student Google/Institutional Email
                            </label>
                            <input
                                type="email"
                                value={institutionalEmail}
                                onChange={(e) => setInstitutionalEmail(e.target.value)}
                                placeholder="Student Google/Institutional Email"
                                className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                            />
                        </div>

                        {/* Degree / Program Title */}
                        <div className="grid gap-2">
                            <label className="text-[#172033] font-bold text-sm">
                                Degree / Program Title
                            </label>
                            <input
                                type="text"
                                value={degreeProgram}
                                onChange={(e) => setDegreeProgram(e.target.value)}
                                placeholder="Degree / Program Title"
                                className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                            />
                        </div>

                        {/* Select Diploma File */}
                        <div className="grid gap-2">
                            <label className="text-[#172033] font-bold text-sm">
                                Select Diploma File (PDF/image)
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setFileName(file.name);
                                    }
                                }}
                                className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 cursor-pointer"
                            />

                            {fileName && (
                                <div className="p-3 rounded-xl bg-[#EAF2FF] border border-[#BFDBFE]">
                                    <p className="text-xs font-bold text-slate-500">
                                        Selected Diploma File
                                    </p>
                                    <p className="mt-1 text-sm font-bold text-[#0A192F] break-all">
                                        {fileName}
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Issue Certificate Button */}
                    <button
                        type="button"
                        id="saveCertificate"
                        onClick={handleIssueCertificate}
                        className="min-h-11 px-5 rounded-xl bg-[#0A192F] text-white font-bold shadow-[0_10px_20px_rgba(10,25,47,0.16)] hover:-translate-y-0.5 transition"
                    >
                        Issue Certificate
                    </button>

                </div>
            </div>

            {/* Certificate Viewer Modal */}
            <div
                id="certificateViewerModal"
                aria-hidden="true"
                className="fixed inset-0 z-40 hidden place-items-center p-4 bg-[#0A192F]/60 backdrop-blur-sm [&.show]:grid"
            >

                <div
                    role="dialog"
                    aria-modal="true"
                    className="relative w-[min(920px,100%)] max-h-[calc(100vh-36px)] overflow-auto p-6 md:p-7 bg-white rounded-2xl shadow-[0_25px_70px_rgba(10,25,47,0.2)]"
                >

                    <button
                        type="button"
                        onClick={() => {
                            document
                                .getElementById("certificateViewerModal")
                                ?.classList.remove("show");
                        }}
                        aria-label="Close"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 font-bold hover:bg-slate-50 transition"
                    >
                        ×
                    </button>

                    <div id="certificatePreview">
                        {activeCertificate && (
                            <div className="pr-8">
                                <span className="text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                                    {activeCertificate.id}
                                </span>
                                <h2 className="mt-1 text-2xl font-extrabold text-[#0A192F]">
                                    {activeCertificate.fullName}
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    {activeCertificate.degreeProgram}
                                </p>

                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200">
                                        <p className="text-xs font-bold text-slate-500">Student ID</p>
                                        <p className="mt-1 text-sm font-bold text-[#0A192F]">{activeCertificate.studentId}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200">
                                        <p className="text-xs font-bold text-slate-500">Institutional Email</p>
                                        <p className="mt-1 text-sm font-bold text-[#0A192F] break-all">{activeCertificate.institutionalEmail}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200">
                                        <p className="text-xs font-bold text-slate-500">Date Issued</p>
                                        <p className="mt-1 text-sm font-bold text-[#0A192F]">{activeCertificate.issuedAt}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#F6F8FC] border border-slate-200">
                                        <p className="text-xs font-bold text-slate-500">Diploma File</p>
                                        <p className="mt-1 text-sm font-bold text-[#0A192F] break-all">{activeCertificate.fileName}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Toast */}
            <div
                id="toast"
                role="status"
                aria-live="polite"
                className="fixed right-5 bottom-5 z-50 translate-y-6 opacity-0 pointer-events-none max-w-[380px] px-4 py-3.5 rounded-xl bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.15)] transition-all duration-200 [&.show]:opacity-100 [&.show]:translate-y-0"
            />

        </div>
    );
}