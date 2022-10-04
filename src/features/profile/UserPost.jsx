import UserPostContent from './UserPostContent'
import UserPostFooter from './UserPostFooter'
import UserPostHeader from './UserPostHeader'

function UserPost({ blog, isMe, user }) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <UserPostHeader blog={blog} />
      <div className="p-4">
        <UserPostContent blog={blog} user={user} />
        <UserPostFooter isMe={isMe} blog={blog} />
      </div>
    </div>
  )
}

export default UserPost
