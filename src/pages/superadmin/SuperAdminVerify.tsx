import { Link, useLocation } from "react-router-dom";

export default function SuperAdminVerify() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/superadmin", icon: "⌂" },
    { name: "Records", path: "/superadmin/records", icon: "▤" },
    { name: "Verify", path: "/superadmin/verify", icon: "✓" },
    { name: "Ask", path: "/superadmin/ask", icon: "?" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FC]">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-[#071426] text-white flex flex-col">

        {/* LOGO */}
        <div className="px-5 pt-5">
          <Link to="/superadmin" className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="/logo.png"
                alt="CertiTrust"
                className="w-11 h-11 object-contain"
              />
            </div>

            <div>
              <span className="block text-white font-extrabold text-lg">
                CertiTrust
              </span>

              <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider">
                Super Admin
              </span>
            </div>
          </Link>
        </div>

        <div className="mx-5 mt-6 border-t border-white/10" />

        {/* MENU */}
        <nav className="flex-1 px-3.5 mt-6">
          <div className="space-y-1.5">

            {menuItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-3 min-h-11 px-3.5 rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-white text-[#0A192F] shadow-lg"
                      : "text-white/60 hover:text-white hover:bg-white/[0.07]"
                  }`}
                >

                  {active && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#2563EB]" />
                  )}

                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold ${
                      active
                        ? "bg-[#EAF2FF] text-[#1D4ED8]"
                        : "bg-white/[0.05] text-white/50"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm font-semibold">
                    {item.name}
                  </span>

                </Link>
              );
            })}

          </div>
        </nav>

        {/* STATUS */}
        <div className="px-3.5 pb-5">
          <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">

            <div className="flex items-center gap-2.5">

              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />

              <div>
                <p className="text-xs font-bold text-white/80">
                  System Online
                </p>

                <p className="text-[10px] text-white/35">
                  All services operational
                </p>
              </div>

            </div>

          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-[260px] min-h-screen p-8">

        {/* HEADER */}
        <div className="mb-8">

          <p className="text-sm font-semibold text-[#2563EB] mb-2">
            Super Admin
          </p>

          <h1 className="text-3xl font-extrabold text-[#0A192F]">
            Credential Verification
          </h1>

          <p className="text-gray-500 mt-2">
            Verify academic credentials across registered universities.
          </p>

        </div>

        {/* VERIFY CARD */}
        <div className="max-w-3xl bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <h2 className="text-lg font-bold text-[#0A192F] mb-2">
            Verify a Credential
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Enter a credential ID or hash to check its authenticity.
          </p>

          {/* INPUT */}
          <div className="mb-5">

            <label className="block text-sm font-semibold text-[#0A192F] mb-2">
              Credential ID
            </label>

            <input
              type="text"
              placeholder="Enter credential ID"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            />

          </div>

          {/* HASH */}
          <div className="mb-6">

            <label className="block text-sm font-semibold text-[#0A192F] mb-2">
              Credential Hash
            </label>

            <input
              type="text"
              placeholder="Enter credential hash"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            />

          </div>

          {/* BUTTON */}
          <button
            type="button"
            className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition-all duration-300 shadow-sm"
          >
            ✓ Verify Credential
          </button>

        </div>

        {/* VERIFICATION STATUS */}
        <div className="max-w-3xl mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <h2 className="text-lg font-bold text-[#0A192F]">
            Verification Result
          </h2>

          <div className="mt-5 p-5 rounded-xl bg-gray-50 border border-gray-100">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                ✓
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0A192F]">
                  No verification performed
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Enter a credential ID or hash above.
                </p>
              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}