import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, children }) => {
  return (
    <section className={css.stats}>
      <h2 className={css.title}>{title && title}</h2>
      {children}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistics;
