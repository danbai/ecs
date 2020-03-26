import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/home_action';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.fetchAdd = this.fetchAdd.bind(this);
    }
    handleClick() {
        this.setState({
            count: ++this.state.count
        })
    }
    handleChange(num) {
        this.setState({
            count: num
        })
    }
    fetchAdd() {
        this.props.dispatch(increment());
    }
    render() {
        return (
            <div>
                <p>ddddd</p>
                <p>count: {this.state.count}</p>
                <button onClick={this.handleClick}>add</button>
                <button onClick={this.handleChange.bind(this, 10)}>change</button>
                <button onClick={this.fetchAdd}>add redux</button>
                <p>{this.props.counter.count}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);