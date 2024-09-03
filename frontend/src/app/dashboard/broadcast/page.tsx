import React from 'react'
import MsgHeader from './_components/MsgHeader'
import MsgTable from './_components/MsgTable'

export default function page() {
    return (
        <div className=" w-full h-full flex flex-col  bg-[#F8F8F8]">
            <div className=" w-full h-[100px] flex">
                <MsgHeader />
            </div>
            <div className=" w-full h-full ">
                <MsgTable />
            </div>
        </div>
    )
}
