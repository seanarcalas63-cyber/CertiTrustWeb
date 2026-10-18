import  Sidebar  from '../../components/Sidebar';

export default function Students() {
    return (
        <>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[286px_1fr]">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <main className="min-w-0 overflow-y-auto h-screen p-5 md:p-8">
                    <header className="mb-6 p-4 md:p-5 border border-slate-200 rounded-lg bg-white/85 shadow-[0_12px_30px_rgba(15,23,42,0.07)] backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3.5">
                        <button
                            type="button"
                            data-toggle-sidebar
                            aria-label="Open navigation"
                            className="md:hidden inline-flex items-center min-h-10 px-3.5 border border-slate-200 rounded-lg bg-white text-[#0A192F] font-extrabold"
                        >
                            Menu
                        </button>
                        <div>
                            <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase">
                                Student identity records
                            </p>
                            <h1 className="mt-1.5 mb-0 text-[#0A192F]">Students</h1>
                        </div>
                        <button
                            type="button"
                            data-open-modal="studentModal"
                            className="inline-flex items-center justify-center whitespace-nowrap min-h-[38px] px-4.5 rounded-lg border border-transparent font-bold bg-[#0A192F] text-white shadow-[0_10px_20px_rgba(10,25,47,0.16)] hover:-translate-y-px hover:shadow-[0_12px_22px_rgba(15,23,42,0.1)] transition"
                        >
                            Add Student
                        </button>
                    </header>

                    <section className="p-5 bg-white border border-slate-200 rounded-lg shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
                        <div className="mb-4.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3.5">
                            <div>
                                <span className="text-[#1D4ED8] text-xs font-extrabold uppercase">
                                    Directory
                                </span>
                                <h2 className="mt-1.5 mb-0 text-[#0A192F]">Student Records</h2>
                            </div>
                            <div className="flex flex-wrap justify-end gap-3.5 w-full md:w-auto">
                                <input
                                    type="search"
                                    data-table-search="studentsTable"
                                    placeholder="Search students"
                                    className="w-full md:w-[min(300px,100%)] min-h-11 border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                />
                                <select
                                    data-table-filter="studentsTable"
                                    className="w-full md:w-45 min-h-11 border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                >
                                    <option value="">All statuses</option>
                                    <option>Active</option>
                                    <option>Graduated</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full overflow-x-auto">
                            <table id="studentsTable" className="w-full min-w-190 border-separate border-spacing-0">
                                <thead>
                                    <tr>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Student ID
                                        </th>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Full Name
                                        </th>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Program/Course
                                        </th>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Year Level
                                        </th>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Email
                                        </th>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Status
                                        </th>
                                        <th className="text-left align-middle px-3 py-3.5 border-b border-slate-100 text-slate-500 text-xs uppercase bg-slate-50">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody data-students-table></tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between gap-3.5 pt-4 text-slate-500 text-sm">
                            <span data-student-count>Showing sample student records</span>
                            <div className="flex gap-1.5" aria-label="Student pagination">
                                <button
                                    type="button"
                                    disabled
                                    className="min-h-8.5 min-w-8.5 border border-slate-200 rounded-lg bg-white text-[#0A192F] font-extrabold disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    className="min-h-8.5 min-w-[34px] border border-slate-200 rounded-lg bg-[#0A192F] text-white font-extrabold"
                                >
                                    1
                                </button>
                                <button
                                    type="button"
                                    disabled
                                    className="min-h-[34px] min-w-[34px] border border-slate-200 rounded-lg bg-white text-[#0A192F] font-extrabold disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Add/Edit Student Modal */}
            <div
                id="studentModal"
                aria-hidden="true"
                className="fixed inset-0 z-40 hidden place-items-center p-4.5 bg-[#0A192F]/60 backdrop-blur-sm [&.show]:grid"
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="studentTitle"
                    className="relative w-[min(760px,100%)] max-h-[calc(100vh-36px)] overflow-auto grid gap-3.5 p-6 bg-white rounded-lg shadow-[0_18px_44px_rgba(10,25,47,0.12)]"
                >
                    <button
                        type="button"
                        data-close-modal
                        aria-label="Close"
                        className="absolute top-3 right-3 w-8.5 h-8.5 rounded-full border border-slate-200 bg-white text-[#0A192F] font-extrabold"
                    >
                        x
                    </button>
                    <h2 id="studentTitle" className="m-0 text-[#0A192F]">
                        Student
                    </h2>
                    <input type="hidden" id="studentEditIndex" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <label className="grid gap-1.5 text-[#172033] font-bold text-sm">
                            Student ID
                            <input
                                id="studentId"
                                type="text"
                                placeholder="BSIT-2026-0183"
                                className="min-h-[44px] border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>
                        <label className="grid gap-1.5 text-[#172033] font-bold text-sm">
                            Full name
                            <input
                                id="studentName"
                                type="text"
                                placeholder="Maria Santos"
                                className="min-h-[44px] border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>
                        <label className="grid gap-1.5 text-[#172033] font-bold text-sm">
                            Program/Course
                            <input
                                id="studentProgram"
                                type="text"
                                placeholder="BS Information Technology"
                                className="min-h-[44px] border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>
                        <label className="grid gap-1.5 text-[#172033] font-bold text-sm">
                            Year Level
                            <input
                                id="studentYear"
                                type="text"
                                placeholder="4th Year"
                                className="min-h-[44px] border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>
                        <label className="grid gap-1.5 text-[#172033] font-bold text-sm">
                            Email
                            <input
                                id="studentEmail"
                                type="email"
                                placeholder="maria.santos@school.edu"
                                className="min-h-[44px] border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            />
                        </label>
                        <label className="grid gap-1.5 text-[#172033] font-bold text-sm">
                            Status
                            <select
                                id="studentStatus"
                                className="min-h-[44px] border border-slate-200 rounded-lg bg-white px-3 py-2.5 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                            >
                                <option>Active</option>
                                <option>Graduated</option>
                                <option>Inactive</option>
                            </select>
                        </label>
                    </div>
                    <button
                        type="button"
                        id="saveStudent"
                        className="min-h-[42px] px-4.5 rounded-lg border border-transparent font-bold bg-[#0A192F] text-white shadow-[0_10px_20px_rgba(10,25,47,0.16)] hover:-translate-y-px hover:shadow-[0_12px_22px_rgba(15,23,42,0.1)] transition"
                    >
                        Save student
                    </button>
                </div>
            </div>

            <div
                id="toast"
                role="status"
                aria-live="polite"
                className="fixed right-4.5 bottom-4.5 z-50 translate-y-6 opacity-0 pointer-events-none max-w-[min(380px,calc(100%-36px))] px-4 py-3.5 rounded-lg bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.12)] transition-all duration-200 [&.show]:opacity-100 [&.show]:translate-y-0"
            ></div>
        </>
    );
}