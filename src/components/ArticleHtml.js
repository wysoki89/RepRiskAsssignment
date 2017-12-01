import React from 'react';

export default function () {
  return (
    <div className="page" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
  )
}
