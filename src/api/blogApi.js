import axios from '../config/axios'

export const getAllBlog = () => axios.get('/blogs')

export const createBlog = (input) => axios.post('/blog', input)
