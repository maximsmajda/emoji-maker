import React from 'react'

function EmojiBox(props) {
    return (
        <div className='emoji-box'>
            <div className='emoji-box-inside'>
                {props.children}
            </div>
        </div>
    )
}

export default EmojiBox
