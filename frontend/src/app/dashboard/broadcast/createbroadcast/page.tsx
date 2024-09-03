import Link from 'next/link'
import React from 'react'
import ProgressBar from './_components/ProgressBar'
import UploadFile from './_components/UploadFile'

export default function page() {
    return (
        <div className="w-full h-full bg-[#F8F8F8]">
            <div className="pt-4">
                <ProgressBar currentStep={0} />
            </div>
            {/* <Link href={'planmessage/step2'}>Step</Link> */}
            <div className=" max-w-3xl mt-7 px-4 md:px-0  rounded-md  flex flex-col mx-auto overflow-y-scroll">
                <UploadFile />
            </div>
        </div>
    )
}
