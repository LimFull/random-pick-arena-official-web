import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './App.css'

function App() {
  return (
    <Router basename="/random-pick-arena-official-web">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
