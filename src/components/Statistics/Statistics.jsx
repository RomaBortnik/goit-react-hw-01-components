import PropTypes from 'prop-types';

const Statistics = ({ title, children }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title && title}</h2>
      {children}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistics;
