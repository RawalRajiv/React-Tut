import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/GitHub/GitHub.jsx'
import { gitInfoLoader } from './APIData/gitInfoLoader.js'

// const rout = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         }
//         , {
//           path: "About",
//           element: <About />
//         }
//         , {
//           path: "Contact",
//           element: <Contact />
//         }
//       ]

//     }
//   ]
// )
const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route 
        loader={gitInfoLoader}
        path='/Github' 
        element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>,
)
