import CommentContent from './CommentContent'
import CommentHeader from './CommentHeader'

function Comment({ comment }) {
  return (
    <div className=" py-4 border-b-2 mx-4 px-1">
      <CommentHeader comment={comment} />
      <CommentContent comment={comment} />
    </div>
  )
}

export default Comment
