import useForm from 'components/shared/hooks/useForm';
import TextField from 'components/shared/components/TextField/TextField';
import Button from 'components/shared/components/Button/Button';

import initialState from './initialState';
import fields from './fields';

import css from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(initialState, onSubmit);
  const { email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
