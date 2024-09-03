'use client'
import React, { useState } from 'react'
import SortArrow from '/public/images/SortArrow.svg'
import SortMobArrow from '/public/images/SortMobArrow.svg'
import attach from '/public/images/attach.svg'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import { Multiselect } from 'multiselect-react-dropdown'
import Delete from '/public/images/Delete.svg'
import './Custom.css'
import { nanoid } from 'nanoid'
import axios from 'axios'

const TaskHeader = ({ addTask }) => {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow((prev) => !prev)

    return (
        <div className=" pt-4 xl:pl-20 lg:pl-8 w-full flex flex-col items-center md:flex-row gap-4 md:gap-0 justify-around lg:justify-between">
            <div className="">
                <h1 className=" font-interBold md:text-3xl text-[24px] leading-4 font-bold">
                    Task Manager
                </h1>
            </div>
            <div className=" flex gap-3 lg:pl-[240px] xl:pl-[540px] ">
                <button className=" h-[40px] px-4 tracking-wide font-interMedium bg-white text-black  rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out hidden md:flex items-center justify-center">
                    <Image src={SortArrow} alt="Sort Arrow" />
                    Sort
                </button>
                <button className=" md:hidden p-2  tracking-wide font-interMedium bg-white text-black rounded-md hover:bg-slate-100 transition-all duration-300 ease-in-out flex items-center justify-between gap-[160px] pr-3">
                    Sort
                    <Image src={SortMobArrow} alt="sort mobile arrow" />
                </button>
                <button
                    className=" h-[40px] tracking-wide font-interMedium bg-[#FF343E] text-white p-2  rounded-md hover:bg-red-600 md:w-[125px] w-[113px] transition-all duration-300 ease-in-out flex items-center justify-center"
                    onClick={() => setShow(!show)}
                >
                    Create Task
                </button>
            </div>
            <div className=" hidden md:block">
                {show && <CreateTask handleToggle={handleToggle} />}
            </div>
        </div>
    )
}

export default TaskHeader

