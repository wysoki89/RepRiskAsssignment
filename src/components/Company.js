import React from 'react';
import linkImg from 'external-link.svg'

export default function (props) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", margin: "10px 0" }}>
                <p>{props.companyName}</p>
                <a style={{ width: "6%", marginLeft: "5px"}} href={props.companyUrl}>
                    <img style={{ width: "100%" }} src={linkImg} alt="link" />
                </a>
                <img className="smallImg pullFlexItemRigth bordered" src={props.flagUrl} alt='' />
            </div>
            <hr className="underline"/>
        </div>
    )
}