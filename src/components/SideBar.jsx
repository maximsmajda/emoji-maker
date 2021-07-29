import React, { useState } from 'react'
import {ReactComponent as Arrow} from './../arrow.svg';

function SideBar(props) {

    const [active, setActive] = useState(false)
    

    return (
        <div className={active ? 'side-bar active' : 'side-bar'}>
            <div className='side-bar-heading'><h2>settings</h2><span onClick={() => {setActive(!active)}} className={'show-button'}><Arrow /></span></div>
            <div className={active ? 'side-bar-boxes active' :'side-bar-boxes'}>{props.children}</div>
            
        </div>
    )
}

export default SideBar
