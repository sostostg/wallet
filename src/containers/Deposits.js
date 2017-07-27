/**
 * Created by gtsotsos on 2017-07-26.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Deposits = (props) => {
    return (
        <div>
            <h1>
                Deposits
            </h1>
            <h5>
                <div>
                    <div>Your recent deposits</div>
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
                {props.deposits.map(function (withdraw, index) {
                    return (
                        <tr className="bg-success text-white" key={index}>
                            <td>+${withdraw.amount}</td>
                            <td>{withdraw.timestamp}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </div>
    );
};

Deposits.propTypes = {
    deposits: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        deposits: state.account.deposits
    };
}

export default connect(
    mapStateToProps
)(Deposits);
