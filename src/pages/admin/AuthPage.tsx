import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        setMessage("");

        // SUPER ADMIN LOGIN
        if (
            email.trim().toLowerCase() === "certitrust256@gmail.com" &&
            password === "certitrust256256"  
            
        ) {
            localStorage.setItem("certitrustLoggedIn", "true");
            localStorage.setItem("certitrustRole", "superadmin");
            localStorage.setItem("certitrustUser", "certitrust256@gmail.com");

            navigate("/superadmin");
        }
       
        // PSU ADMIN LOGIN
if (
    email.trim().toLowerCase() === "psu2026admin@gmail.com" &&
    password === "psuadmin2026"
) {
    localStorage.setItem("certitrustLoggedIn", "true");
    localStorage.setItem("certitrustRole", "admin");
    localStorage.setItem("certitrustSchool", "PSU");
    localStorage.setItem("certitrustUser", "psu2026admin@gmail.com");

    navigate("/admin-dashboard");
    return;
}

// PSU USER LOGIN
if (
    email.trim().toLowerCase() === "psuusertest@gmail.com" &&
    password === "PsuUser-2025"
) {
    localStorage.setItem("certitrustLoggedIn", "true");
    localStorage.setItem("certitrustRole", "user");
    localStorage.setItem("certitrustSchool", "PSU");
    localStorage.setItem("certitrustUser", "PsuUserTest@gmail.com");

      navigate("/portal");
    return;
}

// UCU ADMIN LOGIN
if (
    email.trim().toLowerCase() === "adminucutest@gmail.com" &&
    password === "admin-2024"
) {
    localStorage.setItem("certitrustLoggedIn", "true");
    localStorage.setItem("certitrustRole", "admin");
    localStorage.setItem("certitrustSchool", "UCU");
    localStorage.setItem("certitrustUser", "adminUcuTest@gmail.com");
    
    navigate("/admin-dashboard");
    return;
}

