import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import LoadingSpinner from 'src/Components/Common/LoadingSpinner'
import Header from 'src/Components/UI/Header'
import Sidebar from 'src/Components/UI/Sidebar'

const PublicLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ flex: 1, padding: '10px' }}>
        {/* <Suspense fallback={<LoadingSpinner open={true} />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </div>
  )
}

export default PublicLayout
