import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import AddIngredient from './components/AddIngredient'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />

        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<AddIngredient />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App