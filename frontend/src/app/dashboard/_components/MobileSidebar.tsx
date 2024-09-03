'use client'
import Dashboard from '/public/images/dashboard.svg'
import Chat from '/public/images/Chat.svg'
import Chart from '/public/images/Chart.svg'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import dashboardlogo from '/public/images/dashboardlogo.svg'
import Community from '/public/images/Community.svg'
import Calender from '/public/images/Calender.svg'
import BroadCast from '/public/images/BroadCast.svg'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const MobileSidebar = () => {
    const location = usePathname()

    // Function href determine if a link is active
    const isActive = (path: string) => location === path
    const [isOpen, sehrefpen] = useState(false)
    return (
        <div className="md:w-full w-full bg-black border-b-[1px] border-[#EDE9EA] h-16 flex justify-between items-center">
            <div className=" flex justify-center  items-center gap-4 transition-all ease-in-out text-white ">
                <Hamburger toggled={isOpen} toggle={sehrefpen} size={20} />
                <div>
                    <Link href="/">
                        <Image
                            src={dashboardlogo}
                            alt="Logo"
                            className=" w-30"
                            style={{ maxWidth: '147.35px', height: 'auhref' }}
                        />
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div className=" fixed top-[64px] h-full bg-black flex ">
                    <div className="">
                        <div className="  w-[220px]  text-gray-400 overflow-y-auto">
                            <div className="space-y-2 mt-6 ml-0 font-interMedium">
                                <Link
                                    href="/dashboard"
                                    className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                                        isActive('/dashboard')
                                            ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={Dashboard}
                                        alt="dashboard"
                                        className="h-5 w-5 ml-2"
                                    />
                                    <span className="ml-3">Dashboard</span>
                                </Link>

                                {/* {task} */}
                                <Link
                                    href="/dashboard/task"
                                    className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                                        isActive('/buzz/task')
                                            ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={Chart}
                                        alt="task"
                                        className=" focus:bg-white h-5 w-5 ml-2"
                                    />
                                    <span className="ml-3">Task</span>
                                </Link>

                                {/* {chat} */}
                                <Link
                                    href="/buzz/chat"
                                    className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                                        isActive('/buzz/chat')
                                            ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={Chat}
                                        alt="task"
                                        className=" focus:bg-white h-5 w-5 ml-2"
                                    />
                                    <span className="ml-3">Chat</span>
                                </Link>
                                {/* {message} */}
                                <Link
                                    href="/dashboard/message"
                                    className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                                        isActive('/dashboard/message') ||
                                        isActive(
                                            '/dashboard/message/planmessage'
                                        ) ||
                                        isActive(
                                            '/dashboard/message/planmessage/step2'
                                        ) ||
                                        isActive(
                                            '/dashboard/message/planmessage/step3'
                                        )
                                            ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={BroadCast}
                                        alt="message"
                                        className=" focus:bg-white h-5 w-5 ml-2"
                                    />
                                    <span className="ml-3">Message</span>
                                </Link>

                                <Link
                                    href="/dashboard/community"
                                    className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                                        isActive('/buzz/community')
                                            ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={Community}
                                        alt="task"
                                        className=" focus:bg-white h-5 w-5 ml-2"
                                    />
                                    <span className="ml-3">Community</span>
                                </Link>

                                <Link
                                    href="/buzz/calender"
                                    className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                                        isActive('/buzz/calender')
                                            ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={Calender}
                                        alt="calender"
                                        className=" focus:bg-white h-5 w-5 ml-2"
                                    />
                                    <span className="ml-3">Calender</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className=" text-white bothrefm-5 flex justify-end pr-5">
                <span className="md:hidden w-7 h-7 bg-[#D3E4FF] rounded-full flex justify-center items-center text-[12px] text-[#1D58BA] font-interBold font-bold  md:leading-[9px]">
                    M
                </span>
            </div>
        </div>
    )
}

export default MobileSidebar
