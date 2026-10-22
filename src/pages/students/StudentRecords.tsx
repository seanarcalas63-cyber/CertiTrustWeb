
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentSidebar from "../../components/StudentSidebar";

export default function StudentRecords() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const record = {
        studentName: "UcuUser T. Student",
        studentId: "20260001",
        program: "BSIT",
        degreeNumber: "1st",
        email: "userucu7@gmail.com",
        certificateCode: "CERT-5TGC2BGTH9",
        issueDate: "2026-10-13",
        publishedDate: "2026-10-13",
        publishedTime: "17:29",
        status: "Verified",
    };

    const searchableText = [
        record.studentName,
        record.studentId,
        record.program,
        record.email,
        record.certificateCode,
    ]
        .join(" ")
        .toLowerCase();

    const matchesSearch = searchableText.includes(
        searchTerm.trim().toLowerCase()
    );

    const handleVerify = () => {
        if (!record) return;
        navigate(
            `/certificate-verification?studentId=${encodeURIComponent(
                record.studentId
            )}&certificateId=${encodeURIComponent(
                record.certificateCode
            )}`
        );
    };

    const handleViewDiploma = () => {
        navigate("/portal");
    };

    return (
        <div className="min-h-screen bg-[#F4F7FB] md:flex">
            <StudentSidebar />

            <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10 md:ml-64">
                <div className="mx-auto max-w-5xl">
                    {/* Page Header */}
                    <div className="mb-8">
                        <p className="mb-2 text-sm font-medium text-blue-600">
                            Student Portal
                        </p>

                        <h1 className="text-3xl font-bold text-[#0A192F]">
                            Certificate Records
                        </h1>

                        <p className="mt-2 text-gray-500">
                            View your academic credentials and their
                            verification status.
                        </p>
                    </div>

                    {/* Search Credentials */}
                    <div className="mb-6">
                        <label
                            htmlFor="credential-search"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Search credentials
                        </label>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                                ⌕
                            </span>

                            <input
                                id="credential-search"
                                type="text"
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                placeholder="Search name, student ID, program, or certificate code..."
                                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                    </div>

                    {/* Certificate Record */}
                    {matchesSearch ? (
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Record Header */}
                            <div className="flex flex-col gap-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                                <div>
                                    <p className="mb-2 text-sm font-medium text-blue-600">
                                        Your {record.degreeNumber} Degree
                                    </p>

                                    <h2 className="text-2xl font-bold text-[#0A192F]">
                                        {record.studentName}
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Academic Credential
                                    </p>
                                </div>

                                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                                    <span className="h-2 w-2 rounded-full bg-green-500" />
                                    {record.status}
                                </span>
                            </div>

                            {/* Record Details */}
                            <div className="p-5 sm:p-7">
                                <h3 className="mb-5 text-lg font-semibold text-[#0A192F]">
                                    Certificate Information
                                </h3>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <Detail
                                        label="Student name"
                                        value={record.studentName}
                                    />

                                    <Detail
                                        label="Student ID"
                                        value={record.studentId}
                                    />

                                    <Detail
                                        label="Course / program"
                                        value={record.program}
                                    />

                                    <Detail
                                        label="Degree number"
                                        value={record.degreeNumber}
                                    />

                                    <Detail
                                        label="Gmail"
                                        value={record.email}
                                    />

                                    <Detail
                                        label="Certificate code"
                                        value={record.certificateCode}
                                        copyable
                                    />

                                    <Detail
                                        label="Issue date"
                                        value={record.issueDate}
                                    />

                                    <Detail
                                        label="Published"
                                        value={`${record.publishedDate} · ${record.publishedTime}`}
                                    />
                                </div>

                                {/* Verification Status */}
                                <div className="mt-7 rounded-xl border border-green-100 bg-green-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl text-green-600">
                                            ✓
                                        </span>

                                        <div>
                                            <p className="font-semibold text-green-800">
                                                Status: {record.status}
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-green-700">
                                                This record is marked as
                                                verified in the current
                                                frontend demonstration.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        onClick={handleVerify}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-[#0A192F] px-5 py-3 font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    >
                                        <span>✓</span>
                                        Verify this record
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleViewDiploma}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    >
                                        <span>▤</span>
                                        View Your Diploma
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
                            <div className="mb-3 text-4xl text-gray-300">
                                ⌕
                            </div>

                            <h2 className="text-lg font-semibold text-[#0A192F]">
                                No matching credentials found
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Try searching with your student name, ID,
                                program, email, or certificate code.
                            </p>
                        </div>
                    )}

                    {/* Footer */}
                    <p className="mt-8 text-center text-xs text-gray-400">
                        CertiTrust · Secure Academic Credential Verification
                    </p>
                </div>
            </main>

        </div>
    );
}

type DetailProps = {
    label: string;
    value: string;
    copyable?: boolean;
};

function Detail({ label, value, copyable = false }: DetailProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="min-w-0 border-b border-gray-100 pb-4">
            <p className="mb-2 text-sm text-gray-500">{label}</p>

            <div className="flex items-center justify-between gap-3">
                <p className="break-words text-sm font-semibold text-[#0A192F] sm:text-base">
                    {value}
                </p>

                {copyable && (
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="shrink-0 rounded-lg px-2 py-1 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
                        title="Copy certificate code"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                )}
            </div>
        </div>
    );
}
