import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminSideBar from "../../components/SuperAdminSideBar";

const stats = [
    { label: "Total Universities", value: 2, icon: "university" },
    { label: "Total Credentials", value: 2, icon: "medal" },
    { label: "Verified Credentials", value: 2, icon: "verified" },
    { label: "Subadmin Accounts", value: 3, icon: "shield" },
];

const logs = [
    { credential: "UcuUser T. Student", university: "UCU", date: "2026-10-13" },
    { credential: "PsuUser T. Student", university: "PSU", date: "2026-10-13" },
];

const actionHistory = [
    { action: "Unfroze student account", email: "psuusertest@gmail.com", school: "PSU", time: "2026-10-16 14:00" },
    { action: "Froze student account", email: "psuusertest@gmail.com", school: "PSU", time: "2026-10-16 13:46" },
    { action: "Unfroze student account", email: "psuusertest@gmail.com", school: "PSU", time: "2026-10-16 13:43" },
    { action: "Removed Google binding", email: "psu2026admin@gmail.com", school: "PSU", time: "2026-10-16 12:16" },
    { action: "Removed Google binding", email: "psu2026admin@gmail.com", school: "PSU", time: "2026-10-16 12:07" },
    { action: "Deleted student account", email: "psuusertest@gmail.com", school: "PSU", time: "2026-10-16 11:50" },
];

