// src/layouts/AuthLayout.tsx
import React, { ReactNode } from 'react'
import Header from '../Components/UI/Header'
import Sidebar from '../Components/UI/Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
