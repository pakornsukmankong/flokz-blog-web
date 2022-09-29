import { Link } from 'react-router-dom'
import facebook from '../../assets/img/fb-logo.png'
import instagram from '../../assets/img/ig-logo.png'

function UserSocialMedia() {
  return (
    <div className="flex justify-center ">
      <Link to={'/'}>
        <img src={facebook} alt="facebook" className="w-10 h-8 mt-1 mr-1" />
      </Link>
      <Link to={'/'}>
        <img
          src={instagram}
          alt="instagram"
          className="w-8 h-8 mt-1 mx-1 mr-2"
        />
      </Link>
    </div>
  )
}

export default UserSocialMedia
