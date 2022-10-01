import Avatar from '../../components/ui/Avatar'

function ProfileImageForm({ profileImage }) {
  return (
    <div className="mb-3">
      <Avatar wSize="w-[10rem]" src={profileImage} />
    </div>
  )
}

export default ProfileImageForm
