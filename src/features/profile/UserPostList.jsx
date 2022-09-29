import UserPost from './UserPost'

function UserPostList() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-5">
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    </>
  )
}

export default UserPostList
