import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default AuthLayout
