import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterByYear = (year) => {
		setFilteredYear(year);
		
	};

	const filteredExpenses = props.expenses.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})



	return (
		<Card className="expenses">
			<ExpensesFilter
				onYearSelect={filterByYear}
				selected={filteredYear}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList items={filteredExpenses}/>
		</Card>
	);
}

export default Expenses;
