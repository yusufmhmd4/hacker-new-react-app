import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NewsItemDetails from './components/NewsItemDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/items/:id" element={<NewsItemDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
