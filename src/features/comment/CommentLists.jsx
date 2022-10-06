import Comment from './Comment'

function CommentLists({ blog: { Comments } }) {
  return (
    <>
      {Comments.map((item) => (
        <Comment key={item.id} comment={item} />
      ))}
    </>
  )
}

export default CommentLists
