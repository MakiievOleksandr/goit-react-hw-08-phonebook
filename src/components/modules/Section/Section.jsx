import PropTypes from 'prop-types';

import css from './section.module.scss';

function Section({ title, children, ...props }) {
  const { button, style } = props;
  return (
    <section className={`${css.section} ${style}`}>
      <div className={css.header}>
        {title && <h2 className={css.title}>{title}</h2>}
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
