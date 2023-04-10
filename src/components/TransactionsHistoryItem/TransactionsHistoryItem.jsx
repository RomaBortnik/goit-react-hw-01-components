import PropTypes from 'prop-types';
import css from './TransactionsHistoryItem.module.css';

const TransactionsHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.tableRow}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

TransactionsHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionsHistoryItem;
