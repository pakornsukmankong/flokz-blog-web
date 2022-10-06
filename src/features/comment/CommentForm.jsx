import { useRef } from 'react'
import { useBlog } from '../../contexts/BlogContext'

function CommentForm({ blog, setNewBlog }) {
  const { createComment } = useBlog()
  const { id: blogId } = blog

  const inputEl = useRef()

  const handleKeyUp = async (e) => {
    try {
      if (e.key === 'Enter') {
        const res = await createComment(
          { title: inputEl.current.value },
          blogId
        )
        const newBlog = { ...blog }
        newBlog.Comments.unshift(res.data.comment)
        setNewBlog(newBlog)
        inputEl.current.value = ''
        return
      }
      if (e.key === 'Escape') {
        inputEl.current.value = ''
        return
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="m-6 flex justify-between">
        <p>Comments</p>
        <i className="fa-solid fa-xmark text-gray-500 hover:text-black"></i>
      </div>
      <div className=" border-b-2 mx-4 pb-6 px-2">
        <input
          onKeyUp={handleKeyUp}
          ref={inputEl}
          type="text"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="write your comment here"
        />
      </div>
    </>
  )
}

export default CommentForm
