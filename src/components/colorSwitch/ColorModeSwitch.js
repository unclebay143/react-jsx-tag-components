import React from 'react'
import ThemeContext from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ColorModeSwitch = () => {
    const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext)
    return (
        <div>
            <button style={{
                color: currentTheme === "light" ? '#000' : '#000',
            }} className='py-2 px-2 rounded-md bg-gray-200 hover:bg-gray-100 transition duration-200 ease-in' onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}>
                {currentTheme === "light" ? (<>
                    <SunIcon className='w-6 h-6' />
                </>) : (<> <MoonIcon className='w-6 h-6' />
                </>)}
            </button>
        </div>
    )
}

export default ColorModeSwitch;