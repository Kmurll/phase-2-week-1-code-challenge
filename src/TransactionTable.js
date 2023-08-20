import React from 'react';
import DataItem from './DataItem';
import './TransactionTable.css'

const TransactionTable = ({ transactions, searchTerm }) => {
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table className="transaction-table">
      <thead>
      </thead>
      <tbody>
        {filteredTransactions.map(transaction => (
          <DataItem
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
