'use client'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { generateDate, months } from './genCalender'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Calender() {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const currentDate = dayjs()
    const [today, setToday] = useState(currentDate)
    const [selectDate, setSelectDate] = useState(currentDate)
    return (
        <div className="flex px-5 md:px-10 pt-10  ">
            <div className="w-full rounded-md border-[1px] border-[#E1E1E1]">
                <div className="flex justify-between items-center rounded-md bg-[#FFFFFF] p-3">
                    <div className="flex gap-2">
                        <h1 className=" select-none text-[16px] font-semibold">
                            {months[today.month()]}
                        </h1>
                        <h1 className="select-none text-[16px] font-semibold">
                            {today.year()}
                        </h1>
                    </div>
                    <div className="flex gap-10 items-center ">
                        <ChevronLeft
                            className=" text-[#000000] w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(today.month(today.month() - 1))
                            }}
                        />

                        <ChevronRight
                            className="text-[#000000] w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                            onClick={() => {
                                setToday(today.month(today.month() + 1))
                            }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-7 bg-[#F8F8F8] ">
                    {days.map((day, index) => {
                        return (
                            <h1
                                key={index}
                                className="text-sm text-[#000000] font-medium border-x-[1px] border-t-[1px] boder-[#E1E1E1] text-center h-[36px]  grid place-content-center  select-none"
                            >
                                {day}
                            </h1>
                        )
                    })}
                </div>

                <div className=" grid grid-cols-7 ">
                    {generateDate(today.month(), today.year()).map(
                        ({ date, currentMonth, today }, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" border-[1px] border-[#E1E1E1] md:h-[125px] h-[50px] justify-items-center	 text-sm "
                                >
                                    <div
                                        className={cn(
                                            'text-center',
                                            currentMonth
                                                ? 'bg-white'
                                                : 'text-black ',
                                            today ? 'bg-[#FFFFFF]' : ' ',
                                            selectDate
                                                .toDate()
                                                .toDateString() ===
                                                date.toDate().toDateString()
                                                ? 'bg-[#D3E4FF] text-black'
                                                : '',
                                            'w-full h-full transition-all cursor-pointer select-none'
                                        )}
                                        onClick={() => {
                                            setSelectDate(date)
                                        }}
                                    >
                                        {date.date()}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}
