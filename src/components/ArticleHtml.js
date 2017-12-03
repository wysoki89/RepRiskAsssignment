import React from 'react';

export default function ({html}) {
  return (
    <div className="body__page" dangerouslySetInnerHTML={{__html: html}}></div>
  )
}
