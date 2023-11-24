"use client"
import React from 'react'
import { useTheme } from "next-themes";
import {MoonIcon, SunIcon} from "@heroicons/react/24/solid";


const ToggleTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='hover:text-gray-400 dark:hover:text-gray-400 transition-all
            duration-100 text-gray-800 dark:text-white px-8 py-2 text-2xl md:text-4xl rounded-lg '>
            {theme == "dark" ? (<SunIcon className="h-6 w-6" aria-hidden="true"/>) : (<MoonIcon className=" h-6 w-6" aria-hidden="true"/>)}

        </button>
    )
}

export default ToggleTheme
