import React, { useState, useEffect } from 'react'

const DM = () => {
    
    const getFromLocalStorage = () => {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        } else {
            return 'light-mode';
        }
    }
    const [theme, setTheme] = useState(getFromLocalStorage());

    const changeTheme = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }


    }

    useEffect(() => {
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`container-dm ${theme}`}>
            <h1>loremipsumloremipsumloremipsum</h1>
            <h1>loremipsumloremipsumloremipsum</h1>
            <h1>loremipsumloremipsumloremipsum</h1>
            <button style={{marginTop:'12px'}} className='button btn-decrement' onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default DM
