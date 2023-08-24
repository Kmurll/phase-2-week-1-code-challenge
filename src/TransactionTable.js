import React from 'react'
import DataItem from './DataItem'
import './TransactionTable.css'

const TransactionTable = ({ transactions, searchTerm }) => {
  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <table className="transaction-table">
      <thead>
        {/* Table header */}
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* Display filtered transactions using DataItem component */}
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
  )
}

export default TransactionTable
