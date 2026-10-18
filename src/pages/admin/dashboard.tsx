import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
    const records = [
        {
            id: "20260001",
            name: "King Kong",
            program: "BSIT",
            status: "verified",
        },
        {
            id: "20260002",
            name: "Diana Prince",
            program: "BSCS",
            status: "verified",
        },
        {
            id: "20260003",
            name: "Peter Parker",
            program: "BSCE",
            status: "pending",
        },
        {
            id: "20260004",
            name: "Bruce Wayne",
            program: "BSA",
            status: "verified",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[286px_1fr]">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="min-w-0 overflow-y-auto h-screen p-4 sm:p-5 md:p-8">

                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-extrabold text-[#0A192F]">
                            Admin Dashboard
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Manage and verify academic credentials.
                        </p>
                    </div>


                    {/* Quick Actions */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">

                        {/* Issue Certificate */}
                        <a
                            href="/certificates"
                            className="
                                group relative overflow-hidden
                                flex items-center gap-4
                                rounded-2xl
                                border border-slate-200
                                bg-white p-5
                                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-[#1D4ED8]/20
                                hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]
                            "
                        >
                            <div className="
                                flex h-12 w-12 flex-none
                                items-center justify-center
                                rounded-xl
                                bg-[#1D4ED8]/10
                                text-[#1D4ED8]
                                transition
                                group-hover:bg-[#1D4ED8]
                                group-hover:text-white
                            ">
                                +
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-extrabold text-[#0A192F]">
                                    Issue Certificate
                                </h3>

                                <p className="mt-1 text-sm leading-5 text-slate-500">
                                    Create and issue a new academic credential.
                                </p>
                            </div>

                            <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1D4ED8]">
                                →
                            </span>
                        </a>


                        {/* Verify Hash / QR */}
                        <a
                            href="/verification"
                            className="
                                group relative overflow-hidden
                                flex items-center gap-4
                                rounded-2xl
                                border border-slate-200
                                bg-white p-5
                                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-[#15803D]/20
                                hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]
                            "
                        >
                            <div className="
                                flex h-12 w-12 flex-none
                                items-center justify-center
                                rounded-xl
                                bg-[#15803D]/10
                                text-[#15803D]
                                transition
                                group-hover:bg-[#15803D]
                                group-hover:text-white
                            ">
                                ✓
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-extrabold text-[#0A192F]">
                                    Verify Hash / QR
                                </h3>

                                <p className="mt-1 text-sm leading-5 text-slate-500">
                                    Verify credentials using a hash or QR code.
                                </p>
                            </div>

                            <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#15803D]">
                                →
                            </span>
                        </a>


                        {/* Recent Credentials */}
                        <a
                            href="/certificates"
                            className="
                                group relative overflow-hidden
                                flex items-center gap-4
                                rounded-2xl
                                border border-slate-200
                                bg-white p-5
                                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                                transition-all duration-200
                                hover:-translate-y-1
                                hover:border-[#7C3AED]/20
                                hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]
                            "
                        >
                            <div className="
                                flex h-12 w-12 flex-none
                                items-center justify-center
                                rounded-xl
                                bg-[#7C3AED]/10
                                text-[#7C3AED]
                                transition
                                group-hover:bg-[#7C3AED]
                                group-hover:text-white
                            ">
                                ▣
                            </div>

                            <div>
                                <h3 className="m-0 text-base font-extrabold text-[#0A192F]">
                                    Recent Credentials
                                </h3>

                                <p className="mt-1 text-sm leading-5 text-slate-500">
                                    View the latest academic credentials issued.
                                </p>
                            </div>

                            <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#7C3AED]">
                                →
                            </span>
                        </a>

                    </section>


                    {/* Recent Issued Records */}
                    <section
                        className="
                            mt-6
                            rounded-2xl
                            border border-slate-200
                            bg-white p-5
                            shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                        "
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="m-0 text-base font-extrabold text-[#0A192F]">
                                Recent Issued Records
                            </h3>

                            <a
                                href="/certificates"
                                className="text-sm font-semibold text-[#1D4ED8] hover:underline"
                            >
                                View all
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            {records.map((record) => (
                                <div
                                    key={record.id}
                                    className="
                                        flex items-center gap-3
                                        rounded-xl
                                        border border-slate-100
                                        bg-[#F8FAFC]
                                        p-3 sm:p-4
                                        transition
                                        hover:border-slate-200
                                        hover:bg-white
                                    "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                                            flex h-10 w-10 flex-none
                                            items-center justify-center
                                            rounded-lg
                                            bg-[#1D4ED8]/10
                                            text-[#1D4ED8]
                                        "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="h-5 w-5"
                                        >
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                            <path d="m3.3 7 8.7 5 8.7-5" />
                                            <path d="M12 22V12" />
                                        </svg>
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                        <p className="m-0 truncate text-sm font-bold text-[#0A192F]">
                                            {record.name}
                                        </p>
                                        <p className="mt-0.5 truncate text-xs text-slate-500">
                                            {record.program} &middot; ID: {record.id}
                                        </p>
                                    </div>

                                    {/* Status */}
                                    {record.status === "verified" ? (
                                        <span
                                            className="
                                                flex h-6 w-6 flex-none
                                                items-center justify-center
                                                rounded-full
                                                bg-green-100 text-green-600
                                            "
                                            title="Verified"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                className="h-3.5 w-3.5"
                                            >
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                        </span>
                                    ) : (
                                        <span
                                            className="
                                                flex-none rounded-full
                                                bg-amber-100 px-2 py-0.5
                                                text-[11px] font-semibold text-amber-700
                                            "
                                        >
                                            Pending
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}