import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <p>Viewing {props.expensesCount} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state, props) => ({
    expensesCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);