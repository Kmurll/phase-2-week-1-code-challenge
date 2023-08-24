import React, { useState, useEffect } from 'react'
import './App.css'
import TransactionForm from './TransactionForm'
import TransactionTable from './TransactionTable'

function App() {
  // State to store the list of transactions and the search term
  const [transactions, setTransactions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Function to handle adding a new transaction
  const handleAddTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction])
  };

  // Effect to fetch transactions from the server on component mount
  useEffect(() => {
    fetch('http://127.0.0.1:4000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="App">
      {/* Header */}
      <h1>Transaction App</h1>

      {/* Transaction Form */}
      <TransactionForm onAddTransaction={handleAddTransaction} />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Transaction Table */}
      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
    </div>
  )
}

export default App
