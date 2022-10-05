import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useBlog } from '../../contexts/BlogContext'
import { useLoading } from '../../contexts/LoadingContext'

function CreateBlogContainer() {
  const navigate = useNavigate()
  const { createBlog, getAllCate } = useBlog()
  const { startLoading, stopLoading } = useLoading()

  const [categories, setCategories] = useState([])

  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [content, setContent] = useState('')
  const [categoryInput, setCategoryInput] = useState()

  const formData = new FormData()
  formData.append('image', file)
  formData.append('title', title)
  formData.append('content', content)
  formData.append('categoryId', categoryInput)

  const handleClickPublish = async () => {
    try {
      startLoading()
      const res = await createBlog(formData)
      toast.success('create blog success')
      navigate(`/blog/${res.data.blog.id}`)
    } catch (err) {
      console.log(err)
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }

  useEffect(() => {
    const fetchCate = async () => {
      try {
        const res = await getAllCate()
        setCategories(res.data.categories)
      } catch (err) {}
    }
    fetchCate()
  }, [])

  return (
    <>
      <div className="my-3">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Title
        </label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="default-input"
          placeholder="Your Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Select category
        </label>
        <select
          onChange={(e) => setCategoryInput(e.target.value)}
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue>Choose a categories</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label
          className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="file_input">
          Upload cover image
        </label>
        <input
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0])
            }
          }}
          id="file_input"
          type="file"
          className="w-max text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-800 file:text-white
      hover:file:bg-blue-500
    "
        />
      </div>
      <div className="mb-3">
        <ReactQuill
          theme="snow"
          placeholder="Your content"
          name="content"
          value={content}
          onChange={setContent}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate('/')}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Back
        </button>
        <button
          onClick={handleClickPublish}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Publish
        </button>
      </div>
    </>
  )
}

export default CreateBlogContainer
