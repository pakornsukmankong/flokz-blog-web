import BlogList from './BlogList'
import BlogTitle from './BlogTitle'
import SearchBar from './SearchBar'

function BlogContainer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <BlogTitle />
        <SearchBar />
      </div>
      <BlogList />
    </>
  )
}

export default BlogContainer
