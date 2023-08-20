import React, { useState, useEffect } from "react";
import DataItem from './DataItem';
import './TransactionTable.css'; // Import the CSS file

const Data = ({ searchTerm }) => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:4000/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filtered = transactions.filter(transaction =>
                transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTransactions(filtered);
        } else {
            setFilteredTransactions(transactions);
        }
    }, [transactions, searchTerm]);

    return (
        <table className="transaction-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Data;
