import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'rent' };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('rent');
});

test('should set start date filter', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0) };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set start date filter', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0) };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});