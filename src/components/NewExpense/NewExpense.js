import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };
    const [showExpenses , setShowExpenses] = useState(false);
    const invertNewExpenseHandler = () =>
    {
        setShowExpenses(!showExpenses);
    }
    if(showExpenses == false)
    {
        return (
            <div className="new-expense">
                <button className="new-expense" onClick={invertNewExpenseHandler}>Add New Expense</button>
            </div>)
    }
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={invertNewExpenseHandler}/>
    </div>)
};

export default NewExpense;