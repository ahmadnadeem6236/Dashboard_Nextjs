'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import ProgressCircles from '@/components/ProgressCircles'
import { useRouter } from 'next/navigation'

const CreateTeam = () => {
    const navigate = useRouter()
    const [formData, setFormData] = useState({
        membership: '',
        fullName: '',
        email: '',
        mobileNumber: '',
        aadharNumber: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post(
                'http://localhost:3000/api/teams',
                formData
            )
            if (response.status === 201) {
                toast.success('Your team has been successfully created!')
                navigate.push('/buzz')
            } else {
                toast.error('Failed to create team.')
            }
        } catch (error) {
            console.error('Error creating team:', error)
            toast.error('An error occurred while creating the team.')
        }
    }

    return (
        <div className="flex flex-col md:flex-row w-full ">
            {/* left side */}
            <div className=" w-full md:w-[207px] h-[63px] md:h-full">
                <ProgressCircles currentStep={2} />
            </div>

            {/* right side */}
            <div className="flex-1 items-center justify-start   p-4 md:p-6 flex flex-col pt-28 md:pt-0 ">
                <div className="max-w-md mx-auto pt-1  md:pt-20">
                    <h2 className="text-[32px] font-bold text-[#222222] pb-2 ">
                        Create Your Team
                    </h2>
                    <p className="text-[#222222] pb-6 text-[14px] font-normal ">
                        Please provide us your team member's information
                    </p>
                    <form onSubmit={handleSubmit} className="rounded-lg ">
                        <div className="pb-4 relative">
                            <select
                                id="membership"
                                name="membership"
                                value={formData.membership}
                                onChange={handleSelectChange}
                                className="custom-shadow w-full md:w-[440px] md:h-[54px] border-[1px] font-normal border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4"
                                required
                            >
                                <option value="">Member Role</option>
                                <option value="socialMediaManager">
                                    Social Media Manager
                                </option>
                                <option value="vidhanSabha">
                                    Field Incharge
                                </option>
                                <option value="gramPanchayat">Volunteer</option>
                                <option value="collegeElection">
                                    Campaign manager
                                </option>
                                <option value="psuElection">Treasurer</option>
                                <option value="psuElection">
                                    Office Incharge
                                </option>
                            </select>
                        </div>

                        <div className="mb-4 relative">
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className=" custom-shadow  w-full md:w-[440px] text-black md:h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="fullName"
                                className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
                            >
                                Full Name
                            </label>
                        </div>

                        <div className="mb-4 relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="custom-shadow  w-full md:w-[440px] text-black md:h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
                            >
                                Email ID
                            </label>
                        </div>

                        <div className="mb-4 relative">
                            <input
                                type="text"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                className=" custom-shadow  w-full md:w-[440px] text-black md:h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="mobileNumber"
                                className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
                            >
                                Mobile Number
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full relative items-center justify-center text-center md:w-[440px] h-[50px] bg-[#FF343E] hover:bg-[#f71823] text-white px-5 rounded-md transition duration-200 font-interSemiBold"
                        >
                            Create Team
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam
