import UserPost from './UserPost'

function UserPostList({ isMe, userBlogs, user }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center mb-5">
        {userBlogs.map((item) => (
          <UserPost key={item.id} blog={item} isMe={isMe} user={user} />
        ))}
      </div>
    </>
  )
}

export default UserPostList
