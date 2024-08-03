import React, {useEffect, useState} from 'react'
import './PlayerRow.css';

export default function PlayerRow({player}) {

  return (
    <div className="player-row">
            <div className="player-detail">{player.First_Name} {player.Last_Name}</div>
            <div className="player-detail">{player.Price}</div>
            <div className="player-detail">{player.Nationality}</div>
            <div className="player-detail">{player.Club}</div>
            <div className="player-detail">{player.Position}</div>
            <div className="player-detail">{player.Foot}</div>
            <div className="player-detail">{player.Rating}</div>
            <div className="player-detail">{player.Height}</div>
            <div className="player-detail">{player.Speed}</div>
            <div className="player-detail">{player.Acceleration}</div>
            <div className="player-detail">{player.Stamina}</div>
            <div className="player-detail">{player.Strength}</div>
            <div className="player-detail">{player.Control}</div>
            <div className="player-detail">{player.Passing}</div>
            <div className="player-detail">{player.Shooting}</div>
            <div className="player-detail">{player.Tackling}</div>
            <div className="player-detail">{player.Reactions}</div>
            <div className="player-detail">{player.Handling}</div>
            <div className="player-detail">{player.Rating_Change}</div>
            <div className="player-detail" style={{marginLeft: '48px'}}>{player.Total_Stats}</div>
            {/* <div className="player-detail">{player.ID}</div> */}
        </div>
  )
}