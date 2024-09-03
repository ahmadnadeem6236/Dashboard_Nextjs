import Link from 'next/link'
import React from 'react'
import ProgressBar from '../_components/ProgressBar'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Add from '/public/images/addLabel.svg'
import Del from '/public/images/Delete.svg'
import Image from 'next/image'

export default function page() {
    return (
        <div className="w-full h-full bg-[#F8F8F8]">
            <div className="pt-4">
                <ProgressBar currentStep={1} />
            </div>
            {/* <Link href={'planmessage/step2'}>Step</Link> */}
            <div className=" max-w-3xl mt-7 px-4 md:px-0  rounded-md  flex flex-col mx-auto overflow-y-scroll">
                <div className="  bg-[#F5F6F6] font-bold border-[1px] border-[#EDE9EA] rounded-md max-w-3xl h-[65px] flex  items-center px-5 md:pl-10  ">
                    <h1 className=" text-[20px] md:text-[24px] text-[#222222]">
                        Plan Your Message
                    </h1>
                </div>
                <div className="w-full bg-white min-h-[590px] border-x-[1px] border-b-[1px] border-[#EDE9EA] px-5  md:px-8 pt-5 overflow-y-scroll ">
                    <form action="submit" className=" ">
                        <div>
                            <div className="flex flex-col md:flex-row md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue
                                                className=""
                                                placeholder="Select Religion"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Age Range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Caste" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Sub-Caste " />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row  md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Native Language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <span className="w-full  border-[#E2E1E1] border-t-[1px] flex justify-center">
                            <span className=" flex justify-center items-center relative bottom-[16px] bg-[#E8E6E6] text-[12px] font-medium text-[#555555]  w-[32px] h-[32px] rounded-full">
                                OR
                            </span>
                        </span>
                        <div>
                            <div className="flex flex-col md:flex-row md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select City" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select District" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Block / Panchayat" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Village" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <span className="w-full  border-[#E2E1E1] border-t-[1px] flex justify-center">
                            <span className=" flex justify-center items-center relative bottom-[16px] bg-[#E8E6E6] text-[12px] font-medium text-[#555555]  w-[32px] h-[32px] rounded-full">
                                OR
                            </span>
                        </span>
                        <div>
                            <div className="flex  flex-col md:flex-row md:gap-[60px]">
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Social Media" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="mb-4 relative">
                                    <Select>
                                        <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                            <SelectValue placeholder="Select Ground Inputs" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">
                                                Hindu
                                            </SelectItem>
                                            <SelectItem value="dark">
                                                Islam
                                            </SelectItem>
                                            <SelectItem value="system">
                                                Christian
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="min-h-[140px] flex flex-col gap-2 justify-center px-7 md:pl-10 w-full bg-white rounded-md mt-10  border-[1px] border-[#EDE9EA] ">
                    <div className="h-full w-full">
                        <span className="font-bold text-[18px] text-[#222222] md:text-[20px]">
                            Select Label
                        </span>
                        <div className="flex gap-2 pt-1">
                            <Select>
                                <SelectTrigger className="w-[180px] md:w-[320px] h-[54px] focus:border-0">
                                    <SelectValue placeholder="Select Label" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Hindu</SelectItem>
                                    <SelectItem value="dark">Islam</SelectItem>
                                    <SelectItem value="system">
                                        Christian
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="">
                                <Image src={Add} alt="label" />
                            </div>
                            <div className="flex w-[54px] md:h-[54px] bg-[#F8F8F8] justify-center border-[1px] border-[#EEEEEE]">
                                <Image src={Del} alt="delete" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center md:justify-end mt-10 pb-10">
                    <Link
                        className=" h-[50px] tracking-wide font-interMedium bg-[#FF343E] text-white p-2  rounded-md hover:bg-red-600 md:w-[223px] w-[223px] transition-all duration-300 ease-in-out flex items-center justify-center"
                        href={'step3'}
                    >
                        Proceed to draft message
                    </Link>
                </div>
            </div>
        </div>
    )
}
