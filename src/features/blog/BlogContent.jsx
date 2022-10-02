import { Link } from 'react-router-dom'
import Avatar from '../../components/ui/Avatar'
import { timeSince } from '../../utils/dataFormat'

function BlogContent({
  blog: {
    id: blogId,
    title,
    updatedAt,
    content,
    Category: { categoryName },
    User: { id: userId, username, profileImage },
  },
}) {
  return (
    <>
      <Link to={`/blog/${blogId}`}>
        <button
          type="button"
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {categoryName}
        </button>
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-1 text-[13px] text-gray-400 dark:text-white">
          {updatedAt.slice(0, 10)} - {timeSince(updatedAt) + ' ago'}
        </p>
      </Link>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        {content}
      </p>
      <Link to={`/profile/${userId}`}>
        <div className="flex justify-start items-center mb-2">
          <Avatar src={profileImage} wSize="w-7" hSize="h-7" />
          <p className="text-xs ml-1 font-normal text-gray-900 dark:text-gray-400">
            {username}
          </p>
        </div>
      </Link>
    </>
  )
}

export default BlogContent
