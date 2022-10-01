import { toast } from 'react-toastify'
import facebook from '../../assets/img/fb-logo.png'
import instagram from '../../assets/img/ig-logo.png'
import { useAuth } from '../../contexts/authContext'
import { useLoading } from '../../contexts/LoadingContext'
import ProfileImageForm from './ProfileImageForm'
import UserSocialMedia from './UserSocialMedia'

function UserDetail({
  user: { profileImage },
  isMe,
  input,
  handleChangeInput,
}) {
  const { updateUser } = useAuth()

  const { startLoading, stopLoading } = useLoading()

  const handleClickSubmit = async (e) => {
    e.preventDefault()
    try {
      startLoading()
      await updateUser(input)
      toast.success('update success')
    } catch (err) {
      console.log(err)
      toast.error(err.response?.data.message)
    } finally {
      stopLoading()
    }
  }

  return (
    <>
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center "
        onSubmit={handleClickSubmit}>
        <div className="w-[25rem]">
          <div className="mb-3">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Username
            </label>
            <input
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              name="username"
              value={input.username || ''}
              onChange={handleChangeInput}
              disabled={!isMe ? true : false}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              name="email"
              value={input.email || ''}
              onChange={handleChangeInput}
              disabled={!isMe ? true : false}
            />
          </div>
          <div className="mb-3 flex">
            <img src={facebook} alt="facebook" className="w-10 h-8 mt-1 mr-1" />
            <input
              id="facebook"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="facebook_url"
              name="facebookUrl"
              value={input.facebookUrl || ''}
              onChange={handleChangeInput}
              disabled={!isMe ? true : false}
            />
          </div>
          <div className="mb-3 flex">
            <img
              src={instagram}
              alt="instagram"
              className="w-8 h-8 mt-1 mx-1 mr-2"
            />
            <input
              id="instagram"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="instagram_url"
              name="instagramUrl"
              value={input.instagramUrl || ''}
              onChange={handleChangeInput}
              disabled={!isMe ? true : false}
            />
          </div>

          <button
            type="submit"
            className={`${
              !isMe ? 'hidden' : ''
            } text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
            Update
          </button>
        </div>
        <div className="md:w-full">
          <div className="flex flex-col justify-center items-center">
            <ProfileImageForm profileImage={profileImage} />
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
              name="description"
              value={input.description || ''}
              onChange={handleChangeInput}
              disabled={!isMe ? true : false}
            />
          </div>
          <UserSocialMedia
            facebookUrl={input.facebookUrl}
            instagramUrl={input.instagramUrl}
          />
        </div>
      </form>
      <div className="w-full border-b-2 mt-6"></div>
    </>
  )
}

export default UserDetail
