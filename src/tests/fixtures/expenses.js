import moment from 'moment';

export default [{
    id: '1',
    description: 'test 1',
    note: '',
    amount: 222,
    createdAt: 0
},{
    id: '2',
    description: 'test 2',
    note: '',
    amount: 333,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'not 3',
    note: '',
    amount: 444,
    createdAt: moment(0).add(4, 'days').valueOf()
}];