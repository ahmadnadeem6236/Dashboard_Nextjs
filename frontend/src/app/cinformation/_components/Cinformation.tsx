'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import partiesData from '@/data/parties.json'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import ProgressCircles from '@/components/ProgressCircles'
import { useMapContext } from '@/app/context/MapContext'

export default function Cinformation() {
    const navigate = useRouter()
    const location = usePathname()
    const search = useSearchParams()
    const { setSelectedCity, setSelectedCityCoords } = useMapContext()

    const [formData, setFormData] = useState({
        membership: '',
        fullName: '',
        email: '',
        mobileNumber: '',
        aadharNumber: '',
        constituency: '',
        party: '',
    })

    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        const membershipParam = search.get('profile')
        console.log(membershipParam)
        if (membershipParam) {
            setFormData((prevData) => ({
                ...prevData,
                membership: decodeURIComponent(membershipParam),
            }))
        }
    }, [location])

    const parties = partiesData

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleChangeDropDown = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
        setShowDropdown(true)
    }

    const handlePartyChange = (selectedParty: string) => {
        setFormData((prevData) => ({
            ...prevData,
            party: selectedParty,
        }))
        setShowDropdown(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            // Sending form data to the backend
            const response = await axios.post(
                `${process.env.Fetchapi}/addinformation`,
                formData
            )

            console.log(response.status)
            toast.success('Your Account has been successfully Created!')
            if (response.status === 201) {
                navigate.push('/createteam')
            }
        } catch (error) {
            console.error('Error creating account:', error)
            toast.error('Failed to create your account. Please try again.')
        }
    }

    const filterParties = (input: string) => {
        return parties.filter(
            (party: { name: string; value: string }) =>
                party.name.toLowerCase().includes(input.toLowerCase()) ||
                party.value.toLowerCase().includes(input.toLowerCase())
        )
    }

    const filterMembers = (input: string) => {
        return membershipOptions.filter(
            (member) =>
                member.toLowerCase().includes(input.toLowerCase()) ||
                member.toLowerCase().includes(input.toLowerCase())
        )
    }

    const membershipOptions = [
        'Lok Sabha',
        'Vidhan Sabha',
        'Gram Panchayat',
        'College Election',
        'PSU Election',
        'Private Election',
    ]
    const handleConstituencyChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const constituency = e.target?.value
        setFormData((prevData) => ({
            ...prevData,
            constituency,
        }))
        setSelectedCity(constituency) // Update context with selected constituency
        // Assuming you have a function to get city coordinates
        const cityCoords = getCityCoordinates(constituency)
        if (cityCoords) {
            setSelectedCityCoords(cityCoords) // Update context with coordinates
        }
    }

    // Mock function to get city coordinates, replace with actual logic
    const getCityCoordinates = (city) => {
        // Replace with actual logic to get city coordinates
        const cityCoordinates = {
            'Example City': [12.9716, 77.5946], // Replace with real coordinates
        }
        return cityCoordinates[city] || null
    }
    return (
        <div className="flex flex-col md:flex-row w-full">
            {/* left side */}
            <div className="w-full md:w-[207px] h-[63px] md:h-full">
                <ProgressCircles currentStep={1} />
            </div>
            {/* right side */}
            <div className="flex-1 items-center md:pt-10 justify-start flex flex-col ">
                <div className="max-w-md mx-auto ">
                    <Toaster position="top-right" />
                    <h2 className="text-[32px] font-bold text-[#222222] mb-2 ">
                        Your Information
                    </h2>
                    <p className="text-[#222222] text-[14px] font-normal mb-6 ">
                        Please provide us your correct information
                    </p>
                    <form onSubmit={handleSubmit} className="rounded">
                        {/* Form fields */}
                        <div className="mb-4 relative">
                            <input
                                id="membership"
                                name="membership"
                                value={formData.membership}
                                className="custom-shadow  text-start items-center justify-start w-full md:w-[440px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded px-5 py-2 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer appearance-none font-normal"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="membership"
                                className=" absolute text-sm text-[#888888] px-1 duration-300 transform -translate-y-4 scale-75 top-2 left-5 z-1 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                            >
                                Membership
                            </label>
                        </div>

                        <div className="mb-4 relative">
                            <input
                                type="text"
                                id="party"
                                name="party"
                                value={formData.party}
                                onChange={handleChangeDropDown}
                                className=" custom-shadow  w-full md:w-[440px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
                                placeholder=" "
                                autoComplete="off"
                                required
                            />
                            <label
                                htmlFor="party"
                                className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 left-5 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                            >
                                Select Party
                            </label>
                            {showDropdown && formData.party.length > 0 && (
                                <div className="absolute mt-1 w-full max-h-60 overflow-y-auto bg-white shadow-md rounded-md border border-gray-300 custom-scrollbar z-20">
                                    {filterParties(formData.party).map(
                                        (party) => (
                                            <div
                                                key={party.value}
                                                className="px-4 py-2 cursor-pointer font-interRegular hover:bg-gray-100"
                                                onClick={() =>
                                                    handlePartyChange(
                                                        party.value
                                                    )
                                                }
                                            >
                                                {party.name}
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="mb-4 relative">
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className=" custom-shadow  w-full md:w-[440px] text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
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
                                className=" custom-shadow  w-full md:w-[440px] text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
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
                                className=" custom-shadow  w-full md:w-[440px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
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
                        <div className="mb-4 relative">
                            <select
                                id="constituency"
                                name="constituency"
                                value={formData.constituency}
                                onChange={handleConstituencyChange}
                                className=" custom-shadow  w-full z-50 md:w-[440px] text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-2 py-4  border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-normal"
                                required
                            >
                                <option value="" className="text-[#888888]">
                                    Constituency
                                </option>
                                <option value="Delhi">DELHI</option>
                                <option value="Sri Lanka">SRI LANKA</option>
                                <option value="Dhanbad">DHANBAD</option>
                                <option value="Haryana">HARYANA</option>
                                <option value="Maharashtra">MAHARASHTRA</option>
                            </select>
                            <label
                                htmlFor="constituency"
                                className="absolute px-2 text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-50 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
                            >
                                Constituency
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full relative items-center justify-center text-center md:w-[440px] h-[50px] bg-[#FF343E] hover:bg-[#f71823] text-white px-5 rounded-md transition duration-200 font-interSemiBold"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
