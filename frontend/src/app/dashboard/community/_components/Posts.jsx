'use client'
import React, { useState } from 'react'
import Profile from './Mock/Profile.svg'
import PostData from './Mock/PostData.json'
import Likes from '/public/images/likes.svg'
import Views from '/public/images/views.svg'
import Share from '/public/images/share.svg'
import { CreatePost } from './Discussion'
import CreateIcon from '/public/images/CreatePost.svg'
import Image from 'next/image'

function Posts() {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow((prev) => !prev)

    const localPost = JSON.parse(localStorage.getItem('Post'))

    return (
        <div className="">
            <div className="max-h-[400px] w-full ">
                <div className=" w-full  ">
                    <div className="w-full mt-6 flex flex-col-reverse">
                        {localPost.map((post, index) => {
                            return (
                                <div
                                    key={index}
                                    className={` mb-[24px] rounded-md bg-white border-[1px] border-[#E1E1E1] w-full ${
                                        post.image
                                            ? 'max-h-[726]'
                                            : 'max-h-[380px] '
                                    }`}
                                >
                                    <div>
                                        <div className="h-[55px] rounded-md bg-white flex items-center justify-between px-7">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    width={30}
                                                    height={30}
                                                    src={Profile}
                                                    alt="Profile Pic"
                                                />
                                                <h2 className=" font-interSemiBold text-[14px] text-[#111111]">
                                                    Yogesh Rawal
                                                </h2>
                                                <span className=" border-[#111111] bg-[#111111] border-[1px] w-[2px] h-[2px] rounded-full relative right-1 top-[4px]"></span>
                                                <p className="font-interMedium text-[12px] text-[#B2B2B2]">
                                                    2 hr ago
                                                </p>
                                            </div>
                                            <div className=" relative bottom-1">
                                                <button>
                                                    <span>.</span>
                                                    <span>.</span>
                                                    <span>.</span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* {post.image &&
                 <div className="w-full">
                   <Image
                   src={post.image}
                   alt='post-images'
                   className=''
                 />
                 </div>
                 } */}
                                        <div className=" pr-[30px] pl-[30px] md:pt-[16px] pb-3 md:pb-0 flex flex-col gap-2">
                                            <h1 className="font-interBold lg:text-[24px] xl:text-[24px] text-lg text-black">
                                                {post.title}
                                            </h1>
                                            <p className=" text-[14px] font-interRegular text-[#333333]">
                                                {post.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex pl-6 pr-6 items-center md:justify-normal md:gap-2 gap-0 justify-evenly  pt-[36px] text-sm text-[#777777] pb-[30px]">
                                            <span className=" flex items-center justify-center rounded w-[66px] h-[26px] border bg-[#FAFAFA]">
                                                <Image
                                                    width={15}
                                                    height={15}
                                                    src={Likes}
                                                    alt="Likes icon"
                                                />
                                                {post.like}
                                            </span>
                                            <span className="flex items-center justify-center w-[66px] h-[26px] border rounded bg-[#FAFAFA]">
                                                <Image
                                                    src={Share}
                                                    width={15}
                                                    height={15}
                                                    alt="Share icon"
                                                />
                                                {post.share}
                                            </span>
                                            <span className="flex items-center justify-center w-16 h-6 rounded border bg-[#FAFAFA]">
                                                <Image
                                                    src={Views}
                                                    alt="Views icon"
                                                    width={15}
                                                    height={15}
                                                />
                                                {post.viewCount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-full">
                                        <div className=" border-t-[1px]  border-[#E1E1E1]   w-full">
                                            <div className="flex items-center justify-around cursor-pointer  xl:gap-10 lg:gap-10 md:gap-10 gap-5 p-3">
                                                <Image
                                                    src="/images/Like.svg"
                                                    alt="like"
                                                    width={15}
                                                    height={15}
                                                    title="like"
                                                />
                                                <div className="border-l border-[#E1E1E1] mx-2 h-4" />
                                                <Image
                                                    src="/images/social_buzz_images/Chat.svg"
                                                    alt="chat"
                                                    width={15}
                                                    height={15}
                                                    title="chat"
                                                />
                                                <div className="border-l border-[#E1E1E1] mx-2 h-4" />
                                                <Image
                                                    className=""
                                                    src="/images/social_buzz_images/Bookmark.svg"
                                                    alt="bookmark"
                                                    width={10}
                                                    height={10}
                                                    title="save"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
