import { useBlog } from '../../contexts/BlogContext'
import Blog from './Blog'

function BlogList() {
  const { blogs } = useBlog()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {blogs.map((item) => (
        <Blog key={item.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogList
