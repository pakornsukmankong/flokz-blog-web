import axios from '../config/axios'

export const getUser = (id) => axios.get(`/users/${id}`)

export const patchUser = (input) => axios.patch(`/users`, input)
