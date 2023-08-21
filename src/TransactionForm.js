import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ onAddTransaction }) => {
  // State variables to manage form input values
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Check for empty fields before submitting
    if (!date || !description || !category || !amount) {
      return; // Prevent submitting with empty fields
    }

    // Create a new transaction object
    const newTransaction = {
      id: Date.now(),
      date,
      description,
      category,
      amount: parseFloat(amount)
    };

    // Call the parent component's function to add the new transaction
    onAddTransaction(newTransaction);

    // Reset form fields after submitting
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div className="form-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for Date, Description, Category, and Amount */}
        <input
          type="date"
          placeholder="Date"
          value={date}
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
        {/* Submit button */}
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
