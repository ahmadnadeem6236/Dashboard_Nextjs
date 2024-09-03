import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

import UserProfile from '@/components/UserProfile'
import CreateTeam from './_components/CreateTeam'

export default function CreateTeamLayout() {
    return (
        <div className="grid grid-rows-[60px_1fr] min-h-screen">
            {/* Topbar */}
            <UserProfile />
            <CreateTeam />
        </div>
    )
}
