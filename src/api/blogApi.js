import axios from '../config/axios'

export const getAllBlog = () => axios.get('/blogs')

export const createBlog = (input) => axios.post('/blogs', input)

export const getOneBlog = (id) => axios.get(`/blogs/${id}`)

export const getAllCategories = () => axios.get('/categories')

export const editBlog = (input, blogId) =>
  axios.patch(`/blogs/${blogId}/edit`, input)
