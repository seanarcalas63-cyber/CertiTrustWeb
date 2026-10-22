import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function Profile() {

    const navigate = useNavigate();

    const [name, setName] = useState<string>("Johny Hey Daddy");
    const [role, setRole] = useState<string>("System Admin");
    const [institution, setInstitution] = useState<string>("Urdaneta City University (UCU)");
    const [email, setEmail] = useState<string>("registrar.admin@ucu.edu.ph");

    const showToast = (message: string) => {
        const toast = document.getElementById("toast");
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        window.clearTimeout((showToast as any)._t);
        (showToast as any)._t = window.setTimeout(() => {
            toast.classList.remove("show");
        }, 2600);
    };

    const handleSave = () => {
        // TODO: send { name, role, institution, email } to your API
        showToast("Profile saved.");
    };

    return (
        <>
            <div className="min-h-screen bg-[#F6F8FC] grid grid-cols-1 md:grid-cols-[286px_1fr]">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="min-w-0 p-5 h-screen overflow-y-auto md:p-8">

                    {/* Header */}
                    <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                Account Settings
                            </p>

                            <h1 className="mt-1.5 mb-1 text-[#0A192F] text-2xl md:text-3xl font-extrabold">
                                Profile
                            </h1>

                            <p className="m-0 text-slate-500 text-sm">
                                Manage your administrator account information.
                            </p>
                        </div>

                        <button
                            type="button"
                            id="saveProfile"
                            onClick={handleSave}
                            className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 rounded-xl bg-[#0A192F] text-white font-bold shadow-[0_8px_20px_rgba(10,25,47,0.15)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(10,25,47,0.2)] transition"
                        >
                            <span>✓</span>
                            Save Changes
                        </button>
                    </header>

                    {/* Profile Hero */}
                    <section className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]">

                        {/* Top Background */}
                        <div className="h-28 bg-linear-to-r from-[#0A192F] via-[#12305A] to-[#1D4ED8] relative">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute -right-10 -top-20 w-64 h-64 rounded-full border-[30px] border-white"></div>
                                <div className="absolute right-40 top-10 w-28 h-28 rounded-full border-[15px] border-white"></div>
                            </div>
                        </div>

                        {/* Profile Information */}
                        <div className="relative z-10 px-5 md:px-7 pb-6">
                            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">

                                {/* Profile Logo */}
                                <div className="w-24 h-24 shrink-0 rounded-2xl bg-white border-4 border-white shadow-[0_8px_25px_rgba(15,23,42,0.15)] flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/logo.png"
                                        alt="CertiTrust account mark"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="flex-1 pt-1 sm:pb-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <h2 className="m-0 text-xl md:text-2xl font-extrabold text-[#0A192F]">
                                            {name}
                                        </h2>

                                        <span className="w-fit inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                            Active
                                        </span>
                                    </div>

                                    <p className="mt-1 mb-0 text-slate-500 text-sm">
                                        {role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Grid */}
                    <section className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] gap-5">

                        {/* Profile Details */}
                        <article className="bg-white border border-slate-200 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] overflow-hidden">

                            <div className="px-5 md:px-6 py-5 border-b border-slate-100">
                                <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                    Personal Information
                                </p>

                                <h2 className="mt-1 mb-0 text-lg font-extrabold text-[#0A192F]">
                                    Administrator Details
                                </h2>
                            </div>

                            <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* Name */}
                                <label className="grid gap-2 text-[#172033] font-bold text-sm">
                                    <span>
                                        Name
                                    </span>

                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 text-[#0A192F] font-medium outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />
                                </label>

                                {/* Role */}
                                <label className="grid gap-2 text-[#172033] font-bold text-sm">
                                    <span>
                                        Role
                                    </span>

                                    <input
                                        type="text"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 text-[#0A192F] font-medium outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />
                                </label>

                                {/* Institution */}
                                <label className="grid gap-2 text-[#172033] font-bold text-sm sm:col-span-2">
                                    <span>
                                        Institution
                                    </span>

                                    <input
                                        type="text"
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        className="w-full min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 text-[#0A192F] font-medium outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />
                                </label>

                                {/* Google Email */}
                                <label className="grid gap-2 text-[#172033] font-bold text-sm sm:col-span-2">
                                    <span>
                                        Google / Institutional Email
                                    </span>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full min-h-[46px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-3.5 py-2.5 text-[#0A192F] font-medium outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />
                                </label>

                            </div>
                        </article>

                        {/* Account Overview */}
                        <article className="bg-white border border-slate-200 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] overflow-hidden">

                            <div className="px-5 md:px-6 py-5 border-b border-slate-100">
                                <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                    Account
                                </p>

                                <h2 className="mt-1 mb-0 text-lg font-extrabold text-[#0A192F]">
                                    Account Overview
                                </h2>
                            </div>

                            <div className="p-5 md:p-6 space-y-4">

                                {/* Status */}
                                <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-100">
                                    <div>
                                        <p className="m-0 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                            Account Status
                                        </p>

                                        <p className="mt-1 mb-0 text-sm font-extrabold text-[#0A192F]">
                                            Active Account
                                        </p>
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-extrabold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                        Active
                                    </span>
                                </div>

                                {/* Last Login */}
                                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100">
                                    <p className="m-0 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                        Last Login
                                    </p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-8 h-8 shrink-0 rounded-lg bg-[#EAF2FF] flex items-center justify-center text-[#1D4ED8]">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M12 7v5l3 2" />
                                            </svg>
                                        </div>

                                        <p className="m-0 text-sm font-extrabold text-[#0A192F]">
                                            Today, 10:00 pm
                                        </p>
                                    </div>
                                </div>

                                {/* Message Request */}
                                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100">
                                    <div className="flex items-center justify-between gap-3">

                                        <div>
                                            <p className="m-0 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                                Message Request
                                            </p>

                                            <p className="mt-1 mb-0 text-sm font-extrabold text-[#0A192F]">
                                                Open Messages
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            aria-label="Open messages"
                                            onClick={() => navigate('/inbox')}
                                            className="w-9 h-9 shrink-0 rounded-lg bg-[#EAF2FF] text-[#1D4ED8] font-extrabold hover:bg-[#DBEAFE] transition"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </article>

                        {/* Questions Card */}
                        <article className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.06)] overflow-hidden">

                            <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] flex items-center justify-center text-[#1D4ED8] text-xl">
                                        ?
                                    </div>

                                    <div>
                                        <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase tracking-wider">
                                            Messages
                                        </p>

                                        <h2 className="mt-1 mb-0 text-lg font-extrabold text-[#0A192F]">
                                            Questions
                                        </h2>

                                        <p className="mt-1 mb-0 text-sm text-slate-500">
                                            Pending questions and message requests.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="m-0 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                            Total
                                        </p>

                                        <p className="m-0 text-2xl font-extrabold text-[#0A192F]">
                                            91
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => navigate('/inbox')}
                                        type="button"
                                        className="min-h-[40px] px-4 rounded-xl bg-[#0A192F] text-white text-sm font-bold hover:bg-[#122A4A] transition"
                                    >
                                        View Questions
                                    </button>
                                </div>

                            </div>
                        </article>

                    </section>
                </main>
            </div>

            {/* Toast */}
            <div
                id="toast"
                role="status"
                aria-live="polite"
                className="fixed right-4.5 bottom-4.5 z-50 translate-y-6 opacity-0 pointer-events-none max-w-[min(380px,calc(100%-36px))] px-4 py-3.5 rounded-xl bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.12)] transition-all duration-200 [&.show]:opacity-100 [&.show]:translate-y-0"
            ></div>
        </>
    );
}