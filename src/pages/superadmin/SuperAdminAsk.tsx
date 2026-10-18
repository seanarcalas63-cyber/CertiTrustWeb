import { Link, useLocation } from "react-router-dom";

export default function SuperAdminAsk() {
    const location = useLocation();

    const menuItems = [
        { name: "Home", path: "/superadmin", icon: "⌂" },
        { name: "Records", path: "/superadmin/records", icon: "▤" },
        { name: "Verify", path: "/superadmin/verify", icon: "✓" },
        { name: "Ask", path: "/superadmin/ask", icon: "?" },
    ];

    return (
        <div className="min-h-screen bg-[#F5F7FB] flex">

            {/* SIDEBAR */}
            <aside className="w-[260px] bg-[#071426] text-white min-h-screen flex flex-col">

                {/* LOGO */}
                <div className="px-5 pt-5">
                    <Link to="/superadmin" className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center overflow-hidden">
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

                            <span className="block text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                Super Admin
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="mx-5 mt-6 border-t border-white/10" />

                {/* MENU */}
                <nav className="flex-1 px-3.5 mt-6">
                    <div className="grid gap-2">

                        {menuItems.map((item) => {
                            const isActive =
                                location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative min-h-11 flex items-center gap-3 px-3.5 rounded-xl font-semibold transition-all ${
                                        isActive
                                            ? "bg-white text-[#0A192F] shadow-lg"
                                            : "text-white/60 hover:text-white hover:bg-white/[0.07]"
                                    }`}
                                >

                                    {isActive && (
                                        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#2563EB]" />
                                    )}

                                    <span
                                        className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold ${
                                            isActive
                                                ? "bg-[#EAF2FF] text-[#1D4ED8]"
                                                : "bg-white/[0.05] text-white/50"
                                        }`}
                                    >
                                        {item.icon}
                                    </span>

                                    <span className="text-sm">
                                        {item.name}
                                    </span>

                                </Link>
                            );
                        })}

                    </div>
                </nav>

                {/* LOGOUT */}
                <div className="px-3.5 pb-5">
                    <Link
                        to="/login"
                        className="min-h-11 w-full flex items-center gap-3 px-3.5 rounded-xl text-white/55 hover:text-white hover:bg-red-500/10 transition-all"
                    >
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05]">
                            ↪
                        </span>

                        <span className="text-sm font-semibold">
                            Logout
                        </span>
                    </Link>
                </div>

            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-6 md:p-10">

                {/* HEADER */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-[#0A192F]">
                        Ask & Support
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage questions and support requests from subadmins.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* QUESTIONS */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-[#0A192F]">
                                    Questions & Requests
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Review questions submitted by subadmins.
                                </p>
                            </div>

                            <span className="px-3 py-1 rounded-full bg-[#EAF2FF] text-[#2563EB] text-xs font-bold">
                                3 New
                            </span>
                        </div>

                        {/* QUESTION 1 */}
                        <div className="border border-gray-100 rounded-xl p-4 mb-3 hover:border-blue-200 transition">
                            <div className="flex justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-[#0A192F]">
                                        How can I verify a credential?
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Submitted by University Subadmin
                                    </p>
                                </div>

                                <button className="text-sm font-semibold text-[#2563EB]">
                                    View
                                </button>
                            </div>
                        </div>

                        {/* QUESTION 2 */}
                        <div className="border border-gray-100 rounded-xl p-4 mb-3 hover:border-blue-200 transition">
                            <div className="flex justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-[#0A192F]">
                                        Request to update university records
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Submitted by Registrar Subadmin
                                    </p>
                                </div>

                                <button className="text-sm font-semibold text-[#2563EB]">
                                    View
                                </button>
                            </div>
                        </div>

                        {/* QUESTION 3 */}
                        <div className="border border-gray-100 rounded-xl p-4 hover:border-blue-200 transition">
                            <div className="flex justify-between gap-4">
                                <div>
                                    <h3 className="font-bold text-[#0A192F]">
                                        Credential deletion request
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Submitted by Records Administrator
                                    </p>
                                </div>

                                <button className="text-sm font-semibold text-[#2563EB]">
                                    View
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* SUPPORT CARD */}
                    <div className="bg-[#0A192F] rounded-2xl p-6 text-white h-fit">

                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-5">
                            ?
                        </div>

                        <h2 className="text-xl font-bold">
                            Super Admin Support
                        </h2>

                        <p className="text-white/60 text-sm mt-2 leading-6">
                            Review concerns, answer questions, and assist
                            registered university administrators.
                        </p>

                        <button className="mt-6 w-full bg-white text-[#0A192F] py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                            Open Support Center
                        </button>

                    </div>

                </div>

            </main>
        </div>
    );
}