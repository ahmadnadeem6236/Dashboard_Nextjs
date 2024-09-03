import { Sidebar } from 'lucide-react'
import { ReactNode } from 'react'
import SideNavbar from './_components/Sidebar'
import UserProfile from '@/components/UserProfile'
import MobileSidebar from './_components/MobileSidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-full bg-white text-black flex flex-col md:flex-row ">
            <div className="flex flex-col">
                <div className="   md:hidden z-40">
                    <MobileSidebar />
                </div>
                <div className="hidden md:flex sticky top-0">
                    <SideNavbar />
                </div>
            </div>
            <div className="flex flex-col flex-1 w-full">
                <div className=" sticky top-0 w-full z-30">
                    <UserProfile />
                </div>
                <div className="flex-1 bg-[#F8F8F8]">{children}</div>
            </div>
        </div>
    )
}
