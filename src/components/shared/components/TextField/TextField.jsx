import { useMemo } from 'react';

import { nanoid } from 'nanoid';

import css from './text.module.scss';

const TextField = ({ label, name, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const inputName = useMemo(() => name || id, [name, id]);

  return (
    <div className={css.wrap}>
      <label htmlFor={id}></label>
      <input
        name={inputName}
        className={css.textin}
        id={id}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextField;
