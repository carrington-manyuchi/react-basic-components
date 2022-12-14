import { useState } from "react";
import Expensedate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Clicked");
  };
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <Expensedate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
