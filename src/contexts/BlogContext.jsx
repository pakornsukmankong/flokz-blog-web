import { useState, useEffect, useContext, createContext } from 'react'
import * as blogService from '../api/blogApi'

const BlogContext = createContext()

function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useState([])
  const [blogsLoading, setBlogLoading] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setBlogLoading(true)
        const res = await blogService.getAllBlog()
        setBlogs(res.data.blogs)
      } catch (err) {
        console.log(err)
      } finally {
        setBlogLoading(false)
      }
    }
    fetchBlog()
  }, [])

  const getBlog = async (id) => {
    const res = await blogService.getOneBlog(id)
    return res
  }

  return (
    <BlogContext.Provider value={{ blogsLoading, blogs, getBlog }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlog = () => {
  return useContext(BlogContext)
}

export default BlogContextProvider
