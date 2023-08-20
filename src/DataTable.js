import React from "react";
import DataItem from './DataItem';

const DataTable = ({ transactions }) => {
    return (
        <div>
            {transactions.map((transaction) => (
                <DataItem
                    key={transaction.id}
                    date={transaction.date}
                    description={transaction.description}
                    category={transaction.category}
                    amount={transaction.amount}
                />
            ))}
        </div>
    )
}

export default DataTable;

