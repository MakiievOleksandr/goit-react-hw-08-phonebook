import useForm from 'components/shared/hooks/useForm';
import MyTextField from 'components/shared/components/TextField/TextField';
import { Button } from '@mui/material';

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
      <Button onClick={handleSubmit}>Login</Button>
    </form>
  );
};

export default LoginForm;
