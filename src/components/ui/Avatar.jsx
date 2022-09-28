import profileImage from '../../assets/img/profile-img.png';

function Avatar({ src, wSize }) {
  return (
    <img
      src={`${src || profileImage}`}
      className={`rounded-full ${wSize} shadow-lg`}
      alt="Avatar"
    />
  );
}

export default Avatar;
