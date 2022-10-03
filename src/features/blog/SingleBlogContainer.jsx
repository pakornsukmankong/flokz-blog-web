import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBlog } from '../../contexts/BlogContext'
import { useLoading } from '../../contexts/LoadingContext'
import SingleBlogContent from './SingleBlogContent'
import SingleBlogFooter from './SingleBlogFooter'
import SingleBlogHeader from './SingleBlogHeader'

function SingleBlogContainer() {
  const { id } = useParams()
  const { getBlog } = useBlog()
  const { startLoading, stopLoading } = useLoading()

  const [blog, setBlog] = useState({})
  const [user, setUser] = useState({})
  const [category, setCategory] = useState({})

  useEffect(() => {
    const fetchOneBlog = async () => {
      try {
        startLoading()
        const res = await getBlog(id)
        const { blog } = res.data
        setBlog(blog)
        setUser(blog.User)
        setCategory(blog.Category)
      } catch (err) {
        console.log(err)
      } finally {
        stopLoading()
      }
    }
    fetchOneBlog()
  }, [id])

  return (
    <>
      <div className="flex flex-col border-b-2 mt-5 my-2">
        <SingleBlogHeader blog={blog} user={user} category={category} />
        <SingleBlogContent blog={blog} />
      </div>
      <SingleBlogFooter />
    </>
  )
}

export default SingleBlogContainer
