import { useEffect, useState, createContext, useContext } from 'react'
import * as authService from '../api/authApi'
import * as userService from '../api/userApi'
import {
  getAccessToken,
  addAccessToken,
  removeAccessToken,
} from '../utils/localStorage'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe()
        }
      } catch (err) {
        console.log(err)
      } finally {
        setInitialLoading(false)
      }
    }
    fetchMe()
  }, [])

  const getMe = async () => {
    const res = await authService.getMe()
    setUser(res.data.user)
  }

  const register = async (input) => {
    const res = await authService.register(input)
    addAccessToken(res.data.token)
    setTimeout(() => getMe(), 1)
  }

  const login = async (input) => {
    const res = await authService.login(input)
    addAccessToken(res.data.token)
    await getMe()
  }

  const logout = () => {
    setUser(null)
    removeAccessToken()
  }

  const updateUser = async (input) => {
    const res = await userService.patchUser(input)
    setUser(res.data.user)
  }

  return (
    <AuthContext.Provider
      value={{ initialLoading, user, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider
