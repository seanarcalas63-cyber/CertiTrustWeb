import { useState } from "react";
import SuperAdminSideBar from "../../components/SuperAdminSideBar";

type Subadmin = {
    id: string;
    code: string;
    email: string;
    university: string;
    access: string;
    frozen: string;
};

type FieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: string;
    helper?: string;
};

function Field({ label, value, onChange, type = "text", error, helper }: FieldProps) {
    const [focused, setFocused] = useState(false);
    const floating = focused || value !== "";

    return (
        <div>
            <div className="relative">
                <label
                    className={`absolute left-4 px-1 pointer-events-none transition-all duration-200 ${floating
                            ? "-top-2.5 text-xs bg-white font-medium " +
                            (error ? "text-red-600" : "text-[#0A3A6B]")
                            : "top-1/2 -translate-y-1/2 text-gray-600"
                        }`}
                >
                    {label}
                </label>

                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`w-full px-5 py-5 bg-transparent rounded-xl border outline-none text-[#0A192F] transition-colors ${error
                            ? "border-red-500 border-2"
                            : focused
                                ? "border-[#0A3A6B] border-2"
                                : "border-gray-400"
                        }`}
                />
            </div>

            {error ? (
                <p className="text-sm text-red-600 mt-1.5 ml-5">{error}</p>
            ) : helper ? (
                <p className="text-sm text-gray-600 mt-1.5 ml-5">{helper}</p>
            ) : null}
        </div>
    );
}

const initialSubadmins: Subadmin[] = [
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

export default function SuperAdminCreateSubadmin() {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [university, setUniversity] = useState("");
    const [branch, setBranch] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [subadmins, setSubadmins] = useState<Subadmin[]>(initialSubadmins);

    const handleCreate = () => {
        const next: Record<string, string> = {};

        if (displayName.trim() === "") next.displayName = "Required";

        if (email.trim() === "") next.email = "Required";
        else if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Invalid email";

        if (university.trim() === "") next.university = "Required";

        if (!/^[A-Za-z0-9]{1,10}$/.test(shortCode.trim()))
            next.shortCode = "Use 1–10 letters or numbers.";

        setErrors(next);

        if (Object.keys(next).length > 0) return;

        // TODO: connect to your API to create the administrator account
        setSubadmins((prev) => [
            ...prev,
            {
                id: String(Date.now()),
                code: shortCode.trim().toUpperCase(),
                email: email.trim(),
                university: university.trim(),
                access: "Active",
                frozen: "None",
            },
        ]);

        setDisplayName("");
        setEmail("");
        setUniversity("");
        setBranch("");
        setShortCode("");
    };

    return (
        <div className="flex min-h-screen bg-[#F5F7FB]">

            <SuperAdminSideBar />

            <main className="flex-1 min-w-0 p-8 h-screen overflow-y-auto">

                <div className="max-w-3xl mx-auto">

                    {/* HEADER */}
                    <h1 className="text-3xl font-extrabold text-[#0A192F]">
                        Subadmin Accounts
                    </h1>

                    <p className="text-gray-500 mt-2 mb-8">
                        Bind, update, or remove university administrators across the system.
                    </p>

                    {/* FORM */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <Field
                                label="Display name"
                                value={displayName}
                                onChange={setDisplayName}
                                error={errors.displayName}
                            />

                            <Field
                                label="Google account email"
                                type="email"
                                value={email}
                                onChange={setEmail}
                                error={errors.email}
                            />

                            <Field
                                label="University name"
                                value={university}
                                onChange={setUniversity}
                                error={errors.university}
                            />

                            <Field
                                label="Branch campus (optional)"
                                value={branch}
                                onChange={setBranch}
                            />

                            <div className="md:col-span-2">
                                <Field
                                    label="Display name / university short code"
                                    value={shortCode}
                                    onChange={setShortCode}
                                    error={errors.shortCode}
                                    helper="Editable; use 1–10 letters or numbers."
                                />
                            </div>

                        </div>

                        {/* CREATE BUTTON */}
                        <button
                            type="button"
                            onClick={handleCreate}
                            className="mt-8 w-full flex items-center justify-center gap-3 py-5 rounded-full bg-[#003366] hover:bg-[#002650] text-white text-lg font-semibold shadow-lg shadow-slate-400/40 transition-all duration-300"
                        >
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="9" cy="8" r="4" />
                                <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" />
                                <line x1="19" y1="8" x2="19" y2="14" />
                                <line x1="16" y1="11" x2="22" y2="11" />
                            </svg>
                            Create administrator account
                        </button>

                    </div>

                    {/* REGISTERED SUBADMINS */}
                    <h2 className="text-2xl font-bold text-[#0A192F] mt-12 mb-5">
                        Registered Subadmins
                    </h2>

                    <div className="space-y-5">

                        {subadmins.map((s) => (
                            <div
                                key={s.id}
                                className="flex items-center gap-6 bg-[#F3F5F9] rounded-2xl border border-gray-200 shadow-md px-7 py-6 hover:shadow-lg transition-shadow"
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
                                        {s.code}
                                    </p>

                                    <p className="text-[15px] text-gray-600 mt-0.5 break-all">
                                        {s.email}
                                    </p>

                                    <p className="text-[15px] text-gray-600 mt-1">
                                        University: {s.university}
                                    </p>

                                    <p className="text-[15px] font-semibold text-[#2E9E45] mt-1">
                                        Subadmin access: {s.access}
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
                                        Frozen students: {s.frozen}
                                    </p>

                                </div>

                                {/* MENU */}
                                <button
                                    type="button"
                                    aria-label="More options"
                                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-200/70 transition-colors shrink-0"
                                >
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="5" r="2" />
                                        <circle cx="12" cy="12" r="2" />
                                        <circle cx="12" cy="19" r="2" />
                                    </svg>
                                </button>

                                {/* CHEVRON */}
                                <button
                                    type="button"
                                    aria-label="Open details"
                                    className="p-2 rounded-lg text-gray-700 hover:bg-gray-200/70 transition-colors shrink-0"
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
                                </button>

                            </div>
                        ))}

                    </div>

                </div>

            </main>

        </div>
    );
}