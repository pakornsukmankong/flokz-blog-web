import UserPostContent from './UserPostContent'
import UserPostFooter from './UserPostFooter'
import UserPostHeader from './UserPostHeader'

function UserPost() {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <UserPostHeader />
      <div className="p-5">
        <UserPostContent />
        <UserPostFooter />
      </div>
    </div>
  )
}

export default UserPost
