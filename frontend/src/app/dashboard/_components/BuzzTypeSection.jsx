'use client'
import { useState, useEffect } from 'react'
import Likes from '/public/images/likes.svg'
import Views from '/public/images/views.svg'
import Share from '/public/images/share.svg'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import { useLinkStore } from '@/store/store'
import Image from 'next/image'
import CandidateBuzz from './CandidateBuzz'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

const getRelativeTime = (timestamp) => {
    const now = new Date()
    const postTime = new Date(timestamp)
    const differenceInSeconds = Math.floor((now - postTime) / 1000)

    if (differenceInSeconds < 60) {
        return 'Just now'
    } else if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60)
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
    } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600)
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    } else if (differenceInSeconds < 2592000) {
        const days = Math.floor(differenceInSeconds / 86400)
        return `${days} day${days !== 1 ? 's' : ''} ago`
    } else if (differenceInSeconds < 31536000) {
        const months = Math.floor(differenceInSeconds / 2592000)
        return `${months} month${months !== 1 ? 's' : ''} ago`
    } else {
        const years = Math.floor(differenceInSeconds / 31536000)
        return `${years} year${years !== 1 ? 's' : ''} ago`
    }
}

const combineDateTime = (date, time) => {
    return new Date(`${date}T${time}`)
}

