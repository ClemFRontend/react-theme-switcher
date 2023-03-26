import React, { useEffect, useState } from 'react'
import Switch1 from '../Switch1/Switch1'
import './ThemeSwitcher.css'

const SUN_ICON = <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm0-8c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm1-5V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z"/></svg>
const MOON_ICON = <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>

function ThemeSwitcher() {

    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') === 'dark' ? true : false)

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme')
        if (localStorageTheme === 'dark') {
            setDarkTheme(true)
        }
        else {
            localStorage.setItem("theme", "light")
        }
    }, [])

    useEffect(() => {
        const html = document.documentElement
        if (darkTheme) {
            html.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            html.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkTheme])

    const name = 'theme'

    return (
        <div className='switch-container'>
            <label htmlFor={name}>
                {SUN_ICON}
            </label>
            <Switch1
                name={name}
                handleChange={() => setDarkTheme(!darkTheme)}
                checked={darkTheme}
                />
            <label htmlFor={name}>
                {MOON_ICON}
            </label>
        </div>
    )
}

export default ThemeSwitcher
