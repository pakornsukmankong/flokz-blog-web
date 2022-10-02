import BlogList from './BlogList'
import SearchBar from './SearchBar'

function BlogContainer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          The FLOKZ Blog
        </h1>
        <p className="mt-2 text-md text-gray-500 dark:text-white">
          A blog about everything for everyone
        </p>
        <SearchBar />
      </div>
      <BlogList />
    </>
  )
}

export default BlogContainer
