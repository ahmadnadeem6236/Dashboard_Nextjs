import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import SelectElection from './_components/SelectElection'

export default function RegistrationLayout() {
    return (
        <div className="grid grid-rows-[60px_1fr] min-h-screen">
            {/* Topbar */}
            <Navbar />
            <SelectElection />
        </div>
    )
}
