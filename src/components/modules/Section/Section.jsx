import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import css from './section.module.scss';

function Section({ title, children, ...props }) {
  const { button, style } = props;
  return (
    <section className={`${css.section} ${style}`}>
      <div className={css.header}>
        {/* {title && <h2 className={css.title}>{title}</h2>} */}
        {/* <Button
          sx={{
            height: 35,
            margin: 0,
          }}
        >
          Filter
        </Button> */}
        {/* {button} */}
        {button}
      </div>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
