import { Link } from 'react-router-dom'
import Avatar from '../../components/ui/Avatar'
import { timeSince } from '../../utils/dataFormat'

function SingleBlogHeader({
  blog: {
    User: { profileImage, username, id },
    updatedAt,
    title,
    image,
    Category: { categoryName },
  },
}) {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <button
        type="button"
        className="w-max text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {categoryName}
      </button>
      <h5 className="mb-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-1 text-[15px] text-gray-400 dark:text-white">
        {updatedAt.slice(0, 10)} - {timeSince(updatedAt) + ' ago'}
      </p>
      <img
        className="rounded-t-lg w-[100%] h-[25rem]"
        src={image}
        alt="title image"
      />
      <Link to={`/profile${id}`}>
        <div className="flex justify-start items-center mt-2">
          <Avatar wSize="w-7" hSize="h-7" src={profileImage} />
          <p className="text-xs ml-2 font-normal text-gray-900 dark:text-gray-400">
            {username}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default SingleBlogHeader
