import React, { Suspense } from 'react'
import Header from '../Components/UI/Header'
import Sidebar from '../Components/UI/Sidebar'
import { NavigateFunction, Outlet, useNavigate } from 'react-router'

const AuthLayout: React.FC = () => {
  // const { isAuthenticated, logout } = useAuth();
  const isAuthenticated = true
  const navigate: NavigateFunction = useNavigate()

  if (!isAuthenticated) {
    navigate('/login')
    return null
  }
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default AuthLayout
