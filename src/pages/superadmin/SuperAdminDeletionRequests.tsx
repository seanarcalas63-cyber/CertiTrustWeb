import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminSideBar from "../../components/SuperAdminSideBar";

type DeletionRequest = {
    id: string;
    student: string;
    studentId: string;
    email: string;
    school: string;
    degree: string;
    credentialCode: string;
    requestedBy: string;
    status: string;
    concern: string;
};

const requests: DeletionRequest[] = [
    {
        id: "1",
        student: "UcuUser T. Student",
        studentId: "20260001",
        email: "userucu7@gmail.com",
        school: "UCU",
        degree: "BSIT",
        credentialCode: "CERT-LFXTHPKL7G",
        requestedBy: "UCU",
        status: "approved",
        concern: "",
    },
    {
        id: "2",
        student: "PsuUser T. Student",
        studentId: "20260002",
        email: "psuusertest@gmail.com",
        school: "PSU",
        degree: "BSIT",
        credentialCode: "CERT-PSU0000001",
        requestedBy: "PSU",
        status: "approved",
        concern: "",
    },
    {
        id: "3",
        student: "PsuUser T. Student",
        studentId: "20260002",
        email: "psuusertest@gmail.com",
        school: "PSU",
        degree: "BSIT",
        credentialCode: "CERT-PSU0000002",
        requestedBy: "PSU",
        status: "approved",
        concern: "",
    },
    {
        id: "4",
        student: "klee torres",
        studentId: "20260001",
        email: "kleetorres@gmail.com",
        school: "PSU",
        degree: "BSIT",
        credentialCode: "CERT-PSU0000003",
        requestedBy: "PSU",
        status: "approved",
        concern: "",
    },
    {
        id: "5",
        student: "klee torres",
        studentId: "20260003",
        email: "kleetorres@gmail.com",
        school: "PSU",
        degree: "BSIT",
        credentialCode: "CERT-PSU0000004",
        requestedBy: "PSU",
        status: "approved",
        concern: "",
    },
];

export default function SuperAdminDeletionRequests() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<DeletionRequest | null>(null);

    useEffect(() => {
        if (!selected) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    const messageSubadmin = () => {
        setSelected(null);
        navigate("/superadmin/ask");
    };

    return (
        <div className="flex min-h-screen bg-[#F5F7FB]">

            <SuperAdminSideBar />

            <main className="flex-1 min-w-0 h-screen overflow-y-auto p-6 md:p-10">

                <div className="max-w-3xl mx-auto">

                    {/* HEADER */}
                    <h1 className="text-3xl font-extrabold text-[#0A192F] mb-8">
                        Credential Deletion Requests
                    </h1>

                    {/* REQUESTS */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                        {requests.map((r, index) => (
                            <div
                                key={r.id}
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelected(r)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") setSelected(r);
                                }}
                                className={`flex items-center gap-5 px-6 py-6 cursor-pointer hover:bg-gray-50 transition-colors ${index !== requests.length - 1
                                        ? "border-b border-gray-200"
                                        : ""
                                    }`}
                            >

                                {/* STATUS ICON */}
                                <div className="w-14 h-14 rounded-full bg-[#DCE8FA] text-[#0A3A6B] shrink-0 flex items-center justify-center">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 12a9 9 0 1 1-5.2-8.2" />
                                        <polyline points="8 11.5 12 15.5 21 6.5" />
                                    </svg>
                                </div>

                                {/* TEXT */}
                                <div className="flex-1 min-w-0">

                                    <p className="text-lg font-semibold text-[#0A192F] truncate">
                                        {r.student}
                                    </p>

                                    <p className="text-[15px] text-gray-600 mt-0.5">
                                        ID: {r.studentId} • {r.school}
                                    </p>

                                    <p className="text-[15px] text-gray-600">
                                        {r.status} • Requested by {r.requestedBy}
                                    </p>

                                </div>

                                {/* MESSAGE */}
                                <button
                                    type="button"
                                    aria-label="Message subadmin"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate("/superadmin/ask");
                                    }}
                                    onKeyDown={(e) => e.stopPropagation()}
                                    className="p-2 rounded-lg text-[#333F4F] hover:bg-gray-200/70 transition-colors shrink-0"
                                >
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4 3h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H8l-4.3 3.6A.5.5 0 0 1 3 21.2V4a1 1 0 0 1 1-1z" />
                                        <rect x="7" y="7" width="10" height="1.6" fill="#fff" />
                                        <rect x="7" y="10.2" width="10" height="1.6" fill="#fff" />
                                        <rect x="7" y="13.4" width="10" height="1.6" fill="#fff" />
                                    </svg>
                                </button>

                            </div>
                        ))}

                    </div>

                </div>

                {/* DETAILS DIALOG */}
                {selected && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={() => setSelected(null)}
                        />

                        <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-[#E9EBF1] rounded-3xl shadow-2xl p-8">

                            {/* TITLE */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[#0A192F] shrink-0">
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 11v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8" />
                                        <polyline points="3.5 8 12 14 17 10.5" />
                                        <circle cx="19" cy="5" r="2.5" fill="currentColor" />
                                    </svg>
                                </span>

                                <h2 className="text-3xl font-normal text-[#0A192F] leading-tight">
                                    Deletion request {selected.status}
                                </h2>
                            </div>

                            {/* DETAILS */}
                            <div className="space-y-3 text-[17px] text-[#0A192F] break-words">
                                <p>Student: {selected.student}</p>
                                <p>Student ID: {selected.studentId}</p>
                                <p>Google email: {selected.email}</p>
                                <p>School: {selected.school}</p>
                                <p>Degree: {selected.degree}</p>
                                <p>Credential code: {selected.credentialCode}</p>
                                <p>Requested by: {selected.requestedBy}</p>
                            </div>

                            <div className="border-t-2 border-gray-300 my-6" />

                            {/* CONCERN */}
                            <h3 className="font-bold text-[17px] text-[#0A192F] mb-2">
                                Subadmin concern
                            </h3>

                            <p className="text-[17px] text-[#0A192F]">
                                {selected.concern || "No reason was provided."}
                            </p>

                            {/* ACTIONS */}
                            <div className="flex flex-col items-end gap-4 mt-10">

                                <button
                                    type="button"
                                    onClick={() => setSelected(null)}
                                    className="px-4 py-2 rounded-lg text-lg font-semibold text-[#0A3A6B] hover:bg-white/70 transition-colors"
                                >
                                    Close
                                </button>

                                <button
                                    type="button"
                                    onClick={messageSubadmin}
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-semibold text-[#0A3A6B] hover:bg-white/70 transition-colors"
                                >
                                    <svg
                                        width="26"
                                        height="26"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 3h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H8l-4.3 3.6A.5.5 0 0 1 3 21.2V4a1 1 0 0 1 1-1z" />
                                    </svg>
                                    Message subadmin
                                </button>

                            </div>

                        </div>
                    </div>
                )}

            </main>

        </div>
    );
}