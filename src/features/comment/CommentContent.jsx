function CommentContent({ comment: { title } }) {
  return (
    <div className="text-sm text-gray-700">
      <p>{title}</p>
    </div>
  )
}

export default CommentContent
