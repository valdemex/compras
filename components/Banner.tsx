'use client';
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words:[
            "your trusted shopping Platform.",
            "Providing best user experience for customers",
            "Delivery on time in demand.",
        ],
        loop:true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    return (
    <div className="h-96 max-w-screen-2x1 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2x1 md:text-4x1 uppercase font-bold">SHOPPERS ONLINE SHOPPING</h1>
        <p className="text-base md:text-lg font-semibold mt-2">
            {text} <Cursor cursorBlinking cursorStyle="" cursorColor="#ffaa17" />
            </p>
        </div>
    )
};

export default Banner;