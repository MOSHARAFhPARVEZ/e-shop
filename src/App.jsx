import {  } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Blog from './pages/blog/Blog'
import Cheackout from './pages/cheackout/Cheackout'
import Contact from './pages/contact/Contact'
function App() {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/cheackout' element={<Cheackout/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
      )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
