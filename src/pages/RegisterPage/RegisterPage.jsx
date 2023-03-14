import { useDispatch } from 'react-redux';

import RegisterForm from 'components/modules/RegisterForm/RegisterForm';

import { signup } from 'redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));

    console.log(data);
  };

  return (
    <>
      <h1>Registration</h1>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;
