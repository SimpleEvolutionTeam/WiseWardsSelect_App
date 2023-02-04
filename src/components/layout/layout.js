import React from 'react'
import "./layout.css"

function layout({children }) {
    return (
        <div className='layout'>
            <div className='layout__container'>
                { children}
            </div>
        </div>
    )
}

export default layout