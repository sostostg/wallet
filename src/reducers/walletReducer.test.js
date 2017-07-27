/**
 * Created by gtsotsos on 2017-07-27.
 */
import walletReducer from './walletReducer';

describe('wallet reducer', () => {
    it('should return the initial state', () => {
        expect(walletReducer(undefined, {})).toEqual(
            {
                balance: 0,
                withdrawals: [],
                deposits: []
            }
        )
    });

    it('should handle DEPOSIT', () => {
        expect(walletReducer({
                balance: 20,
                withdrawals: [],
                deposits: []
            }, {
                type: 'DEPOSIT',
                amount: 120
            })
        ).toEqual({
            balance: 140,
            deposits: [{
                amount: 120,
            }],
            withdrawals: []
        })
    })
    it('should handle WITHDRAW', () => {
        expect(walletReducer({
                balance: 20,
                withdrawals: [],
                deposits: []
            }, {
                type: 'WITHDRAW',
                amount: 10
            })
        ).toEqual({
            balance: 10,
            deposits: [],
            withdrawals: [{
                amount: 10,
            }]
        })
    })
    it('should handle RESET', () => {
        expect(walletReducer({
                balance: 2340,
                withdrawals: [{
                    amount: 20
                }],
                deposits: [{
                    amount: 200
                }]
            }, {
                type: 'RESET',
            })
        ).toEqual({
            withdrawals: [],
            deposits: [],
            balance: 0
        })
    })
});
