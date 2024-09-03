'use client'
import React, { useState } from 'react'
import SortArrow from '/public/images/SortArrow.svg'
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

const MsgHeader = () => {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow((prev) => !prev)

    return (
        <div className="pt-10 md:pt-0 px-1 md:px-[80px]  flex justify-center gap-4  md:justify-between items-center w-full flex-col md:flex-row">
            <div
                className="w-full flex md:block justify-center"
                onClick={() => setShow(!show)}
            >
                <h1 className=" font-interBold md:text-3xl text-[24px] leading-4 font-bold">
                    Broadcast
                </h1>
            </div>
            <div className=" flex gap-3   ">
                <button className=" h-[40px] px-4 tracking-wide font-interMedium bg-white text-black  rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out hidden md:flex items-center justify-center">
                    <Image src={SortArrow} alt="Sort Arrow" />
                    Sort
                </button>
                <Link
                    className=" text-[11px] md:text-[14px] h-[40px] tracking-wide font-interMedium bg-[#FF343E] text-white p-2  rounded-md hover:bg-red-600 md:w-[177px] w-[124px] transition-all duration-300 ease-in-out flex items-center justify-center"
                    href={'broadcast/createbroadcast'}
                >
                    Create Broadcast
                </Link>
            </div>
            {/* <div className=" hidden md:block">
                {show && <CreateTask handleToggle={handleToggle} />}
            </div> */}
        </div>
    )
}

export default MsgHeader
