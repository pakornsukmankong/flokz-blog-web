import UserDetail from './UserDetail'
import UserPostList from './UserPostList'

function ProfileContainer() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-gray-900 dark:text-white ml-28 my-3">
          User Profile
        </h1>
        <UserDetail />
        <h1 className="text-4xl text-gray-900 dark:text-white ml-28 my-3">
          Your Posts
        </h1>
        <UserPostList />
      </div>
    </>
  )
}

export default ProfileContainer
