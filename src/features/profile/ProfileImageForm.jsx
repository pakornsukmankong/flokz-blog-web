import { useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Avatar from '../../components/ui/Avatar'
import { useAuth } from '../../contexts/authContext'
import { useLoading } from '../../contexts/LoadingContext'

function ProfileImageForm({ profileImage, isMe }) {
  const { startLoading, stopLoading } = useLoading()
  const { updateUser } = useAuth()

  const [file, setFile] = useState(null)

  const inputEl = useRef()

  const handleClickSave = async () => {
    try {
      startLoading()
      const formData = new FormData()
      formData.append('profileImage', file)
      await updateUser(formData)
      toast.success('upload success')
      setFile(null)
      inputEl.current.value = null
    } catch (err) {
      console.log(err)
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }

  return (
    <div className="mb-3 flex flex-col justify-center items-center">
      <span onClick={() => inputEl.current.click()}>
        <Avatar
          wSize="w-[10rem]"
          hSize="h-[10rem]"
          src={file ? URL.createObjectURL(file) : profileImage}
        />
      </span>
      {isMe ? (
        <>
          {' '}
          <input
            ref={inputEl}
            type="file"
            className="block w-full text-sm text-slate-500
      file:ml-10 file:py-1 file:px-3
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0])
              }
            }}
          />
          {file && (
            <div>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleClickSave}>
                Save
              </button>
              <button
                type="button"
                class="px-2 py-1 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  setFile(null)
                  inputEl.current.value = null
                }}>
                Cancel
              </button>
            </div>
          )}
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProfileImageForm
