import React , {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) =>
{
    const [year, setSelctedYear] = useState('2021');

    const yearSetHandler = (selectedYear) =>
    {
        setSelctedYear(selectedYear);
    }
    const filteredItems = props.items.filter((item) => item.date.getFullYear() == year);
  
    return(
        <Card className="expenses">
            <ExpensesFilter selected={year} onYearSet={yearSetHandler}/>
            <ExpensesChart expenses={filteredItems}/>
            <ExpensesList items={filteredItems}/>
        </Card>
    )
}

export default Expenses;