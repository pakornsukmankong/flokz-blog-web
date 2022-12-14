import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-quill/dist/quill.snow.css'
import App from './App'
import AuthContextProvider from './contexts/authContext'
import './index.css'
import LoadingContextProvider from './contexts/LoadingContext'
import BlogContextProvider from './contexts/BlogContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <LoadingContextProvider>
      <AuthContextProvider>
        <BlogContextProvider>
          <App />
        </BlogContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
