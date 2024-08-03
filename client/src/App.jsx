import React, {useEffect, useState} from 'react'
import PlayerRow from './PlayerRow';
import TableHeader from './TableHeader';

function App() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5001")
      const dataJson = await res.json()
      setData(dataJson.playersData)
      console.log(dataJson.playersData)
    }
    fetchData();
  }, [])

  useEffect(() => {
    data.length > 0 && setKeys(Object.keys(data[0]));
    console.log(data)
    setNum(num + 1)
  }, [data])

  function sortBy(attribute) {
    console.log("sort by ", attribute, "for example: ", data[0][attribute])
    let sortedPlayers = data;
    if (typeof data[0][attribute] == "number"){
      sortedPlayers = data.sort((a, b) => b[attribute] - a[attribute]);
    } else {
      sortedPlayers = data.sort((a, b) => a[attribute].localeCompare(b[attribute]));
    }
    setData(sortedPlayers)
    console.log(data)
    setNum(num + 1)
  }

  return (
    <div key={num}>
      {data && data.length > 0 && <TableHeader attributes={keys} sortBy={sortBy}/>}
      {data.map(i => (
        <PlayerRow player={i}/>
      ))}
    </div>
  )
}

export default App