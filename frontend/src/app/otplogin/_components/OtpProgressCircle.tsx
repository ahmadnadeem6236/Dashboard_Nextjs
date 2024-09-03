import React from 'react'
import tick from '/public/images/tick.svg'
import Image from 'next/image'
export interface Props {
    currentStep: number
}

const OtpProgressCircles = (props: Props) => {
    return (
        <div className="w-full h-full flex flex-col justify-between  bg-[#1D58BA] ">
            {/* <Image
            src="/images/select_your_Election.svg"
            width={100}
            height={100}
            alt="sidebar_logo"
            className=""
        /> */}
            {/* Mobile layout */}
            <div className="flex h-full w-full  md:hidden items-center justify-center space-x-12 z-10">
                {[1, 2].map((num, index) => (
                    <React.Fragment key={num}>
                        <div
                            className={`w-8 h-8 flex items-center  justify-center rounded-full ${
                                index === props.currentStep
                                    ? 'text-black  bg-white text-sm font-interMedium'
                                    : 'text-sm font-interMedium'
                            }
          ${index < props.currentStep ? 'bg-[#66BE65] ' : ''} 
            ${
                index > props.currentStep
                    ? 'border-[#84A5DC] border-[1px] border-dashed text-[#B2CCF5] font-interMedium'
                    : ''
            }      
          font-bold`}
                        >
                            {num}
                        </div>
                        {index < 1 && (
                            <div className="h-10 w-0 border-l-2 rotate-90 border-dotted border-gray-400"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex flex-col w-full lg:pt-10  items-center z-10">
                {[1, 2].map((num, index) => (
                    <React.Fragment key={num}>
                        <div className="flex items-center py-2">
                            <div
                                className={`w-[36px] h-[36px] flex items-center justify-center rounded-full ${
                                    index === props.currentStep
                                        ? ' text-black bg-white text-sm font-interMedium'
                                        : '  text-sm font-interMedium'
                                } ${
                                    index < props.currentStep
                                        ? 'bg-[#66BE65] '
                                        : ''
                                } 
            ${
                index > props.currentStep
                    ? 'border-[#84A5DC] border-[1px] border-dashed text-[#B2CCF5] font-interMedium'
                    : ''
            }  
            font-bold`}
                            >
                                {(index < props.currentStep && (
                                    <Image src={tick} alt="tick" />
                                )) ||
                                    num}
                            </div>
                        </div>
                        {index < 1 && (
                            <div className="h-12  w-0 border-l-[2px] border-dotted border-[#84A5DC]"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div>
                <Image
                    src="/images/select_your_Election.svg"
                    width={100}
                    height={100}
                    alt="sidebar_logo"
                    className="hidden md:flex  w-full h-full object-contain opacity-100 transform md:rotate-0 rotate-90"
                />
            </div>
        </div>
    )
}

export default OtpProgressCircles
