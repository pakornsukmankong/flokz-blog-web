import { Link } from 'react-router-dom'
import notFoundImg from '../../assets/img/not-found-img.png'

function UserPostHeader({ blog: { id, image } }) {
  return (
    <Link to={`/blog/${id}`}>
      <img
        className="rounded-t-lg w-[24rem] h-[16rem]"
        src={image || notFoundImg}
        alt="coverImg"
      />
    </Link>
  )
}

export default UserPostHeader
