import { Component } from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
        };

        this.resetCounter = this.resetCounter.bind(this);
    }

    decrementCounter(e) {
        // this.setState({count: this.state.count - 1})
        this.setState(prevState => ({count: prevState.count - 1}));
    }

    incrementCounter(e) {
        this.setState(prevState => ({count: prevState.count + 1}));   
    }

    resetCounter(e) {
        this.setState({count: 0});
    }

    render() {
        return (
            <div className="bg-light col-md-3 d-flex justify-content-center align-items-center">
                <button className="btn btn-primary" onClick={(e) => this.decrementCounter(e)}>-</button>
                <span className="ml-2 mr-2">{this.state.count}</span>
                <button className="btn btn-primary" onClick={this.incrementCounter.bind(this)}>+</button>
                <button className="btn btn-danger ml-3" onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

export default Increment;