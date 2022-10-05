import Blog from './Blog'
import { useBlog } from '../../contexts/BlogContext'

function BlogList() {
  const { blogs } = useBlog()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center fadeInUpAnima">
      {blogs.map((item) => (
        <Blog key={item.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogList
