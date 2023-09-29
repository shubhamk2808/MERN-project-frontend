import React from 'react'
import { lazy } from 'react'
import { RouteObject } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import PublicLayout from 'src/Layouts/PublicLayout'
import { Loadable } from 'src/Components/Common/Loadable'
import NotFound from 'src/Components/UI/NotFound'
import PrivateLayout from 'src/Layouts/PrivateLayout'

const UserDashboard = Loadable(lazy(() => import('../Pages/DashboardPage')))
const HomePage = Loadable(lazy(() => import('../Pages/HomePage')))
const LoginPage = Loadable(lazy(() => import('../Pages/LoginPage')))
const UserProfilePage = Loadable(lazy(() => import('../Pages/UserProfilePage')))
const ChatPage = Loadable(lazy(() => import('../Pages/ChatPage')))
const Dashboard = Loadable(lazy(() => import('../Pages/DashboardPage')))

const routes: RouteObject[] = [
  //Auth routes
  {
    path: '/', element: <AuthLayout />,
    // errorElement: <>error element</>,
    children: [
      { path: 'login', element: <LoginPage /> },
    ],
  },
  //Public routes
  {
    path: '/', element: <PublicLayout />,
    children: [
      { path: '/', index: true, element: <HomePage /> },
    ],
  },
  // Private routes
  {
    path: '/', element: <PrivateLayout />,
    children: [
      { path: 'userDash', element: <UserProfilePage /> },
      { path: 'dashboard', element: <UserDashboard /> },
      { path: 'chat', element: <ChatPage /> },
    ],
  },
  //404 not found routes
  {
    path: '*', element: <NotFound />,
  },
]

export default routes
