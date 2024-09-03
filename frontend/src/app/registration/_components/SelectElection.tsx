'use client'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ProgressCircles from '@/components/ProgressCircles'

const SelectElection = () => {
    const [selectedProfile, setSelectedProfile] = useState(null)
    const navigate = useRouter()

    const profiles = [
        { name: 'Lok Sabha', image: '/images/lok_sabha.svg' },
        { name: 'Vidhan Sabha', image: '/images/lok_sabha.svg' },
        { name: 'Gram Panchayat', image: '/images/gram_p.svg' },
        { name: 'College Election', image: '/images/clg.svg' },
        { name: 'PSU Election', image: '/images/psu.svg' },
        { name: 'Private Election', image: '/images/pvt.svg' },
    ]
    const handleProfileClick = async (index) => {
        setSelectedProfile(index)
        try {
            const profile = profiles[index]
            // Update with the full backend URL if needed
            await axios.post('http://localhost:3000/api/profiles', profile, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            console.log('Profile indexed successfully!')
        } catch (error) {
            console.log('Error indexing profile:', error)
        }
    }
    const handleProceedNext = () => {
        if (selectedProfile !== null) {
            const profileName = profiles[selectedProfile].name
            navigate.push(
                `/cinformation?profile=${encodeURIComponent(profileName)}`
            )
            console.log('Profile Selection:', profileName)
            toast.success('Your Profile indexed successfully!')
        }
    }

    return (
        <div className="flex flex-col md:flex-row w-full  bg-white">
            {/* Left Section with sidebar */}
            <div className="w-full md:w-[207px] h-[63px] md:h-full ">
                <ProgressCircles currentStep={0} />
            </div>

            {/* Right Section */}
            <div className="flex-1 bg-white items-center justify-center w-full h-full flex flex-col   ">
                <div className="flex">
                    <h2 className="text-[32px] mb-4 font-bold  sm:bg-transparent">
                        Select Your Election
                    </h2>
                </div>
                <p className="mb-6 text-[13px] font-interRegular sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Profiles Grid */}
                <div className="flex flex-col items-center mt-0 ">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 cursor-pointer ">
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center ${
                                    selectedProfile === index
                                        ? 'bg-[#D3E4FF] border-blue-600 text-[#1D58BA]'
                                        : 'bg-[#FBFAFA]'
                                } rounded p-2 w-[150px] h-[106px] sm:w-[200px] sm:h-[106px] border transition duration-200 ease-in-out transform cursor-pointer`}
                                onClick={() => handleProfileClick(index)}
                            >
                                <div className="flex items-center  justify-center h-full">
                                    <Image
                                        src={profile.image}
                                        width={100}
                                        height={100}
                                        alt={profile.name}
                                        className="w-11 h-11 rounded border-none mb-1 border-2 transition duration-200 ease-in-out transform"
                                    />
                                </div>
                                <h5 className="text-center text-[#444444] font-interMedium  text-sm  h-10 flex items-center justify-center -mt-4">
                                    {profile.name}
                                </h5>
                            </div>
                        ))}
                    </div>

                    {/* Proceed Next Button */}
                    <div className="flex  sm:justify-start w-full mt-4">
                        <button
                            onClick={handleProceedNext}
                            className="bg-[#FF343E] text-white w-full relative left-[5px] sm:left-0  sm:w-auto py-3 sm:px-12 rounded transition duration-200 ease-in-out hover:bg-[#f81924] font-interSemiBold"
                            disabled={selectedProfile === null}
                        >
                            Proceed Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectElection
