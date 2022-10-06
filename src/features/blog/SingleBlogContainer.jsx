import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { useBlog } from '../../contexts/BlogContext'
import { useLoading } from '../../contexts/LoadingContext'
import SingleBlogContent from './SingleBlogContent'
import SingleBlogFooter from './SingleBlogFooter'
import SingleBlogHeader from './SingleBlogHeader'

function SingleBlogContainer() {
  const { id } = useParams()
  const { getBlog, toggleLike } = useBlog()
  const { startLoading, stopLoading } = useLoading()

  const { id: userId } = useAuth().user

  const [blog, setBlog] = useState({
    User: '',
    Category: '',
    Comments: [],
    Likes: [],
    id: '',
    image: '',
    title: '',
    updatedAt: '',
  })

  useEffect(() => {
    const fetchOneBlog = async () => {
      try {
        startLoading()
        const res = await getBlog(id)
        setBlog(res.data.blog)
      } catch (err) {
        console.log(err)
      } finally {
        stopLoading()
      }
    }
    fetchOneBlog()
  }, [id])

  const handleLike = async (blogId) => {
    try {
      const res = await toggleLike(blogId)
      const newBlog = { ...blog }

      if (res.data.like) {
        newBlog.Likes.push(res.data.like)
        return setBlog(newBlog)
      }
      newBlog.Likes = newBlog.Likes.filter((item) => item.userId !== userId)
      setBlog(newBlog)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="flex flex-col border-b-2 mt-5 my-2">
        <SingleBlogHeader blog={blog} />
        <SingleBlogContent blog={blog} />
      </div>
      <SingleBlogFooter blog={blog} handleLike={handleLike} />
    </>
  )
}

export default SingleBlogContainer
