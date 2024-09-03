import React, { useState } from 'react'
import Close from "/public/images/Close.svg"
import { input } from '@material-tailwind/react'
import Delete from "/public/images/Delete.svg"
import toast from 'react-hot-toast'
import Image from 'next/image'


function UploadPopPoll({uploadToggle}) {


  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",


  });
    const [inputs, setInputs] = useState([])

    const handleChange = (e) => {
      const {name , value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name] : value
      }))
    }

    const addInput = () => {
        setInputs([...inputs, {id:input.length, value:""}])
    }

    const handleInputChange = (index, event) => {
        const newInputs = inputs.map((input, i) =>
          i === index ? { ...input, value: event.target.value } : input
        );
        setInputs(newInputs);
      };

      const deleteInput = (index) => {
        const newInputs = inputs.filter((input, i) => i !== index);
        setInputs(newInputs);
      };


      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          
          console.log(formData)

          const existingData = JSON.parse(localStorage.getItem("Poll")) || []

          const updatedData = [...existingData, formData]
          localStorage.setItem("Poll", JSON.stringify(updatedData))

          
          toast.success("Poll has been saved successfully")
          setFormData({question: "", option1: "", option2: ""})
          uploadToggle()


        } catch (error) {
          console.error("Error creating poll:", error)
          toast.error("Failed to Create Poll")          
        }
      }

    




  return (
    <div className='fixed inset-0 z-40 bg-[#00000080]'>
    <div className=' fixed bg-white rounded-md  md:top-[100px] top-[120px] xl:left-[530px] lg:left-[330px] md:left-[280px] left-[80px] z-40'>
     <div className=' xl:w-[590px]  lg:w-[590px] md:w-[590px] w-[350px] h-[573px] '>
      <div className='w-full h-[55px] rounded-t-md bg-[#F8F8F8] border-[#F8F8F8] border-[1px] flex justify-between px-10 items-center'>
        <h2 className=' font-interBold text-[20px]'>Insert Poll</h2>
        <span>
          <button onClick={uploadToggle}>
          <Image
          src={Close}
          alt='close-btn'
          />
          </button>
        </span>
      </div>
     <div className='flex h-full w-full flex-col   pt-10 '>
     <form onSubmit={handleSubmit}>
       <div className='flex flex-col h-full gap-[50px]'>
       <div className='flex flex-col   '>
       <div className="mb-[20px] relative flex justify-center">
              <input
                type="text"
                id="question"
                name="question"
                onChange={handleChange}
                className="w-full custom-shadow xl:w-[530px] md:w-[530px] text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                placeholder=" "
                required
              />
              <label
                htmlFor="question"
                className="absolute left-10 text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
              >
                Enter Question
              </label>
              </div>
            <div className=' h-[150px] flex flex-col items-center overflow-scroll'>
            <div className='mb-[20px] relative'>
             <input
                type="text"
                id="option1"
                name="option1"
                onChange={handleChange}
                className="w-full custom-shadow xl:w-[530px] lg:w-[530px] md:w-[530px] text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                placeholder=" "
                required
              />
              <label
                htmlFor="option"
                className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
              >
                Option 1
              </label>
             </div>
             <div className='mb-[20px] relative'>
             <input
                type="text"
                id="option2"
                name="option2"
                onChange={handleChange}
                className="w-full md:w-[530px] custom-shadow text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                placeholder=" "
                required
              />
              <label
                htmlFor="fullName"
                className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
              >
                Option 2
              </label>
             </div>
             {inputs.map((input, index) => (
                 <div className='mb-[20px] relative' key={input.id}>
                 <input
                    type="text"
                    id={input.id}
                    name={input.id}
                    className="w-full md:w-[475px] custom-shadow text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                    placeholder=" "
                    required

                  />
                  <label
                    htmlFor="fullName"
                    className="absolute text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
                  >
                    Option 2
                  </label>
                  <button className='absolute top-0 right-[0px] bottom-0 ' onClick={() => deleteInput(index)}>
                    <Image 
                        src={Delete}
                        alt='delete'
                        className='bg-[#F8F8F8] p-[17px] rounded -z-10'

                    />
                  </button>
                 </div>
             ))}
             </div>
             <button className=" relative left-10 mb-[40px] font-interSemiBold text-[14px] text-[#FF343E] w-[93px] h-[13px]" onClick={addInput}><span className='text-[18px]'>+</span>{" "}Add Option</button>
             <div className='mb-[20px] relative flex justify-center'>
             <input
                type="text"
                id="duration"
                name="duration"
                className="w-full custom-shadow md:w-[530px] text-black h-[54px] border-[#DBDBDB] bg-[#FEFEFE] rounded-md px-5 py-4 block border-[1px] focus:outline-none focus:border-[#DBDBDB] peer font-interRegular"
                placeholder=" "
                
              />
              <label
                htmlFor="duration"
                className="absolute left-10 text-sm text-[#888888] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:px-3 peer-focus:text-[#888888] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-4 font-interRegular"
              >
                Poll Duration
              </label>
             </div>
       </div> 
             <div className=' flex border-t-[1px] border-[#E1E1E1] items-center h-full justify-end  w-full pt-5 pr-7 bg-[#FFFFFF]  '>
                <button
              type="submit"
              className=" text-center w-[81px] h-[32px] bg-[#FF343E] hover:bg-[#f71823] text-white rounded transition duration-200 font-interSemiBold text-sm"
            >
              Save
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

export default UploadPopPoll