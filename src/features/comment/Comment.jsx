import CommentContent from './CommentContent'
import CommentHeader from './CommentHeader'

function Comment() {
  return (
    <div className=" py-4 border-b-2 mx-4 px-1">
      <CommentHeader />
      <CommentContent />
    </div>
  )
}

export default Comment
