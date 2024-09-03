'use client'
import { useState } from 'react'
import Dashboard from '/public/images/dashboard.svg'
import Chat from '/public/images/Chat.svg'
import Chart from '/public/images/Chart.svg'
import dashboardlogo from '/public/images/dashboardlogo.svg'
import Community from '/public/images/Community.svg'
import Calender from '/public/images/Calender.svg'
import AddSpace from '/public/images/AddSpace.svg'
import BroadCast from '/public/images/BroadCast.svg'
import toast from 'react-hot-toast'
import { useSpaceStore } from '@/store/store'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
    const location = usePathname()
    const { space } = useSpaceStore()
    // Function to determine if a link is active
    const isActive = (path: string) => location === path
    const [show, setShow] = useState(false)

    const handleToggle = (): void => setShow((prev) => !prev)

    //   const storedData = JSON.parse(localStorage.getItem('Space' | null)) || [];

    return (
        <div className="flex">
            <div className=" h-screen w-[208px] bg-black text-gray-400 overflow-y-auto">
                <div className="space-y-2 mt-7 ml-0 font-interMedium">
                    {/* logo */}
                    <Link href="/">
                        <Image
                            src={dashboardlogo}
                            alt="Logo"
                            className="pb-5 ml-5  relative bottom-2"
                            style={{ maxWidth: '147.35px', height: 'auto' }}
                        />
                    </Link>
                    <div className=" border-b-[1px] relative bottom-[15px] border-[#2C2C2C]"></div>

                    {/* DashBoard */}
                    <Link
                        href="/dashboard"
                        className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                            isActive('/dashboard')
                                ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                : ''
                        }`}
                    >
                        <Image
                            src={Dashboard}
                            alt="dashboard"
                            className="h-5 w-5 ml-2"
                        />
                        <span className="ml-3">Dashboard</span>
                    </Link>

                    {/* {task} */}
                    <Link
                        href="/dashboard/task"
                        className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                            isActive('/dashboard/task')
                                ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                : ''
                        }`}
                    >
                        <Image
                            src={Chart}
                            alt="task"
                            className=" focus:bg-white h-5 w-5 ml-2"
                        />
                        <span className="ml-3">Task</span>
                    </Link>
                    {/* {message} */}
                    <Link
                        href="/dashboard/broadcast"
                        className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                            isActive('/dashboard/broadcast') ||
                            isActive('/dashboard/broadcast/createbroadcast') ||
                            isActive(
                                '/dashboard/broadcast/createbroadcast/step2'
                            ) ||
                            isActive(
                                '/dashboard/broadcast/createbroadcast/step3'
                            ) ||
                            isActive(
                                '/dashboard/broadcast/createbroadcast/step4'
                            )
                                ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                : ''
                        }`}
                    >
                        <Image
                            src={BroadCast}
                            alt="message"
                            className=" focus:bg-white h-5 w-5 ml-2"
                        />
                        <span className="ml-3">Broadcast</span>
                    </Link>

                    {/* {chat} */}
                    <Link
                        href="/buzz/chat"
                        className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                            isActive('/buzz/chat')
                                ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                : ''
                        }`}
                    >
                        <Image
                            src={Chat}
                            alt="task"
                            className=" focus:bg-white h-5 w-5 ml-2"
                        />
                        <span className="ml-3">Chat</span>
                    </Link>

                    {/* Community */}
                    <Link
                        href="/dashboard/community"
                        className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                            isActive('/dashboard/community')
                                ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                : ''
                        }`}
                    >
                        <Image
                            src={Community}
                            alt="task"
                            className=" focus:bg-white h-5 w-5 ml-2"
                        />
                        <span className="ml-3">Community</span>
                    </Link>
                    <Link
                        href="/dashboard/calender"
                        className={`flex items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${
                            isActive('/dashboard/calender')
                                ? 'bg-gray-800 text-white border-l-2 border-l-red-500'
                                : ''
                        }`}
                    >
                        <Image
                            src={Calender}
                            alt="calender"
                            className=" focus:bg-white h-5 w-5 ml-2"
                        />
                        <span className="ml-3">Calender</span>
                    </Link>
                </div>

                {/* Separator */}
                <div className=" border-b-[1px] relative top-3 border-[#2C2C2C] mb-6"></div>

                {/* SpaceForm */}
                <button
                    onClick={handleToggle}
                    className={`flex w-full items-center h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white}`}
                >
                    <span className="ml-3">MY SPACE</span>
                    <Image
                        src={AddSpace}
                        alt="Create-Space"
                        className=" focus:bg-white h-5 w-5 ml-12"
                    />
                </button>

                {/* Spaces */}
                {/* {Array.from({length: space}).map((_,index) => (
          <div key={index} className="h-[150px] overflow-scroll transition-all ease-in-out w-full">
          {storedData?.map((item,index) => (
             <Link
             key={index}
            href={"/buzz/space"}
             className={` w-full flex items-center gap-3 h-[52px] p-2 border-l-2 border-transparent hover:border-l-2 hover:border-l-red-500 hover:rounded-l hover:bg-gray-700 cursor-pointer hover:text-white ${isActive("/buzz/space")
                 ? "bg-gray-800 text-white border-l-2 border-l-red-500"
                 : ""
               }`}
           >
             <Image src={SpaceIcon} alt="space" className=" focus:bg-white h-5 w-5 ml-2" />
               <span key={index} className="ml-3">{item.SpaceName}</span>
           </Link>

          ))}
          </div>
        ))} */}
            </div>
            {/* RightSideForm */}
            <div className="z-50">
                {show ? <CreateSpace handleToggle={handleToggle} /> : ''}
            </div>
        </div>
    )
}

export default Sidebar

function CreateSpace({ handleToggle }: { handleToggle: void }) {
    const [formData, setFormData] = useState({
        SpaceName: '',
        selectPrivacy: '',
    })

    const [showDropdown, setShowDropdown] = useState(false)

    const { space, increamentSpace } = useSpaceStore()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleChangeDropDown = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
        setShowDropdown(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData)

            const existingData = JSON.parse(localStorage.getItem('Space')) || []

            const updatedData = [...existingData, formData]
            localStorage.setItem('Space', JSON.stringify(updatedData))

            increamentSpace()
            setFormData({ SpaceName: '', selectPrivacy: '' })
            console.log(space)

            toast.success('Space has been successfully Created!')
        } catch (error) {
            console.error('Error creating account:', error)
            toast.error('Failed to create your account. Please try again.')
        }
    }

    const privacyData = [
        { privacy: 'Public', val: '1' },
        { privacy: 'Private', val: '2' },
    ]

    return (
        <div className="fixed bg-[#00000080] inset-0 z-50">
            <div className=" fixed bg-white z-50  right-[1px] top-0 w-[500px]">
                <div className="bg-white h-[900px]">
                    <div className="w-full h-[190px] bg-gradient-to-b from-[#DAE9F9] to-[#FFFFFF] flex">
                        <h1 className="text-black font-interBold font-bold relative left-[70px] top-[70px] text-3xl ">
                            Create <span className="text-[#1D58BA]">Space</span>
                        </h1>
                    </div>

                    <div className="relative bottom-8 left-[20px]">
                        <form onSubmit={handleSubmit} className="rounded-lg">
                            {/* Form fields */}
                            <div className="mb-[20px] relative left-[50px]">
                                <input
                                    type="text"
                                    id="SpaceName"
                                    name="SpaceName"
                                    value={formData.SpaceName}
                                    onChange={handleChange}
                                    className="w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] px-5 rounded block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                    placeholder=" "
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    htmlFor="SpaceName"
                                    className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 left-5 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                                >
                                    Space Name
                                </label>
                            </div>

                            <div className="mb-[20px] relative left-[50px]">
                                <select
                                    id="privacy"
                                    name="selectPrivacy"
                                    value={formData.selectPrivacy}
                                    onChange={handleChangeDropDown}
                                    className="w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                    placeholder=""
                                    required
                                >
                                    <option
                                        htmlFor="privacy"
                                        className=" absolute text-sm text-[#888888] px-1 duration-300 transform -translate-y-4 scale-75 top-2 left-5 z-1 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                                    >
                                        Select Privacy
                                    </option>
                                    {privacyData.map((data) => (
                                        <option key={data.val}>
                                            {data.privacy}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="bg-[#FCFCFC] border-[1px] border-[#E1E1E1] py-5 relative top-[310px] right-5">
                                <div className="flex justify-end pr-20 gap-4">
                                    <button
                                        className="w-full relative items-center justify-center text-center border-[1px] border-[#E1E1E1] md:w-[96px] h-[48px] bg-[#FFFFFF] hover:bg-[#f71823] text-black rounded transition duration-200 font-interSemiBold text-sm"
                                        onClick={handleToggle}
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full relative items-center justify-center text-center md:w-[129px] h-[48px] bg-[#FF343E] hover:bg-[#f71823] text-white rounded transition duration-200 font-interSemiBold text-sm"
                                    >
                                        Create Space
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
