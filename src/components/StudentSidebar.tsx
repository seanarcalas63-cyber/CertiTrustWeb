import { Link, useLocation } from "react-router-dom";

export default function StudentSidebar() {
    const location = useLocation();

    const menuItems = [
        { name: "Home", path: "/portal", icon: "⌂" },
        { name: "Records", path: "/portal/records", icon: "▤" },
        { name: "Verify", path: "/certificate-verification", icon: "✓" },
        { name: "AskQ", path: "/ask-admin", icon: "◈" },
        { name: "Profile", path: "/portal/profile", icon: "○" },
    ];

    return (
        <aside
            data-sidebar
          className="top-0 h-screen bg-[#071426] text-white flex flex-col fixed inset-y-0 left-0 z-30 w-[min(290px,86vw)] md:w-auto -translate-x-full md:translate-x-0 transition-transform duration-200 shadow-[12px_0_40px_rgba(10,25,47,0.15)]"
        >
            {/* Logo */}
            <div className="px-5 pt-5">
                <Link
                    to="/"
                    className="flex items-center gap-3.5 min-h-14 group"
                >
                    <div className="w-11 h-11 flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
                        <img
                            src="/logo.png"
                            alt="CertiTrust logo"
                            className="w-11 h-11 object-contain"
                        />
                    </div>

                    <div>
                        <span className="block text-white font-extrabold text-lg tracking-tight">
                            CertiTrust
                        </span>
                        <span className="block text-white/40 text-[10px] font-bold uppercase tracking-[0.18em]">
                            Student Portal
                        </span>
                    </div>
                </Link>
            </div>

            {/* Divider */}
            <div className="mx-5 mt-6 border-t border-white/10" />

            {/* Navigation */}
            <nav
                aria-label="Primary navigation"
                className="flex-1 px-3.5 mt-5 overflow-y-auto"
            >
                <p className="px-3 mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/35">
                    Menu
                </p>

                <div className="grid gap-1.5">
                    {menuItems.map((item) => {
                        const isActive =
                            location.pathname === item.path ||
                            (item.path !== "/portal" &&
                                location.pathname.startsWith(item.path));

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`group relative min-h-11 flex items-center gap-3 px-3.5 rounded-xl font-semibold transition-all duration-200 ${
                                    isActive
                                        ? "bg-white text-[#0A192F] shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                                        : "text-white/60 hover:text-white hover:bg-white/[0.07]"
                                }`}
                            >
                                {isActive && (
                                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#2563EB]" />
                                )}

                                <span
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition ${
                                        isActive
                                            ? "bg-[#EAF2FF] text-[#1D4ED8]"
                                            : "bg-white/[0.05] text-white/50 group-hover:bg-white/10 group-hover:text-white"
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

            {/* Bottom Section */}
            <div className="px-3.5 pb-4">
                {/* System Status */}
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

                {/* Logout */}
                <Link
                    to="/login"
                    data-logout
                    className="group min-h-11 w-full flex items-center gap-3 px-3.5 rounded-xl text-white/55 hover:text-white hover:bg-red-500/10 border border-transparent hover:border-red-400/10 transition"
                >
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] group-hover:bg-red-500/10 group-hover:text-red-300 transition">
                        ↪
                    </span>

                    <span className="text-sm font-semibold">
                        Logout
                    </span>
                </Link>
            </div>
        </aside>
    );
}