
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import StudentSidebar from "../../components/StudentSidebar";

type AvatarType = "girl" | "boy";

export default function StudentProfile() {
    const [email, setEmail] = useState("userucu7@gmail.com");
    const [school, setSchool] = useState("UCU");
    const [avatar, setAvatar] = useState<AvatarType>("girl");
    const [photo, setPhoto] = useState<string | null>(null);
    const [photoName, setPhotoName] = useState("");
    const [saved, setSaved] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            event.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Image must be 5 MB or smaller.");
            event.target.value = "";
            return;
        }

        if (photo) {
            URL.revokeObjectURL(photo);
        }

        const imageUrl = URL.createObjectURL(file);

        setPhoto(imageUrl);
        setPhotoName(file.name);
        setSaved(false);
    };

    const selectAvatar = (selectedAvatar: AvatarType) => {
        if (photo) {
            URL.revokeObjectURL(photo);
        }

        setPhoto(null);
        setPhotoName("");
        setAvatar(selectedAvatar);
        setSaved(false);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSave = () => {
        if (!email.trim()) {
            alert("Please enter your email address.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!school.trim()) {
            alert("Please enter your school.");
            return;
        }

        setSaved(true);
        alert("Profile updated for this session.");
    };

    const girlAvatar =
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Jade";

    const boyAvatar =
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix";

    const currentAvatar =
        photo || (avatar === "girl" ? girlAvatar : boyAvatar);

    return (
        <div className="min-h-screen bg-[#F4F7FB]">
            <StudentSidebar />

            {/* Main content positioned beside the fixed sidebar */}
            <main className="min-h-screen min-w-0 md:ml-64">
                <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10">

                    {/* Centered Page Header */}
                    <div className="mb-8 text-center">
                        <p className="mb-2 text-sm font-semibold text-blue-600">
                            STUDENT PORTAL / ACCOUNT
                        </p>

                        <h1 className="text-3xl font-extrabold text-[#0A192F]">
                            Profile
                        </h1>

                        <p className="mt-2 text-gray-500">
                            Manage your profile information and photo.
                        </p>
                    </div>

                    {/* Profile Card */}
                    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

                        {/* Header Banner */}
                        <div className="h-32 bg-gradient-to-r from-[#0A192F] to-[#2563EB]" />

                        <div className="px-5 pb-7 sm:px-8">

                            {/* Centered Avatar and Email */}
                            <div className="relative -mt-14 flex flex-col items-center text-center">
                                <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#EAF2FF] shadow-md">
                                    <img
                                        src={currentAvatar}
                                        alt="Student profile avatar"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="mt-3">
                                    <h2 className="text-xl font-bold text-[#0A192F]">
                                        Student Profile
                                    </h2>

                                    <p className="mt-1 break-all text-sm text-gray-500">
                                        {email}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-gray-100 pt-7">

                                {/* Personal Information */}
                                <h3 className="mb-5 text-center text-lg font-bold text-[#0A192F]">
                                    Personal Information
                                </h3>

                                <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="student-email"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="student-email"
                                            type="email"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                                setSaved(false);
                                            }}
                                            placeholder="Enter your email"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        />
                                    </div>

                                    {/* School */}
                                    <div>
                                        <label
                                            htmlFor="student-school"
                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                        >
                                            School / Institution
                                        </label>

                                        <input
                                            id="student-school"
                                            type="text"
                                            value={school}
                                            onChange={(event) => {
                                                setSchool(event.target.value);
                                                setSaved(false);
                                            }}
                                            placeholder="Enter your school"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                        />
                                    </div>
                                </div>

                                {/* Avatar Selection */}
                                <div className="mx-auto mt-9 w-full max-w-3xl">
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-[#0A192F]">
                                            Choose Your Avatar
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Choose a girl or boy avatar, or upload your own photo.
                                        </p>
                                    </div>

                                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                                        {/* Girl Avatar */}
                                        <button
                                            type="button"
                                            onClick={() => selectAvatar("girl")}
                                            className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
                                                avatar === "girl" && !photo
                                                    ? "border-blue-600 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                            }`}
                                        >
                                            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#EAF2FF]">
                                                <img
                                                    src={girlAvatar}
                                                    alt="Girl avatar"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="font-bold text-[#0A192F]">
                                                    Girl Avatar
                                                </p>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    Choose girl profile
                                                </p>
                                            </div>

                                            {avatar === "girl" && !photo && (
                                                <span className="font-bold text-blue-600">
                                                    ✓
                                                </span>
                                            )}
                                        </button>

                                        {/* Boy Avatar */}
                                        <button
                                            type="button"
                                            onClick={() => selectAvatar("boy")}
                                            className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
                                                avatar === "boy" && !photo
                                                    ? "border-blue-600 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                            }`}
                                        >
                                            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#EAF2FF]">
                                                <img
                                                    src={boyAvatar}
                                                    alt="Boy avatar"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="font-bold text-[#0A192F]">
                                                    Boy Avatar
                                                </p>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    Choose boy profile
                                                </p>
                                            </div>

                                            {avatar === "boy" && !photo && (
                                                <span className="font-bold text-blue-600">
                                                    ✓
                                                </span>
                                            )}
                                        </button>
                                    </div>

                                    {/* Gallery Upload */}
                                    <div className="flex flex-col items-center">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handlePhotoChange}
                                            className="hidden"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-100 sm:w-auto"
                                        >
                                            <span aria-hidden="true">▧</span>
                                            Choose Photo from Gallery
                                        </button>

                                        {photo && (
                                            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                                                <p className="break-all text-sm text-green-700">
                                                    Selected: {photoName}
                                                </p>

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        URL.revokeObjectURL(photo);
                                                        setPhoto(null);
                                                        setPhotoName("");
                                                        setSaved(false);

                                                        if (fileInputRef.current) {
                                                            fileInputRef.current.value = "";
                                                        }
                                                    }}
                                                    className="text-sm font-semibold text-red-600 hover:underline"
                                                >
                                                    Remove Photo
                                                </button>
                                            </div>
                                        )}

                                        <p className="mt-2 text-center text-xs text-gray-400">
                                            Image files only. Maximum file size: 5 MB.
                                        </p>
                                    </div>
                                </div>

                                {/* Save Changes */}
                                <div className="mt-9 flex flex-col items-center gap-4 border-t border-gray-100 pt-6">
                                    <p className="text-center text-sm text-gray-500">
                                        {saved
                                            ? "Your changes are confirmed for this session."
                                            : "Review your information before saving."}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={handleSave}
                                        className="rounded-xl bg-[#2563EB] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98]"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Account Notice */}
                    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-center">
                        <p className="text-sm font-semibold text-[#0A192F]">
                            Account Information
                        </p>

                        <p className="mt-1 text-sm text-gray-600">
                            Profile changes are temporary and are not permanently
                            stored until connected to a database or persistent storage.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}