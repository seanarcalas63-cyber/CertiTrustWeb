import { Link, useLocation } from "react-router-dom";

export default function SuperAdminDashboard() {
    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/superadmin",
            icon: "⌂",
        },
        {
            name: "Create Subadmin Account",
            path: "/superadmin/create-subadmin",
            icon: "+",
        },
        {
            name: "Global Credential Logs",
            path: "/superadmin/logs",
            icon: "EQ",
        },
        {
            name: "Records",
            path: "/superadmin/records",
            icon: "▤",
        },
        {
            name: "Verify",
            path: "/superadmin/verify",
            icon: "✓",
        },
        {
            name: "Ask",
            path: "/superadmin/ask",
            icon: "?",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F5F7FB] flex">

            {/* SIDEBAR */}
            <aside className="w-[280px] bg-[#071426] text-white min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-30">

                {/* LOGO */}
                <div className="px-5 pt-5">
                    <Link
                        to="/superadmin"
                        className="flex items-center gap-3"
                    >
                        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                            <img
                                src="/logo.png"
                                alt="CertiTrust logo"
                                className="w-11 h-11 object-contain"
                            />
                        </div>

                        <div>
                            <span className="block text-white font-extrabold text-lg">
                                CertiTrust
                            </span>

                            <span className="block text-white/40 text-[10px] font-bold uppercase tracking-[0.16em]">
                                Super Admin
                            </span>

                            <span className="block text-white/40 text-[10px] font-bold uppercase tracking-[0.16em]">
                                Console
                            </span>
                        </div>
                    </Link>
                </div>

                {/* DIVIDER */}
                <div className="mx-5 mt-6 border-t border-white/10" />

                {/* NAVIGATION */}
                <nav className="flex-1 px-3.5 mt-6 overflow-y-auto">
                    <div className="grid gap-2">

                        {menuItems.map((item) => {
                            const isActive =
                                location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`group relative min-h-12 flex items-center gap-3 px-3.5 rounded-xl font-semibold transition-all duration-300 ${
                                        isActive
                                            ? "bg-white text-[#0A192F] shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                                            : "text-white/60 hover:text-white hover:bg-white/[0.07]"
                                    }`}
                                >

                                    {/* ACTIVE INDICATOR */}
                                    {isActive && (
                                        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#2563EB]" />
                                    )}

                                    {/* ICON */}
                                    <span
                                        className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold shrink-0 ${
                                            isActive
                                                ? "bg-[#EAF2FF] text-[#1D4ED8]"
                                                : "bg-white/[0.05] text-white/50 group-hover:bg-white/10 group-hover:text-white"
                                        }`}
                                    >
                                        {item.icon}
                                    </span>

                                    {/* LABEL */}
                                    <span className="text-sm leading-5">
                                        {item.name}
                                    </span>

                                </Link>
                            );
                        })}

                    </div>
                </nav>

                {/* SYSTEM STATUS + LOGOUT */}
                <div className="px-3.5 pb-5">

                    {/* SYSTEM STATUS */}
                    <div className="mb-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                        <div className="flex items-center gap-2.5">

                            <span className="relative flex w-2.5 h-2.5">
                                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />

                                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </span>

                            <div>
                                <p className="text-xs font-bold text-white/80">
                                    System Online
                                </p>

                                <p className="text-[10px] text-white/35 mt-0.5">
                                    All services operational
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* LOGOUT */}
                    <Link
                        to="/login"
                        className="group min-h-11 w-full flex items-center gap-3 px-3.5 rounded-xl text-white/55 hover:text-white hover:bg-red-500/10 border border-transparent transition-all"
                    >
                        <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] group-hover:bg-red-500/10 group-hover:text-red-300">
                            ↪
                        </span>

                        <span className="text-sm font-semibold">
                            Logout
                        </span>
                    </Link>

                </div>

            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 ml-[280px] p-6 md:p-10">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                    <div>
                        <h1 className="text-3xl font-extrabold text-[#0A192F]">
                            Super Admin Dashboard
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Register subadmins and monitor global credential activity.
                        </p>
                    </div>

                    {/* CREATE BUTTON */}
                    <Link
                        to="/superadmin/create-subadmin"
                        className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all"
                    >
                        <span className="text-lg">
                            +
                        </span>

                        Create Subadmin Account
                    </Link>

                </div>

           {/* STAT CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

    {/* TOTAL UNIVERSITIES */}
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-start justify-between">

            <div>
                <p className="text-sm text-gray-500 font-medium">
                    Total Universities
                </p>

                <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
                    2
                </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
                🏫
            </div>

        </div>
    </div>


    {/* TOTAL CREDENTIALS */}
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-start justify-between">

            <div>
                <p className="text-sm text-gray-500 font-medium">
                    Total Credentials
                </p>

                <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
                    2
                </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">
                📄
            </div>

        </div>
    </div>


    {/* VERIFIED CREDENTIALS */}
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-start justify-between">

            <div>
                <p className="text-sm text-gray-500 font-medium">
                    Verified Credentials
                </p>

                <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
                    2
                </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-xl">
                ✓
            </div>

        </div>
    </div>


    {/* SUBADMIN ACCOUNTS */}
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-start justify-between">

            <div>
                <p className="text-sm text-gray-500 font-medium">
                    Subadmin Accounts
                </p>

                <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
                    3
                </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl">
                👤
            </div>

        </div>
    </div>

</div>
                {/* LOWER CONTENT */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                    {/* CREDENTIAL DELETION REQUESTS */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="text-lg font-bold text-[#0A192F]">
                                    Credential Deletion Requests
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Requests submitted by university administrators.
                                </p>
                            </div>

                            <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                                1 Pending
                            </span>
                        </div>

                        <div className="border border-gray-100 rounded-xl p-4">

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                <div>
                                    <h3 className="font-bold text-[#0A192F]">
                                        Credential CERT-002
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Requested by UCU Subadmin
                                    </p>
                                </div>

                                <button className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-bold hover:bg-red-100 transition">
                                    Review
                                </button>

                            </div>

                        </div>

                    </div>

                    {/* ACTION HISTORY */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

                        <div className="mb-5">
                            <h2 className="text-lg font-bold text-[#0A192F]">
                                Action History
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Recent actions performed by administrators.
                            </p>
                        </div>

                        <div className="space-y-4">

                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                    +
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#0A192F]">
                                        Credential issued
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        CERT-001 • 10 minutes ago
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-bold">
                                    ✓
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#0A192F]">
                                        Credential verified
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        CERT-002 • 25 minutes ago
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                                    +
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#0A192F]">
                                        Subadmin account created
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        UCU • 1 hour ago
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                {/* GLOBAL CREDENTIAL LOGS */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mt-6">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                        <div>
                            <h2 className="text-lg font-bold text-[#0A192F]">
                                Global Credential Logs
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Monitor credential activity across all registered universities.
                            </p>
                        </div>

                        <Link
                            to="/superadmin/logs"
                            className="text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
                        >
                            View All →
                        </Link>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full text-left">

                            <thead>
                                <tr className="border-b border-gray-100">

                                    <th className="pb-3 text-xs uppercase tracking-wide text-gray-400 font-bold">
                                        Credential ID
                                    </th>

                                    <th className="pb-3 text-xs uppercase tracking-wide text-gray-400 font-bold">
                                        University
                                    </th>

                                    <th className="pb-3 text-xs uppercase tracking-wide text-gray-400 font-bold">
                                        Action
                                    </th>

                                    <th className="pb-3 text-xs uppercase tracking-wide text-gray-400 font-bold">
                                        Status
                                    </th>

                                    <th className="pb-3 text-xs uppercase tracking-wide text-gray-400 font-bold">
                                        Date
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-gray-50">

                                    <td className="py-4 text-sm font-semibold text-[#0A192F]">
                                        CERT-001
                                    </td>

                                    <td className="py-4 text-sm text-gray-600">
                                        UCU
                                    </td>

                                    <td className="py-4 text-sm text-gray-600">
                                        Issued
                                    </td>

                                    <td className="py-4">
                                        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                                            Active
                                        </span>
                                    </td>

                                    <td className="py-4 text-sm text-gray-500">
                                        Oct 3, 2026
                                    </td>

                                </tr>

                                <tr>

                                    <td className="py-4 text-sm font-semibold text-[#0A192F]">
                                        CERT-002
                                    </td>

                                    <td className="py-4 text-sm text-gray-600">
                                        UCU
                                    </td>

                                    <td className="py-4 text-sm text-gray-600">
                                        Verified
                                    </td>

                                    <td className="py-4">
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                                            Verified
                                        </span>
                                    </td>

                                    <td className="py-4 text-sm text-gray-500">
                                        Oct 3, 2026
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
}