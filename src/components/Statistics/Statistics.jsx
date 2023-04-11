import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/helpers/helpers';

const Statistics = ({ title, stats }) => {
  const {
    statistics,
    sectionTitle,
    statList,
    statListItem,
    statListLabel,
    statListPercentage,
  } = css;
  return (
    <section className={statistics}>
      {title && <h2 className={sectionTitle}>{title}</h2>}
      <ul className={statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={statListItem}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={statListLabel}>{label}</span>
            <span className={statListPercentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
