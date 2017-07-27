import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/walletActions';
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    reset() {
        this.props.actions.reset();
    }

    render() {
        return (
            <div>
                <Navbar color="inverse" inverse toggleable>
                    <NavbarToggler right onClick={this.toggle}/>
                    <NavbarBrand href="/">Wallet</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.reset}>Reset</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/sostostg/wallet" target="_blank">View Source</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                {this.props.children}

            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
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
)(App);