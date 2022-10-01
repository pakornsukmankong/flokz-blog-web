import profileImage from '../../assets/img/profile-img.png'

function Avatar({ src, wSize, hSize }) {
  return (
    <img
      src={`${src || profileImage}`}
      className={`rounded-full ${wSize} ${hSize} shadow-lg`}
      alt="Avatar"
    />
  )
}

export default Avatar
