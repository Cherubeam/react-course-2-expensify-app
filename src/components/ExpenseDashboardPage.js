import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseList from './ExpenseList'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage