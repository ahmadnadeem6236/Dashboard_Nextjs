import Image, { StaticImageData } from 'next/image'
import React from 'react'
import ProfilePic from './Mock/Ranil.svg'
import Score from './Mock/Score.svg'
import scoreGreen from './Mock/scoreGreen.svg'
import scoreOrange from './Mock/scoreOrange.svg'
import scoreRed from './Mock/scoreRed.svg'
import Population from './Mock/population.svg'
import Electorate from './Mock/electorate.svg'
import Tasks from './Mock/tasks.svg'
import Msg from './Mock/msg.svg'
import CandidateCard from '@/components/CandidateCard'
import { CandidateChart } from '@/components/CandidateChart'

interface Data {
    image: StaticImageData
    title: string
    description: string
}

const databackend: Data[] = [
    {
        image: Population,
        title: '30,10,500',
        description: 'Constituency Popoulation',
    },
    {
        image: Electorate,
        title: '1,85,500',
        description: 'Constituency Electorate',
    },
    {
        image: Population,
        title: '10,200',
        description: 'Number of Members',
    },
    {
        image: Tasks,
        title: '10/20',
        description: 'Task Completed',
    },
    {
        image: Msg,
        title: '10/20',
        description: 'Approved Message ',
    },
]

export default function CandidateBuzz() {
    return (
        <div className="  w-full px-2 md:px-5 pt-[30px]">
            <div className=" ">
                <div className=" w-full h-[140px] flex justify-around bg-[#FFFCF2] border-[1px] boder-[#FFF2C7]">
                    <div className="flex items-center gap-2 md:gap-4">
                        <Image
                            className="w-16"
                            src={ProfilePic}
                            width={80}
                            height={80}
                            alt="Profile Pic"
                        />
                        <div className="flex flex-col">
                            <span className="text-[22px] font-medium ">
                                Hi{' '}
                                <span className="text-[22px] font-bold">
                                    {' '}
                                    Ranil
                                </span>
                            </span>
                            <span className="font-normal text-[13px]">
                                Your Overall Support Index Score{' '}
                            </span>
                        </div>
                    </div>
                    <div className=" relative flex items-center">
                        <Image
                            className="w-12 md:w-full"
                            src={Score}
                            alt="score"
                            width={55.65}
                            height={60}
                        />
                        <span className="absolute left-[10px] md:left-[20px] text-white font-extrabold text-[34px] ,md:text-[30px]">
                            76
                        </span>
                    </div>
                </div>
                <div className="h-[70px] bg-[#FFFFFF] border-[1px] border-[#FFF2C7] ">
                    <div className="flex justify-center px-2 md:px-0  pt-4 md:gap-24 gap-3">
                        <div className=" relative md:w-[116px] h-[34px] flex items-center gap-2">
                            <Image
                                className="w-8 md:w-full"
                                src={scoreGreen}
                                alt="score-green"
                            />
                            <span className="absolute left-[10px] text-[14px] md:text-[18.1px] font-extrabold text-white">
                                10
                            </span>
                            <span className="leading-[16px]  font-normal text-[12px] ">
                                Conmmunity Engagement
                            </span>
                            <span className="border-r-[1px] border-[#FFF2C7] h-[30px] pl-2 md:pl-9"></span>
                        </div>
                        <div className=" relative md:w-[116px] h-[34px] flex items-center gap-2">
                            <Image
                                className="w-8 md:w-full"
                                src={scoreOrange}
                                alt="score-green"
                            />
                            <span className="absolute left-[10px] text-[14px] md:text-[18.1px] font-extrabold text-white">
                                10
                            </span>
                            <span className="leading-[16px] font-normal text-[12px] ">
                                Issues
                            </span>
                            <span className="border-r-[1px] border-[#FFF2C7] h-[30px] pl-5 md:pl-9"></span>
                        </div>
                        <div className=" relative md:w-[116px] h-[34px] flex items-center gap-2">
                            <Image
                                className="w-8 md:w-full"
                                src={scoreRed}
                                alt="score-green"
                            />
                            <span className="absolute left-[10px] text-[14px] md:text-[18.1px] font-extrabold text-white">
                                10
                            </span>
                            <span className="leading-[16px] font-normal text-[12px] ">
                                Demographic Alignment
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 grid-flow-row pt-8 px-2 md:px-0 gap-4">
                    {databackend.map((item, index) => (
                        <div key={index} className="row-auto">
                            <CandidateCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
                <div className="pt-10 h-full px-2 md:px-0">
                    <CandidateChart />
                </div>
            </div>
        </div>
    )
}
