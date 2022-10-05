import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/authContext'
import { useLoading } from '../../contexts/LoadingContext'
import { validateRegister } from '../../validation/userValidation'

function RegisterForm() {
  const { register } = useAuth()
  const { startLoading, stopLoading } = useLoading()
  const navigate = useNavigate()

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleClickSubmit = async (e) => {
    e.preventDefault()
    const { error } = validateRegister(input)
    if (error) {
      return toast.error(error.message)
    }
    try {
      startLoading()
      await register(input)
      toast.success('Register Success')
      navigate('/profile')
    } catch (err) {
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
    e.preventDefault()
  }

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleClickSubmit} className="fadeInUpAnima">
      <div className="w-[25rem] ml-[9rem]">
        <h1 className="text-center text-2xl uppercase font-bold">Register</h1>
        <div className="mb-3">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            name="username"
            value={input.username}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@email.com"
            name="email"
            onChange={handleChangeInput}
            value={input.email}
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChangeInput}
            value={input.confirmPassword}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Register
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
