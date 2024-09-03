'use client'
import React, { useState } from 'react'
import TaskHeader from './Taskheader'
import MainTask from './MainTask'

export default function MainTaskCom() {
    const [tasks, setTasks] = useState({
        'TO DO': [],
        'IN PROGRESS': [],
        'IN REVIEW': [],
        DONE: [],
    })

    const addTask = (newTask) => {
        console.log('Adding task:', newTask)
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks }
            updatedTasks['TO DO'].push(newTask)
            console.log('Updated tasks:', updatedTasks)
            return updatedTasks
        })
    }
    return (
        <div className=" w-full max-w-9xl mx-auto  bg-[#F8F8F8]">
            <div className="  h-[100px]">
                <TaskHeader addTask={addTask} />
            </div>
            <div className="h-full ">
                <MainTask tasks={tasks} />
            </div>
        </div>
    )
}
