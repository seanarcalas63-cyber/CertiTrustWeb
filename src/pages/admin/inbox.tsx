import { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

type InboxMessage = {
    id: string;
    from: string;
    subject: string;
    preview: string;
    time: string;
    unread: boolean;
};

const MOCK_MESSAGES: InboxMessage[] = [
    {
        id: "MSG-0001",
        from: "Registrar's Office",
        subject: "Certificate CERT-2026-0001 has been issued",
        preview:
            "Your requested certificate for Maria Isabel Santos has been generated and is ready for download. Please verify the details before sharing.",
        time: "10:00 PM",
        unread: true,
    },
    {
        id: "MSG-0002",
        from: "Verification Desk",
        subject: "New verification request from Acme Corp",
        preview:
            "Acme Corp has requested to verify a diploma submitted under Student ID 2020-00873. Please review and approve or decline the request.",
        time: "09:00 PM",
        unread: true,
    },
    {
        id: "MSG-0003",
        from: "Registrar's Office",
        subject: "Reminder: 3 certificates pending signature",
        preview:
            "You have 3 certificates awaiting your digital signature before they can be released to students. Review them at your earliest convenience.",
        time: "Yesterday",
        unread: false,
    },
    {
        id: "MSG-0004",
        from: "System",
        subject: "Weekly credential summary",
        preview:
            "12 certificates issued, 4 verification requests resolved, and 1 flagged record this week. Full report is available on your dashboard.",
        time: "Yesterday",
        unread: false,
    },
    {
        id: "MSG-0005",
        from: "Verification Desk",
        subject: "Verification completed for CERT-2026-0002",
        preview:
            "The credential for Juan Carlos Dela Cruz has been successfully verified and marked as confirmed in the system.",
        time: "Mon",
        unread: false,
    },
];

export default function Inbox() {
    const [query, setQuery] = useState<string>("");

    const navigate = useNavigate();

    const filteredMessages = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return MOCK_MESSAGES;

        return MOCK_MESSAGES.filter(
            (m) =>
                m.from.toLowerCase().includes(q) ||
                m.subject.toLowerCase().includes(q) ||
                m.preview.toLowerCase().includes(q)
        );
    }, [query]);

    const initials = (name: string) =>
        name
            .split(" ")
            .map((w) => w[0])
            .filter(Boolean)
            .slice(0, 2)
            .join("")
            .toUpperCase();

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[286px_1fr]">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="min-w-0 overflow-y-auto h-screen p-4 sm:p-5 md:p-8">

                    {/* Header */}
                    <header className="mb-7 p-5 md:p-6 border border-slate-200 rounded-2xl bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">

                        <div className="flex items-center gap-4">

                            <button
                                type="button"
                                data-toggle-sidebar
                                aria-label="Open navigation"
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A192F] font-bold"
                            >
                                ☰
                            </button>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />

                                    <p className="m-0 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                                        Messages
                                    </p>
                                </div>

                                <h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-[#0A192F]">
                                    Inbox
                                </h1>

                                <p className="mt-1 text-sm text-slate-500">
                                    Updates on certificates, verifications, and records.
                                </p>
                            </div>
                        </div>

                        {filteredMessages.some((m) => m.unread) && (
                            <span className="w-full lg:w-auto inline-flex items-center justify-center gap-2 min-h-9 px-4 rounded-xl bg-[#EAF2FF] text-[#1D4ED8] font-bold text-xs">
                                {filteredMessages.filter((m) => m.unread).length} unread
                            </span>
                        )}

                    </header>

                    {/* Search */}
                    <div className="mb-5">
                        <div className="relative">
                            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </span>

                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search messages"
                                className="w-full min-h-12 border border-slate-200 rounded-xl bg-white pl-11 pr-4 py-3 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                            />
                        </div>
                    </div>

                    {/* Message List */}
                    {filteredMessages.length === 0 ? (
                        <section className="min-h-[420px] flex items-center justify-center bg-white border border-slate-200 rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                            <div className="text-center px-6 py-12 max-w-md">
                                <h2 className="text-xl font-extrabold text-[#0A192F]">
                                    No messages found
                                </h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    Try a different search term.
                                </p>
                            </div>
                        </section>
                    ) : (
                        <section className="grid gap-3">
                            {filteredMessages.map((message) => (
                                <button
                                    key={message.id}
                                    type="button"
                                    onClick={() => navigate('/chat')}
                                    className="w-full text-left bg-white border border-slate-200 rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.05)] p-4 md:p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition"
                                >
                                    <div className="relative shrink-0">
                                        <div className="w-11 h-11 rounded-xl bg-[#EAF2FF] text-[#1D4ED8] flex items-center justify-center font-extrabold text-sm">
                                            {initials(message.from)}
                                        </div>
                                        {message.unread && (
                                            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#2563EB] ring-2 ring-white" />
                                        )}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <p className="text-sm text-[#0A192F]">
                                                    <span className="text-slate-400 font-semibold">From </span>
                                                    <span className={message.unread ? "font-extrabold" : "font-bold"}>
                                                        {message.from}
                                                    </span>
                                                </p>
                                                <p className={`mt-0.5 text-sm truncate ${message.unread ? "font-extrabold text-[#0A192F]" : "font-semibold text-slate-600"}`}>
                                                    {message.subject}
                                                </p>
                                            </div>

                                            <span className="shrink-0 text-xs font-bold text-slate-400">
                                                {message.time}
                                            </span>
                                        </div>

                                        <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">
                                            {message.preview}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </section>
                    )}

                </main>
            </div>
        </div>
    );
}