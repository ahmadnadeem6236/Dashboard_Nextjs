'use client'
import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import update from 'immutability-helper'
import TaskCol from './TaskCol'
import Card from './Card'
import { nanoid } from 'nanoid'
import highP from '/public/images/priority/highP.svg'
import TaskDetails from './TaskDetails'

function MainTask({ tasks }) {
    console.log('Tasks received in MainTask:', tasks)
    const columnsFromBackend = Object.keys(tasks).map((key) => ({
        id: nanoid(),
        name: key,
        items: tasks[key],
    }))

    const [columns, setColumns] = useState(columnsFromBackend)
    const [isTaskDetailsVisible, setIsTaskDetailsVisible] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)
    const [newDescription, setNewDescription] = useState('')
    const [dueDate, setNewDueDate] = useState('')

    function onDragEnd(result) {
        if (!result.destination) return

        const { source, destination } = result
        if (source.droppableId !== destination.droppableId) {
            setColumns((old) => {
                const sourceColumnIndex = old.findIndex(
                    (column) => column.id === source.droppableId
                )
                const destinationColumnIndex = old.findIndex(
                    (column) => column.id === destination.droppableId
                )
                const dragCard = old[sourceColumnIndex].items[source.index]
                return update(old, {
                    [sourceColumnIndex]: {
                        items: { $splice: [[source.index, 1]] },
                    },
                    [destinationColumnIndex]: {
                        items: { $splice: [[destination.index, 0, dragCard]] },
                    },
                })
            })
        } else {
            setColumns((old) => {
                const columnIndex = old.findIndex(
                    (column) => column.id === source.droppableId
                )
                const dragCard = old[columnIndex].items[source.index]
                return update(old, {
                    [columnIndex]: {
                        items: {
                            $splice: [
                                [source.index, 1],
                                [destination.index, 0, dragCard],
                            ],
                        },
                    },
                })
            })
        }
    }

    const handleCardClick = (item) => {
        console.log('Card clicked:', item)
        setSelectedPost(item)
        setNewDescription(item.description || '')
        setNewDueDate(item.dueDate || '')
        setIsTaskDetailsVisible(true)
    }

    const handleCloseTaskDetails = () => {
        setIsTaskDetailsVisible(false)
        setSelectedPost(null)
    }

    const handleEdit = () => {
        alert('Edit Post')
    }

    const handleUpload = () => {
        alert('Upload Post')
    }

    // Extract assignees from selectedPost
    const assignees = selectedPost ? selectedPost.assignees : []

    const getInitial = (name) => {
        console.log('Getting initial for:', name) // Debug line
        return name ? name.charAt(0).toUpperCase() : ''
    }

    return (
        <div className="">
            <div
                className={`transition-all duration-300 ${
                    isTaskDetailsVisible ? 'blur-[1px]' : ''
                }`}
            >
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className=" px-10 w-full flex flex-col justify-center xl:flex-row gap-2 overflow-auto">
                        {columns.map((column) => (
                            <div key={column.id}>
                                <TaskCol
                                    id={column.id}
                                    name={column.name}
                                    size={column.items.length}
                                >
                                    {column.items.map((item, index) => {
                                        console.log(
                                            'Item category:',
                                            item.category
                                        )

                                        return (
                                            <Card
                                                id={item.id}
                                                index={index}
                                                key={item.id}
                                                onClick={() =>
                                                    handleCardClick(item)
                                                }
                                                assignees={item.assignees}
                                                images={item.attachments}
                                            >
                                                <div className="md:w-[256px]  overflow-hidden  w-[200px] cursor-pointer  h-[133px] flex-col md:flex justify-evenly p-2 px-3 space-y-3 pt-5">
                                                    <div className="md:w-[233px]  w-full flex flex-col">
                                                        <div className="w-[47px] h-[19px]">
                                                            {item.category ===
                                                            'WATER' ? (
                                                                <span className="text-[12px] uppercase leading-[7px] p-1 relative bottom-3 font-interSemiBold bg-[#DCFCE7] text-[#66BE65] border-[1px] border-[#DCFCE7] rounded-[4px]">
                                                                    Water
                                                                </span>
                                                            ) : item.category ===
                                                              'ENERGY' ? (
                                                                <span className="text-[12px] uppercase leading-[7px] p-1 relative bottom-3 font-interSemiBold bg-[#E0EDFF] text-[#2E83FC] border-[1px] border-[#DCFCE7] rounded-[4px] ">
                                                                    Energy
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                        <p className="font-interMedium text-[14px] text-[#222222] truncate ">
                                                            {item.content}
                                                        </p>
                                                        <p className="font-interMedium text-[14px] text-[#222222] truncate hidden ">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <img
                                                            src={highP}
                                                            alt="High Priority"
                                                            className="w-5 h-5"
                                                        />
                                                        {assignees.length > 0 &&
                                                            assignees.map(
                                                                (assignee) => (
                                                                    <span
                                                                        key={
                                                                            assignee
                                                                        }
                                                                        className="w-5 h-5   uppercase text-[10px] border-[1px] rounded-full px-1 bg-[#038759] text-white flex justify-center items-center"
                                                                    >
                                                                        {getInitial(
                                                                            assignee
                                                                        )}
                                                                    </span>
                                                                )
                                                            )}
                                                    </div>
                                                </div>
                                            </Card>
                                        )
                                    })}
                                </TaskCol>
                            </div>
                        ))}
                    </div>
                </DragDropContext>
            </div>

            <TaskDetails
                isVisible={isTaskDetailsVisible}
                content={selectedPost ? selectedPost.content : ''}
                category={selectedPost ? selectedPost.category : ''}
                description={newDescription}
                dueDate={dueDate}
                onClose={handleCloseTaskDetails}
                onEdit={handleEdit}
                onUpload={handleUpload}
                assignees={assignees}
            />
        </div>
    )
}

export default MainTask
