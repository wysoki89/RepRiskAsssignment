import React from 'react';

export default function (props) {
    return (
        <div>
            <p className="label">{props.label}</p>
            <p className="box">{props.val}</p>
        </div>
    )
}