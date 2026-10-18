import { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";

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

export default function AskQ() {
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [draft, setDraft] = useState<string>("");
    const [isAdminTyping, setIsAdminTyping] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
    }, [messages, isAdminTyping]);

    const formatTime = () =>
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const handleSend = () => {
        if (!draft.trim() && !fileName) return;

        const userMessage: ChatMessage = {
            id: `MSG-${Date.now()}`,
            sender: "user",
            text: fileName ? `${draft.trim()} 📎 ${fileName}`.trim() : draft.trim(),
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
                    id: `MSG-${Date.now() + 1}`,
                    sender: "admin",
                    text: "Thanks, let me pull that up. Your certificate is currently in final review and should be released within 1-2 business days.",
                    time: formatTime(),
                },
            ]);
        }, 1600);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[286px_1fr]">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="min-w-0 h-screen p-4 sm:p-5 md:p-8 flex flex-col">

                    {/* Header */}
                    <header className="mb-5 shrink-0 p-5 md:p-6 border border-slate-200 rounded-2xl bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] flex items-center gap-4">

                        <button
                            type="button"
                            data-toggle-sidebar
                            aria-label="Open navigation"
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0A192F] font-bold"
                        >
                            ☰
                        </button>

                        <div className="w-11 h-11 shrink-0 rounded-xl bg-[#0A192F] text-white flex items-center justify-center font-extrabold text-sm">
                            AD
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                                <p className="m-0 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                                    AskQ · Chat with admin
                                </p>
                            </div>

                            <h1 className="text-xl md:text-2xl font-extrabold text-[#0A192F]">
                                UCU Registrar Administrator
                            </h1>
                        </div>

                    </header>

                    {/* Chat Panel */}
                    <section className="flex-1 min-h-0 flex flex-col bg-white border border-slate-200 rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.05)] overflow-hidden">

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-5 md:p-6 grid gap-4"
                        >
                            {messages.map((message) => {
                                const isAdmin = message.sender === "admin";

                                return (
                                    <div
                                        key={message.id}
                                        className={`flex flex-col ${isAdmin ? "items-start" : "items-end"}`}
                                    >
                                        {isAdmin && (
                                            <div className="flex items-center gap-1.5 mb-1">
                                                <span className="w-4 h-4 rounded-full bg-[#EAF2FF] text-[#1D4ED8] flex items-center justify-center text-[9px] font-extrabold">
                                                    A
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">
                                                    Admin
                                                </span>
                                            </div>
                                        )}

                                        <div
                                            className={`max-w-[78%] sm:max-w-md px-4 py-3 text-sm leading-relaxed ${isAdmin
                                                    ? "bg-[#F1F5F9] text-[#172033] rounded-2xl rounded-tl-sm"
                                                    : "bg-[#1D4ED8] text-white rounded-2xl rounded-tr-sm"
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
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <span className="w-4 h-4 rounded-full bg-[#EAF2FF] text-[#1D4ED8] flex items-center justify-center text-[9px] font-extrabold">
                                            A
                                        </span>
                                        <span className="text-xs font-bold text-slate-400">
                                            Admin
                                        </span>
                                    </div>

                                    <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[#F1F5F9] text-slate-500 text-sm">
                                        Administrator is typing...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Composer */}
                        <div className="shrink-0 border-t border-slate-200 p-4 md:p-5">

                            {fileName && (
                                <div className="mb-3 flex items-center justify-between gap-3 p-2.5 pl-3.5 rounded-xl bg-[#EAF2FF] border border-[#BFDBFE]">
                                    <span className="text-xs font-bold text-[#0A192F] truncate">
                                        {fileName}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setFileName("")}
                                        aria-label="Remove attachment"
                                        className="w-6 h-6 shrink-0 rounded-full bg-white text-slate-500 font-bold text-xs hover:bg-slate-50 transition"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center gap-3">

                                <label className="shrink-0 flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-[#1D4ED8] transition">
                                    <span className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200">
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
                                    <span className="text-[10px] font-bold">Attach File</span>
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
                                    className="flex-1 min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 text-sm outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                                />

                                <button
                                    type="button"
                                    onClick={handleSend}
                                    className="shrink-0 inline-flex items-center gap-2 min-h-12 px-5 rounded-xl bg-[#1D4ED8] text-white font-bold text-sm hover:-translate-y-0.5 transition"
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
                                    Send
                                </button>
                            </div>
                        </div>

                    </section>

                </main>
            </div>
        </div>
    );
}