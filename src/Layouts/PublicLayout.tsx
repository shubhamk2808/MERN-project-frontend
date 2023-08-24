import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

const PublicLayout: React.FC = () => {
  return (
    <div>
      Public layout
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default PublicLayout
