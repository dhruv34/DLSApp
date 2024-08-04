import React, {useEffect, useState} from 'react'
import PlayerRow from './PlayerRow';
import TableHeader from './TableHeader';

function App() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [num, setNum] = useState(0);
  const [colSelected, setCol] = useState("");

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
  }, [data])

  function sortBy(attribute, desc) {
    console.log("sort by ", attribute, ", descending: ", desc)
    let sortedPlayers = data;
    !desc && (sortedPlayers = data.sort(
      (a, b) => (a[attribute] ? a[attribute].toString() : "").localeCompare(b[attribute] ? b[attribute].toString() : "")
    ));
    desc && (sortedPlayers = data.sort(
      (a, b) => (b[attribute] ? b[attribute].toString() : "").localeCompare(a[attribute] ? a[attribute].toString() : "")
    ));
    setData(sortedPlayers)
    console.log(data)

    setNum(num + 1)   // For some reason, this is necessary for display to be updated???
    setCol(attribute)
  }

  return (
    <div>
      {data && data.length > 0 && <TableHeader attributes={keys} sortBy={sortBy}/>}
      {data.map(i => (
        <PlayerRow player={i} boldCol={colSelected}/>
      ))}
    </div>
  )
}

export default App