import UserPost from './UserPost'

function UserPostList({ isMe }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center mb-5">
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    </>
  )
}

export default UserPostList
