import PropTypes from 'prop-types';
import TransactionsHistoryItem from 'components/TransactionsHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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

TransactionHistory.propTypes = PropTypes.arrayOf(PropTypes.shape()).isRequired;

export default TransactionHistory;
