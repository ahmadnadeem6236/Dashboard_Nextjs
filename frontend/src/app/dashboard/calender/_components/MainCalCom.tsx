import CalenderHeader from './CalenderHeader'
import Calender from './Calender'

export default function MainCalCom() {
    return (
        <div className=" w-full h-full flex flex-col  bg-[#F8F8F8]">
            <div className=" w-full h-[100px] flex">
                <CalenderHeader />
            </div>
            <div>
                <Calender />
            </div>
        </div>
    )
}
