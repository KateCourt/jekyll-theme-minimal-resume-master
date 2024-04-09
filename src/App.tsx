import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicyPage from './pages/privacy-policy'
import HomePage from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
