import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SarasBeautyStore from './SarasBeautyStore'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saras-beauty-store" element={<SarasBeautyStore />} />
    </Routes>
  )
}

export default App