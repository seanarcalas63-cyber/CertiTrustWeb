import { useState } from "react";
import { Link } from "react-router-dom";

export default function Verification() {
    const [isVerified, setIsVerified] = useState(false);

    const record = {
        studentName: "Johny Hey Daddy",
        studentId: "1999",
        program: "BS Computer Science",
        institution: "UCU",
        issueDate: "Oct 25, 2013",
        network: "Polygon",
        hash: "111-2221-2",
    };

    function handleVerify() {
        setIsVerified(true);
    }

    return (
        <>
            <div className="min-h-screen bg-[#F6F8FC]">

                {/* Header */}
                <header className="w-[min(1180px,calc(100%-32px))] mx-auto py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-3 text-[#0A192F] font-extrabold text-lg"
                    >
                        <img
                            src="/logo.png"
                            alt="CertiTrust logo"
                            className="w-11 h-11 object-contain border border-slate-200 rounded-lg bg-white"
                        />

                        <span className="text-xl">
                            CertiTrust
                        </span>
                    </a>

                    {/* Navigation */}
                    <nav
                        aria-label="Public navigation"
                        className="flex items-center gap-3.5 text-slate-500 font-bold"
                    >
                        <Link
                            to="/admin-dashboard"
                            className="hover:text-[#1D4ED8] transition"
                        >
                            Admin Dashboard
                        </Link>

                        <a
                            href="/login"
                            className="inline-flex items-center justify-center whitespace-nowrap min-h-[38px] px-4.5 rounded-lg border border-slate-200 font-bold bg-white text-[#0A192F] hover:-translate-y-px hover:shadow-[0_12px_22px_rgba(15,23,42,0.1)] transition"
                        >
                            Sign In
                        </a>
                    </nav>
                </header>

                {/* Main */}
                <main className="w-[min(1080px,calc(100%-32px))] mx-auto py-12 md:py-20">

                    {/* Title */}
                    <section className="max-w-[700px] mx-auto mb-8 text-center">

                        <span className="text-[#1D4ED8] font-extrabold text-xs uppercase tracking-wider">
                            CERTITRUST
                        </span>

                        <h1 className="mt-3 mb-3 text-[#0A192F] text-[clamp(2rem,5vw,3.5rem)] leading-tight font-extrabold">
                            Verify Official UCU Academic Credential
                        </h1>

                        <p className="m-0 text-slate-500 text-base md:text-lg leading-relaxed">
                            Verify an official UCU academic credential
                            anchored on the Polygon blockchain.
                        </p>

                    </section>

                    {/* Verification Card */}
                    <section className="max-w-[620px] mx-auto">

                        <article className="bg-white border border-slate-200 rounded-2xl shadow-[0_24px_60px_rgba(10,25,47,0.10)] overflow-hidden">

                            {/* Card Top */}
                            <div className="h-2 bg-[#1D4ED8]"></div>

                            <div className="p-6 md:p-8">

                                {/* Icon */}
                                <div className="flex justify-center mb-5">

                                    <div className="w-16 h-16 rounded-2xl bg-[#EAF2FF] flex items-center justify-center text-[#1D4ED8]">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75 11 15l4-5"
                                            />

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3.75 5.25 6.5v5.25c0 4.4 2.8 7.65 6.75 8.5 3.95-.85 6.75-4.1 6.75-8.5V6.5L12 3.75Z"
                                            />
                                        </svg>

                                    </div>

                                </div>

                                {/* Card Title */}
                                <div className="text-center mb-6">

                                    <h2 className="m-0 text-[#0A192F] text-xl md:text-2xl font-extrabold">
                                        Verify Academic Credential
                                    </h2>

                                    <p className="mt-2 mb-0 text-sm text-slate-500">
                                        Enter the Certificate Hash below to verify
                                        the authenticity of the record.
                                    </p>

                                </div>

                                {/* Certificate Hash */}
                                <label
                                    htmlFor="certificateCode"
                                    className="grid gap-2 text-[#172033] font-bold text-sm"
                                >
                                    Certificate Hash

                                    <input
                                        id="certificateCode"
                                        type="text"
                                        defaultValue="111-2221-2"
                                        placeholder="Enter Certificate Hash"
                                        className="w-full min-h-[52px] border border-slate-200 rounded-xl bg-[#FAFBFD] px-4 py-3 text-center text-[#0A192F] font-bold tracking-wide outline-none transition focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                    />
                                </label>

                                {/* Verify Button */}
                                <button
                                    type="button"
                                    id="verifyCertificate"
                                    onClick={handleVerify}
                                    className="w-full mt-5 min-h-[48px] rounded-xl border border-transparent font-bold bg-[#0A192F] text-white shadow-[0_10px_20px_rgba(10,25,47,0.16)] hover:bg-[#122A4A] hover:-translate-y-0.5 hover:shadow-[0_14px_25px_rgba(10,25,47,0.18)] transition"
                                >
                                    Verify Record
                                </button>

                                {/* Blockchain Info */}
                                <div className="mt-6 pt-5 border-t border-slate-100">

                                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">

                                        <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>

                                        <span>
                                            Secured and anchored on the Polygon blockchain
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </article>

                    </section>

                    {/* Bottom Information */}
                    <section className="max-w-[620px] mx-auto mt-5">

                        <div className="p-4 rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] text-center">

                            <p className="m-0 text-sm text-[#1E40AF]">
                                Enter a valid Certificate Hash to verify
                                an official University of Urdaneta academic credential.
                            </p>

                        </div>

                    </section>

                </main>

                {/* Toast */}
                <div
                    id="toast"
                    role="status"
                    aria-live="polite"
                    className="fixed right-4 bottom-4 z-50 translate-y-6 opacity-0 pointer-events-none max-w-[min(380px,calc(100%-36px))] px-4 py-3.5 rounded-xl bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.12)] transition-all duration-200 [&.show]:opacity-100 [&.show]:translate-y-0"
                ></div>

                {isVerified && (
                    <div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0A192F]/40 backdrop-blur-[2px]"
                        onClick={() => setIsVerified(false)}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-[700px] hide-scrollbar max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-[0_30px_70px_rgba(10,25,47,0.25)]"
                        >
                            {/* Top bar */}
                            <div className="h-1.5 bg-[#16A34A] rounded-t-2xl"></div>

                            <div className="p-5">

                                {/* Close */}
                                <div className="flex justify-end -mt-1 -mr-1 mb-1">
                                    <button
                                        type="button"
                                        onClick={() => setIsVerified(false)}
                                        aria-label="Close"
                                        className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Status */}
                                <div className="flex flex-col items-center text-center mb-4">
                                    <div className="w-11 h-11 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                                        </svg>
                                    </div>

                                    <h2 className="m-0 text-[#0A192F] text-base font-extrabold">
                                        Legitimate Credential
                                    </h2>
                                    <p className="mt-1 mb-0 text-xs text-slate-500">
                                        UCU &middot; CertiTrust
                                    </p>
                                </div>

                                {/* Fields */}
                                <dl className="grid gap-2 text-sm">

                                    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100">
                                        <dt className="text-slate-500 font-semibold">Student</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right truncate">{record.studentName}</dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100">
                                        <dt className="text-slate-500 font-semibold">Student ID</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right">{record.studentId}</dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100">
                                        <dt className="text-slate-500 font-semibold">Program</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right truncate">{record.program}</dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100">
                                        <dt className="text-slate-500 font-semibold">Institution</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right">{record.institution}</dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100">
                                        <dt className="text-slate-500 font-semibold">Issue date</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right">{record.issueDate}</dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100">
                                        <dt className="text-slate-500 font-semibold">Anchor</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right">{record.network}</dd>
                                    </div>

                                    <div className="flex items-center justify-between gap-3 py-1.5">
                                        <dt className="text-slate-500 font-semibold">Hash</dt>
                                        <dd className="m-0 font-bold text-[#0A192F] text-right truncate">{record.hash}</dd>
                                    </div>

                                </dl>

                                {/* Status pill */}
                                <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-2.5">
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#166534]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                                        Verified on ledger
                                    </span>
                                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#16A34A]">
                                        Confirmed
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsVerified(false)}
                                    className="w-full mt-4 min-h-[40px] rounded-lg border border-transparent font-bold text-sm bg-[#0A192F] text-white hover:bg-[#122A4A] transition"
                                >
                                    Done
                                </button>

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}