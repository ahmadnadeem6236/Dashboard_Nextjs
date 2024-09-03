'use client'
import { Textarea } from '@/components/ui/textarea'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import Generate from '/public/images/Generate.svg'
import Tick from '/public/images/tick.svg'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { useMsgStore } from '@/store/store'
import { Button } from '@/components/ui/button'
import { Check, RotateCcw } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface formData {
    text: string
}

export default function CustomMsg() {
    const [data, setData] = useState()
    const { myMsg, setMyMsg } = useMsgStore()
    const [formData, setFormData] = useState<formData | null>({
        text: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                'http://localhost:3000/api/aiMsg',
                { messages: formData.text },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )
            const result = res.data.data.choices[0].message.content
            if (result) {
                console.log(result)
                setData(result)
                console.log(data)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleStore = () => {
        if (data) {
            setMyMsg(data)
            axios.post('http://localhost:4000/api/savemsg', {
                message: data,
            })
            toast.success('Your Message has been Stored!')
            console.log('Hello')
        }
    }

    return (
        <div className="min-h-[140px]  flex flex-col gap-1 justify-center px-5 md:pl-10 w-full bg-white rounded-md mt-6 py-5 border-[1px] border-[#EDE9EA] ">
            <div>
                <Toaster position="top-right" />
            </div>
            <div className="h-full w-full">
                <span className="font-bold text-[18px] text-[#222222] md:text-[20px]">
                    AI Powered Message
                </span>
                <form onSubmit={handleSubmit}>
                    <div
                        className={`relative flex gap-2 pr-10 pt-1
                      ${data ? 'pb-10' : ''}
                      `}
                    >
                        {data ? (
                            <Textarea id="text" name="text" value={data} />
                        ) : (
                            <Textarea
                                id="text"
                                name="text"
                                value={formData.text}
                                onChange={handleChange}
                                placeholder="Type your message here."
                            />
                        )}
                        {data ? (
                            <div className="flex  gap-5 ">
                                <div className="absolute right-[130px] bottom-[-5px]">
                                    <Check
                                        onClick={handleStore}
                                        className=" w-8 h-8 p-1 rounded-sm bg-[#DCFCE7] text-[#30942E]"
                                    />
                                </div>
                                <div className="absolute right-[80px] bottom-[-5px]">
                                    <RotateCcw
                                        onClick={handleSubmit}
                                        className="  w-8 h-8 p-1 rounded-sm bg-[#E8F1FF] text-[#1D58BA]"
                                    />
                                </div>
                            </div>
                        ) : (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div
                                            typeof="submit"
                                            className=" absolute right-[60px] bottom-[-25px]  h-full pr-1"
                                        >
                                            <Image
                                                src={Generate}
                                                alt="generate"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-white rounded-[8px] ml-20 w-[234px] h-[132px]">
                                        <div className="pt-2 w-full h-full">
                                            <span className=" font-semibold text-[12px] text-[#000000]">
                                                Your message should be
                                            </span>
                                            <div className="mt-2 flex gap-2 items-center">
                                                <span>
                                                    <Image
                                                        className="bg-[#30942E] w-[14px] h-[14px] rounded-full p-[3px]"
                                                        src={Tick}
                                                        alt="tick"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                                <span className="text-[12px] font-normal text-[#777777]">
                                                    Max length 50/100/200 words
                                                </span>
                                            </div>
                                            <div className="mt-1 flex gap-2 items-center">
                                                <span>
                                                    <Image
                                                        className="bg-[#30942E] w-[14px] h-[14px] rounded-full p-[3px]"
                                                        src={Tick}
                                                        alt="tick"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                                <span className="text-[12px] font-normal text-[#777777]">
                                                    Max length 50/100/200 words
                                                </span>
                                            </div>
                                            <div className="mt-1 flex gap-2 items-center">
                                                <span>
                                                    <Image
                                                        className="bg-[#30942E] w-[14px] h-[14px] rounded-full p-[3px]"
                                                        src={Tick}
                                                        alt="tick"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                                <span className="text-[12px] font-normal text-[#777777]">
                                                    Max length 50/100/200 words
                                                </span>
                                            </div>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
