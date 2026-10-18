import Sidebar from "../../components/Sidebar";

const mockRecords = [
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

export default function Records() {
    return (
        <>
            <div className="min-h-screen bg-[#F6F8FC] grid grid-cols-1 md:grid-cols-[286px_1fr]">

                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <main className="min-w-0 p-5 overflow-y-auto h-screen md:p-8">

                    {/* Header */}
                    <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                            <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                Registrar Workspace
                            </p>

                            <h1 className="mt-1.5 mb-1 text-[#0A192F] text-2xl md:text-3xl font-extrabold">
                                Academic Records
                            </h1>

                            <p className="m-0 text-slate-500 text-sm">
                                Manage and view student academic credentials.
                            </p>
                        </div>

                        <button
                            type="button"
                            data-open-modal="recordModal"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap min-h-[42px] px-5 rounded-xl bg-[#0A192F] text-white font-bold shadow-[0_8px_20px_rgba(10,25,47,0.15)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(10,25,47,0.2)] transition"
                        >
                            <span className="text-lg">+</span>
                            Upload Record
                        </button>
                    </header>

                    {/* Main Card */}
                    <section className="bg-white border border-slate-200 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] overflow-hidden">

                        {/* Card Header */}
                        <div className="p-5 md:p-6 border-b border-slate-100">

                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                                <div>
                                    <span className="text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                        Student Credentials
                                    </span>

                                    <h2 className="mt-1 mb-1 text-[#0A192F] text-xl font-extrabold">
                                        All Issued Credentials
                                    </h2>

                                    <p className="m-0 text-sm text-slate-500">
                                        Academic records issued and stored in CertiTrust.
                                    </p>
                                </div>

                                {/* Search and Filter */}
                                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                                    <input
                                        type="search"
                                        data-table-search="recordsTable"
                                        placeholder="Search student..."
                                        className="w-full sm:w-[260px] min-h-[44px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 text-sm outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />

                                    <select
                                        data-table-filter="recordsTable"
                                        className="w-full sm:w-[170px] min-h-[44px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 text-sm outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    >
                                        <option value="">All Status</option>
                                        <option>Verified</option>
                                        <option>Pending</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        {/* Credentials List */}
                        <div className="p-5 md:p-6">

                            <div className="space-y-3">

                                {mockRecords.map((record, index) => (
                                    <div
                                        key={record.studentId}
                                        className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-5 border border-slate-200 rounded-xl bg-white hover:border-[#BFDBFE] hover:bg-[#FAFCFF] hover:shadow-[0_8px_20px_rgba(29,78,216,0.06)] transition"
                                    >

                                        {/* Left Side */}
                                        <div className="flex items-center gap-4 min-w-0">

                                            {/* Credential Icon */}
                                            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#1D4ED8]">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 3.75h9.75L20.25 8v12.25a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 3.75V8h4.5"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.5 12h7M8.5 15.5h7"
                                                    />
                                                </svg>

                                            </div>

                                            {/* Student Information */}
                                            <div className="min-w-0">

                                                <div className="flex flex-wrap items-center gap-2">

                                                    <h3 className="m-0 text-[#0A192F] font-extrabold text-base md:text-lg">
                                                        {record.studentName}
                                                    </h3>

                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[11px] font-extrabold">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                        Verified
                                                    </span>

                                                </div>

                                                <p className="mt-1 mb-0 text-sm text-slate-500">
                                                    BSIT ID:{" "}
                                                    <span className="font-bold text-[#0A192F]">
                                                        {record.studentId}
                                                    </span>
                                                </p>

                                                <p className="mt-1 mb-0 text-xs text-slate-400">
                                                    {record.program}
                                                </p>

                                            </div>
                                        </div>

                                        {/* Right Side */}
                                        <div className="flex items-center gap-2 md:ml-auto">

                                            <button
                                                type="button"
                                                className="flex-1 md:flex-none min-h-[38px] px-4 rounded-lg border border-slate-200 bg-white text-[#0A192F] text-sm font-bold hover:bg-slate-50 transition"
                                            >
                                                View
                                            </button>

                                            <button
                                                type="button"
                                                className="flex-1 md:flex-none min-h-[38px] px-4 rounded-lg bg-[#0A192F] text-white text-sm font-bold hover:bg-[#122A4A] transition"
                                            >
                                                Verify
                                            </button>

                                        </div>

                                    </div>
                                ))}

                            </div>

                            {/* Empty State */}
                            {mockRecords.length === 0 && (
                                <div className="py-16 text-center">
                                    <div className="mx-auto w-14 h-14 rounded-2xl bg-[#EAF2FF] flex items-center justify-center text-[#1D4ED8] text-2xl">
                                        📄
                                    </div>

                                    <h3 className="mt-4 mb-1 text-[#0A192F] font-extrabold">
                                        No Credentials Yet
                                    </h3>

                                    <p className="m-0 text-sm text-slate-500">
                                        Uploaded academic records will appear here.
                                    </p>
                                </div>
                            )}

                        </div>

                        {/* Footer */}
                        <div className="px-5 md:px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                            <span
                                data-record-count
                                className="text-sm text-slate-500"
                            >
                                Showing {mockRecords.length} issued credentials
                            </span>

                            <div className="flex gap-2">

                                <button
                                    type="button"
                                    disabled
                                    className="min-h-[38px] px-4 border border-slate-200 rounded-lg bg-white text-[#0A192F] font-bold text-sm disabled:opacity-50"
                                >
                                    Previous
                                </button>

                                <button
                                    type="button"
                                    className="min-h-[38px] px-4 rounded-lg bg-[#0A192F] text-white font-bold text-sm"
                                >
                                    1
                                </button>

                                <button
                                    type="button"
                                    disabled
                                    className="min-h-[38px] px-4 border border-slate-200 rounded-lg bg-white text-[#0A192F] font-bold text-sm disabled:opacity-50"
                                >
                                    Next
                                </button>

                            </div>

                        </div>

                    </section>
                </main>
            </div>

            {/* Upload Academic Record Modal */}
            <div
                id="recordModal"
                aria-hidden="true"
                className="fixed inset-0 z-40 hidden place-items-center p-4 bg-[#0A192F]/60 backdrop-blur-sm [&.show]:grid"
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="recordTitle"
                    className="relative w-[min(620px,100%)] max-h-[calc(100vh-36px)] overflow-auto p-6 bg-white rounded-2xl shadow-[0_18px_44px_rgba(10,25,47,0.18)]"
                >

                    {/* Close Button */}
                    <button
                        type="button"
                        data-close-modal
                        aria-label="Close"
                        className="absolute top-4 right-4 w-9 h-9 rounded-lg border border-slate-200 bg-white text-[#0A192F] font-extrabold hover:bg-slate-50 transition"
                    >
                        ×
                    </button>

                    <div className="mb-5">
                        <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                            Student Credentials
                        </p>

                        <h2
                            id="recordTitle"
                            className="mt-1 mb-1 text-xl font-extrabold text-[#0A192F]"
                        >
                            Upload Academic Record
                        </h2>

                        <p className="m-0 text-sm text-slate-500">
                            Enter the student's academic record information.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Student Name */}
                        <label className="grid gap-2 text-[#172033] font-bold text-sm">
                            Student Full Name

                            <input
                                id="recordStudent"
                                type="text"
                                placeholder="Randy Gonzales"
                                className="min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>

                        {/* Student ID */}
                        <label className="grid gap-2 text-[#172033] font-bold text-sm">
                            Student ID

                            <input
                                id="recordStudentId"
                                type="text"
                                placeholder="20260003"
                                className="min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>

                        {/* Program */}
                        <label className="grid gap-2 text-[#172033] font-bold text-sm sm:col-span-2">
                            Degree / Program

                            <input
                                id="recordCourse"
                                type="text"
                                placeholder="BS Information Technology"
                                className="min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>

                        {/* Credential */}
                        <label className="grid gap-2 text-[#172033] font-bold text-sm">
                            Credential Type

                            <select
                                id="recordCredential"
                                className="min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            >
                                <option>Academic Record</option>
                                <option>Transcript of Records</option>
                                <option>Diploma</option>
                                <option>Certificate</option>
                            </select>
                        </label>

                        {/* Status */}
                        <label className="grid gap-2 text-[#172033] font-bold text-sm">
                            Status

                            <select
                                id="recordStatus"
                                className="min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            >
                                <option>Verified</option>
                                <option>Pending</option>
                            </select>
                        </label>

                    </div>

                    <button
                        type="button"
                        id="saveRecord"
                        className="mt-5 w-full min-h-[44px] px-5 rounded-xl bg-[#0A192F] text-white font-bold shadow-[0_8px_20px_rgba(10,25,47,0.15)] hover:bg-[#122A4A] transition"
                    >
                        Save Record
                    </button>

                </div>
            </div>

            {/* Toast */}
            <div
                role="status"
                aria-live="polite"
                className="fixed right-4 bottom-4 z-50 translate-y-6 opacity-0 pointer-events-none max-w-[min(380px,calc(100%-36px))] px-4 py-3.5 rounded-xl bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.12)] transition-all duration-200 [&.show]:opacity-100 [&.show]:translate-y-0"
            ></div>
        </>
    );
}