import React from 'react'

function Preview(props) {
    return (
        <div className="preview">
            <div className="preview-heading"><h2>preview</h2></div>
            <div className="preview-content">
                {props.children}
            </div>
        </div>
    )
}

export default Preview
