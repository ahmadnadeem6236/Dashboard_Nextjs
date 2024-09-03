'use client'
import { DateTimePickerForm } from '@/components/ui/date-time-picker-form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { TimePickerInput } from '@/components/ui/time-picker-input'

export default function ScheduleMsg() {
    return (
        <div className="min-h-[95px] flex flex-col gap-2 justify-center px-5 md:pl-10 w-full bg-white rounded-md mt-6 border-[1px] border-[#EDE9EA] ">
            <div className="h-full w-full flex items-center gap-[32px]">
                <span className="font-bold text-[#222222] text-[18px] md:text-[20px]">
                    Select Mode
                </span>
                <Switch />
                <div>
                    <DateTimePickerForm />
                </div>
            </div>
        </div>
    )
}
