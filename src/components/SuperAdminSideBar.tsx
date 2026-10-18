import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", path: "/superadmin", icon: "⌂" },
    { name: "Create Subadmin Account", path: "/superadmin/create-subadmin", icon: "+" },
    { name: "Global Credential Logs", path: "/superadmin/logs", icon: "EQ" },
    { name: "Records", path: "/superadmin/records", icon: "▤" },
    { name: "Verify", path: "/superadmin/verify", icon: "✓" },
    { name: "Ask", path: "/superadmin/ask", icon: "?" },
];

export default function SuperAdminSideBar() {
    const location = useLocation();

    return (
        <aside className="w-70 max-h-screen shrink-0 bg-[#071426] text-white min-h-screen flex flex-col">

            {/* LOGO */}
            <div className="px-5 pt-5">
                <Link to="/superadmin" className="flex items-center gap-3">
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
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`group relative min-h-12 flex items-center gap-3 px-3.5 rounded-xl font-semibold transition-all duration-300 ${isActive
                                        ? "bg-white text-[#0A192F] shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                                        : "text-white/60 hover:text-white hover:bg-white/[0.07]"
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#2563EB]" />
                                )}

                                <span
                                    className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold shrink-0 ${isActive
                                            ? "bg-[#EAF2FF] text-[#1D4ED8]"
                                            : "bg-white/[0.05] text-white/50 group-hover:bg-white/10 group-hover:text-white"
                                        }`}
                                >
                                    {item.icon}
                                </span>

                                <span className="text-sm leading-5">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* SYSTEM STATUS + LOGOUT */}
            <div className="px-3.5 pb-5">
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

                <Link
                    to="/login"
                    className="group min-h-11 w-full flex items-center gap-3 px-3.5 rounded-xl text-white/55 hover:text-white hover:bg-red-500/10 border border-transparent transition-all"
                >
                    <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] group-hover:bg-red-500/10 group-hover:text-red-300">
                        ↪
                    </span>

                    <span className="text-sm font-semibold">Logout</span>
                </Link>
            </div>
        </aside>
    );
}