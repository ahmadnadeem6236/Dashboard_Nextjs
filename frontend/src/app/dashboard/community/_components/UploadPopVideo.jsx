import React, { useState } from 'react'
import UploadIcon from '/public/images/UploadIcon.svg'
import Close from '/public/images/Close.svg'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

function UploadPopVideo({ uploadToggle }) {
    const [files, setFiles] = React.useState([])

    const onDrop = React.useCallback(
        (acceptedFiles) => {
            console.log(acceptedFiles)
            acceptedFiles.forEach((file) => {
                setFiles((prev) => [...prev, file])
            })
            console.log(files)
        },
        [files]
    )

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/jpeg,image/png',
        maxFiles: 4,
        multiple: true,
    })

    const removeFile = (name) => {
        setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name))
    }

    return (
        <div className="fixed inset-0 px-5 z-40 bg-[#00000080]">
            <div className=" h-[437px]  md:max-w-3xl max-w-2xl relative md:left-[414px] top-[110px] z-40">
                <div className=" h-[415px]">
                    <div className="w-full px-8 h-[55px] rounded-t-md bg-[#F8F8F8] border-[#E1E1E1] border-b-[1px] flex justify-between items-center">
                        <h2 className=" font-interBold text-[20px]">
                            Upload Video
                        </h2>
                        <span>
                            <button onClick={uploadToggle}>
                                <Image src={Close} alt="close-btn" />
                            </button>
                        </span>
                    </div>
                    <div className="w-full px-4 h-[381px] rounded-b-md items-center  flex flex-col bg-white pt-[32px]">
                        <div
                            {...getRootProps()}
                            className="w-full rounded  h-[300px] border-[1px] border-[#E1E1E1] border-dashed flex justify-center items-center"
                        >
                            <div className="relative bottom-5 w-[345px] h-[160px] text-center flex flex-col gap-5">
                                <div className=" flex justify-center items-center">
                                    <Image src={UploadIcon} alt="uploadIcon" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-3">
                                    {isDragActive ? (
                                        <p className="text-center font-interBold text-[16px]">
                                            Drop your media files here
                                        </p>
                                    ) : (
                                        <p className="text-center font-interBold text-[16px]">
                                            Drop your Video here to upload
                                        </p>
                                    )}

                                    <p className=" font-interRegular px-1 md:px-0 text-[14px] text-[#999999]">
                                        Works with any .mp4, .webm, or .MpeG
                                        file from the web
                                    </p>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        id="file_input"
                                        type="file"
                                        accept="image/*"
                                        {...getInputProps()}
                                    />
                                </div>
                                <div className=" relative top-[50px] flex flex-row gap-2  ">
                                    {files.map((f) => {
                                        return (
                                            <div
                                                key={f.name}
                                                className=" truncate h-20  "
                                            >
                                                <span className="  bg-[#E8F1FF] text-black p-2 rounded">
                                                    {f.name}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className=" absolute top-[290px] xl:left-[320px] lg:left-[320px] left-[150px] tablet:left-[320px] flex justify-center items-center rounded w-[112px] h-[32px] bg-[#FF343E] text-sm font-interSemiBold text-white">
                        Upload file
                    </button>

                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default UploadPopVideo
