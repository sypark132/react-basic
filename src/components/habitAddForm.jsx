import React, { Component } from 'react';

class HabitAddForm extends Component {
    //리액트에서는 바로 DOM요소에 접근하지 않고 createRef를 이용해서 멤버변수를 정의한 다음에
    //해당하는 컴포넌트에 ref로 연결한다.
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (event) => {
        //브라우저의 기본 기능 없애기 -> 페이지 리프레쉬 중단!
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;