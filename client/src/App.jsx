import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://localhost:3001');
      const data = await res.json();
      console.log(data);
      setItems(data.items);
    }
    fetchData()
  }, [])

  return (<>
  </>
  )
}

export default App
