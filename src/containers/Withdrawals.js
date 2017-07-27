/**
 * Created by gtsotsos on 2017-07-26.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Withdrawals = (props) => {
    return (
        <div>

            <h1>
                Withdrawals
            </h1>
            <h5>
                <div>
                    <div>Your recent withdrawals</div>
                </div>
            </h5>

            <table className="table">
                <thead>
                <tr>
                    <th className="text-center">Amount ($)</th>
                    <th className="text-center">Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {props.withdrawals.map(function (withdraw, index) {
                    return (
                        <tr className="bg-danger text-white" key={index}>
                            <td>-${withdraw.amount}</td>
                            <td>{withdraw.timestamp}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </div>
    );
};

Withdrawals.propTypes = {
    withdrawals: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        withdrawals: state.account.withdrawals
    };
}

export default connect(
    mapStateToProps
)(Withdrawals);
