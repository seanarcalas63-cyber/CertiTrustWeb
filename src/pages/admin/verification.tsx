import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function Verification() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    const value = code.trim();

    if (value === "") {
      setError("Please enter a certificate code.");
      return;
    }

    setError("");

    // TODO: connect to your verification API / blockchain lookup here
    console.log("Verify certificate code:", value);
  };

  return (
    <div className="min-h-screen flex bg-[#F5F8FC]">

      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="min-w-0 mx-auto overflow-y-auto h-screen p-8">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-3xl font-extrabold text-[#0A192F]">
            Certificate Verification
          </h1>

          <p className="text-gray-500 mt-2">
            Verify academic credentials across registered universities.
          </p>

        </div>

        <div className="max-w-2xl">

          {/* INFO BANNER */}
          <div className="flex items-center gap-6 bg-[#EAEFF7] border border-[#C9D5E6] rounded-3xl px-8 py-7 mb-10">

            <span className="text-[#0A3A6B] shrink-0">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="11"
                  y="3"
                  width="10"
                  height="5"
                  rx="1"
                  transform="rotate(45 16 5.5)"
                />
                <line x1="13" y1="11" x2="4" y2="20" />
                <line x1="3" y1="21.5" x2="11" y2="21.5" />
              </svg>
            </span>

            <p className="text-lg font-semibold text-[#0A192F] leading-8">
              Verify official academic credentials anchored on the Polygon
              blockchain.
            </p>

          </div>

          {/* CODE FIELD */}
          <div className="relative">

            <label
              htmlFor="certificate-code"
              className="absolute -top-3 left-4 px-2 bg-[#F5F8FC] text-sm font-medium text-[#0A3A6B]"
            >
              Certificate or shared-degree code
            </label>

            <div
              className={`flex items-center gap-3 bg-transparent rounded-xl border-2 px-5 py-4 transition-colors ${error ? "border-red-500" : "border-[#0A3A6B]"
                }`}
            >

              <input
                id="certificate-code"
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleVerify();
                }}
                placeholder="Enter a certificate code ..."
                className="flex-1 min-w-0 bg-transparent outline-none text-lg text-[#0A192F] placeholder-gray-500"
              />

              {/* SCAN */}
              <button
                type="button"
                aria-label="Scan QR code"
                className="p-2 rounded-lg text-[#333F4F] hover:bg-gray-200/70 transition-colors"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="3.5" fill="#F5F8FC" stroke="#F5F8FC" />
                </svg>
              </button>

              {/* SEARCH */}
              <button
                type="button"
                aria-label="Search"
                onClick={handleVerify}
                className="p-2 rounded-lg text-[#333F4F] hover:bg-gray-200/70 transition-colors"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

            </div>

            {error && (
              <p className="text-sm text-red-600 mt-2 ml-1">{error}</p>
            )}

          </div>

          {/* VERIFY BUTTON */}
          <button
            type="button"
            onClick={handleVerify}
            className="mt-6 w-full flex items-center justify-center gap-3 py-5 rounded-full bg-[#1B4A75] hover:bg-[#143A5E] text-white text-lg font-semibold shadow-lg shadow-slate-400/40 transition-all duration-300"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 11 15 16 9" />
            </svg>
            Verify Record
          </button>

        </div>

      </main>

    </div>
  );
}