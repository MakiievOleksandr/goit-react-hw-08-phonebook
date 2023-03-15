import { useDispatch } from 'react-redux';

import RegisterForm from 'components/modules/RegisterForm/RegisterForm';

import { signup } from 'redux/auth/auth-operations';

import css from './register-page.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <p className={css.text}>Don't have an account? Please, fill form</p>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;
