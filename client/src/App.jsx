import React, {useEffect, useState} from 'react'
import PlayerRow from './PlayerRow';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5001")
      const dataJson = await res.json()
      console.log(dataJson)
      setData(dataJson.playersData)
    }
    fetchData();
  }, [])

  return (
    <div>
      {data.map(i => (
        // <p>{i.First_Name}, {i.Last_Name}, {i.Rating}</p>
        <PlayerRow player={i}/>
      ))}
    </div>
  )
}

export default App