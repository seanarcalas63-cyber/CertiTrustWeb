import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminSideBar from "../../components/SuperAdminSideBar";

type University = {
    id: string;
    code: string;
    email: string;
    university: string;
    access: "Active" | "Frozen";
    frozen: string;
};

const initialUniversities: University[] = [
    {
        id: "1",
        code: "PSU",
        email: "psu2026admin@gmail.com",
        university: "Pangasinan State University (PSU)",
        access: "Active",
        frozen: "None",
    },
    {
        id: "2",
        code: "UCU",
        email: "adminucutest@gmail.com",
        university: "Urdaneta City University (UCU)",
        access: "Active",
        frozen: "None",
    },
];

export default function SuperAdminFreezeAccess() {
    const [universities, setUniversities] =
        useState<University[]>(initialUniversities);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const navigate = useNavigate();

    const setAccess = (id: string, access: "Active" | "Frozen") => {
        // TODO: connect to your API to freeze / restore university access
        setUniversities((prev) =>
            prev.map((u) => (u.id === id ? { ...u, access } : u))
        );
        setOpenMenuId(null);
    };

    return (
        <div className="flex min-h-screen bg-[#F5F7FB]">

            <SuperAdminSideBar />

            <main className="flex-1 min-w-0 h-screen overflow-y-auto p-6 md:p-10">

                <div className="max-w-3xl mx-auto">

                    {/* HEADER */}
                    <h1 className="text-3xl font-extrabold text-[#0A192F]">
                        University Access Controls
                    </h1>

                    <p className="text-gray-500 mt-3 mb-10 leading-7 max-w-2xl">
                        Choose a registered university to manage its student access, or
                        use the menu to freeze or restore university access.
                    </p>

                    {/* REGISTERED UNIVERSITIES */}
                    <h2 className="text-2xl font-bold text-[#0A192F] mb-5">
                        Registered Universities
                    </h2>

                    <div className="space-y-5">

                        {universities.map((u) => {
                            const isActive = u.access === "Active";

                            return (
                                <div
                                    key={u.id}
                                    role="link"
                                    tabIndex={0}
                                    onClick={() =>
                                        navigate(`/superadmin/freeze-access/${u.code}`)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter")
                                            navigate(`/superadmin/freeze-access/${u.code}`);
                                    }}
                                    className="flex items-center gap-6 bg-[#F3F5F9] rounded-2xl border border-gray-200 shadow-md px-7 py-6 hover:shadow-lg hover:bg-[#EDF0F6] cursor-pointer transition-all"
                                >

                                    {/* ICON */}
                                    <span className="text-[#333F4F] shrink-0">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="3 9 12 3 21 9" />
                                            <line x1="3" y1="9" x2="21" y2="9" />
                                            <line x1="6" y1="11.5" x2="6" y2="17.5" />
                                            <line x1="10" y1="11.5" x2="10" y2="17.5" />
                                            <line x1="14" y1="11.5" x2="14" y2="17.5" />
                                            <line x1="18" y1="11.5" x2="18" y2="17.5" />
                                            <line x1="3" y1="20.5" x2="21" y2="20.5" />
                                        </svg>
                                    </span>

                                    {/* TEXT */}
                                    <div className="flex-1 min-w-0">

                                        <p className="text-xl font-semibold text-[#0A192F]">
                                            {u.code}
                                        </p>

                                        <p className="text-[15px] text-gray-600 mt-0.5 break-all">
                                            {u.email}
                                        </p>

                                        <p className="text-[15px] text-gray-600 mt-1">
                                            University: {u.university}
                                        </p>

                                        <p
                                            className={`text-[15px] font-semibold mt-1 ${isActive ? "text-[#2E9E45]" : "text-red-600"
                                                }`}
                                        >
                                            Subadmin access: {u.access}
                                        </p>

                                        <p className="text-[15px] font-semibold text-[#2E9E45] mt-1 flex items-center gap-2">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                            </svg>
                                            Frozen students: {u.frozen}
                                        </p>

                                    </div>

                                    {/* MENU */}
                                    <div
                                        className="relative shrink-0"
                                        onClick={(e) => e.stopPropagation()}
                                        onKeyDown={(e) => e.stopPropagation()}
                                    >

                                        <button
                                            type="button"
                                            aria-label="More options"
                                            aria-haspopup="menu"
                                            aria-expanded={openMenuId === u.id}
                                            onClick={() =>
                                                setOpenMenuId(openMenuId === u.id ? null : u.id)
                                            }
                                            className="p-2 rounded-lg text-gray-700 hover:bg-gray-200/70 transition-colors"
                                        >
                                            <svg
                                                width="26"
                                                height="26"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <circle cx="12" cy="5" r="2" />
                                                <circle cx="12" cy="12" r="2" />
                                                <circle cx="12" cy="19" r="2" />
                                            </svg>
                                        </button>

                                        {openMenuId === u.id && (
                                            <>
                                                {/* click-outside layer */}
                                                <div
                                                    className="fixed inset-0 z-10"
                                                    onClick={() => setOpenMenuId(null)}
                                                />

                                                <div
                                                    role="menu"
                                                    className="absolute right-0 top-full mt-1 z-20 w-72 bg-white rounded-xl border border-gray-200 shadow-xl py-2"
                                                >
                                                    <button
                                                        type="button"
                                                        role="menuitem"
                                                        disabled={!isActive}
                                                        onClick={() => setAccess(u.id, "Frozen")}
                                                        className="w-full text-left px-4 py-3 text-sm font-semibold text-red-600 hover:bg-gray-50 transition-colors disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                                                    >
                                                        Freeze Access for {u.university}
                                                    </button>

                                                    <button
                                                        type="button"
                                                        role="menuitem"
                                                        disabled={isActive}
                                                        onClick={() => setAccess(u.id, "Active")}
                                                        className="w-full text-left px-4 py-3 text-sm font-semibold text-[#2E9E45] hover:bg-gray-50 transition-colors disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed"
                                                    >
                                                        Restore access for {u.university}
                                                    </button>
                                                </div>
                                            </>
                                        )}

                                    </div>

                                    {/* CHEVRON */}
                                    <span
                                        aria-hidden="true"
                                        className="p-2 text-gray-700 shrink-0"
                                    >
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="9 6 15 12 9 18" />
                                        </svg>
                                    </span>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </main>

        </div>
    );
}