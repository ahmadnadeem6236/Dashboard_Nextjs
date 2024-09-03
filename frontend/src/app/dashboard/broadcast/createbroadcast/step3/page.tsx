import Link from 'next/link'
import ProgressBar from '../_components/ProgressBar'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import CustomMsg from './_components/CustomMsg'
import axios from 'axios'

export default function page() {
    return (
        <div className="w-full h-full bg-[#F8F8F8]">
            <div className="pt-4">
                <ProgressBar currentStep={2} />
            </div>
            {/* <Link href={'planmessage/step2'}>Step</Link> */}
            <div className=" max-w-3xl mt-7 px-4 md:px-0  rounded-md  flex flex-col mx-auto overflow-y-scroll">
                <div className="  bg-[#F5F6F6] font-bold border-t-[1px] border-x-[1px] border-[#EDE9EA] rounded-md max-w-3xl h-[65px] flex  items-center px-5 md:pl-10  ">
                    <h1 className="md:text-[24px] text-[20px] text-[#222222]">
                        Draft Your Message
                    </h1>
                </div>
                <div className="w-full bg-white min-h-[180px] border-x-[1px] border-[#EDE9EA] px-5  md:px-8 pt-5 overflow-y-scroll ">
                    <form action="submit" className=" ">
                        <div className="flex  flex-col md:flex-row md:gap-[60px]">
                            <div className="mb-4 relative">
                                <Select>
                                    <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                        <SelectValue placeholder="Select Label" />
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
                                        <SelectValue placeholder="Message Mode" />
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
                        <div className="flex  flex-col md:flex-row md:gap-[60px]">
                            <div className="mb-4 relative">
                                <Select>
                                    <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                        <SelectValue placeholder="Message Type" />
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
                    </form>
                </div>
                <div>
                    <CustomMsg />
                </div>

                <div className="w-full flex md:justify-end justify-center gap-4 mt-7 ">
                    {/*  <Link
                         className=" h-[50px] text-[14px] text-[#FF343E] tracking-wide font-semibold bg-[#FFFFFF]  p-2  border-[1px] border-[#FF343E] rounded-md hover:text-white hover:bg-[#FF343E] md:w-[168px] w-[170px] transition-all duration-300 ease-in-out flex items-center justify-center"
                         href={'step3'}
                     >
                         Regenerate message
                     </Link> */}
                    <Link
                        className=" h-[50px] tracking-wide text-[14px] font-semibold bg-[#D9D9D9] text-white p-2  rounded-md hover:bg-[#FF343E] md:w-[168px] w-[150px] transition-all duration-300 ease-in-out flex items-center justify-center"
                        href={'step4'}
                    >
                        Send for approval
                    </Link>
                </div>
            </div>
        </div>
    )
}
