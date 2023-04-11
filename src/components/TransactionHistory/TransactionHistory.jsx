import PropTypes from 'prop-types';
import TransactionsHistoryItem from 'components/TransactionsHistoryItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const { transactionHistory, tableHeadline, tableRow } = css;
  return (
    <table className={transactionHistory}>
      <thead>
        <tr className={tableHeadline}>
          <th className={tableRow}>Type</th>
          <th className={tableRow}>Amount</th>
          <th className={tableRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionsHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            ></TransactionsHistoryItem>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
