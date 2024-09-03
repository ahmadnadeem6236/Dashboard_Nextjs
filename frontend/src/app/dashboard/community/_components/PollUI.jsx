import React from 'react'

function PollUI() {

  const storedPoll = JSON.parse(localStorage.getItem("Poll")) || []
  console.log(storedPoll)



  return (
    <div className="w-full px-7 mt-10 h-[323px] ">
     <div className=' px-10 py-3 border-[1px] border-[#E1E1E1] rounded'>
     <div className='flex w-full pb-[30px] justify-between'>
        {storedPoll.map((item, index) => (
          <div key={index}>
            <h2 className=' font-interSemiBold text-[18px] text-[#000000]'>{item.question}</h2>
          </div>
        ))}
        <div className=' relative bottom-1'>
         <button>
           <span>.</span>
           <span>.</span>
           <span>.</span>
         </button>
        </div>
      </div>
      <div className='h-[150px] overflow-y-scroll flex w-fit flex-col gap-4'>
      {storedPoll.map((item, index) => (
        <div key={index} className='input overscroll-contain flex flex-col gap-4 '>
        <button type="button" value="" className=' lg:w-[540px] xl:w-[640px] w-[230px] pl-5 flex items-center space-x-10 h-[54px] border-[1px] border-[#E1E1E1] shadow-inner rounded '>
        <span className='   bg-[#FFFFFF] boder-[1.25px] border-[#D9D9D9] shadow w-[20px] h-[20px] rounded-full border-[1px]'></span>
        <span className='   text-[14px] font-interRegular text-[#333333]'>{item.option1}</span> 
        <span className='relative left-[120px] xl:left-[420px] lg:left-[450px] font-interRegular text-[14px] text-[#000000]'>0%</span>
        </button>
        <button type="button" value="" className=' lg:w-[540px] xl:w-[640px] w-full pl-5 flex items-center shadow-inner space-x-10 h-[54px] border-[1px] border-[#E1E1E1]  rounded '>
        <span className='  bg-[#FFFFFF] boder-[1.25px] border-[#D9D9D9] shadow w-[20px] h-[20px] rounded-full border-[1px]'></span>
        <span className=' text-[14px] font-interRegular text-[#333333]'>{item.option2}</span> 
        <span className='relative left-[120px] xl:left-[420px] lg:left-[450px] font-interRegular text-[14px] text-[#000000]'>0%</span>
        </button>
      </div>
     
      ))}
      </div>
      <div className='flex gap-2 font-interMedium text-[14px] text-[#888888] pt-[24px]'>
        <p>0 votes</p>
        <span>.</span>
        <p>8 days left</p>
      </div>
     </div>
    </div>
  )
}

export default PollUI