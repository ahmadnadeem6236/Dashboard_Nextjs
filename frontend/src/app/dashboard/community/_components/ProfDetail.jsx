'use client'
import React, { useState } from 'react'
import Profile from './Mock/Profile.svg'
import CreateIcon from '/public/images/CreatePost.svg'
import Image from 'next/image'
import { CreatePost } from './Discussion'

export default function ProfDetail() {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow((prev) => !prev)
    return (
        <div className="relative px-3 flex shadow-sm w-full  items-center  bg-white  rounded-md  h-16 border-[1px] border-[#E1E1E1] ">
            <Image
                className=" w-[40px] h-[40px]"
                src={Profile}
                alt="Profile Pic"
            />
            <div
                className=" w-full flex justify-between"
                onClick={handleToggle}
            >
                <button className="peer h-full  bg-white  md:pl-3 py-2.5 text-sm text-[#888888] font-interMedium text-blue-gray-700   shadow-gray-900/5 outline outline-0 ring-4 ring-transparent ">
                    {' '}
                    What's in your mind, Admin?
                </button>
                <Image
                    width={40}
                    height={40}
                    src={CreateIcon}
                    alt="create-post"
                />
            </div>
            <div className="block">
                {show && (
                    <div className="absolute transition-all ease-in-out ">
                        <CreatePost handleToggle={handleToggle} />
                    </div>
                )}
            </div>
        </div>
    )
}
