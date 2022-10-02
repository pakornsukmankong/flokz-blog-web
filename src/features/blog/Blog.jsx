import BlogContent from './BlogContent'
import BlogFooter from './BlogFooter'
import BlogHeader from './BlogHeader'

function Blog({ blog }) {
  return (
    <div className="mb-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <BlogHeader blog={blog} />
      <div className="p-4">
        <BlogContent blog={blog} />
        <BlogFooter blog={blog} />
      </div>
    </div>
  )
}

export default Blog
