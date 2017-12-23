import moment from 'moment';
import filterReducer from '../../reducers/filters';


test('should setup default filter values', () => {
   const state = filterReducer(undefined, {type: '@@INIT'});
   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   });
});

test('should set sortyB to amount', () => {
    const state =  filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortyBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state =  filterReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const testText = 'mytext';
    const state =  filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: testText});
    expect(state.text).toBe(testText);
});

test('should set startDate filter', () => {
    const testDate = moment(0);
    const state =  filterReducer(undefined, {type: 'SET_START_DATE', startDate: testDate });
    expect(state.startDate).toEqual(testDate);
});

test('should set endDate filter', () => {
    const testDate = moment(0);
    const state =  filterReducer(undefined, {type: 'SET_END_DATE', endDate: testDate });
    expect(state.endDate).toEqual(testDate);
});