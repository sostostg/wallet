/**
 * Created by gtsotsos on 2017-07-26.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/walletActions';
import PropTypes from 'prop-types';
import Withdrawals from './Withdrawals';
import Deposits from './Deposits';

import {
    Button,
    Jumbotron,
    Row,
    Col
} from 'reactstrap';

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: this.props.account.balance
        };
        this.handleChange = this.handleChange.bind(this);
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
    }

    handleChange(e) {
        this.setState({amount: parseInt(e.target.value, 10)});
    }

    deposit() {
        this.props.actions.deposit(this.state.amount);
    }

    withdraw() {
        this.props.actions.withdraw(this.state.amount);
    }

    render() {
        const {account} = this.props.account;
        return (
            <div>
                <Jumbotron>
                    <div>
                        <h1>
                            <div className="d-flex justify-content-center">
                                Wallet
                            </div>
                            <br/>
                        </h1>
                        <h2>
                            <div className="d-flex justify-content-center">
                                Current Balance
                            </div>
                            <span
                                className={"d-flex justify-content-center " + (account.balance >= 0 ? "text-success" : "text-danger")}>${account.balance}</span>
                            <br/>
                        </h2>

                        <Row className="text-center">
                            <Col>
                                <h1>Make a Deposit</h1>
                                <input type="number"
                                       onChange={this.handleChange} /*onBlur={(e) => e.target.value=''}*//><br/><br/>
                                <Button color="success" onClick={this.deposit}
                                        placeholder="Enter $ Amount">Deposit</Button>
                            </Col>
                            <Col>
                                <h1>Make a Withdrawal</h1>
                                <input type="number" onChange={this.handleChange}/><br/><br/>
                                <Button color="danger" onClick={this.withdraw}
                                        placeholder="Enter $ Amount">Withdraw</Button>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>

                <Row className="text-center">
                    <Col>
                        <div>
                            <Deposits />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Withdrawals />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

Home.propTypes = {
    account: PropTypes.object.isRequired,
    actions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        account: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
