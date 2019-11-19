import React from 'react';
import Proppes from 'prop-types';
import abc from './Transactions.module.css';

const TransactionHistory = ({ items }) => (
  <table className={abc.transactionistory}>
    <thead className={abc.theader}>
      <tr>
        <th className={abc.type}>Type</th>
        <th className={abc.amount}>Amount</th>
        <th className={abc.currency}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(el => (
        <tr key={el.id}>
          <td className={abc.type}>{el.type}</td>
          <td className={abc.amount}>{el.amount}</td>
          <td className={abc.currency}>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: Proppes.arrayOf(
    Proppes.shape({
      id: Proppes.string.isRequired,
      type: Proppes.string.isRequired,
      amount: Proppes.string.isRequired,
      currency: Proppes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
