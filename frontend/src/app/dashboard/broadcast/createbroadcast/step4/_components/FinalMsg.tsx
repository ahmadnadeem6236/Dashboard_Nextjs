'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { useMsgStore } from '@/store/store'

export default function FinalMsg() {
    const { myMsg } = useMsgStore()
    return (
        <div className="min-h-[267px] flex flex-col gap-2 justify-center px-5 md:pl-10 w-full bg-white rounded-md mt-6 border-[1px] border-[#EDE9EA] ">
            <div className="h-full w-full">
                <span className="font-bold text-[#222222] text-[18px] md:text-[20px]">
                    Final Message
                </span>
                <div className="relative flex gap-2 md:pr-10 pt-2">
                    <Textarea
                        className="h-[106px] border-[1px] border-[#C7C7C7] bg-[#F8F8F8]"
                        value={myMsg}
                        disabled
                    />
                </div>
                <div className="pr-10 pt-10  ">
                    <RadioGroup
                        className="grid grid-cols-2 grid-flow-row gap-2"
                        defaultValue="all"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-one"
                                id="option-one"
                            />
                            <Label
                                htmlFor="option-one"
                                className="text-[14px] font-normal text-[#000000]"
                            >
                                Add Reciever Name
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label
                                htmlFor="option-two"
                                className="text-[14px] font-normal text-[#000000]"
                            >
                                Add Sender Name
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}
