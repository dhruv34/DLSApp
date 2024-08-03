import React, {useEffect, useState} from 'react'
import './TableHeader.css';
 


export default function TableHeader({attributes, sortBy}) {
    const [attr, setAttr] = useState('')
    function clicked(attribute) {
        setAttr(attribute);
        sortBy(attribute);
    }
  return (
    <div className="player-row">
        <div className="player-detail">Name</div>
        {attributes.slice(3, attributes.length - 1).map(i => ( 
            <div className="player-detail">
                <button id={i} onClick={() => clicked(i)} variant="outline-primary">{i}</button>
            </div>
        ))}
    </div>
  )
}