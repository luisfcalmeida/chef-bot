import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import AddIngredient from './components/AddIngredient'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AddIngredient />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App