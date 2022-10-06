import Avatar from '../../components/ui/Avatar'

function CommentHeader() {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center justify-center">
        <Avatar wSize="w-8" hSize="h-8" />
        <div className="text-sm ml-2">
          <p>Nayeon</p>
          <p className="text-gray-500">10 mins ago</p>
        </div>
      </div>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
  )
}

export default CommentHeader
