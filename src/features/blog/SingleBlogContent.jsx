import parse from 'html-react-parser'

function SingleBlogContent({ blog: { content } }) {
  return <div className="mb-6">{parse(content + '')}</div>
}

export default SingleBlogContent
