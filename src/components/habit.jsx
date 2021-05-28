import React, { Component } from 'react';

class Habit extends Component {
    handleIncrement = () => {
        //state 오브젝트 안에 있는 count를 증가시킨 뒤 state 업데이트 해야 함.
        //state를 업데이트 할 때에는 리액트에서 제공하는 setState 함수를 호출해야 함.
        //this.setState({count: this.state.count + 1})
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        // const count = this.state.count -1;
        // this.setState({count: count < 0 ? 0 : count})
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        //외부로부터 받아온 데이터 = props
        //console.log(this.props.habit);
        //this.props.habit의 변수 name과 count를 묶어서 사용 가능하다.
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;