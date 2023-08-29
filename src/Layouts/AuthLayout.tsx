import React, { Suspense, useEffect } from 'react'
import Header from '../Components/UI/Header'
import Sidebar from '../Components/UI/Sidebar'
import { NavigateFunction, Outlet, useNavigate } from 'react-router'

const AuthLayout: React.FC = () => {
  // const { isAuthenticated, logout } = useAuth();
  const isAuthenticated = false
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <div>
      Auth layout
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
