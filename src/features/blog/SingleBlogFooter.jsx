import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import CommentContainer from '../comment/CommentContainer'

function SingleBlogFooter({
  blog: { id: blogId, Likes, Comments },
  handleLike,
}) {
  const {
    user: { id },
  } = useAuth()

  const [isCommentOpen, setIsCommentOpen] = useState(false)

  const isUserLiked = Likes.find((item) => item.userId === id)

  const toggleComment = () => {
    setIsCommentOpen((prev) => !prev)
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
      {isCommentOpen && <CommentContainer />}
    </>
  )
}

export default SingleBlogFooter
