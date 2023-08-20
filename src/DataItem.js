import React from "react";
import "./DataItem.css";

const DataItem = (props) => {
    return (
        <div className="data-item">
            <h2>Transaction Details</h2>
            <p>Date: {props.date}</p>
            <p>Description: {props.description}</p>
            <p>Category: {props.category}</p>
            <p>Amount: {props.amount}</p>
        </div>
    )
}

export default DataItem;

