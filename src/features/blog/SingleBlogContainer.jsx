import SingleBlogContent from './SingleBlogContent'
import SingleBlogFooter from './SingleBlogFooter'
import SingleBlogHeader from './SingleBlogHeader'

function SingleBlogContainer() {
  return (
    <>
      <div className="flex flex-col border-b-2 mt-5 my-2">
        <SingleBlogHeader />
        <SingleBlogContent />
      </div>
      <SingleBlogFooter />
    </>
  )
}

export default SingleBlogContainer
