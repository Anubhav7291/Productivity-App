import React, { useState,useEffect} from 'react';
import useList from '../Custom/useList';
import useListNo from '../Custom/useListNo';
import Form from './Form'
const Dailies=()=>{
    const [h1name,seth1name]=useState('Dailies');
    const [placeholder,setplaceholder]=useState('Dailies');
    const [itemsDailies,setItemsDailies]=useState([]);
    const [dailiesNo,setdailiesNo]=useState(0);
    const [togglerDailies,setTogglerDailies]=useState(false);
    let list1=''
    let numberDailies=''


const toggler=(response)=>{
    setTogglerDailies(response);
}

    const ItemsHF=(FormData)=>{
        setItemsDailies(FormData);
        
     }

     const NO=(data)=>{
        setdailiesNo(data);
       
    }
//Local Storage/////
 list1=useList(itemsDailies,'list1')
//////////////////////////////////////


//LocalStorage for number of data///
numberDailies=useListNo(dailiesNo,'numberDailies');
//////////////////////////////////////////////////////

useEffect(()=>{
    window.localStorage.setItem('dailies',JSON.stringify(togglerDailies))
},[togglerDailies])

let dailies=JSON.parse(localStorage.getItem('dailies'));

    return <div>
    <Form h1name={h1name}
    placeholder={placeholder}
    itemsH={ItemsHF}
    pushItems={list1}
    onItemNo={NO}
    numberItem={numberDailies}
    toggler={toggler}
    togglerDailies={dailies}
    />
    </div>
}


export default Dailies;