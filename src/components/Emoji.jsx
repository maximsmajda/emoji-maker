import React from 'react'

function Emoji({id, onClick, shapes}) {
    
    const renderShape = (shape) => {
        if (!shape) return null

        switch (shape.shapeType) {
            case 'none':
                return 
    
            case 'rect':
                return shape.att.map((att , key) => {
                    return <rect key={key} strokeWidth={att.strokeWidth} rx={att.rx} height={att.height} width={att.width} y={att.y} x={att.x} stroke={att.stroke} fill={att.fill}/>
                })
           
            case 'path':
                return shape.att.map((att , key) => {
                    return <path key={key} d={att.d} strokeWidth={att.strokeWidth} stroke={att.stroke} fill={att.fill} strokeMiterlimit={att.strokeMiterlimit}/>
                })

            case 'line':
                return shape.att.map((att , key) => {
                    return <line key={key} x1={att.x1} x2={att.x2} y1={att.y1} y2={att.y2} strokeWidth={att.strokeWidth} stroke={att.stroke} fill={att.fill} strokeMiterlimit={att.strokeMiterlimit}/>
                })

            case 'ellipse':
                 return shape.att.map((att , key) => {
                    return (
                        <ellipse key={key} ry={att.ry} rx={att.rx} cy={att.cy} cx={att.cx} fill={att.fill} stroke={att.stroke} strokeWidth={att.strokeWidth}/>
                    )
                })

            case 'polygon':
                return shape.att.map((att , key) => {
                return (
                    <polygon key={key} fill={att.fill} stroke={att.stroke} strokeWidth={att.strokeWidth} points={att.points}/>
                )
            })
                
            default:
                return null
        }
    }



    return (
        <svg id={id} onClick={onClick} className='emoji-svg' viewBox="0 0 100 100">
        <g>
            {shapes.map(shape => renderShape(shape))}
        </g>
    </svg>
    )
}

export default Emoji
