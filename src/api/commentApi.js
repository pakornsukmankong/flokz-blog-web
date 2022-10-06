import axios from '../config/axios'

export const createComment = (input, blogId) =>
  axios.post(`/blogs/${blogId}/comments`, input)
