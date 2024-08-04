import React, {useEffect, useState} from 'react'
import './TableHeader.css';
 


export default function TableHeader({attributes, sortBy}) {
    const [attr, setAttr] = useState('');
    const [desc, setDesc] = useState(true);
    function clicked(attribute) {
        if (attr === attribute) {    // Attribute already selected
            setDesc(!desc)
            sortBy(attribute, !desc);
        } else {                    // New attribute selected
            setDesc(true);
            setAttr(attribute);
            sortBy(attribute, true);
        }
    }

    document.getElementsByClassName("col-button").bgcolor='#F00000'; // Not working



  return (
    <div className="player-row">
        <div className="player-detail" style={{marginRight: "0px"}}>Name</div>
        {attributes.slice(3, attributes.length - 1).map(i => ( 
            <div className="player-detail">
                <button id={i} className="col-button" onClick={() => clicked(i)} variant="outline-primary">{i}</button>
            </div>
        ))}
    </div>
  )
}