'use client'
import React, { useState, useEffect, useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import GeoJSON from 'ol/format/GeoJSON'
import { Style, Fill, Stroke, Icon } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { Zoom } from 'ol/control'
import gadmData from '@/data/sri_lanka.json'
import './mapStyles.css'
import { useLinkStore } from '@/store/store'

const MapComponent = () => {
    const [districts, setDistricts] = useState([])
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [cityGeoJSON, setCityGeoJSON] = useState(null)
    const [markerPosition, setMarkerPosition] = useState(null)
    const [boundaryGeoJSON, setBoundaryGeoJSON] = useState(null)
    const mapElement = useRef(null)
    const mapRef = useRef(null)
    const markerLayerRef = useRef(null)
    const boundaryLayerRef = useRef(null)
    const setMyVariable = useLinkStore((state) => state.setMyVariable)

    useEffect(() => {
        if (selectedDistrict) {
            setMyVariable(selectedDistrict)
        }
    })

    const iconFeature = new Feature({
        geometry: new Point([0, 0]),
        name: 'Null Island',
        population: 4000,
        rainfall: 500,
    })
    const iconStyle = new Style({
        image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'marker-icon.png',
        }),
    })

    iconFeature.setStyle(iconStyle)

    useEffect(() => {
        if (mapElement.current && !mapRef.current) {
            const initialMap = new Map({
                target: mapElement.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                view: new View({
                    center: fromLonLat([80.7718, 7.8731]),
                    zoom: 8,
                }),
                controls: [
                    new Zoom(), // Add the default zoom control
                ],
            })

            mapRef.current = initialMap

            markerLayerRef.current = new VectorLayer({
                source: new VectorSource(),
                style: new Style({
                    image: new Icon({
                        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                        scale: 0.1,
                    }),
                }),
            })
            mapRef.current.addLayer(markerLayerRef.current)

            boundaryLayerRef.current = new VectorLayer({
                source: new VectorSource(),
                style: new Style({
                    stroke: new Stroke({
                        color: 'red',
                        width: 2,
                    }),
                    fill: new Fill({
                        color: 'rgba(0, 0, 255, 0.1)',
                    }),
                }),
                image: new Icon({
                    anchor: [0.5, 1],
                    crossOrigin: 'anonymous',
                    src: './marker-icon.png',
                }),
            })
            mapRef.current.addLayer(boundaryLayerRef.current)
        }
    }, [mapElement])

    useEffect(() => {
        if (gadmData && gadmData.features) {
            const districtNames = [
                ...new Set(
                    gadmData.features.map(
                        (feature) => feature.properties.NAME_1
                    )
                ),
            ]
            setDistricts(districtNames)
        }
    }, [])

    useEffect(() => {
        if (mapRef.current && cityGeoJSON) {
            mapRef.current.getLayers().forEach((layer) => {
                if (
                    layer instanceof VectorLayer &&
                    layer !== markerLayerRef.current &&
                    layer !== boundaryLayerRef.current
                ) {
                    mapRef.current.removeLayer(layer)
                }
            })

            const vectorSource = new VectorSource({
                features: [iconFeature],
                features: new GeoJSON().readFeatures(cityGeoJSON, {
                    featureProjection: 'EPSG:3857',
                }),
            })

            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    stroke: new Stroke({
                        color: 'red',
                        width: 2,
                    }),
                    fill: new Fill({
                        color: 'rgba(0, 0, 255, 0.1)',
                    }),
                }),
            })

            mapRef.current.addLayer(vectorLayer)
        }
    }, [cityGeoJSON])

    useEffect(() => {
        if (markerPosition && mapRef.current) {
            const markerFeature = new Feature({
                geometry: new Point(fromLonLat(markerPosition)),
            })

            markerLayerRef.current.getSource().clear()
            markerLayerRef.current.getSource().addFeature(markerFeature)

            const view = mapRef.current.getView()
            view.setCenter(fromLonLat(markerPosition))
            view.setZoom(12)
        }
    }, [markerPosition])

    useEffect(() => {
        if (boundaryGeoJSON && mapRef.current) {
            const vectorSource = new VectorSource({
                features: new GeoJSON().readFeatures(boundaryGeoJSON, {
                    featureProjection: 'EPSG:3857',
                }),
            })

            boundaryLayerRef.current.getSource().clear()
            boundaryLayerRef.current
                .getSource()
                .addFeatures(vectorSource.getFeatures())

            if (boundaryGeoJSON.features.length > 0) {
                const extent = boundaryLayerRef.current.getSource().getExtent()
                const view = mapRef.current.getView()
                view.fit(extent, {
                    size: mapRef.current.getSize(),
                    padding: [50, 50, 50, 50],
                })
                view.setZoom(view.getZoom() - 1)
            }
        }
    }, [boundaryGeoJSON])

    const handleDistrictChange = (event) => {
        const districtName = event.target.value
        setSelectedDistrict(districtName)

        const districtFeatures = gadmData.features.filter(
            (feature) => feature.properties.NAME_1 === districtName
        )

        setCityGeoJSON({
            type: 'FeatureCollection',
            features: districtFeatures,
        })

        if (districtFeatures.length > 0) {
            const vectorSource = new VectorSource({
                features: new GeoJSON().readFeatures(
                    {
                        type: 'FeatureCollection',
                        features: districtFeatures,
                    },
                    {
                        featureProjection: 'EPSG:3857',
                    }
                ),
            })

            const extent = vectorSource.getExtent()

            if (extent) {
                const view = mapRef.current.getView()
                view.fit(extent, {
                    size: mapRef.current.getSize(),
                    padding: [50, 50, 50, 50],
                })
                view.setZoom(view.getZoom() - 1)
            }
        }
    }
    return (
        <div className="relative h-full w-full">
            <div className="absolute top-2 left-[1px] p-3 rounded z-10">
                <select
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    className="w-64 p-2 border border-gray-300 rounded"
                >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
            </div>
            <div className="absolute top-[60px] left-[1px] p-3 rounded z-10">
                <select
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    className="w-64 p-2 border border-gray-300 rounded"
                >
                    <option value="">Select Issues</option>
                    {districts.map((district) => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
            </div>
            <div ref={mapElement} className="h-full w-full" />
        </div>
    )
}

export default MapComponent
