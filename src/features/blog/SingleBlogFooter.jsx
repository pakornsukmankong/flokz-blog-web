import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { useBlog } from '../../contexts/BlogContext'
import CommentContainer from '../comment/CommentContainer'

function SingleBlogFooter({ blog, setNewBlog }) {
  const { user } = useAuth()
  const { toggleLike } = useBlog()

  const { id: blogId, Likes, Comments } = blog

  const [isCommentOpen, setIsCommentOpen] = useState(false)

  let isUserLiked = false
  if (user) {
    isUserLiked = Likes.find((item) => item.userId === user.id)
  }

  const toggleComment = () => {
    setIsCommentOpen((prev) => !prev)
  }

  const handleLike = async (blogId) => {
    try {
      const res = await toggleLike(blogId)
      const newBlog = { ...blog }

      if (res.data.like) {
        newBlog.Likes.push(res.data.like)
        return setNewBlog(newBlog)
      }
      newBlog.Likes = newBlog.Likes.filter((item) => item.userId !== user.id)
      setNewBlog(newBlog)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="flex gap-6 ml-2 mt-2 mb-10">
        <div className="flex" onClick={() => handleLike(blogId)}>
          <i
            className={`fa-regular fa-heart text-xl ${
              isUserLiked
                ? 'text-red-500 hover:text-red-800'
                : 'text-gray-500 hover:text-gray-800'
            } cursor-pointer`}
          />
          <p className="text-gray-500 text-sm ml-2 my-auto">{Likes.length}</p>
        </div>
        <div className="flex" onClick={toggleComment}>
          <i className="fa-regular fa-comment text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
          <p className="text-gray-500 text-sm ml-2 my-auto">
            {Comments.length}
          </p>
        </div>
      </div>
      {isCommentOpen && (
        <CommentContainer blog={blog} setNewBlog={setNewBlog} />
      )}
    </>
  )
}

export default SingleBlogFooter
