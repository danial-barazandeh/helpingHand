"use client"

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { iconPerson } from "./iconPerson";
import L from 'leaflet';
import pin from '../../public/images/Pin.svg'
import { FaEnvelope, FaPhone, FaClock, FaCalendarWeek, FaLocationArrow } from 'react-icons/fa';

export default function ContactInfo() {
    const position = [49.84433049241948, -119.45613589393625]

    React.useEffect(() => {
        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: '/images/Pin.svg',
            iconUrl: "/images/Pin.svg",
        });
    }, []);



    return (

        <div className="bg-accent bg-opacity-25 bg-p1 min-w-min grid justify-center items-center
        gap-8 grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2
        px-[5vw] sm:px-[5vw] md:px-[7vw] lg:px-[8vw] xl:px-[10vw] 2xl:px-[10vw]
        py-16">


            <div className='w-full h-[300px] overflow-clip rounded-2xl shadow-sm'>
                <MapContainer center={position} zoom={16} style={{ height: '300px' }}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            We are located here
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            <div className='w-full h-[300px] flex flex-col justify-center gap-4 rounded-2xl bg-white pl-[10%] shadow-sm'>
                <div className="flex items-center gap-4 text-accentPlus30">
                    <FaEnvelope></FaEnvelope>
                    <ul className="text-xs sm:text-xs md:text-sm lg:text-[1rem]">Email: HHTOLF_Rescue@gmail.com</ul>
                </div>
                <div className="flex items-center gap-4 text-accentPlus30">
                    <FaPhone></FaPhone>
                    <ul className="text-xs sm:text-xs md:text-sm lg:text-[1rem]">Phone : +120606154770</ul>
                </div>
                <div className="flex items-center gap-4 text-accentPlus30">
                    <FaClock></FaClock>
                    <ul className="text-xs sm:text-xs md:text-sm lg:text-[1rem]">Opening hours : Weekdays : from 10 am to 7 pm.</ul>
                </div>
                <div className="flex items-center gap-4 text-accentPlus30">
                    <FaCalendarWeek></FaCalendarWeek>
                    <ul className="text-xs sm:text-xs md:text-sm lg:text-[1rem]"> Weekends: from 10 am to 4 pm.</ul>
                </div>
                <div className="flex items-center gap-4 text-accentPlus30">
                    <FaLocationArrow></FaLocationArrow>
                    <ul className="text-xs sm:text-xs md:text-sm lg:text-[1rem]"> Address: 3885 Casorso Rd, Kelowna, BC V1W 4R7.</ul>
                </div>
            </div>

        </div>
    );
}