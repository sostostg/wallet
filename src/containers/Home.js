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
import EasterEgg from './Easter';
import ReactDOM from 'react-dom';

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
            amount: this.props.account.balance,
            error: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
        this.resetAmount = this.resetAmount.bind(this);
    }

    resetAmount() {
        this.setState({amount: undefined});
    }

    handleChange(e) {
        this.setState({amount: parseInt(e.target.value, 10)});
        this.setState({error: 0});
        this.setState({check: e.target.name});
    }

    deposit() {
        const amount = this.state.amount;

        if (this.state.check === 'deposit') {
            if (!isNaN(amount)) {
                this.props.actions.deposit(amount);
            }
            else
                this.setState({error: 1});
        }
    }

    withdraw() {
        const {account} = this.props.account;
        const amount = this.state.amount;

        if (this.state.check === 'withdraw') {
            if (!isNaN(amount)) {
                if (account.balance - amount >= 0) {
                    this.props.actions.withdraw(amount);
                }
                else
                    this.setState({error: 2});
            }
            else
                this.setState({error: 1});
        }
    }

    render() {
        const {account} = this.props.account;
        const error = this.state.error;
        let errorText = null;

        if (error === 1) {
            errorText = <h6 className="bg-danger text-white text-center">Please enter a valid number</h6>;
        }
        else if (error === 2) {
            errorText = <h6 className="bg-danger text-white text-center">Can't withdraw more than balance</h6>;
        }

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
                                <h2>Make a Deposit</h2>
                                <input name="deposit" ref="deposit" type="number"
                                       onChange={this.handleChange}/><br/><br/>
                                <Button color="success" onClick={() => {
                                    ReactDOM.findDOMNode(this.refs.deposit).value = "";
                                    this.deposit();
                                    this.resetAmount();
                                }}
                                        placeholder="Enter $ Amount">Deposit</Button>
                            </Col>
                            <Col>
                                <h2>Make a Withdrawal</h2>
                                <input name="withdraw" ref="withdraw" type="number"
                                       onChange={this.handleChange}/><br/><br/>
                                <Button color="danger" onClick={() => {
                                    ReactDOM.findDOMNode(this.refs.withdraw).value = "";
                                    this.withdraw();
                                    this.resetAmount();
                                }}
                                        placeholder="Enter $ Amount">Withdraw</Button>
                            </Col>
                        </Row>
                        <br/>
                        {(error > 0) && errorText}
                    </div>
                </Jumbotron>

                <EasterEgg />

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
