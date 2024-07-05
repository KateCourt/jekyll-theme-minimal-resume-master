import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicyPage from './pages/privacy-policy'
import HomePage from './pages/home'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
