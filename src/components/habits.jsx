import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    render() {
        return (
            //Habit 컴포넌트에 habit을 전달하면 props라는 object로 묶여서 전달 됨.
            //배열을 props로 전달할 때는 고유의 값인 key를 전달해야 한다.
            //그 경우에 보통 인덱스 번호를 사용하지 않고 자식 컴포넌트에 id값을 직접 부여한 후에
            //id값을 props로 전달한다.
            <>
                <HabitAddForm onAdd={this.props.onAdd} />
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;