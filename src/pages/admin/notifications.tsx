import Sidebar from "../../components/Sidebar";

export default function Notifications() {
    return (
        <>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[286px_1fr]">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <main className="min-w-0 p-5 md:p-8">
                    <header className="mb-6 p-4 md:p-5 border border-slate-200 rounded-lg bg-white/85 shadow-[0_12px_30px_rgba(15,23,42,0.07)] backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3.5">
                        <button
                            type="button"
                            data-toggle-sidebar
                            aria-label="Open navigation"
                            className="md:hidden inline-flex items-center min-h-[40px] px-3.5 border border-slate-200 rounded-lg bg-white text-[#0A192F] font-extrabold"
                        >
                            Menu
                        </button>
                        <div>
                            <p className="m-0 text-[#1D4ED8] text-xs font-extrabold uppercase">
                                System updates
                            </p>
                            <h1 className="mt-1.5 mb-0 text-[#0A192F]">Notifications</h1>
                        </div>
                        <button
                            type="button"
                            id="markRead"
                            className="inline-flex items-center justify-center whitespace-nowrap min-h-[38px] px-4.5 rounded-lg border border-slate-200 font-bold bg-white text-[#0A192F] hover:-translate-y-px hover:shadow-[0_12px_22px_rgba(15,23,42,0.1)] transition"
                        >
                            Mark Read
                        </button>
                    </header>

                    <section className="p-5 bg-white border border-slate-200 rounded-lg shadow-[0_12px_30px_rgba(15,23,42,0.07)]">
                        <div className="grid gap-3">
                            <div className="p-3.5 border border-slate-200 rounded-lg bg-slate-50">
                                <strong className="block">Pending verification request</strong>
                                <small className="block text-slate-500 leading-relaxed">
                                    CT-2026-00004 requires registrar approval.
                                </small>
                            </div>
                            <div className="p-3.5 border border-slate-200 rounded-lg bg-slate-50">
                                <strong className="block">Certificate verified publicly</strong>
                                <small className="block text-slate-500 leading-relaxed">
                                    CT-2026-00001 was verified today.
                                </small>
                            </div>
                            <div className="p-3.5 border border-slate-200 rounded-lg bg-slate-50">
                                <strong className="block">Academic record uploaded</strong>
                                <small className="block text-slate-500 leading-relaxed">
                                    Demo subject record is ready for review.
                                </small>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <div
                id="toast"
                role="status"
                aria-live="polite"
                className="fixed right-4.5 bottom-4.5 z-50 translate-y-6 opacity-0 pointer-events-none max-w-[min(380px,calc(100%-36px))] px-4 py-3.5 rounded-lg bg-[#0A192F] text-white shadow-[0_18px_44px_rgba(10,25,47,0.12)] transition-all duration-200 [&.show]:opacity-100 [&.show]:translate-y-0"
            ></div>
        </>
    );
}