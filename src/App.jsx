import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'
import Spinner from './components/ui/Spinner'
import { useLoading } from './contexts/LoadingContext'
import { useAuth } from './contexts/authContext'
import { useBlog } from './contexts/BlogContext'

function App() {
  const { initialLoading } = useAuth()
  const { loading } = useLoading()
  const { blogLoading } = useBlog()

  if (initialLoading) return <Spinner />
  if (blogLoading) return <Spinner />
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose={2000}
        theme="colored"
        position="bottom-center"
      />
    </>
  )
}

export default App
