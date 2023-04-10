import PropTypes from 'prop-types';

const StatisticsList = ({ data }) => {
  return (
    <ul className="stat-list">
      {data.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticsList;
