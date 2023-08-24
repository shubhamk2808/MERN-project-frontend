import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './RoutesArray'

const MainRoute = () => {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default MainRoute