export function CreateTask({ handleToggle, addTask }) {
    const [formData, setFormData] = useState({
        taskName: '',
        selectAssignee: [],
        selectPriority: '',
        selectCategory: '',
        dueDate: '',
        description: '',
        fileName: '',
    })
    const [images, setImages] = useState([])

    // Assignee Data
    const AssigneeData = [
        { name: 'Muskesh Kumar', val: 'Mukesh' },
        { name: 'Rahul', val: 'Rahul' },
        { name: 'Vijay', val: 'Vijay' },
        { name: 'Sanjay', val: 'Sanjay' },
    ]

    // Priority Data
    const priorityData = [
        { priority: 'High', val: '1' },
        { priority: 'Medium', val: '2' },
        { priority: 'Low', val: '3' },
    ]

    // Category Data
    const CategoryData = [
        { category: 'WATER', val: 'WATER' },
        { category: 'ENERGY', val: 'ENERGY' },
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // Filtered Assignees for Dropdown
    const filteredAssignees = AssigneeData.filter(
        (assignee) => !formData.selectAssignee.includes(assignee.val)
    )

    const handleAssigneeChange = (selectedList) => {
        setFormData((prevData) => ({
            ...prevData,
            selectAssignee: selectedList.map((item) => item.val),
        }))
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        if (images.length + files.length > 5) {
            toast.error('You can only upload up to 5 images.')
            return
        }

        const newImages = files.map((file) => ({
            id: nanoid(),
            url: URL.createObjectURL(file),
            name: file.name,
        }))

        setImages((prevImages) => [...prevImages, ...newImages])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newTask = {
                id: nanoid(),
                content: formData.taskName,
                priority: formData.selectPriority,
                dueDate: formData.dueDate,
                description: formData.description,
                assignees: formData.selectAssignee,
                category: formData.selectCategory,
                fileName: formData.fileName,
                attachments: images.map((img) => ({
                    id: img.id,
                    url: img.url,
                })),
            }
            const response = await axios.post(
                'http://localhost:4000/api/addtask',
                formData
            )

            console.log(response.status)
            if (response.status === 201) {
                setFormData({
                    taskName: '',
                    selectAssignee: [],
                    selectPriority: '',
                    selectCategory: '',
                    dueDate: '',
                    description: '',
                    fileName: '',
                })
                toast.success('Your Task has been successfully Created!')
                handleToggle()
            }

            {
                /*   const existingTasks =
                JSON.parse(localStorage.getItem('tasks')) || {}

            const updatedTasks = {
                ...existingTasks,
                [formData.selectCategory]: [
                    ...(existingTasks[formData.selectCategory] || []),
                    newTask,
                ],
            }

            localStorage.setItem('tasks', JSON.stringify(updatedTasks))

            addTask(newTask)
            console.log('New task to add:', newTask)
            toast.success('Task has been successfully created!')
            setFormData({
                taskName: '',
                selectAssignee: [],
                selectPriority: '',
                selectCategory: '',
                dueDate: '',
                description: '',
                fileName: '',
            })
            setImages([])

            handleToggle() */
            }
        } catch (error) {
            console.error('Error creating task:', error)
            toast.error('Failed to create task. Please try again.')
        }
    }

    const handleDeleteImage = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id))
    }

    return (
        <div className="fixed bg-[#00000080] inset-0 z-50">
            <div className="fixed bg-white z-50 right-0 top-0 w-[461px] h-full">
                <div className="bg-white flex flex-col h-full w-full">
                    <Toaster position="top-right" />
                    <div className="w-full h-[110px] bg-gradient-to-b from-[#DAE9F9] to-[#FFFFFF] flex items-center pl-[51px]">
                        <h1
                            className="text-black font-interBold font-bold text-[28px]
              "
                        >
                            Create <span className="text-[#1D58BA]">Task</span>
                        </h1>
                    </div>

                    <div className="flex flex-col w-full h-full">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-lg flex flex-col items-center justify-between h-full  w-full"
                        >
                            <div>
                                <div className="mb-[15px]">
                                    <input
                                        type="text"
                                        id="task"
                                        name="taskName"
                                        value={formData.taskName}
                                        onChange={handleChange}
                                        className=" custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] px-5 rounded block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                        placeholder="Task Name"
                                        autoComplete="off"
                                        required
                                    />
                                    {/* <label
                    htmlFor="task"
                    className="absolute  left-1 text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                  >
                    Task Name
                  </label> */}
                                </div>
                                <div className="mb-[15px] ">
                                    <select
                                        id="selectCategory"
                                        name="selectCategory"
                                        value={formData.selectCategory}
                                        onChange={handleChange}
                                        className="custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Category
                                        </option>
                                        {CategoryData.map((cate) => (
                                            <option
                                                key={cate.val}
                                                value={cate.val}
                                            >
                                                {cate.category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-[15px]  w-[360px] ">
                                    <Multiselect
                                        options={filteredAssignees}
                                        displayValue="name"
                                        selectedValues={AssigneeData.filter(
                                            (assignee) =>
                                                formData.selectAssignee.includes(
                                                    assignee.val
                                                )
                                        )}
                                        onSelect={handleAssigneeChange}
                                        onRemove={handleAssigneeChange}
                                        placeholder="Select Assignee(s)"
                                        isObject={true}
                                        showCheckbox={true}
                                        className="custom-multiselect"
                                        style={{
                                            // multiselectContainer: { padding: "10px" },
                                            option: { padding: '10px' },
                                            searchBox: { padding: '13px' },
                                        }}
                                    />
                                </div>
                                <div className="mb-[15px] ">
                                    <select
                                        id="selectPriority"
                                        name="selectPriority"
                                        value={formData.selectPriority}
                                        onChange={handleChange}
                                        className="custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Priority
                                        </option>
                                        {priorityData.map((data) => (
                                            <option
                                                key={data.val}
                                                value={data.val}
                                            >
                                                {data.priority}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-[15px] ">
                                    <input
                                        pattern="\d{4}-\d{2}-\d{2}"
                                        type="date"
                                        id="dueDate"
                                        name="dueDate"
                                        value={formData.dueDate}
                                        onChange={handleChange}
                                        className="custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                        required
                                    />
                                </div>
                                <div className="mb-[15px]">
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="custom-shadow w-full md:w-[360px] h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded px-5 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                                        placeholder="Description"
                                        autoComplete="off"
                                        required
                                    />
                                    {/* <label
                    htmlFor="description"
                    className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 left-5 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-interRegular"
                  >
                    Description
                  </label> */}
                                </div>
                                <div className="w-full">
                                    <div className="cursor-pointer font-interMedium">
                                        <label
                                            htmlFor="file-upload"
                                            className="bg-[#F1F2F4] hover:bg-[#d1d2d3] p-2 w-[103px] h-[30px] flex gap-2 items-center rounded-md"
                                        >
                                            <Image
                                                src={attach}
                                                width={100}
                                                height={100}
                                                alt="files"
                                                className="ml-1 w-5 h-5"
                                            />
                                            <span className="truncate">
                                                {formData.fileName || 'Attach'}
                                            </span>
                                        </label>
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            accept="image/*"
                                            multiple
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                {/* Image display */}
                                <div className=" cursor-pointer mt-4">
                                    <div className="flex absolute z-50 flex-wrap gap-x-1 gap-y-2">
                                        {images.map((image) => (
                                            <div
                                                key={image.id}
                                                className="image-container w-[70px] h-[70px] border border-gray-300 rounded-md overflow-hidden"
                                            >
                                                <Image
                                                    src={image.url}
                                                    alt={image.name}
                                                    width={100}
                                                    height={100}
                                                    className="object-cover w-full h-full"
                                                />
                                                <div className="overlay">
                                                    <div
                                                        className="delete-icon"
                                                        onClick={() =>
                                                            handleDeleteImage(
                                                                image.id
                                                            )
                                                        }
                                                    >
                                                        <Image
                                                            src={Delete}
                                                            alt="delete"
                                                            className="text-red-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="  border-t-[1px] border-[#E1E1E1]    w-full h-[80px] ">
                                <div className="flex  justify-end items-center h-full pr-12 gap-4">
                                    <button
                                        className="w-full hover:text-white items-center justify-center text-center border-[1px] border-[#E1E1E1] md:w-[96px] h-[48px] bg-[#FFFFFF] hover:bg-[#f71823] text-black rounded transition duration-200 font-interSemiBold"
                                        onClick={handleToggle}
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full items-center justify-center text-center md:w-[129px] h-[48px] bg-[#FF343E] hover:bg-[#f71823] text-white rounded transition duration-200 font-interSemiBold"
                                    >
                                        Create Task
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
