import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:4000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Transaction App</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
