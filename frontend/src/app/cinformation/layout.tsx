import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import { MapProvider } from '../context/MapContext'
import Cinformation from './_components/Cinformation'

export default function CinformationLayout() {
    return (
        <div className="grid grid-rows-[60px_1fr] min-h-screen">
            {/* Topbar */}
            <Navbar />
            <MapProvider>
                <Cinformation />
            </MapProvider>
        </div>
    )
}
