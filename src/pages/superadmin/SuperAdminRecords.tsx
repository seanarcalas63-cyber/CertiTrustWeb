import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminSideBar from "../../components/SuperAdminSideBar";

type RecordItem = {
  id: string;
  studentName: string;
  studentId: string;
  program: string;
  degreeNumber: string;
  email: string;
  certificateCode: string;
  issueDate: string;
  published: string;
  status: string;
  year: string;
};

const records: RecordItem[] = [
  {
    id: "1",
    studentName: "UcuUser T. Student",
    studentId: "20260001",
    program: "BSIT",
    degreeNumber: "1st",
    email: "userucu7@gmail.com",
    certificateCode: "CERT-5TGC2BGTH9",
    issueDate: "2026-10-13",
    published: "2026-10-13 17:29",
    status: "Verified",
    year: "2026",
  },
  {
    id: "2",
    studentName: "PsuUser T. Student",
    studentId: "20260002",
    program: "BSIT",
    degreeNumber: "1st",
    email: "userpsu@gmail.com",
    certificateCode: "CERT-PSU0000001",
    issueDate: "2026-10-13",
    published: "2026-10-13 17:35",
    status: "Verified",
    year: "2026",
  },
];

export default function SuperAdminRecords() {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [openIds, setOpenIds] = useState<string[]>([]);

  const years = useMemo(
    () => Array.from(new Set(records.map((r) => r.year))).sort((a, b) => b.localeCompare(a)),
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return records.filter((r) => {
      const matchesYear = selectedYear === "all" || r.year === selectedYear;
      const matchesSearch =
        q === "" ||
        [r.studentName, r.studentId, r.program, r.email, r.certificateCode]
          .join(" ")
          .toLowerCase()
          .includes(q);

      return matchesYear && matchesSearch;
    });
  }, [search, selectedYear]);

  const groups = useMemo(
    () =>
      years
        .map((year) => ({
          year,
          items: filtered.filter((r) => r.year === year),
        }))
        .filter((g) => g.items.length > 0),
    [years, filtered]
  );

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex bg-[#F5F8FC]">

      <SuperAdminSideBar />

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 min-h-screen p-8">

        <div className="max-w-3xl">

          {/* HEADER */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-[#2563EB] mb-2">
              Super Admin
            </p>

            <h1 className="text-3xl font-extrabold text-[#0A192F]">
              Certificate Records
            </h1>

            <p className="text-gray-500 mt-2">
              View and monitor academic credentials from all universities.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative mb-8">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search credentials"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-400 text-[#0A192F] placeholder-gray-500 outline-none focus:border-[#0A3A6B] focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* BATCH YEAR */}
          <h2 className="text-lg font-bold text-[#0A192F] mb-3">
            Record batch year
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              type="button"
              onClick={() => setSelectedYear("all")}
              className={`px-5 py-2.5 rounded-xl border text-sm font-medium flex items-center gap-2 transition-all ${selectedYear === "all"
                  ? "bg-[#D9E6F7] border-[#D9E6F7] text-[#0A192F]"
                  : "bg-white border-gray-300 text-[#0A192F] hover:bg-gray-50"
                }`}
            >
              {selectedYear === "all" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              All years
            </button>

            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-5 py-2.5 rounded-xl border text-sm font-medium flex items-center gap-2 transition-all ${selectedYear === year
                    ? "bg-[#D9E6F7] border-[#D9E6F7] text-[#0A192F]"
                    : "bg-white border-gray-300 text-[#0A192F] hover:bg-gray-50"
                  }`}
              >
                {selectedYear === year && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {year}
              </button>
            ))}
          </div>

          {/* RECORD GROUPS */}
          {groups.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">
              No records found.
            </div>
          )}

          {groups.map((group) => (
            <section key={group.year} className="mb-8">

              <h3 className="text-xl font-bold text-[#0A192F] mb-4">
                {group.year}
              </h3>

              <div className="space-y-4">
                {group.items.map((r) => {
                  const isOpen = openIds.includes(r.id);

                  const details = [
                    { label: "Student name", value: r.studentName },
                    { label: "Student ID", value: r.studentId },
                    { label: "Course / program", value: r.program },
                    { label: "Degree number", value: r.degreeNumber },
                    { label: "Gmail", value: r.email },
                    { label: "Certificate code", value: r.certificateCode },
                    { label: "Issue date", value: r.issueDate },
                    { label: "Published", value: r.published },
                    { label: "Status", value: r.status },
                  ];

                  return (
                    <div
                      key={r.id}
                      className="bg-[#F1F4F9] rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                    >

                      {/* HEADER (always visible) */}
                      <button
                        type="button"
                        onClick={() => toggle(r.id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#E9EEF6] transition-colors"
                      >
                        <span className="flex items-center gap-4 min-w-0">
                          <span className="text-[#0A3A6B] shrink-0">
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
                              <path d="M22 10L12 5 2 10l10 5 10-5z" />
                              <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                          </span>

                          <span className="text-lg font-bold text-[#0A192F] truncate">
                            {r.studentName}
                          </span>
                        </span>

                        <span
                          className={`text-[#0A3A6B] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        >
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>

                      {/* FULL DETAILS (only when opened) */}
                      {isOpen && (
                        <div className="px-6 pb-6">

                          <dl className="space-y-4 mt-2">
                            {details.map((d) => (
                              <div
                                key={d.label}
                                className="grid grid-cols-[170px_1fr] gap-4 text-[15px]"
                              >
                                <dt className="font-bold text-[#0A192F]">
                                  {d.label}
                                </dt>

                                <dd className="text-[#0A192F] break-words">
                                  {d.value}
                                </dd>
                              </div>
                            ))}
                          </dl>

                          <div className="flex flex-col items-center gap-5 mt-8">

                            <Link
                              to="/superadmin/verify"
                              className="inline-flex items-center gap-2 font-semibold text-[#0A3A6B] hover:underline"
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
                                <polyline points="8.5 12 11 14.5 15.5 9.5" />
                              </svg>
                              Verify this record
                            </Link>

                            <button
                              type="button"
                              className="inline-flex items-center gap-2 font-semibold text-[#0A3A6B] hover:underline"
                            >
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="9" r="6" />
                                <polygon points="12 6.5 12.9 8.4 15 8.7 13.5 10.1 13.9 12.2 12 11.2 10.1 12.2 10.5 10.1 9 8.7 11.1 8.4 12 6.5" />
                                <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
                              </svg>
                              View Your Diploma
                            </button>

                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

        </div>
      </main>
    </div>
  );
}