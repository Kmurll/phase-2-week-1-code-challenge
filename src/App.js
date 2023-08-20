import React, { useState } from 'react';
import './App.css';
import Data from './Data';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

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
      <Data transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}


export default App;
