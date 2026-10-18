import { Link, useLocation } from "react-router-dom";

export default function SuperAdminRecords() {
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
            Global Records
          </h1>

          <p className="text-gray-500 mt-2">
            View and monitor academic credentials from all universities.
          </p>

        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Records
            </p>

            <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
              2
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">
              Verified Records
            </p>

            <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
              2
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">
              Universities
            </p>

            <h2 className="text-3xl font-extrabold text-[#0A192F] mt-2">
              2
            </h2>
          </div>

        </div>

        {/* RECORDS */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

          <div className="p-6 border-b border-gray-100">

            <h2 className="text-lg font-bold text-[#0A192F]">
              Academic Credential Records
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Global records issued by registered universities.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b border-gray-100">

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                    Student
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                    Student ID
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                    Program
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">

                  <td className="px-6 py-5 text-sm font-semibold text-[#0A192F]">
                    Randy Gonzales
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-500">
                    20260003
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-500">
                    BSIT
                  </td>

                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                      Verified
                    </span>
                  </td>

                </tr>

                <tr className="hover:bg-gray-50 transition-colors">

                  <td className="px-6 py-5 text-sm font-semibold text-[#0A192F]">
                    Elmar Sam Diza
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-500">
                    20260002
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-500">
                    BSIT
                  </td>

                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                      Verified
                    </span>
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