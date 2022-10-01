import facebook from '../../assets/img/fb-logo.png'
import instagram from '../../assets/img/ig-logo.png'

function UserSocialMedia({ facebookUrl, instagramUrl }) {
  return (
    <div className="flex justify-center ">
      <a href={facebookUrl} target="_blank">
        <img src={facebook} alt="facebook" className="w-10 h-8 mt-1 mr-1" />
      </a>
      <a href={instagramUrl} target="_blank">
        <img
          src={instagram}
          alt="instagram"
          className="w-8 h-8 mt-1 mx-1 mr-2"
        />
      </a>
    </div>
  )
}

export default UserSocialMedia
