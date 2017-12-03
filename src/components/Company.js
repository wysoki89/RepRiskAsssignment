import React from 'react';
import linkImg from 'external-link.svg'

export default function ({companyName, companyUrl, flagUrl}) {
    return (
        <div>
            <div className="companyItem">
                <p>{companyName}</p>
                <a className="linkImg" href={companyUrl}>
                    <img style={{ width: "100%" }} src={linkImg} alt="link" />
                </a>
                <img className="img--small img--flag" src={flagUrl} alt='' />
            </div>
            <hr className="hr"/>
        </div>
    )
}