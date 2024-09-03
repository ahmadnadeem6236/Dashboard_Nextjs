'use client'
import React, { useEffect, useState } from 'react'
import Logo from '/public/images/logo.svg'
import { useParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
    const navigate = useRouter()
    const [btnText, setBtnText] = useState('Login')

    return (
        <div className="bg-white z-10  h-[60px] w-full flex justify-between items-center p-0 px-9 border-b border-gray-300 ">
            <div className="flex items-center h-full ">
                <Image
                    src={Logo}
                    alt="logo"
                    className="w-auto cursor-pointer relative right-5 "
                    style={{ maxWidth: '147.35px', height: '18px' }}
                    onClick={() => {
                        navigate.push('/')
                    }}
                />
                <span className=" hidden pl-[24px] md:block border-r-[1px]  border-[#EDE9EA] h-full"></span>
            </div>
            <div className="flex gap-2 items-center">
                <p className="text-black font-medium hidden md:inline-block mr-2 text-[14px]">
                    Already have an account?
                </p>
                <button
                    onClick={() => {
                        if (btnText == 'Login') {
                            navigate.push('/otplogin')
                        } else {
                            navigate.push('/')
                        }
                    }}
                    className="bg-white font-semibold text-[#FF343E]   transition-all ease-in-out duration-300 rounded border hover:bg-[#fa2530] hover:text-white border-[#FF343E] w-[73px] h-[35px] text-[12px] leading-6"
                >
                    {btnText}
                </button>
            </div>
        </div>
    )
}
