import React from 'react'
//children
//every props has children
const Scroll = (props) => {
    return (
        //this {} contains a object with css attributes
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '650px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;