'use client'
import React from 'react'
import Discussion from './Discussion'
import ProfDetail from './ProfDetail'
import Posts from './Posts'

export default function MainCom() {
    const localPost = JSON.parse(localStorage.getItem('Post'))

    return (
        <div className="flex h-full flex-col px-5 mx-auto gap-10 pt-16  ">
            <div className="z-40">
                <ProfDetail />
            </div>
            <div className="overflow-scroll">
                {localPost ? <Posts /> : <Discussion />}
            </div>
        </div>
    )
}
