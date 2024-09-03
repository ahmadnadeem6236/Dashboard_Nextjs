import Link from 'next/link'
import ProgressBar from '../_components/ProgressBar'
import FinalMsg from './_components/FinalMsg'
import Mode from './_components/Mode'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import ScheduleMsg from './_components/ScheduleMsg'

export default function page() {
    return (
        <div className="w-full h-full bg-[#F8F8F8]">
            <div className="pt-4">
                <ProgressBar currentStep={3} />
            </div>
            {/* <Link href={'planmessage/step2'}>Step</Link> */}
            <div className=" max-w-3xl mt-7 px-4 md:px-0  rounded-md  flex flex-col mx-auto overflow-y-scroll">
                <div className="  bg-[#F5F6F6] font-bold border-t-[1px] border-x-[1px] border-[#EDE9EA] rounded-md max-w-3xl h-[65px] flex  items-center px-5 md:pl-10  ">
                    <h1 className="md:text-[24px] text-[20px] text-[#222222]">
                        Smart Message Distribution Engine
                    </h1>
                </div>
                <div className="min-h-[135px] bg-white flex justify-center items-center md:gap-[60px]">
                    <div className="mb-4 relative">
                        <Select>
                            <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
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
                    </div>
                    <div className="mb-4 relative">
                        <Select>
                            <SelectTrigger className="w-[320px] h-[54px] border-[1px] focus:border-0">
                                <SelectValue placeholder="Message Mode" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Hindu</SelectItem>
                                <SelectItem value="dark">Islam</SelectItem>
                                <SelectItem value="system">
                                    Christian
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Mode />
                </div>

                <div>
                    <FinalMsg />
                </div>
                <div>
                    <ScheduleMsg />
                </div>

                <div className="pb-10 w-full flex md:justify-end justify-center gap-4 mt-7 ">
                    {/*  <Link
                         className=" h-[50px] text-[14px] text-[#FF343E] tracking-wide font-semibold bg-[#FFFFFF]  p-2  border-[1px] border-[#FF343E] rounded-md hover:text-white hover:bg-[#FF343E] md:w-[168px] w-[170px] transition-all duration-300 ease-in-out flex items-center justify-center"
                         href={'step3'}
                     >
                         Regenerate message
                     </Link> */}
                    <Link
                        className=" h-[50px] tracking-wide text-[14px] font-semibold bg-[#FF343E] text-white p-2  rounded-md hover:bg-[#FF343E] md:w-[168px] w-[150px] transition-all duration-300 ease-in-out flex items-center justify-center"
                        href={'step3'}
                    >
                        Schedule Now
                    </Link>
                </div>
            </div>
        </div>
    )
}
