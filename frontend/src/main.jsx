import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"

import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup'
import SupportPage from './landing_page/support/SupportPage'
import ProductsPage from './landing_page/products/ProductsPage'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'

import NotFound from './landing_page/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>  
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/product' element={<ProductsPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  <Footer/>
  </BrowserRouter>
)
