import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });
//
// const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });
//
// const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });
//
// const setStartDate = (startDate = undefined) => ({
//     type: 'SET_START_DATE',
//     startDate
// });
//
// const setEndDate = (endDate = undefined) => ({
//     type: 'SET_END_DATE',
//     endDate
// });

// this is action generator
// const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });
//
// // this is action generator
// const removeExpense = ({ id } = {}) => ({
//    type: 'REMOVE_EXPENSE',
//    id
// });
//
// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// });


// const expensesReducerDefaultState = [];
//
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [...state, action.expense];
//         case 'REMOVE_EXPENSE':
//             return state.filter(({id}) => id !== action.id);
//         case 'EDIT_EXPENSE':
//             return state.map( (expense) => {
//                 if ( expense.id === action.id ) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     };
//                 } else {
//                     return expense;
//                 };
//             });
//         default:
//             return state;
//     }
// };


// const filterReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };
//
// const filterReducer = (state = filterReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER' :
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_BY_AMOUNT' :
//             return{
//                 ...state,
//                 sortBy: 'amount'
//             };
//         case 'SORT_BY_DATE' :
//             return{
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SET_START_DATE' :
//             return{
//                 ...state,
//                 startDate: action.startDate
//             };
//         case 'SET_END_DATE' :
//             return{
//                 ...state,
//                 endDate: action.endDate
//             }
//         default:
//             return state;
//     }
// };

// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//   return expenses.filter((expense) => {
//       const matchStartDate = typeof startDate !== 'number' || expense.createdAt >= startDate;
//       const matchEndDate  = typeof endDate !== 'number' || expense.createdAt <= endDate;
//       const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
//
//       return matchEndDate && matchStartDate && matchText;
//   }).sort((a, b) => {
//       if ( sortBy === 'date' ){
//           return a.createdAt < b.createdAt ? 1 : -1;
//       }else if ( sortBy === 'amount' ){
//           return a.amount < b.amount ? 1 : -1;
//       }
//   });
// };

// // STORE
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filterReducer
//     })
// );

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000}));
const expTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 300, createdAt: 1000}));

// store.dispatch(removeExpense({id: expOne.expense.id}));
//
// store.dispatch(editExpense(expTwo.expense.id, {amount: 500}));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate(500));
// store.dispatch(setTextFilter('e'));

const demoState = {
  expenses: [{
      id: 'ddddddd',
      description: 'something',
      note: 'some note',
      amount: 453300,
      createdAt: 0
  }],
  filters: {
      text: 'rent',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
  }
};