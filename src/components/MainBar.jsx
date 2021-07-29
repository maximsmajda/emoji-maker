import React from 'react'

function MainBar(props) {

    return (
        <div className='main-bar'>
            <div className='main-bar-heading'>
                <h1>emoji maker</h1>
                <div className='main-bar-made-by'>made by <a className="link" href="https://github.com/maximsmajda">Maxim Smajda</a> ❤</div>
            </div>
            <div className='main-bar-buttons'>
                {props.children}
            </div>
        </div>
    )
}

export default MainBar
