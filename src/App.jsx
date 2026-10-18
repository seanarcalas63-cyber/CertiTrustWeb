
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Admin pages
import Students from './pages/admin/students'
import Inbox from './pages/admin/inbox'
import Dashboard from './pages/admin/dashboard'
import Certificates from './pages/admin/certificates'
import AuthPage from './pages/admin/AuthPage'
import Notifications from './pages/admin/notifications'
import Profile from './pages/admin/profile'
import Records from './pages/admin/records.'
import Verification from './pages/admin/verification'
import AskQ from './pages/admin/AskQ'

// Student pages
import StudentPortal from './pages/students/studentPortal'
import CertificateVerification from './pages/students/certificateVerification'
import StudentInbox from './pages/students/studentInbox'
import StudentChat from './pages/students/studentChat'
import StudentRecords from './pages/students/StudentRecords'
import StudentProfile from './pages/students/StudentProfile'

// Super Admin pages
import SuperAdminDashboard from './pages/superadmin/SuperAdminDashboard'
import SuperAdminRecords from './pages/superadmin/SuperAdminRecords'
import SuperAdminVerify from './pages/superadmin/SuperAdminVerify'
import SuperAdminAsk from './pages/superadmin/SuperAdminAsk'
import SuperAdminCreateSubadmin from './pages/superadmin/SuperAdminCreateSubadmin'
import SuperAdminLogs from './pages/superadmin/SuperAdminLogs'

function App() {
    return (
        <Routes>
            {/* Login */}
            <Route path="/" element={<AuthPage />} />
            <Route path="/login" element={<AuthPage />} />

            {/* Super Admin */}
            <Route path="/superadmin" element={<SuperAdminDashboard />} />
            <Route path="/superadmin/records" element={<SuperAdminRecords />} />
            <Route path="/superadmin/verify" element={<SuperAdminVerify />} />
            <Route path="/superadmin/ask" element={<SuperAdminAsk />} />
            <Route path="/superadmin/create-subadmin" element={<SuperAdminCreateSubadmin />} />
            <Route path="/superadmin/logs" element={<SuperAdminLogs />} />

            {/* Admin */}
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<AskQ />} />
            <Route path="/students" element={<Students />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/records" element={<Records />} />
            <Route path="/verification" element={<Verification />} />

            {/* Student */}
            <Route path="/portal" element={<StudentPortal />} />
            <Route path="/portal/records" element={<StudentRecords />} />
            <Route path="/portal/profile" element={<StudentProfile />} />
            <Route path="/certificate-verification" element={<CertificateVerification />} />
            <Route path="/student-askq" element={<StudentInbox />} />
            <Route path="/ask-admin" element={<StudentChat />} />
        </Routes>
    )
}

export default App