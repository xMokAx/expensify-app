import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={expenses.length} expensesTotal={getExpensesTotal(expenses)}/>);
    expect(wrapper).toMatchSnapshot();
});