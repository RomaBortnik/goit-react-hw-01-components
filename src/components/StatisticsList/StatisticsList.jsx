import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';
import { getRandomHexColor } from 'components/helpers/helpers';

const StatisticsList = ({ data, color }) => {
  const { statList, statListItem, statListLabel, statListPercentage } = css;
  return (
    <ul className={statList}>
      {data.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={statListItem}
          style={{ backgroundColor: getRandomHexColor(color) }}
        >
          <span className={statListLabel}>{label}</span>
          <span className={statListPercentage}>{percentage}%</span>
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
