import { Link } from "react-router-dom";

export default function SuperAdminLogs() {
    return (
        <div className="min-h-screen bg-[#F5F7FB] flex">

            {/* SIDEBAR */}
            <aside className="w-[280px] min-h-screen bg-[#071426] text-white p-5">

                <div className="flex items-center gap-3 mb-8">

                    <div className="w-11 h-11 bg-white rounded-xl overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="CertiTrust"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div>
                        <p className="font-extrabold text-lg">
                            CertiTrust
                        </p>

                        <p className="text-[10px] text-white/40 uppercase tracking-widest">
                            Super Admin Console
                        </p>
                    </div>

                </div>

                {/* NAVIGATION */}
                <nav className="space-y-2">

                    <Link
                        to="/superadmin"
                        className="block px-4 py-3 rounded-xl text-white/60 hover:bg-white/10"
                    >
                        ⌂ Dashboard
                    </Link>

                    <Link
                        to="/superadmin/create-subadmin"
                        className="block px-4 py-3 rounded-xl text-white/60 hover:bg-white/10"
                    >
                        + Create Subadmin Account
                    </Link>

                    <Link
                        to="/superadmin/logs"
                        className="block px-4 py-3 rounded-xl bg-white text-[#071426] font-semibold"
                    >
                        EQ Global Credential Logs
                    </Link>

                    <Link
                        to="/superadmin/records"
                        className="block px-4 py-3 rounded-xl text-white/60 hover:bg-white/10"
                    >
                        ▤ Records
                    </Link>

                    <Link
                        to="/superadmin/verify"
                        className="block px-4 py-3 rounded-xl text-white/60 hover:bg-white/10"
                    >
                        ✓ Verify
                    </Link>

                    <Link
                        to="/superadmin/ask"
                        className="block px-4 py-3 rounded-xl text-white/60 hover:bg-white/10"
                    >
                        ? Ask
                    </Link>

                </nav>

                {/* LOGOUT */}
                <div className="mt-10 border-t border-white/10 pt-5">

                    <Link
                        to="/login"
                        className="block px-4 py-3 rounded-xl text-white/60 hover:bg-red-500/10"
                    >
                        ↪ Logout
                    </Link>

                </div>

            </aside>


            {/* MAIN CONTENT */}
            <main className="flex-1 p-8">

                <h1 className="text-3xl font-extrabold text-[#071426]">
                    Global Credential Logs
                </h1>

                <p className="text-gray-500 mt-2">
                    Monitor credential activities across all registered universities.
                </p>


                {/* SUMMARY */}
                <div className="grid grid-cols-4 gap-5 mt-8">

                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <p className="text-gray-500 text-sm">
                            Total Activities
                        </p>

                        <h2 className="text-3xl font-bold text-[#071426] mt-2">
                            6
                        </h2>
                    </div>


                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <p className="text-gray-500 text-sm">
                            Credentials Issued
                        </p>

                        <h2 className="text-3xl font-bold text-blue-600 mt-2">
                            2
                        </h2>
                    </div>


                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <p className="text-gray-500 text-sm">
                            Credentials Verified
                        </p>

                        <h2 className="text-3xl font-bold text-green-600 mt-2">
                            1
                        </h2>
                    </div>


                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <p className="text-gray-500 text-sm">
                            Universities
                        </p>

                        <h2 className="text-3xl font-bold text-purple-600 mt-2">
                            2
                        </h2>
                    </div>

                </div>


                {/* LOGS */}
                <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">

                    <div className="p-6 border-b border-gray-100">

                        <h2 className="text-xl font-bold text-[#071426]">
                            Credential Activity
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Recent activities recorded in the CertiTrust system.
                        </p>

                    </div>


                    <div className="p-6 space-y-4">


                        {/* ISSUED */}
                        <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm">

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="font-bold text-[#071426]">
                                        Credential Issued
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        CERT-2026-001
                                    </p>

                                </div>

                                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                                    Issued
                                </span>

                            </div>

                            <div className="mt-3 text-sm text-gray-500">
                                Randy Gonzales • University of Urdaneta
                            </div>

                            <div className="mt-1 text-xs text-gray-400">
                                October 3, 2026 • 10:30 AM
                            </div>

                        </div>


                        {/* VERIFIED */}
                        <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm">

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="font-bold text-[#071426]">
                                        Credential Verified
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        CERT-2026-002
                                    </p>

                                </div>

                                <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                                    Verified
                                </span>

                            </div>

                            <div className="mt-3 text-sm text-gray-500">
                                Elmar Sam Diza • University of Urdaneta
                            </div>

                            <div className="mt-1 text-xs text-gray-400">
                                October 3, 2026 • 9:45 AM
                            </div>

                        </div>


                        {/* UPDATED */}
                        <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm">

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="font-bold text-[#071426]">
                                        Credential Updated
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        CERT-2026-003
                                    </p>

                                </div>

                                <span className="px-3 py-1 rounded-full bg-yellow-50 text-yellow-600 text-xs font-semibold">
                                    Updated
                                </span>

                            </div>

                            <div className="mt-3 text-sm text-gray-500">
                                Maria Santos • Pangasinan State University
                            </div>

                            <div className="mt-1 text-xs text-gray-400">
                                October 2, 2026 • 3:20 PM
                            </div>

                        </div>


                        {/* VIEWED */}
                        <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm">

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="font-bold text-[#071426]">
                                        Credential Viewed
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        CERT-2026-004
                                    </p>

                                </div>

                                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold">
                                    Viewed
                                </span>

                            </div>

                            <div className="mt-3 text-sm text-gray-500">
                                John Dela Cruz • University of Urdaneta
                            </div>

                            <div className="mt-1 text-xs text-gray-400">
                                October 2, 2026 • 1:15 PM
                            </div>

                        </div>


                        {/* DOWNLOADED */}
                        <div className="border border-gray-100 rounded-xl p-5 hover:shadow-sm">

                            <div className="flex justify-between items-center">

                                <div>

                                    <h3 className="font-bold text-[#071426]">
                                        Credential Downloaded
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        CERT-2026-005
                                    </p>

                                </div>

                                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                                    Downloaded
                                </span>

                            </div>

                            <div className="mt-3 text-sm text-gray-500">
                                Angela Reyes • University of Urdaneta
                            </div>

                            <div className="mt-1 text-xs text-gray-400">
                                October 1, 2026 • 11:05 AM
                            </div>

                        </div>


                    </div>

                </div>

            </main>

        </div>
    );
}