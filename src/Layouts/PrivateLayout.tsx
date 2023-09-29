import React, { Suspense, useEffect } from 'react'
import Header from '../Components/UI/Header'
import Sidebar from '../Components/UI/Sidebar'
import { Outlet, useNavigate } from 'react-router'
import LoadingSpinner from 'src/Components/Common/LoadingSpinner'
import { useAppSelector } from 'src/Hooks'

const PrivateLayout: React.FC = () => {
    const navigate = useNavigate()
    let token = localStorage.getItem("token");
    const { isLogin } = useAppSelector((state) => state.auth)

    // useEffect(() => {
    //     if (!isLogin) {
    //         navigate('/login', { replace: true });
    //     }
    // }, []);

    useEffect(() => {
        if (!isLogin) {
            navigate('/login', { replace: true });
        }
    }, [isLogin, navigate]);

    if (!isLogin) {
        return null; // Redirecting to login page, no need to render the rest of the component
    }


    return (
        <div>
            <Header />
            <Sidebar />
            <main>
                {/* <Suspense fallback={<LoadingSpinner open={true} />}> */}
                <Outlet />
                {/* </Suspense> */}
            </main>
        </div>
    )
}

export default PrivateLayout