export const BuzzTypeSection = () => {
    const myVariable = useLinkStore((state) => state.myVariable)

    const [activeBuzzType, setActiveBuzzType] = useState(null)
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [expandedIndex, setExpandedIndex] = useState(null)

    useEffect(() => {
        if (activeBuzzType === 'social' || activeBuzzType === 'area') {
            setLoading(true)
            const fetchData = async () => {
                try {
                    let url
                    if (activeBuzzType === 'social') {
                        url = `https://es-api-host.onrender.com/socialbuzz?district=${myVariable.toLowerCase()}`
                    } else if (activeBuzzType === 'area') {
                        url = `/fetch?district=${myVariable.toLowerCase()}`
                    }

                    if (url) {
                        const response = await axios.get(url)
                        console.log('API Response:', response.data)
                        const initialPosts = response.data.map((post) => ({
                            ...post.sri_lanka.province.district,
                            showFullText: false,
                            timestamp:
                                activeBuzzType === 'social'
                                    ? combineDateTime(post.timestamp)
                                    : new Date(post.timestamp),
                        }))
                        setPosts(initialPosts)
                    }
                } catch (error) {
                    console.error('Error fetching data:', error.message)
                } finally {
                    setLoading(false)
                }
            }

            fetchData()
        }
    }, [activeBuzzType, myVariable])

    const toggleFullText = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    console.log('posts', posts)

    const getButtonClasses = (buzzType) =>
        `h-[51px] w-full  border border-[#E1E1E1] ${
            activeBuzzType === buzzType
                ? 'bg-[#DAE7FF] border-[#DAE7FF] border-[1px] font-bold text-[#1D58BA]'
                : 'hover:bg-[#DAE7FF] hover:border-b-2 hover:border-r-0 hover:border-l-0 hover:border-t-0 hover:border-[#1D58BA] hover:font-bold hover:text-[#1D58BA]'
        }`

    return (
        <div className=" h-full w-full bg-[#F8F8F8]  ">
            <div className="  flex   font-interMedium items-start h-[52px]  mx-auto mt-0 text-[#777777] z-10 bg-[#F8F8F8]">
                <button
                    onClick={() => setActiveBuzzType('social')}
                    className={getButtonClasses('social')}
                >
                    Social Buzz
                </button>

                <button
                    onClick={() => setActiveBuzzType('area')}
                    className={getButtonClasses('area')}
                >
                    Area Buzz
                </button>

                <button
                    onClick={() => setActiveBuzzType('competitor')}
                    className={getButtonClasses('competitor')}
                >
                    Competitor Buzz
                </button>

                <button
                    onClick={() => setActiveBuzzType('candidate')}
                    className={getButtonClasses('candidate')}
                >
                    Candidate Buzz
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <ClipLoader size={50} color={'#1D58BA'} loading={loading} />
                </div>
            ) : (
                (activeBuzzType === 'social' || activeBuzzType === 'area') && (
                    <div
                        className={`md:fixed h-full pb-[200px]  overflow-y-scroll grid md:grid-cols-2  gap-4 mt-4  mx-auto p-5 ${
                            activeBuzzType === 'area' ? 'pb-16' : ''
                        }`}
                    >
                        {posts.map((post, index) => {
                            // Ensure post and its properties are defined
                            if (
                                !post ||
                                !post[0] ||
                                !post[0].news ||
                                !post[0].news[0]
                            ) {
                                return null
                            }

                            const newsItem = post[0].news[0]
                            const mediaUrl = newsItem.media
                                ? newsItem.media[0]
                                : null
                            const source = newsItem.source || 'Unknown Source'
                            const datetime = newsItem.datetime
                                ? getRelativeTime(newsItem.datetime)
                                : 'Unknown Time'
                            const content =
                                newsItem.content || 'No content available'
                            const likes = post[0]?.news[0]?.likes || 0
                            const shares = post[0]?.news[0]?.shares || 0
                            const views = post[0]?.news[0]?.views || 0

                            return (
                                <div
                                    key={index}
                                    className="border bg-white h-fit rounded-lg relative"
                                >
                                    {/* Conditionally render the image */}
                                    {mediaUrl ? (
                                        <div
                                            className="relative overflow-hidden rounded-t-md"
                                            style={{
                                                width: '100%',
                                                height: '171px',
                                            }}
                                        >
                                            <Image
                                                fill={true}
                                                src={mediaUrl}
                                                alt="Post"
                                                className="mb-2 rounded-t-md"
                                            />
                                        </div>
                                    ) : null}

                                    <div className={`pt-4`}>
                                        <div className="flex items-center pl-6 pr-6 mb-2 gap-[2px] max-h-fit">
                                            <span className="text-[12px] uppercase font-interMedium text-[#777777]">
                                                {source}
                                            </span>
                                            <span className="w-1 h-1 relative left-1 rounded-full bg-[#999999]"></span>
                                            <span className="text-[12px] pl-2 font-interMedium text-[#777777]">
                                                {datetime}
                                            </span>
                                        </div>
                                        <div className="relative pt-4">
                                            <h5 className="text-[16px] pl-6 pr-6 leading-6 font-interMedium mb-2 text-[#222222] break-words">
                                                {expandedIndex === index
                                                    ? content.slice(0, 100)
                                                    : `${content.slice(0, 60)}...`}
                                                {content.length > 60 && (
                                                    <span
                                                        className="text-[#777777] cursor-pointer text-sm px-1"
                                                        onClick={() =>
                                                            toggleFullText(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        {expandedIndex === index
                                                            ? 'Less'
                                                            : 'more'}
                                                    </span>
                                                )}
                                            </h5>
                                        </div>
                                        {activeBuzzType === 'area' && (
                                            <div className="h-10"></div>
                                        )}
                                        {activeBuzzType !== 'area' && (
                                            <div className="flex pl-6 pr-6 items-center md:justify-normal md:gap-2 gap-0 justify-evenly pt-[18px] text-sm text-[#777777] pb-[30px]">
                                                <span className="flex items-center justify-center rounded w-[66px] h-[26px] border bg-[#FAFAFA]">
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={Likes}
                                                        alt="Likes icon"
                                                        className="mr-1 w-3.4 h-3.5"
                                                    />
                                                    {likes >= 1000000
                                                        ? (
                                                              likes / 1000000
                                                          ).toFixed(1) + 'M'
                                                        : likes >= 1000
                                                          ? (
                                                                likes / 1000
                                                            ).toFixed(1) + 'k'
                                                          : likes}
                                                </span>
                                                {post.source !==
                                                    'INSTAGRAM' && (
                                                    <span className="flex items-center justify-center w-[66px] h-[26px] border rounded bg-[#FAFAFA]">
                                                        <Image
                                                            width={20}
                                                            height={20}
                                                            src={Share}
                                                            alt="Share icon"
                                                            className="mr-1 w-3.4 h-3.5"
                                                        />
                                                        {shares}
                                                    </span>
                                                )}
                                                {source.trim() === 'TWITTER' &&
                                                    views !== undefined && (
                                                        <span className="flex items-center justify-center w-16 h-6 rounded border bg-[#FAFAFA]">
                                                            <Image
                                                                width={20}
                                                                height={20}
                                                                src={Views}
                                                                alt="Views icon"
                                                                className="mr-1 w-3.4 h-3.5"
                                                            />
                                                            {views >= 1000000
                                                                ? (
                                                                      views /
                                                                      1000000
                                                                  ).toFixed(1) +
                                                                  'M'
                                                                : views >= 1000
                                                                  ? (
                                                                        views /
                                                                        1000
                                                                    ).toFixed(
                                                                        1
                                                                    ) + 'k'
                                                                  : views}
                                                        </span>
                                                    )}
                                            </div>
                                        )}
                                        <div className="border-t h-11  border-[#E1E1E1] relative bottom-0 left-0 w-full">
                                            <div className="flex items-center  justify-center cursor-pointer md:gap-10 gap-16 p-3">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <button>
                                                                <Image
                                                                    width={20}
                                                                    height={20}
                                                                    src="/images/social_buzz_images/Chat.svg"
                                                                    alt=""
                                                                />
                                                            </button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <span>Chat</span>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <div className="border-l border-[#E1E1E1] mx-2 h-4" />
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <button>
                                                                <Image
                                                                    width={20}
                                                                    height={20}
                                                                    src="/images/social_buzz_images/mention.svg"
                                                                    alt=""
                                                                    onClick={() =>
                                                                        setIsPopupVisible(
                                                                            true
                                                                        )
                                                                    }
                                                                />
                                                            </button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <span>Mention</span>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <div className="border-l border-[#E1E1E1] mx-2 h-4 " />
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Image
                                                                width={17}
                                                                height={17}
                                                                src="/images/social_buzz_images/Bookmark.svg"
                                                                alt=""
                                                            />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <span>Save</span>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            )}
            <div className="h-full md:fixed overflow-scroll">
                {activeBuzzType === 'candidate' && <CandidateBuzz />}
            </div>
        </div>
    )
}
