import { Link } from "react-router-dom";

export default function SuperAdminCreateSubadmin() {
    return (
        <div className="min-h-screen bg-[#F5F7FB] flex">

            {/* SIDEBAR */}
            <aside className="w-[280px] min-h-screen bg-[#071426] text-white p-5 flex flex-col">

                {/* LOGO */}
                <Link to="/superadmin" className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="CertiTrust"
                            className="w-11 h-11 object-contain"
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
                </Link>

                {/* MENU */}
                <nav className="space-y-2">

                    <Link
                        to="/superadmin"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                    >
                        <span>⌂</span>
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        to="/superadmin/create-subadmin"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-[#071426] font-semibold"
                    >
                        <span>+</span>
                        <span>Create Subadmin Account</span>
                    </Link>

                    <Link
                        to="/superadmin/logs"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                    >
                        <span>EQ</span>
                        <span>Global Credential Logs</span>
                    </Link>

                    <Link
                        to="/superadmin/records"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                    >
                        <span>▤</span>
                        <span>Records</span>
                    </Link>

                    <Link
                        to="/superadmin/verify"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                    >
                        <span>✓</span>
                        <span>Verify</span>
                    </Link>

                    <Link
                        to="/superadmin/ask"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                    >
                        <span>?</span>
                        <span>Ask</span>
                    </Link>

                </nav>

                {/* BOTTOM */}
                <div className="mt-auto">

                    <div className="mb-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-xs font-bold">
                            🟢 System Online
                        </p>

                        <p className="text-[10px] text-white/40 mt-1">
                            All services operational
                        </p>
                    </div>

                    <Link
                        to="/login"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-red-500/10 hover:text-white"
                    >
                        <span>↪</span>
                        <span>Logout</span>
                    </Link>

                </div>

            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-8">

                {/* HEADER */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-[#071426]">
                        Create Subadmin Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Register a new administrator account for a university.
                    </p>
                </div>

                {/* FORM CARD */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 max-w-4xl">

                    <h2 className="text-xl font-bold text-[#071426] mb-6">
                        Account Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* FULL NAME */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Institutional Email
                            </label>

                            <input
                                type="email"
                                placeholder="admin@university.edu.ph"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* UNIVERSITY */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                University
                            </label>

                            <input
                                type="text"
                                placeholder="Enter university name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* ROLE */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Account Role
                            </label>

                            <select
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Subadmin</option>
                                <option>University Administrator</option>
                                <option>Registrar</option>
                            </select>
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Temporary Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter temporary password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                    {/* PERMISSIONS */}
                    <div className="mt-8">

                        <h3 className="font-bold text-[#071426] mb-4">
                            Default Permissions
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                            <label className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked />
                                <span className="text-sm text-gray-700">
                                    Manage Academic Records
                                </span>
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked />
                                <span className="text-sm text-gray-700">
                                    Issue Certificates
                                </span>
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="checkbox" defaultChecked />
                                <span className="text-sm text-gray-700">
                                    Verify Credentials
                                </span>
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="checkbox" />
                                <span className="text-sm text-gray-700">
                                    Manage Students
                                </span>
                            </label>

                        </div>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-end gap-3 mt-8 pt-6 border-t">

                        <Link
                            to="/superadmin"
                            className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50"
                        >
                            Cancel
                        </Link>

                        <button
                            type="button"
                            className="px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-blue-700"
                        >
                            Create Subadmin Account
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}