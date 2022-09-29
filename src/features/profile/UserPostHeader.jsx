import { Link } from 'react-router-dom'

function UserPostHeader() {
  return (
    <Link to="/blog/:id">
      <img
        className="rounded-t-lg w-[24rem]"
        src="https://res.theconcert.com/c_thumb/1c8a8b27a58cdeeea9ac31da5fd1bad14/1.jpg"
        alt=""
      />
    </Link>
  )
}

export default UserPostHeader
