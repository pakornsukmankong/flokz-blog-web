import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/authContext'
import { useLoading } from '../../contexts/LoadingContext'

function LoginForm() {
  const { startLoading, stopLoading } = useLoading()
  const { login } = useAuth()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    usernameOrEmail: '',
    password: '',
  })

  const handleClickSubmit = async (e) => {
    e.preventDefault()
    try {
      startLoading()
      await login(input)
      toast.success('login success')
      navigate('/')
    } catch (err) {
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleClickSubmit} className="fadeInUpAnima">
      <div className="w-[25rem] ml-[9rem]">
        <p className="text-center text-2xl uppercase font-bold mb-5">Login</p>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Username or Email
          </label>
          <input
            type="username"
            id="username"
            name="usernameOrEmail"
            onChange={handleChangeInput}
            value={input.usernameOrEmail}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username or email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChangeInput}
            value={input.password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
