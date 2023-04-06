import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CLIENT_ID = '5dbd0ff564554889b95bd01b3aa68140'
const CLIENT_SECRET = 'd72deb01685b4f4594c736ac960214a9'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // API ACCESS TOKEN
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => console.log('data', data))
  }, [])

  return (
    <div className="App">
      <h1>Teste</h1>
    </div>
  )
}

export default App
