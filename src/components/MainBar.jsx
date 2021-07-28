import React from 'react'

function MainBar(props) {

    return (
        <div className='main-bar'>
            <div className='main-bar-heading'><h1>emoji maker</h1></div>
            <div className='main-bar-buttons'>
                {props.children}
            </div>
        </div>
    )
}

export default MainBar
