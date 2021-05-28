import React, {memo} from 'react';

//함수로 작성하면 this 쓰지 않아도 됨.
//class에 PureComponent가 있다면 function에는 memo가 같은 역할을 함.
const HabitAddForm = memo(props => {
    //리액트에서는 바로 DOM요소에 접근하지 않고 createRef를 이용해서 멤버변수를 정의한 다음에
    //해당하는 컴포넌트에 ref로 연결한다.
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    const onSubmit = (event) => {
        //브라우저의 기본 기능 없애기 -> 페이지 리프레쉬 중단!
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
                ref={inputRef} 
                type="text" 
                className="add-input" 
                placeholder="Habit" 
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;