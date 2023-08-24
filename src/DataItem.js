import React from 'react'

const DataItem = ({ date, description, category, amount }) => {
  // Display a row in the table for a single transaction
  return (
    <tr>
      <td>{date}</td> {/* Display the transaction's date */}
      <td>{description}</td> {/* Display the transaction's description */}
      <td>{category}</td> {/* Display the transaction's category */}
      <td>{amount}</td> {/* Display the transaction's amount */}
    </tr>
  )
}

export default DataItem