// UCU USER LOGIN
if (
    email.trim().toLowerCase() === "userucu0@gmail.com" &&
    password === "userucu0005"
) {
    localStorage.setItem("certitrustLoggedIn", "true");
    localStorage.setItem("certitrustRole", "user");
    localStorage.setItem("certitrustSchool", "UCU");
    localStorage.setItem("certitrustUser", "userucu0@gmail.com");

    
    navigate("/portal");
    return;
}




        // ADMIN LOGIN
        else if (
            email.trim().toLowerCase() === "admin@certitrust.edu" &&
            password === "admin123"
        ) {
            localStorage.setItem("certitrustLoggedIn", "true");
            localStorage.setItem("certitrustRole", "admin");
            localStorage.setItem("certitrustUser", "admin@certitrust.edu");

            navigate("/admin-dashboard");
        }

        // STUDENT LOGIN
        else if (
            email.trim().toLowerCase() === "johnyyesdaddy@gmail.com" &&
            password === "studentid"
        ) {
            localStorage.setItem("certitrustLoggedIn", "true");
            localStorage.setItem("certitrustRole", "student");
            localStorage.setItem("certitrustUser", "johnyyesdaddy@gmail.com");

            navigate("/portal");
        }

        // INCORRECT LOGIN
        else {
            setMessage("Incorrect email or password.");
        }
    };

    return (
        <div className="min-h-screen bg-[#F6F8FC]">

            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <div className="hidden lg:flex bg-[#0A192F] text-white p-12 xl:p-20 flex-col justify-center">

                    <div className="max-w-xl mx-auto">

                        <div className="flex items-center gap-3 mb-10">

                            <img
                                src="/logo.png"
                                alt="CertiTrust Logo"
                                className="w-14 h-14 object-contain"
                            />

                            <div>
                                <h1 className="text-2xl font-extrabold">
                                    CertiTrust
                                </h1>

                                <p className="text-sm text-slate-400">
                                    Academic Credential System
                                </p>
                            </div>

                        </div>

                        <h2 className="text-4xl xl:text-5xl font-extrabold leading-tight">
                            Secure Academic
                            <br />
                            Credentials
                        </h2>

                        <p className="mt-6 text-slate-300 text-base xl:text-lg leading-relaxed">
                            CertiTrust provides a secure platform for
                            issuing, managing, and verifying academic
                            credentials.
                        </p>

                        <div className="mt-10 grid gap-4">

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                                    ✓
                                </div>

                                <span className="text-slate-300">
                                    Secure credential management
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                                    ✓
                                </div>

                                <span className="text-slate-300">
                                    Academic record verification
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                                    ✓
                                </div>

                                <span className="text-slate-300">
                                    Blockchain-backed credentials
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center p-5 sm:p-8">

                    <div className="w-full max-w-md">

                        {/* MOBILE LOGO */}
                        <div className="flex lg:hidden items-center justify-center gap-3 mb-8">

                            <img
                                src="/assets/logo.png"
                                alt="CertiTrust Logo"
                                className="w-12 h-12 object-contain"
                            />

                            <h1 className="text-2xl font-extrabold text-[#0A192F]">
                                CertiTrust
                            </h1>

                        </div>

                        {/* LOGIN CARD */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">

                            <div className="mb-7">

                                <div className="flex items-center gap-2 mb-2">

                                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />

                                    <p className="text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                                        Administrator Login
                                    </p>

                                </div>

                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                                    Welcome Back
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    Sign in to access the CertiTrust Admin Dashboard.
                                </p>

                            </div>

                            {/* ERROR MESSAGE */}
                            {message && (
                                <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold">
                                    {message}
                                </div>
                            )}

                            {/* FORM */}
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    handleLogin();
                                }}
                                className="space-y-5"
                            >

                                {/* EMAIL */}
                                <div>

                                    <label className="block text-sm font-bold text-[#172033] mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setMessage("");
                                        }}
                                        placeholder="Enter administrator email"
                                        className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                                        required
                                    />

                                </div>

                                {/* PASSWORD */}
                                <div>

                                    <label className="block text-sm font-bold text-[#172033] mb-2">
                                        Password
                                    </label>

                                    <div className="relative">

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setMessage("");
                                            }}
                                            placeholder="Enter password"
                                            className="w-full min-h-12 border border-slate-200 rounded-xl bg-white px-4 py-3 pr-20 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-[#1D4ED8]/10 transition"
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#2563EB]"
                                        >
                                            {showPassword
                                                ? "Hide"
                                                : "Show"}
                                        </button>

                                    </div>

                                </div>

                                {/* REMEMBER ME */}
                                <div className="flex items-center justify-between">

                                    <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">

                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-[#2563EB]"
                                        />

                                        Remember me

                                    </label>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMessage(
                                                "Please contact the system administrator for password recovery."
                                            )
                                        }
                                        className="text-sm font-bold text-[#2563EB]"
                                    >
                                        Forgot password?
                                    </button>

                                </div>

                                {/* SIGN IN */}
                                <button
                                    type="submit"
                                    className="w-full min-h-12 rounded-xl bg-[#0A192F] text-white font-bold shadow-[0_10px_20px_rgba(10,25,47,0.16)] hover:bg-[#122744] hover:-translate-y-0.5 transition"
                                >
                                    Sign In
                                </button>

                            </form>

                            {/* GOOGLE LOGIN */}
                            <button
                                type="button"
                                onClick={() =>
                                    setMessage(
                                        "Google Sign In is not available yet."
                                    )
                                }
                                className="w-full mt-4 min-h-12 rounded-xl border border-slate-200 bg-white text-[#0A192F] font-bold hover:bg-slate-50 transition"
                            >
                                Continue with Google
                            </button>

                            {/* SIGN UP */}
                            <div className="mt-6 text-center">

                                <p className="text-sm text-slate-500">
                                    Don't have an account?
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setMessage(
                                            "Account registration is disabled. Only one administrator account is allowed."
                                        )
                                    }
                                    className="mt-1 text-sm font-extrabold text-[#2563EB]"
                                >
                                    Sign Up
                                </button>

                            </div>

                            {/* PUBLIC VERIFICATION */}
                            <div className="mt-7 pt-6 border-t border-slate-100">

                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate("/verification")
                                    }
                                    className="w-full min-h-11 rounded-xl border border-slate-200 text-[#0A192F] font-bold hover:bg-slate-50 transition"
                                >
                                    Public Certificate Verification
                                </button>

                            </div>

                        </div>

                        {/* FOOTER */}
                        <p className="text-center text-xs text-slate-400 mt-5">
                            © 2026 CertiTrust. Academic Credential System.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}