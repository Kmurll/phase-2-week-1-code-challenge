import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState(''); 
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!date || !description || !category || !amount) {
      return; // Prevent submitting with empty fields
    }

    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount)
    };

    onAddTransaction(newTransaction);

    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Date"
        value={date} // Use 'date' state here
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />   
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
