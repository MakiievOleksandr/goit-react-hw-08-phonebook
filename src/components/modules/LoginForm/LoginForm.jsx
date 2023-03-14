import useForm from 'components/shared/hooks/useForm';
import MyTextField from 'components/shared/components/TextField/TextField';
import MyButton from 'components/shared/components/Button/Button';

import initialState from './initialState';
import fields from './fields';

import css from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(initialState, onSubmit);
  const { email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <MyTextField value={email} onChange={handleChange} {...fields.email} />
      <MyTextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <MyButton variant="contained" className={css.btn}>
        Login
      </MyButton>
    </form>
  );
};

export default LoginForm;
