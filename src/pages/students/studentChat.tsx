
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import StudentSidebar from "../../components/StudentSidebar";

type ChatMessage = {
    id: string;
    sender: "admin" | "user";
    text: string;
    time: string;
};

const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: "MSG-0001",
        sender: "admin",
        text: "Welcome to CertiTrust AskQ. How can I assist you with your academic credential today?",
        time: "10:00 AM",
    },
    {
        id: "MSG-0002",
        sender: "user",
        text: "Hello. I have a question about my recent certificate issuance status.",
        time: "10:01 AM",
    },
    {
        id: "MSG-0003",
        sender: "admin",
        text: "I can help with that. What is your Student ID and the full name on the certificate?",
        time: "10:01 AM",
    },
    {
        id: "MSG-0004",
        sender: "user",
        text: "My ID is 2023-00045-MN and my name is Juan D. Dela Cruz.",
        time: "10:02 AM",
    },
];

export default function StudentChat() {
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [draft, setDraft] = useState("");
    const [isAdminTyping, setIsAdminTyping] = useState(false);
    const [fileName, setFileName] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, isAdminTyping]);

    const formatTime = () =>
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });

    const handleSend = () => {
        if ((!draft.trim() && !fileName) || isAdminTyping) return;

        const userMessage: ChatMessage = {
            id: `MSG-${Date.now()}`,
            sender: "user",
            text: fileName
                ? `${draft.trim()} 📎 ${fileName}`.trim()
                : draft.trim(),
            time: formatTime(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setDraft("");
        setFileName("");
        setIsAdminTyping(true);

        window.setTimeout(() => {
            setIsAdminTyping(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: `MSG-${Date.now()}`,
                    sender: "admin",
                    text: "Thanks, let me pull that up. Your certificate is currently in final review and should be released within 1-2 business days.",
                    time: formatTime(),
                },
            ]);
        }, 1600);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <StudentSidebar />

            {/* Main Content */}
            <main className="flex h-screen min-w-0 flex-col md:ml-64">
                <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5 lg:p-8">

                    {/* Header */}
                    <header className="mb-5 flex shrink-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-6">
                        <button
                            type="button"
                            data-toggle-sidebar
                            aria-label="Open navigation"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-bold text-[#0A192F] md:hidden"
                        >
                            ☰
                        </button>

                       <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <img
        src="/logo.png"
        alt="CertiTrust Logo"
        className="h-full w-full object-contain p-1"
    />
</div>

                        <div className="min-w-0">
                            <div className="mb-1 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                <p className="m-0 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                                    AskQ · Chat with admin
                                </p>
                            </div>

                            <h1 className="text-lg font-extrabold text-[#0A192F] sm:text-xl md:text-2xl">
                                UCU Registrar Administrator
                            </h1>
                        </div>
                    </header>

                    {/* Chat Panel */}
                    <section className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)]">

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="grid min-h-0 flex-1 content-start gap-4 overflow-y-auto p-4 sm:p-5 md:p-6"
                        >
                            {messages.map((message) => {
                                const isAdmin = message.sender === "admin";

                                return (
                                    <div
                                        key={message.id}
                                        className={`flex min-w-0 flex-col ${
                                            isAdmin ? "items-start" : "items-end"
                                        }`}
                                    >
                                        {isAdmin && (
                                            <div className="mb-1 flex items-center gap-1.5">
                                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EAF2FF] text-[9px] font-extrabold text-[#1D4ED8]">
                                                    A
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">
                                                    Admin
                                                </span>
                                            </div>
                                        )}

                                        <div
                                            className={`max-w-[90%] break-words rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[78%] md:max-w-md ${
                                                isAdmin
                                                    ? "rounded-tl-sm bg-[#F1F5F9] text-[#172033]"
                                                    : "rounded-tr-sm bg-[#1D4ED8] text-white"
                                            }`}
                                        >
                                            {message.text}
                                        </div>

                                        <span className="mt-1 text-[11px] font-semibold text-slate-400">
                                            {message.time}
                                        </span>
                                    </div>
                                );
                            })}

                            {isAdminTyping && (
                                <div className="flex flex-col items-start">
                                    <div className="mb-1 flex items-center gap-1.5">
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EAF2FF] text-[9px] font-extrabold text-[#1D4ED8]">
                                            A
                                        </span>
                                        <span className="text-xs font-bold text-slate-400">
                                            Admin
                                        </span>
                                    </div>

                                    <div className="rounded-2xl rounded-tl-sm bg-[#F1F5F9] px-4 py-3 text-sm text-slate-500">
                                        Administrator is typing...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Composer */}
                        <div className="shrink-0 border-t border-slate-200 p-3 sm:p-4 md:p-5">

                            {fileName && (
                                <div className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-[#BFDBFE] bg-[#EAF2FF] p-2.5 pl-3.5">
                                    <span className="truncate text-xs font-bold text-[#0A192F]">
                                        {fileName}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => setFileName("")}
                                        aria-label="Remove attachment"
                                        className="h-6 w-6 shrink-0 rounded-full bg-white text-xs font-bold text-slate-500 transition hover:bg-slate-50"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}

                            <div className="flex items-end gap-2 sm:gap-3">

                                <label className="flex shrink-0 cursor-pointer flex-col items-center gap-1 text-slate-400 transition hover:text-[#1D4ED8]">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21.44 11.05 12.25 20.24a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a1.5 1.5 0 0 1-2.12-2.12l8.49-8.48" />
                                        </svg>
                                    </span>

                                    <span className="text-[10px] font-bold">
                                        Attach File
                                    </span>

                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) setFileName(file.name);
                                        }}
                                    />
                                </label>

                                <input
                                    type="text"
                                    value={draft}
                                    onChange={(e) => setDraft(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type your message..."
                                    className="min-h-12 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 sm:px-4"
                                />

                                <button
                                    type="button"
                                    onClick={handleSend}
                                    disabled={isAdminTyping || (!draft.trim() && !fileName)}
                                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-3 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                    </svg>

                                    <span className="hidden sm:inline">
                                        Send
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}