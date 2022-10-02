import React from 'react'

function SingleBlogFooter() {
  return (
    <div className="flex gap-6 ml-2 mt-2 mb-10">
      <i className="fa-regular fa-heart text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
      <i className="fa-regular fa-comment text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
    </div>
  )
}

export default SingleBlogFooter
