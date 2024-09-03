'use client'
import React, { useEffect, useRef, useState } from 'react'
import Img from '/public/images/Image.svg'
import Video from '/public/images/Video.svg'
import Close from '/public/images/Close.svg'
import DateIcon from '/public/images/DateIcon.svg'
import UploadPopImg from './UploadPopImg'
import toast from 'react-hot-toast'
import Poll from '/public/images/Poll.svg'
import UploadPopVideo from './UploadPopVideo'
import UploadPopPoll from './UploadPopPoll'
import PollUI from './PollUI'
import Image from 'next/image'

const Discussion = () => {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow((prev) => !prev)
    return (
        <div className="flex shadow-sm">
            <div className="w-full min-h-[247px]  bg-white rounded-md border-[1px] border-[#E1E1E1]">
                <div className="flex flex-col justify-center items-center h-full gap-[20px]">
                    <h1 className="font-bold text-lg sm:text-[20px] leading-7">
                        Start a discussion
                    </h1>
                    <p className="font-normal text-center text-[16px] text-[#666666] leading-7">
                        <button
                            className="text-[#FF343E] px-1"
                            onClick={() => setShow(!show)}
                        >
                            Create the first post
                        </button>
                        and start discussion with team
                    </p>
                </div>
                <div className="block">
                    {show && (
                        <div className=" transition-all ease-in-out ">
                            <CreatePost handleToggle={handleToggle} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Discussion

export function CreatePost({ handleToggle }) {
    const [postData, setPostData] = useState({
        title: '',
        description: '',
    })
    const [uploadPop, setUploadPop] = useState(false)
    const btnRef = useRef(null)

    const storedPoll = JSON.parse(localStorage.getItem('Poll'))

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setPostData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(postData)

            const exitstingData = JSON.parse(localStorage.getItem('Post')) || []

            const upadatedData = [...exitstingData, postData]
            localStorage.setItem('Post', JSON.stringify(upadatedData))

            setPostData({ title: '', description: '' })

            toast.success('Successfully created Post')
        } catch (error) {
            console.error('Error creating account:', error)
            toast.error('Failed to create your account. Please try again.')
        }
    }

    const uploadToggle = (btnName) => {
        btnRef.current = btnName
        setUploadPop((prev) => !prev)
        console.log(btnRef)
    }

    return (
        <div>
            {btnRef.current == 'poll' ||
            btnRef.current == 'img' ||
            btnRef.current == 'video' ? (
                <div className="relative ">
                    {(btnRef.current == 'poll' && (
                        <UploadPopPoll uploadToggle={uploadToggle} />
                    )) ||
                        (btnRef.current == 'img' && (
                            <UploadPopImg uploadToggle={uploadToggle} />
                        )) ||
                        (btnRef.current == 'video' && (
                            <UploadPopVideo uploadToggle={uploadToggle} />
                        ))}
                </div>
            ) : (
                <div className="fixed px-5 inset-0 z-40 bg-[#00000080]">
                    <div className="   z-40 ">
                        <div
                            className={`md:max-w-3xl max-w-2xl mx-auto  rounded-md  bg-white border-[#E1E1E1] border-[1px]
            ${storedPoll ? 'h-[590px]  absolute md:top-[100px] top-[180px] xl:left-[420px] lg:left-[300px] md:left-[230px] left-[80px]' : 'relative  md:left-[104px] top-[110px]'}
         `}
                        >
                            <div>
                                <div className="w-full rounded-t-md h-[55px] bg-[#F8F8F8] border-[#E1E1E1] border-b-[1px] flex justify-between px-10 items-center">
                                    <h2 className=" font-interBold text-lg sm:text-[20px]">
                                        Create Post
                                    </h2>
                                    <span className="cursor-pointer">
                                        <button onClick={handleToggle}>
                                            <Image
                                                src={Close}
                                                alt="close-btn"
                                            />
                                        </button>
                                    </span>
                                </div>
                                <div className="w-full h-fit flex flex-col pt-[32px]">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="h-full flex flex-col"
                                    >
                                        <div className="mb-4 pl-[30px] relative">
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                onChange={handleChange}
                                                className="w-full text-black md:h-[30px] bg-white placeholder:text-[#888888] rounded-md block placeholder:text-[24px] text-[24px] focus:outline-none focus:border-[#DBDBDB]  peer font-interBold"
                                                placeholder="Title (Optional)"
                                                required
                                            />
                                        </div>
                                        {storedPoll ? (
                                            <PollUI />
                                        ) : (
                                            <div className="mb-4 pl-[30px] relative ">
                                                <textarea
                                                    type="text"
                                                    id="description"
                                                    name="description"
                                                    onChange={handleChange}
                                                    className="w-full h-[230px] text-black z-10 bg-white rounded-md py-4 block placeholder:text-[#9999] focus:outline-none focus:border-[#DBDBDB] placeholder:text-[14px] text-[14px] font-interRegular"
                                                    placeholder="Write something..."
                                                    required
                                                ></textarea>
                                            </div>
                                        )}
                                        <div className="   h-[55px] rounded-b-md w-full bg-[#F8F8F8] border-[#E1E1E1] border-t-[1px] flex justify-between px-[45px] items-center ">
                                            <div className="flex gap-[12px]">
                                                <button
                                                    onClick={() =>
                                                        uploadToggle('img')
                                                    }
                                                >
                                                    <Image
                                                        src={Img}
                                                        alt="image upload"
                                                    />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        uploadToggle('video')
                                                    }
                                                >
                                                    <Image
                                                        src={Video}
                                                        alt="video upload"
                                                    />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        uploadToggle('poll')
                                                    }
                                                >
                                                    <Image
                                                        src={Poll}
                                                        alt="poll upload"
                                                    />
                                                </button>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    className=" tracking-wide font-interMedium bg-[#FF343E] text-white p-2 rounded-md hover:bg-red-600 md:w-[122px] w-fit transition-all duration-300 ease-in-out flex items-center justify-center"
                                                    type="submit"
                                                >
                                                    Publish
                                                </button>
                                                <button>
                                                    <Image
                                                        className="p-[4px] h-[30px] w-[30px] bg-[#FFFFFF] border-[1px] border-[#E1E1E1] rounded"
                                                        src={DateIcon}
                                                        alt="dateIcon"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