function StatIcon({ type }: { type: string }) {
    if (type === "university") {
        return (
            <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1F6A8F"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="3 9 12 3 21 9" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="6" y1="12" x2="6" y2="17" />
                <line x1="10" y1="12" x2="10" y2="17" />
                <line x1="14" y1="12" x2="14" y2="17" />
                <line x1="18" y1="12" x2="18" y2="17" />
                <line x1="3" y1="20.5" x2="21" y2="20.5" />
            </svg>
        );
    }

    if (type === "medal") {
        return (
            <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B7791F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="9" r="6.5" />
                <polygon
                    points="12 5.8 12.9 8 15.2 8.2 13.4 9.7 14 12 12 10.8 10 12 10.6 9.7 8.8 8.2 11.1 8 12 5.8"
                    fill="#B7791F"
                />
                <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
            </svg>
        );
    }

    if (type === "verified") {
        return (
            <svg width="34" height="34" viewBox="0 0 24 24">
                <path
                    d="M12 1.5l2.6 1.9 3.2-.2 1 3.1 2.7 1.8-1 3.1 1 3.1-2.7 1.8-1 3.1-3.2-.2L12 22.5l-2.6-1.9-3.2.2-1-3.1-2.7-1.8 1-3.1-1-3.1 2.7-1.8 1-3.1 3.2.2L12 1.5z"
                    fill="#2E8B57"
                />
                <polyline
                    points="7.5 12 10.5 15 16.5 9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    return (
        <svg width="34" height="34" viewBox="0 0 24 24">
            <path
                d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z"
                fill="#8B4A62"
            />
            <circle cx="12" cy="10" r="2.4" fill="#fff" />
            <path d="M7.8 15.5a4.2 3 0 0 1 8.4 0" fill="#fff" />
        </svg>
    );
}

export default function SuperAdminDashboard() {
    const [historyOpen, setHistoryOpen] = useState(false);

    useEffect(() => {
        if (!historyOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setHistoryOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [historyOpen]);

    return (
        <div className="flex min-h-screen bg-[#F5F7FB]">

            <SuperAdminSideBar />

            <main className="flex-1 min-w-0 h-screen overflow-y-auto p-6 md:p-10">

                <div className="max-w-5xl mx-auto">

                    {/* ACCOUNT BAR */}
                    <div className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 mb-8">

                        <div className="flex items-center gap-3 min-w-0">
                            <span className="text-gray-600 shrink-0">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="10" r="3" />
                                    <path d="M6.2 18.5a6.5 5 0 0 1 11.6 0" />
                                </svg>
                            </span>

                            <span className="text-[#0A192F] font-medium truncate">
                                certitrust256@gmail.com
                            </span>
                        </div>

                        <div className="flex items-center gap-5 shrink-0">

                            <span className="flex items-center gap-2 text-sm font-medium text-[#0A192F]">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                Operational
                            </span>

                            <span className="text-gray-500 font-medium">
                                Global scope
                            </span>

                        </div>

                    </div>

                    {/* HEADER */}
                    <h1 className="text-3xl font-extrabold text-[#0A192F]">
                        Super Admin Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2 mb-8">
                        Register subadmins and monitor global credential activity.
                    </p>

                    {/* STAT CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="bg-[#F3F5F9] rounded-3xl border border-gray-200 shadow-md p-6"
                            >
                                <StatIcon type={s.icon} />

                                <h2 className="text-4xl font-extrabold text-[#0A192F] mt-3">
                                    {s.value}
                                </h2>

                                <p className="text-gray-600 font-medium mt-1">
                                    {s.label}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">

                        <Link
                            to="/superadmin/create-subadmin"
                            className="flex items-center justify-center gap-3 py-4 rounded-full bg-[#003366] hover:bg-[#002650] text-white text-lg font-semibold shadow-lg shadow-slate-400/40 transition-all"
                        >
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="9" cy="8" r="4" />
                                <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" />
                                <line x1="19" y1="8" x2="19" y2="14" />
                                <line x1="16" y1="11" x2="22" y2="11" />
                            </svg>
                            Create subadmin account
                        </Link>

                        <Link
                            to="/superadmin/freeze-access"
                            className="flex items-center justify-center gap-3 py-4 rounded-full bg-transparent border-2 border-gray-400 hover:bg-white text-[#0A3A6B] text-lg font-semibold transition-all"
                        >
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 12a9 9 0 1 0 3-6.7" />
                                <polyline points="3 4 3 9 8 9" />
                                <rect x="9" y="11" width="6" height="5" rx="1" />
                                <path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11" />
                            </svg>
                            Freeze or unfreeze access
                        </Link>

                        <Link
                            to="/superadmin/deletion-requests"
                            className="flex items-center justify-center gap-3 py-4 rounded-full bg-transparent border-2 border-gray-400 hover:bg-white text-[#0A3A6B] text-lg font-semibold transition-all"
                        >
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4" />
                                <rect x="8" y="2" width="6" height="4" rx="1" />
                                <path d="M14 4h2a2 2 0 0 1 2 2v3" />
                                <circle cx="17" cy="17" r="4.5" />
                                <polyline points="17 14.5 17 17 18.8 18" />
                            </svg>
                            Credential deletion requests
                        </Link>

                        <button
                            type="button"
                            onClick={() => setHistoryOpen(true)}
                            className="flex items-center justify-center gap-3 py-4 rounded-full bg-transparent border-2 border-gray-400 hover:bg-white text-[#0A3A6B] text-lg font-semibold transition-all"
                        >
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 12a9 9 0 1 0 3-6.7" />
                                <polyline points="3 4 3 9 8 9" />
                                <polyline points="12 7 12 12 15.5 14" />
                            </svg>
                            Action history
                        </button>

                    </div>

                    {/* GLOBAL CREDENTIAL LOGS */}
                    <h2 className="text-2xl font-bold text-[#0A192F] mb-5">
                        Global Credential Logs
                    </h2>

                    <div className="bg-[#F3F5F9] rounded-3xl border border-gray-200 shadow-md overflow-hidden">

                        <div className="overflow-x-auto">

                            <table className="w-full text-left">

                                <thead>
                                    <tr className="border-b-2 border-gray-300">
                                        <th className="px-7 py-6 text-lg font-bold text-[#0A192F]">
                                            Credential
                                        </th>

                                        <th className="px-7 py-6 text-lg font-bold text-[#0A192F]">
                                            University
                                        </th>

                                        <th className="px-7 py-6 text-lg font-bold text-[#0A192F]">
                                            Date
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {logs.map((log, index) => (
                                        <tr
                                            key={log.credential}
                                            className={`hover:bg-white/60 transition-colors ${index !== logs.length - 1
                                                    ? "border-b border-gray-300"
                                                    : ""
                                                }`}
                                        >
                                            <td className="px-7 py-6 text-[#0A192F]">
                                                {log.credential}
                                            </td>

                                            <td className="px-7 py-6 text-[#0A192F]">
                                                {log.university}
                                            </td>

                                            <td className="px-7 py-6 text-[#0A192F]">
                                                {log.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

                {/* ACTION HISTORY POPUP */}
                {historyOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={() => setHistoryOpen(false)}
                        />

                        <div className="relative w-full max-w-md max-h-[90vh] flex flex-col bg-[#E9EBF1] rounded-3xl shadow-2xl p-8">

                            <h2 className="text-3xl font-normal text-[#0A192F] leading-tight mb-6">
                                Super Admin Action History
                            </h2>

                            <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                                {actionHistory.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`py-5 ${index !== actionHistory.length - 1
                                                ? "border-b-2 border-gray-300"
                                                : ""
                                            }`}
                                    >
                                        <p className="text-xl text-[#0A192F]">
                                            {item.action}
                                        </p>

                                        <p className="text-[15px] text-gray-600 mt-1">
                                            {item.email} • {item.school}
                                        </p>

                                        <p className="text-[15px] text-gray-600">
                                            {item.time}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end mt-6">
                                <button
                                    type="button"
                                    onClick={() => setHistoryOpen(false)}
                                    className="px-4 py-2 rounded-lg text-lg font-semibold text-[#0A3A6B] hover:bg-white/70 transition-colors"
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </main>

        </div>
    );
}