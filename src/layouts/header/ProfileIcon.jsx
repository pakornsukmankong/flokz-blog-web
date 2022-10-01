import { Link } from 'react-router-dom'
import Avatar from '../../components/ui/Avatar'
import { useAuth } from '../../contexts/authContext'

function ProfileIcon() {
  const {
    user: { id, profileImage },
  } = useAuth()
  return (
    <div>
      <Link to={`/profile/${id}`}>
        <Avatar wSize="w-8" hSize="h-8" src={profileImage} />
      </Link>
    </div>
  )
}

export default ProfileIcon
