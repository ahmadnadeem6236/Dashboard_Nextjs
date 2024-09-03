import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import OtpLogin from './_components/OtpLogin'

export default function OtpLoginLayout() {
    return (
        <div className="grid grid-rows-[60px_1fr] min-h-screen">
            {/* Topbar */}
            <Navbar />
            <OtpLogin />
        </div>
    )
}
