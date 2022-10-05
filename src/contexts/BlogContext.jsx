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
    return await blogService.getOneBlog(id)
  }

  const createBlog = async (input) => {
    return await blogService.createBlog(input)
  }

  const getAllCate = async () => {
    return await blogService.getAllCategories()
  }

  const updateBlog = async (input, blogId) => {
    return await blogService.editBlog(input, blogId)
  }

  return (
    <BlogContext.Provider
      value={{
        blogsLoading,
        blogs,
        getBlog,
        createBlog,
        getAllCate,
        updateBlog,
      }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlog = () => {
  return useContext(BlogContext)
}

export default BlogContextProvider
