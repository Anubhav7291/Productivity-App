import React, { useEffect, useState } from 'react';
import useList from '../Custom/useList';
import Form from './Form'
import useListNo from '../Custom/useListNo';


const Habits=()=>{
    const [h1name,seth1name]=useState('Habits');
    const [placeholder,setplaceholder]=useState('Habits');
    const [itemsHabit,setItemsHabit]=useState([]);
    const [habitNo,sethabitNo]=useState(0);
    const [togglerhabit,setTogglerhabit]=useState(false);
    let  list='';
    let numberHabit=''

    const toggler=(response)=>{
        setTogglerhabit(response);
        
    }

    const ItemsHF=(FormData)=>{
       setItemsHabit(FormData);
       
    }

    const NO=(data)=>{
        sethabitNo(data);
       
    }
    
//LocalStorage for list of data//////
list=useList(itemsHabit,'list')
///////////////////////////////////////

//LocalStorage for number of data///
numberHabit=useListNo(habitNo,'numberHabit')
//////////////////////////////////////////////
useEffect(()=>{
    window.localStorage.setItem('habit',JSON.stringify(togglerhabit))
},[togglerhabit])

let habit=JSON.parse(localStorage.getItem('habit'));


    return <div>
    <Form h1name={h1name}
    placeholder={placeholder}
    itemsH={ItemsHF}
    pushItems={list}
    onItemNo={NO}
    numberItem={numberHabit}
    toggler={toggler}
    togglerDailies={habit}
    />
    
    </div>
}


export default Habits;