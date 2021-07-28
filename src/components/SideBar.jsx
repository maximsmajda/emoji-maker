import React from 'react'

function SideBar(props) {
    return (
        <div className='side-bar'>
            <div className='side-bar-heading'><h2>settings</h2></div>
            <div className='side-bar-boxes'>{props.children}</div>
        </div>
    )
}

export default SideBar
