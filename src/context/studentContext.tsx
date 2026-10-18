import { createContext, useContext, useState, ReactNode } from "react";

type UserVerificationContextType = {
    isVerified: boolean;
    studentId: string;
    verifyStudentId: (id: string) => boolean;
    reset: () => void;
};

const UserVerificationContext = createContext<UserVerificationContextType | undefined>(undefined);

// Mock valid ID — swap for a real API check later
const VALID_STUDENT_ID = "20260001";

export default function UserVerificationProvider({ children }: { children: ReactNode }) {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [studentId, setStudentId] = useState<string>("");

    const verifyStudentId = (id: string): boolean => {
        const trimmed = id.trim();
        const result = trimmed !== "" && trimmed === VALID_STUDENT_ID;
        setIsVerified(result);
        setStudentId(trimmed);
        return result;
    };

    const reset = () => {
        setIsVerified(false);
        setStudentId("");
    };

    return (
        <UserVerificationContext.Provider value={{ isVerified, studentId, verifyStudentId, reset }}>
            {children}
        </UserVerificationContext.Provider>
    );
}

export function useUserVerification() {
    const context = useContext(UserVerificationContext);
    if (!context) {
        throw new Error("useStudentVerification must be used within a StudentVerificationProvider");
    }
    return context;
}