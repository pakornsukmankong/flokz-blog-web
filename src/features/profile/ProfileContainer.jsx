import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLoading } from '../../contexts/LoadingContext'
import UserDetail from './UserDetail'
import UserPostList from './UserPostList'
import * as userService from '../../api/userApi'
import { useAuth } from '../../contexts/authContext'

function ProfileContainer() {
  const { startLoading, stopLoading } = useLoading()
  const { user: me } = useAuth()
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [social, setSocial] = useState({})
  const [userBlogs, setUserBlogs] = useState([])

  const [input, setInput] = useState({})

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const isMe = user.id === me.id

  useEffect(() => {
    const fetchUser = async () => {
      try {
        startLoading()
        const res = await userService.getUser(id)
        const { user } = res.data
        setUser(user)
        setSocial(user.Social)
        setInput({
          username: user.username,
          email: user.email,
          description: user.description,
          facebookUrl: user.Social.facebookUrl,
          instagramUrl: user.Social.instagramUrl,
        })
        setUserBlogs(user.Blogs)
      } catch (err) {
        console.log(err)
        toast.error(err.response?.data.message)
      } finally {
        stopLoading()
      }
    }
    fetchUser()
  }, [id, me])

  return (
    <>
      <div>
        <p className="text-4xl text-center text-gray-900 dark:text-white my-3">
          {user.username} Profile
        </p>
        <UserDetail
          me={me}
          user={user}
          isMe={isMe}
          social={social}
          input={input}
          handleChangeInput={handleChangeInput}
        />
        <p className="text-4xl text-center text-gray-900 dark:text-white my-3">
          {user.username} Posts
        </p>
        <UserPostList isMe={isMe} user={user} userBlogs={userBlogs} />
      </div>
    </>
  )
}

export default ProfileContainer
