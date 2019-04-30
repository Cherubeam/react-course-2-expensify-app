import selectExpenses from '../../selectors/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const filters = {
        text: 'nomatch',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    const total = selectExpensesTotal(result)

    expect(total).toBe(0)
})

test('should correctly add up a single expense', () => {
    const filters = {
        text: 'Rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    const total = selectExpensesTotal(result)

    expect(total).toBe(result[0].amount)
})

test('should correctly add up multiple expenses', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    const total = selectExpensesTotal(result)

    expect(total).toBe(result[0].amount + result[1].amount + result[2].amount)
})