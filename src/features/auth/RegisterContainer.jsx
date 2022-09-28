import LoginRegisImage from '../../components/ui/LoginRegisImage';
import regisCoverImg from '../../assets/img/nayeon.jpeg';
import RegisterForm from './RegisterForm';

function RegisterContainer() {
  return (
    <div className="grid grid-cols-2 gap-10 items-center m-10 mt-15">
      <RegisterForm />
      <LoginRegisImage
        wSize="w-[22rem]"
        hSize="h-[22rem]"
        src={regisCoverImg}
      />
    </div>
  );
}

export default RegisterContainer;
