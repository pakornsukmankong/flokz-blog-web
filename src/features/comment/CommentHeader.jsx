import Avatar from '../../components/ui/Avatar'
import { timeSince } from '../../utils/dataFormat'

function CommentHeader({
  comment: {
    User: { profileImage, username },
    updatedAt,
  },
}) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center justify-center">
        <Avatar wSize="w-8" hSize="h-8" src={profileImage} />
        <div className="text-sm ml-2">
          <p>{username}</p>
          <p className="text-gray-500">{timeSince(updatedAt)} ago</p>
        </div>
      </div>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
  )
}

export default CommentHeader
