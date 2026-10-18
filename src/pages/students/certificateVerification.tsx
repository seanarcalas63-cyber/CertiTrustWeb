
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StudentSidebar from "../../components/StudentSidebar";

type VerificationResult = {
    studentName: string;
    studentId: string;
    degreeProgram: string;
    issuingInstitution: string;
    issueDate: string;
    blockchainAnchor: string;
    certificateId: string;
    certificateHash: string;
};

const MOCK_RESULT: VerificationResult = {
    studentName: "UcuUser T. Student",
    studentId: "20260001",
    degreeProgram:
        "Bachelor of Science in Information Technology (BSIT)",
    issuingInstitution: "Urdaneta City University (UCU)",
    issueDate: "October 13, 2026",
    blockchainAnchor: "Polygon",
    certificateId: "CERT-2026-0001",
    certificateHash:
        "0x4f3a7c1e2b9d0aa1c8f312203efab7710c98e21",
};

export default function CertificateVerification() {
    const [searchParams] = useSearchParams();

    const [hashInput, setHashInput] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);
    const [result, setResult] =
        useState<VerificationResult | null>(null);
    const [errorMessage, setErrorMessage] = useState("");

    // Automatically display the credential when coming
    // from the Student Portal's Verify on Chain button.
    useEffect(() => {
        const studentId = searchParams.get("studentId");
        const certificateId = searchParams.get("certificateId");
        const hash = searchParams.get("hash");

        const matchingStudent =
            studentId === MOCK_RESULT.studentId;

        const matchingCertificate =
            certificateId === MOCK_RESULT.certificateId;

        const matchingHash =
            hash === MOCK_RESULT.certificateHash;

        if (
            (matchingStudent && matchingCertificate) ||
            matchingHash
        ) {
            setResult(MOCK_RESULT);
            setHashInput(MOCK_RESULT.certificateHash);
            setErrorMessage("");
        }
    }, [searchParams]);

    const handleVerify = () => {
        if (!hashInput.trim() || isVerifying) return;

        setIsVerifying(true);
        setErrorMessage("");
        setResult(null);

        window.setTimeout(() => {
            const enteredHash = hashInput.trim();

            if (
                enteredHash.toLowerCase() ===
                MOCK_RESULT.certificateHash.toLowerCase()
            ) {
                setResult(MOCK_RESULT);
            } else {
                setErrorMessage(
                    "No matching credential was found. Please check the certificate hash and try again."
                );
            }

            setIsVerifying(false);
        }, 800);
    };

    const handleReset = () => {
        setResult(null);
        setHashInput("");
        setErrorMessage("");
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#F6F8FC]">
            <StudentSidebar />

            <main className="min-h-screen min-w-0 md:ml-64">
                <div className="min-h-screen w-full p-4 sm:p-6 lg:p-8">

                    {/* Header */}
                    <header className="mb-7 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-6 print:hidden">
                        <button
                            type="button"
                            data-toggle-sidebar
                            aria-label="Open navigation"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-bold text-[#0A192F] md:hidden"
                        >
                            ☰
                        </button>

                        <div className="min-w-0">
                            <div className="mb-1 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                                <p className="m-0 text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                                    Credential verification
                                </p>
                            </div>

                            <h1 className="text-2xl font-extrabold text-[#0A192F] md:text-3xl">
                                Certificate Verification
                            </h1>

                            <p className="mt-1 text-sm text-slate-500">
                                Check academic credential details using CertiTrust.
                            </p>
                        </div>
                    </header>

                    {!result ? (
                        <section className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] md:p-8">
                            <div className="rounded-xl border border-[#BFDBFE] bg-[#EAF2FF] p-4 text-sm leading-6 text-[#1D4ED8]">
                                <p className="font-bold">
                                    Frontend demonstration
                                </p>
                                <p className="mt-1">
                                    Enter the sample certificate hash to view
                                    the matching credential. Live blockchain
                                    verification will require a backend and
                                    blockchain integration.
                                </p>
                            </div>

                            <div className="mt-6 grid gap-2">
                                <label
                                    htmlFor="certificate-hash"
                                    className="text-sm font-bold text-[#172033]"
                                >
                                    SHA-256 Certificate Hash
                                </label>

                                <input
                                    id="certificate-hash"
                                    type="text"
                                    value={hashInput}
                                    onChange={(event) => {
                                        setHashInput(event.target.value);
                                        setErrorMessage("");
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            handleVerify();
                                        }
                                    }}
                                    placeholder="Enter certificate hash"
                                    className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm outline-none transition focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10"
                                />

                                <p className="text-xs text-slate-400">
                                    Use the hash shown in the Student Portal
                                    for this sample record.
                                </p>
                            </div>

                            {errorMessage && (
                                <div
                                    role="alert"
                                    className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                                >
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="button"
                                onClick={handleVerify}
                                disabled={isVerifying || !hashInput.trim()}
                                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-5 font-bold text-white shadow-[0_10px_25px_rgba(29,78,216,0.25)] transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
                            >
                                {isVerifying ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                        Checking credential...
                                    </>
                                ) : (
                                    <>
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
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        Verify This Record
                                    </>
                                )}
                            </button>
                        </section>
                    ) : (
                        <div className="space-y-6">

                            {/* Verification status */}
                            <section className="rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)] md:p-8">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m20 6-11 11-5-5" />
                                    </svg>
                                </div>

                                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
                                    Credential match found
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold text-[#0A192F]">
                                    {result.studentName}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    This sample credential lists{" "}
                                    <strong>{result.studentName}</strong> as
                                    a graduate of{" "}
                                    <strong>{result.issuingInstitution}</strong>.
                                    The details match the CertiTrust demo record.
                                </p>

                                <div className="mt-5 flex flex-wrap justify-center gap-2">
                                    <span className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                                        <span className="mr-1">✓</span>
                                        Matching demo record
                                    </span>

                                    <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
                                        {result.blockchainAnchor} demo
                                    </span>
                                </div>

                                <p className="mt-4 text-xs text-slate-400">
                                    This is a frontend simulation, not a live
                                    blockchain transaction or independent
                                    confirmation from the university.
                                </p>
                            </section>

                            {/* Credential details */}
                            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] md:p-7">
                                <div className="mb-5">
                                    <h3 className="text-lg font-extrabold text-[#0A192F]">
                                        Credential Details
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Information associated with this sample record.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                                    {[
                                        ["Certificate ID", result.certificateId],
                                        ["Student name", result.studentName],
                                        ["Student ID", result.studentId],
                                        ["Degree and program", result.degreeProgram],
                                        ["Issuing institution", result.issuingInstitution],
                                        ["Issue date", result.issueDate],
                                        ["Blockchain network (demo)", result.blockchainAnchor],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="flex min-w-0 flex-col gap-1 rounded-xl border border-slate-200 bg-[#F6F8FC] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                                        >
                                            <span className="shrink-0 text-xs font-bold text-slate-500">
                                                {label}
                                            </span>
                                            <span className="break-words text-sm font-bold text-[#0A192F] sm:text-right">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="mb-2 text-xs font-bold text-slate-500">
                                        Certificate Hash
                                    </p>
                                    <p className="break-all font-mono text-xs leading-6 text-[#0A192F]">
                                        {result.certificateHash}
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-col gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-amber-800">
                                            Demo verification status
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-amber-700">
                                            The record matches local frontend
                                            sample data. No live ledger check
                                            has been performed.
                                        </p>
                                    </div>
                                    <span className="w-fit shrink-0 rounded-lg bg-amber-100 px-3 py-2 text-xs font-extrabold text-amber-800">
                                        Demo only
                                    </span>
                                </div>
                            </section>

                            {/* Diploma preview */}
                            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)] md:p-7">
                                <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h3 className="text-lg font-extrabold text-[#0A192F]">
                                            Diploma Preview
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-500">
                                            Illustrative preview for your frontend demo.
                                        </p>
                                    </div>
                                    <span className="mt-2 w-fit rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500 sm:mt-0">
                                        Sample · Not an official diploma
                                    </span>
                                </div>

                                <div className="mx-auto max-w-3xl border-[5px] border-double border-[#B99A53] bg-[#FFFEF7] p-4 text-center text-[#27354B] sm:p-8 md:p-10">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#B99A53] text-lg font-black tracking-wide text-[#173D73]">
                                        UCU
                                    </div>

                                    <p className="mt-4 text-[9px] font-bold tracking-[0.2em] sm:text-xs">
                                        REPUBLIC OF THE PHILIPPINES
                                    </p>

                                    <h4 className="mt-2 text-lg font-black uppercase tracking-wide sm:text-2xl">
                                        Urdaneta City University
                                    </h4>

                                    <p className="mt-1 text-xs sm:text-sm">
                                        Urdaneta City, Pangasinan
                                    </p>

                                    <div className="mx-auto my-5 h-px w-2/3 bg-[#B99A53]" />

                                    <p className="text-[10px] font-semibold leading-5 sm:text-xs sm:leading-6">
                                        TO ALL WHOM THESE PRESENTS MAY COME,
                                        GREETINGS:
                                        <br />
                                        BE IT KNOWN THAT
                                    </p>

                                    <h5 className="my-5 font-serif text-2xl font-bold text-[#173D73] sm:text-3xl">
                                        {result.studentName}
                                    </h5>

                                    <p className="text-[10px] leading-5 sm:text-xs sm:leading-6">
                                        HAS SATISFACTORILY COMPLETED ALL THE
                                        REQUIREMENTS PRESCRIBED BY THE UNIVERSITY
                                        AND IS THEREFORE GRANTED THE DEGREE OF
                                    </p>

                                    <h5 className="my-4 text-base font-black uppercase leading-6 text-[#173D73] sm:text-xl">
                                        Bachelor of Science in Information
                                        Technology (BSIT)
                                    </h5>

                                    <p className="text-[10px] leading-5 sm:text-xs sm:leading-6">
                                        IN WITNESS WHEREOF, THIS SAMPLE DIPLOMA
                                        PREVIEW IS DISPLAYED FOR DEMONSTRATION
                                        PURPOSES ONLY.
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-5 text-[9px] sm:mt-12 sm:text-xs">
                                        <div className="border-t border-slate-400 pt-2">
                                            University Representative
                                        </div>
                                        <div className="border-t border-slate-400 pt-2">
                                            Registrar
                                        </div>
                                    </div>

                                    <p className="mt-6 text-[9px] text-slate-500 sm:text-xs">
                                        Sample credential · Not issued or
                                        authenticated by Urdaneta City University
                                    </p>
                                </div>

                                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={handlePrint}
                                        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-5 font-bold text-white transition hover:bg-blue-800 print:hidden"
                                    >
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
                                            <path d="M6 9V2h12v7" />
                                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                            <path d="M6 14h12v8H6z" />
                                        </svg>
                                        Print / Save as PDF
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="min-h-12 flex-1 rounded-xl border border-slate-200 px-5 font-bold text-[#0A192F] transition hover:bg-slate-50 print:hidden"
                                    >
                                        Verify Another Record
                                    </button>
                                </div>
                            </section>
                        </div>
                    )}

                    <footer className="py-6 text-center text-xs text-slate-400 print:hidden">
                        CertiTrust · Secure Academic Credential Verification
                    </footer>
                </div>
            </main>
        </div>
    );
}
