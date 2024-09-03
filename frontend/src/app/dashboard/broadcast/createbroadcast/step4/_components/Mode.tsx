'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function Mode() {
    return (
        <div className="min-h-[95px] flex flex-col gap-2 justify-center px-5 md:pl-10 w-full bg-white rounded-md mt-6 border-[1px] border-[#EDE9EA] ">
            <div className="h-full w-full flex items-center gap-[32px]">
                <span className="font-bold text-[#222222] text-[18px] md:text-[20px]">
                    Select Mode
                </span>
                <div className="  ">
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
                                SMS
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
                                Whats App
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}
