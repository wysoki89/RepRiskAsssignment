import React from 'react';

export default function ({label, value}) {
    return (
        <div>
            <p className="label">{label}</p>
            <p className="box">{value}</p>
        </div>
    )
}