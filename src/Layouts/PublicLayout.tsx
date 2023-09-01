import React, { Suspense } from 'react'
import { Outlet } from 'react-router'
import LoadingSpinner from 'src/Components/Common/LoadingSpinner'
import Header from 'src/Components/UI/Header'

const PublicLayout: React.FC = () => {
  return (
    <div>
      {/* Public layout */}
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner open={true} />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default PublicLayout
