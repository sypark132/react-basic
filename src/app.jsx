import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';

class App extends Component {
  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
  };

  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit.name}`);
    // //리액트에서는 state 오브젝트를 직접 수정하는 것은 좋지 않다!!
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      }
      return item;
    })
    //this.setState({habits: habits})인데 key와 value값이 같으면 한 쪽은 생략 가능.
    this.setState({habits});
  }

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};
      }
      return item;
    })
    this.setState({habits});
  }

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id!=habit.id);
    this.setState({habits});
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      // habit.count = 0;
      // return habit;
      if(habit.count > 0) {
        return {...habit, count: 0}
      }
      return habit;
    });
    this.setState({habits});
  }

  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete} 
        onAdd={this.handleAdd}
        onReset={this.handleReset}
      />
      </>
    );
  }
}

export default App;
