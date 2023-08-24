import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './RoutesArray'

const MainRoute = () => {
  const router = createBrowserRouter(routes)
  return (
    <React.Suspense fallback={<>...</>}>
      <RouterProvider router={router} />
    </React.Suspense>
  )
}

export default MainRoute
