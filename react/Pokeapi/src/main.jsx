import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tailwindcss";
import { Home } from "./pages/home";
import { Pokemon } from "./pages/Pokemon";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
