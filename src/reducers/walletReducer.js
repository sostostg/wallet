/**
 * Created by gtsotsos on 2017-07-26.
 */
import initialState from './initialState';

export default function walletReducer(state = initialState, action) {

    switch (action.type) {
        case 'WITHDRAW':
            return {
                ...state,
                withdrawals: [
                    ...state.withdrawals,
                    {
                        amount: action.amount,
                        timestamp: action.timestamp
                    }
                ],
                balance: state.balance - action.amount
            };

        case 'DEPOSIT':
            return {
                ...state,
                deposits: [
                    ...state.deposits,
                    {
                        amount: action.amount,
                        timestamp: action.timestamp
                    }
                ],
                balance: state.balance + action.amount
            };

        case 'RESET':
            return {
                ...state,
                withdrawals: [],
                deposits: [],
                balance: 0
            };

        default:
            return state;
    }
}
