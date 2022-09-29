import LoginRegisImage from '../../components/ui/LoginRegisImage'
import regisCoverImg from '../../assets/img/nayeon_main_1.jpeg'
import RegisterForm from './RegisterForm'

function RegisterContainer() {
  return (
    <div className="grid grid-cols-2 gap-10 items-center m-10 mt-15 mt-[4.2rem]">
      <RegisterForm />
      <LoginRegisImage
        wSize="w-[22rem]"
        hSize="h-[22rem]"
        src={regisCoverImg}
      />
    </div>
  )
}

export default RegisterContainer
