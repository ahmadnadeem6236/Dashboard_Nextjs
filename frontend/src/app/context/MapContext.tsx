'use client'
// src/contexts/MapContext.js
import React, { createContext, useState, useContext, ReactNode } from 'react'

const MapContext = createContext()

export const MapProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedCityCoords, setSelectedCityCoords] = useState(null)

    return (
        <MapContext.Provider
            value={{
                selectedCity,
                setSelectedCity,
                selectedCityCoords,
                setSelectedCityCoords,
            }}
        >
            {children}
        </MapContext.Provider>
    )
}

export const useMapContext = () => useContext(MapContext)
