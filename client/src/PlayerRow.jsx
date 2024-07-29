import React, {useEffect, useState} from 'react'

// let PlayerRowProps = {
//     player: any
// }

let outerStyle = {
    margin: "0px 0px 0px 30px",


}

export default function PlayerRow({player}) {
  const [data, setData] = useState([]);
  
//   useEffect(() => {
//   }, [])

  return (
    <div style={outerStyle}>
        <>{player.First_Name} {player.Last_Name}</>
        <>{player.Rating}</>
    </div>
  )
}