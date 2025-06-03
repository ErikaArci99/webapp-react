import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import Layout from "./components/Layout"
import './index.css'

function App() {
  return (
    <BrowserRouter>
      {/* layout visibile ovunque */}
      <Layout />

      {/* rotte principali */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

