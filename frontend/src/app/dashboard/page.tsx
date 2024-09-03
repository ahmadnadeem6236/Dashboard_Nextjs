import { BuzzTypeSection } from './_components/BuzzTypeSection'
import MapComponent from './_components/MapComponent/MapComponents'

function page() {
    return (
        <div className="h-full w-full">
            <div className="hidden h-full lg:grid grid-cols-[532px_1fr]">
                <div className="h-full">
                    <MapComponent />
                </div>
                <div className="h-full">
                    <BuzzTypeSection />
                </div>
            </div>
            <div className="lg:hidden h-full grid grid-rows-[300px_1fr]">
                <div className="h-full  ">
                    <MapComponent />
                </div>
                <div className="h-full">
                    <BuzzTypeSection />
                </div>
            </div>
        </div>
    )
}

export default page
