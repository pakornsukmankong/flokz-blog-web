import profileImage from '../../assets/img/profile-img.png';

function Avatar({ src, size }) {
  return (
    <img
      src={`${src || profileImage}`}
      className={`rounded-full w-${size} shadow-lg`}
      alt="Avatar"
    />
  );
}

export default Avatar;
