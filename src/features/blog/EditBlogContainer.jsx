import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useBlog } from '../../contexts/BlogContext'
import { useLoading } from '../../contexts/LoadingContext'

function EditBlogContainer() {
  const { getBlog, getAllCate, updateBlog } = useBlog()
  const { startLoading, stopLoading } = useLoading()
  const { id } = useParams()
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  const [input, setInput] = useState({
    title: '',
    categoryId: '',
  })
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null)

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleInputContent = (event) => {
    setContent(event)
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const resCate = await getAllCate()
        setCategories(resCate.data.categories)
        const res = await getBlog(id)
        const { blog } = res.data
        setInput({
          ...input,
          title: blog.title,
          categoryId: blog.Category.id,
        })
        setFile(blog.image)
        setContent(blog.content)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBlog()
  }, [])

  const formData = new FormData()
  formData.append('title', input.title)
  formData.append('categoryId', input.categoryId)
  formData.append('content', content)
  formData.append('image', file)

  const handleUpdateBlog = async () => {
    try {
      startLoading()
      await updateBlog(formData, id)
      toast.success('update success')
      navigate(`/blog/${id}`)
    } catch (err) {
      console.log(err)
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }

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
          value={input.title}
          onChange={handleInputChange}
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
          value={input.categoryId}
          onChange={handleInputChange}
          name="categoryId"
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
          onChange={handleInputContent}
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
          onClick={handleUpdateBlog}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Confirm
        </button>
      </div>
    </>
  )
}

export default EditBlogContainer
