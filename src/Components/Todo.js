import React from 'react';
import Form from './Form'
import { useState,useEffect} from 'react';
import useList from '../Custom/useList';
import useListNo from '../Custom/useListNo';

 const Todo=()=> {
    const [h1name,seth1name]=useState('To-Do');
    const [placeholder,setplaceholder]=useState('Todo');
    const [itemsTodo,setItemsTodo]=useState([]);
    const [TodoNo,setTodoNo]=useState(0);
    const [togglertodo,setTogglerTodo]=useState(false);
    let listw=''
    let numberTodo=''

    const toggler=(response)=>{
        setTogglerTodo(response);
        
    }


    const NO=(data)=>{
        setTodoNo(data);
       
    }
    const ItemsHF=(FormData)=>{
        setItemsTodo(FormData);
        
    }
//Local Storage/////////////////
listw=useList(itemsTodo,'listw')
/////////////////////////////////////

//LocalStorage for number of data//////
numberTodo=useListNo(TodoNo,'numberTodo');   
/////////////////////////////////////////////
useEffect(()=>{
    window.localStorage.setItem('todo',JSON.stringify(togglertodo))
},[togglertodo])

let todo=JSON.parse(localStorage.getItem('todo'));


    return <div>
    <Form h1name={h1name}
    placeholder={placeholder}
    itemsH={ItemsHF}
    pushItems={listw}
    onItemNo={NO}
    numberItem={numberTodo}
    toggler={toggler}
    togglerDailies={todo}
    />
    </div>
}

export default Todo;