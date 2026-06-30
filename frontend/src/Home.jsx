import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from './components/Topbar'

function Home() {
  const [apiStatus, setApiStatus] = useState('A ligar...')

  useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus('Servidor offline'))
  }, [])

  return (
    <div className="page">
      <Topbar />
    </div>
  )
}

export default Home