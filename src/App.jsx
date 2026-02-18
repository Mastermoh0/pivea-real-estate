import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import About from './pages/About'

import './App.css'

export default function App() {
  const PageLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  const pageRoutes = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'contacts',
          element: <Contacts />
        },
        {
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'about',
          element: <About />
        },
      ],
      errorElement: <ErrorPage />
    }
  ])

  return (
    <main className='bg-backdrop'>
      <RouterProvider router={pageRoutes} />
    </main>
  )
}
