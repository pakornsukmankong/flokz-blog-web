import CommentForm from './CommentForm'
import CommentLists from './CommentLists'

function CommentContainer() {
  return (
    <>
      {/* <div className="w-full h-screen backdrop-brightness-90 absolute top-0 left-0"></div> */}
      <div className="w-[20rem] h-full fixed right-0 top-0 bg-white overflow-y-auto">
        <CommentForm />
        <CommentLists />
      </div>
    </>
  )
}

export default CommentContainer