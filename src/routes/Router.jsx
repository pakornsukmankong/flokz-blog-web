import { Route, Routes, Navigate } from 'react-router-dom'
import AuthLayout from '../layouts/auth/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import ContainerLayout from '../layouts/container/ContainerLayout'
import EditBlogPage from '../pages/EditBlogPage'
import SingleBlogPage from '../pages/SingleBlogPage'
import CreateBlogPage from '../pages/CreateBlogPage'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<ContainerLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route path="/create" element={<CreateBlogPage />} />
            <Route path="/edit/:id" element={<EditBlogPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router
