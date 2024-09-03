import Image from 'next/image'
import React from 'react'
import tick from '/public/images/tick.svg'

interface Props {
    currentStep: number
}

export default function ProgressBar(props: Props) {
    return (
        <div>
            <div className="flex h-full w-full  items-center justify-center gap-[50px] md:gap-[100px] z-10">
                {[1, 2, 3, 4].map((num, index) => (
                    <React.Fragment key={num}>
                        <div
                            className={`z-10 w-8 h-8 flex   items-center  justify-center rounded-full ${
                                index === props.currentStep
                                    ? 'text-white  bg-[#1D58BA] text-sm font-interMedium'
                                    : 'text-sm font-interMedium'
                            }
              ${index < props.currentStep ? 'bg-[#66BE65] ' : ''}
                ${
                    index > props.currentStep
                        ? ' bg-white border-dashed text-[#B2CCF5] font-interMedium'
                        : ''
                }
              font-bold`}
                        >
                            {index == props.currentStep ? (
                                num
                            ) : (
                                <Image src={tick} alt="tick" className="" />
                            )}
                        </div>
                        {index < 2 && (
                            <div className="absolute h-[280px] md:h-[390px] border-l-2 rotate-90 border-dashed border-[#C1BFBF]"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-center gap-[30px] md:gap-[80px] pt-2">
                {[1, 2, 3, 4].map((num, index) => (
                    <React.Fragment key={num}>
                        <div
                            className={`flex justify-center font-bold flex-row
                        ${
                            index == props.currentStep
                                ? 'text-black'
                                : 'text-[#888888]'
                        }
                        `}
                        >
                            <span className="">
                                Step <span>{num}</span>
                            </span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}
