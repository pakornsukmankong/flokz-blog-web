import Blog from './Blog'

function BlogList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  )
}

export default BlogList
