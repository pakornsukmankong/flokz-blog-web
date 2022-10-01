import { Link } from 'react-router-dom'
import Avatar from '../../components/ui/Avatar'

function UserPostContent() {
  return (
    <>
      <Link to="/blog/:id">
        <button
          type="button"
          class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Lifestyle
        </button>
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-1 text-[13px] text-gray-400 dark:text-white">
          Jun 21, 2021 - 11min ago
        </p>
      </Link>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Link to={'/profile/:id'}>
        <div className="flex justify-start items-center mb-2">
          <Avatar wSize={'w-7'} />
          <p className="text-xs ml-1 font-normal text-gray-900 dark:text-gray-400">
            Your Username
          </p>
        </div>
      </Link>
    </>
  )
}

export default UserPostContent
