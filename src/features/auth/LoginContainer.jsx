import LoginRegisImage from '../../components/ui/LoginRegisImage';
import loginCoverImg from '../../assets/img/iu.jpeg';
import LoginForm from './LoginForm';

function LoginContainer() {
  return (
    <div className="grid grid-cols-2 gap-10 items-center m-10 mt-15">
      <LoginForm />
      <LoginRegisImage
        wSize="w-[22rem]"
        hSize="h-[22rem]"
        src={loginCoverImg}
      />
    </div>
  );
}

export default LoginContainer;
