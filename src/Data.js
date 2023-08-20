import React, { useState, useEffect } from "react";
import DataItem from './DataItem';
import './TransactionTable.css'; // Import the CSS file

const Data = () => {
    const [transactions, setTranscations] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:4000/transactions')
        .then(response => response.json())
        .then(data => setTranscations(data))
    },[])

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
                {transactions.map((transaction) => (
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

