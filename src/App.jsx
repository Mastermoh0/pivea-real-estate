import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import About from './pages/About'



import { Toaster } from 'react-hot-toast'


export default function App() {
  const PageLayout = ()=> {
    return(
      <>
        <Header />
        <Outlet />
        <Footer/>
      </>
    )
  }
  const pageRoutes = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/Contacts',
          element: <Contacts/>
        },
        {
          path: '/Projects',
          element: <Projects/>
        },
        {
          path: '/About',
          element: <About/>
        },

      ],
      errorElement: <ErrorPage />
    }
  ])

  return (
    <main className='bg-backdrop'>
      <Toaster/>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </main>
  )
}
