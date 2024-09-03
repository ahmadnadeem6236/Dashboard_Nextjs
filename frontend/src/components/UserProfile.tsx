'use client'
import Coin from '/public/images/coin.svg'
import Score from '/public/images/Score.svg'
import SIscore from '/public/images/SIscore.svg'
import Logo from '/public/images/logo.svg'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect, useState } from 'react'

const UserProfile = () => {
    const [username, setUsername] = useState('')
    const location = usePathname()
    const navigate = useRouter()

    const isCreateTeam = location == '/createteam'
    console.log(isCreateTeam)

    const fetchUser = async () => {
        try {
            const respone = await axios.get(`http://localhost:4000/api/getuser`)
            if (respone.status === 201) {
                console.log(respone)
                const id = respone.data[0].fullName[0]
                setUsername(id)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUser()
    })

    return (
        <div
            className={`${
                !isCreateTeam
                    ? 'bg-white z-10 w-full border-b-[1px] flex h-[60px]  items-center justify-between p-4  border-[#EDE9EA]'
                    : 'bg-white z-10 w-full border-b-[1px] flex h-[60px]  items-center justify-between p-4  border-[#EDE9EA]'
            }`}
        >
            {!isCreateTeam ? (
                <div className="flex  items-center h-[33.9px] gap-1 w-full ">
                    <div className="w-[50px]">
                        <Image
                            src={SIscore}
                            alt="si score"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="relative w-[34px] flex">
                        <Image
                            src={Score}
                            alt="Score"
                            style={{ width: '100%' }}
                            className=""
                        />
                        <span className=" absolute right-[4px] bottom-[3px]  text-[18px] font-extrabold text-white">
                            20
                        </span>
                    </div>

                    <div className="">{/* <Chart /> */}</div>
                </div>
            ) : (
                <div className="flex    justify-start items-center  ">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="w-auto cursor-pointer  "
                        style={{ maxWidth: '147.35px', height: '18px' }}
                        onClick={() => {
                            navigate.push('/')
                        }}
                    />
                    <span className=" hidden md:block border-r-2  border-[#EDE9EA] h-full py-[30px] pl-[43px]"></span>
                </div>
            )}
            <div className="flex items-center justify-center gap-3   ">
                {!isCreateTeam && (
                    <div className="flex  items-center justify-center ">
                        <button className="relative text-[14px] font-semibold  h-[30px] w-[74px] rounded-l-md bg-[#F4F4F4] ">
                            5000
                        </button>
                        <Image
                            className="absolute w-6 h-6 right-[78px] md:right-[115px]"
                            src={Coin}
                            alt="coin"
                        />
                    </div>
                )}
                <span
                    className={
                        !isCreateTeam
                            ? `hidden w-7 h-7 bg-[#D3E4FF] rounded-full md:flex justify-center items-center text-[12px] text-[#1D58BA] font-interBold font-bold  md:leading-[9px]`
                            : `w-7 h-7 bg-[#D3E4FF] rounded-full flex justify-center items-center text-[12px] text-[#1D58BA] font-interBold font-bold`
                    }
                >
                    {username}
                </span>
            </div>
        </div>
    )
}

export default UserProfile
