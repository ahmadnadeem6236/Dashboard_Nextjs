'use client'
import React, { useState } from 'react'
import SortArrow from '/public/images/SortArrow.svg'
import SortMobArrow from '/public/images/SortMobArrow.svg'
import attach from '/public/images/attach.svg'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import { Multiselect } from 'multiselect-react-dropdown'
import Delete from '/public/images/Delete.svg'
import { nanoid } from 'nanoid'
import axios from 'axios'

const CalenderHeader = () => {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow((prev) => !prev)

    return (
        <div className=" pt-4 xl:pl-10 lg:pl-10 w-full flex flex-col justify-center items-center md:flex-row md:gap-[50px] gap-5">
            <div className="w-full flex xl:block items-center justify-center ">
                <h1 className=" font-interBold md:text-3xl text-[24px] leading-4 font-bold">
                    Calender
                </h1>
            </div>
            <div className=" flex lg:pl-240px] xl:pl-[540px] ">
                <button
                    className=" h-[40px] tracking-wide font-interMedium bg-[#FF343E] text-white p-2  rounded-md hover:bg-red-600 md:w-[125px] w-[120px] transition-all duration-300 ease-in-out flex items-center justify-center"
                    onClick={() => setShow(!show)}
                >
                    Create Event
                </button>
            </div>
            <div className=" hidden md:block">
                {show && <CreateEvent handleToggle={handleToggle} />}
            </div>
        </div>
    )
}

export default CalenderHeader

export function CreateEvent({ handleToggle, addTask }) {
    const [formData, setFormData] = useState({
        eventName: '',
        from: '',
        fromTime: '',
        to: '',
        toTime: '',
        location: '',
        url: '',
    })

    // Location Data
    const LocationData = [
        { name: 'YouTube', val: 'Y' },
        { name: 'Google Meet', val: 'G' },
        { name: 'Live', val: 'L' },
        { name: 'Zoom', val: 'Z' },
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(response.status)
            if (response.status === 201) {
                setFormData({
                    taskName: '',
                    selectAssignee: [],
                    selectPriority: '',
                    selectCategory: '',
                    dueDate: '',
                    description: '',
                    fileName: '',
                })
                toast.success('Your Event has been successfully Created!')
                handleToggle()
            }
        } catch (error) {
            console.error('Error creating task:', error)
            toast.error('Failed to create task. Please try again.')
        }
    }

    return (
        <div className="fixed bg-[#00000080] inset-0 z-50">
            <div className="fixed bg-white z-50 right-0 top-0 w-[461px] h-full">
                <div className="bg-white flex flex-col h-full w-full">
                    <Toaster position="top-right" />
                    <div className="w-full pt-20 h-[110px] bg-gradient-to-b from-[#DAE9F9] to-[#FFFFFF] flex items-center pl-[51px]">
                        <h1
                            className="text-black font-interBold font-bold text-[28px]
              "
                        >
                            Create <span className="text-[#1D58BA]">Event</span>
                        </h1>
                    </div>

                    <div className="flex flex-col pt-10 w-full h-full">
                        <form
                            onSubmit={handleSubmit}
                            className=" h-full  w-full"
                        >
                            <div className="w-full h-full flex flex-col items-center justify-between ">
                                <div>
                                    <div className="relative mb-[15px]">
                                        <input
                                            type="text"
                                            id="eventName"
                                            name="eventName"
                                            value={formData.eventName}
                                            onChange={handleChange}
                                            className=" custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] px-5 rounded block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                            placeholder=""
                                            autoComplete="off"
                                            required
                                        />
                                        <label
                                            htmlFor="task"
                                            className="absolute left-3   text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                                        >
                                            Event Name
                                        </label>
                                    </div>
                                    <div className="mb-[15px] flex gap-[25px]">
                                        <input
                                            pattern="\d{4}-\d{2}-\d{2}"
                                            type="date"
                                            id="from"
                                            name="from"
                                            value={formData.from}
                                            onChange={handleChange}
                                            className="custom-shadow w-full md:w-[220px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                            required
                                        />
                                        <input
                                            pattern="\d{4}-\d{2}-\d{2}"
                                            type="time"
                                            id="fromTime"
                                            name="fromTime"
                                            value={formData.fromTime}
                                            onChange={handleChange}
                                            className="custom-shadow w-full md:w-[116px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                            required
                                        />
                                    </div>
                                    <div className="mb-[15px] flex gap-[25px] ">
                                        <input
                                            pattern="\d{4}-\d{2}-\d{2}"
                                            type="date"
                                            id="to"
                                            name="to"
                                            value={formData.to}
                                            onChange={handleChange}
                                            className="custom-shadow w-full md:w-[220px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                            required
                                        />
                                        <input
                                            pattern="\d{4}-\d{2}-\d{2}"
                                            type="time"
                                            id="toTime"
                                            name="toTime"
                                            value={formData.toTime}
                                            onChange={handleChange}
                                            className="custom-shadow w-full md:w-[116px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                            required
                                        />
                                    </div>

                                    <div className="relative mb-[15px]">
                                        <select
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="relative custom-shadow  md:w-[360px] z-50  text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-2 py-4  border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
                                            required
                                        >
                                            <option
                                                value=""
                                                className="text-[#8"
                                            >
                                                Location
                                            </option>
                                            {LocationData.map((item) => (
                                                <option
                                                    className="hidden focus:visible"
                                                    key={item.val}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                        <label
                                            htmlFor="location"
                                            className="absolute px-2 text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-50 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
                                        >
                                            Location
                                        </label>
                                    </div>
                                    <div className="relative mb-[15px]">
                                        <input
                                            type="text"
                                            id="url"
                                            name="url"
                                            value={formData.url}
                                            onChange={handleChange}
                                            className=" custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] px-5 rounded block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                            placeholder=""
                                            autoComplete="off"
                                            required
                                        />
                                        <label
                                            htmlFor="task"
                                            className="absolute left-3   text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                                        >
                                            URL
                                        </label>
                                    </div>
                                </div>
                                <div className="  border-t-[1px] border-[#E1E1E1]    w-full h-[80px] ">
                                    <div className="flex  justify-end items-center h-full pr-12 gap-4">
                                        <button
                                            className="w-full hover:text-white items-center justify-center text-center border-[1px] border-[#E1E1E1] md:w-[96px] h-[48px] bg-[#FFFFFF] hover:bg-[#f71823] text-black rounded transition duration-200 font-interSemiBold"
                                            onClick={handleToggle}
                                            type="button"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="w-full items-center justify-center text-center md:w-[129px] h-[48px] bg-[#FF343E] hover:bg-[#f71823] text-white rounded transition duration-200 font-interSemiBold"
                                        >
                                            Create Task
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
