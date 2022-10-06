import axios from '../config/axios'

export const toggleLike = (postId) => axios.post(`/blogs/${postId}/likes`)
