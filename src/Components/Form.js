import React, { useState } from 'react';
import '../Css/queries.css'

const Form=(props)=>{
  
    const [value,setValue]=useState('');
    const [toggler,setToggler]=useState(false)
    const [items,setItems]=useState(props.pushItems||[]);
    const [elementId,setElementId]=useState(null);
    const [no,setno]=useState(props.numberItem||0);
    const [toggleTitle,setToggleTitle]=useState(props.togglerDailies);
    
    props.toggler(toggleTitle);

    props.onItemNo(no)

    props.itemsH(items)
        console.log(items);



    const setNumber=()=>{
        if(toggleTitle){
            setToggleTitle(false);
          
        }else{
            setToggleTitle(true);
        }

        }
        
    
    const AddItem=()=>{
        if(!toggler&&value!==''){
        setItems([...items,value]);
        }
        else if(toggler){
          
            items[elementId]=value;
            setItems([...items]);
            setToggler(false);
            
        }
        else{
         alert('Please Enter a Value')
    }
}
    const Deletekey=(index)=>{
        const updatedList=items.filter((_,ind)=>{
            return index!==ind
        });
        setItems(updatedList);
    }

    const EditKey=(index)=>{
        document.querySelector(".input1").value=items[index];
        
        console.log(document.getElementById("Add-btn"));
        setToggler(true);
        setElementId(index)
        }
    



    return (
        <div className="container-sm formmain" style={{width:"50%",height:"50%"}}>
        <div className="card text-center">
            <div className="card-header bg-primary">
               <h2>{props.h1name}</h2> 
            </div>
            <div className="card-body">
              {toggleTitle
              ?
              <div classname="setTitle" >
                  <h3 style={{display:"inline-block"}}>{props.h1name} sets for today is {no}</h3>&nbsp;&nbsp;
                  <button onClick={setNumber} className="btn-primary btn-md editbutton">Edit</button>
                  
              </div> 
              :
              <div className="setNumber">
                <label><h4>{`Number of ${props.h1name} planned today`}</h4></label>&nbsp;&nbsp;
                <input
                onChange={(e)=>setno(e.target.value)}
                 className="text-center" 
                 placeholder={`no of ${props.h1name}`} 
                 style={{height:"30px",width:"50px",marginBottom:"8px"}}/>&nbsp;&nbsp;
                 <button onClick={setNumber} className="btn-primary">Set</button>
                </div>
}
                <input onChange={(e)=>setValue(e.target.value)}  className="input1 text-center" placeholder={props.placeholder} />
                {toggler?<i onClick={AddItem} className='edit outline big globe icon'></i>:<i onClick={AddItem} id="Add-btn" className="plus square outline big globe icon" ></i>  
                }<hr/>
            <div className="items">
                <div className="eachItem">
                    {items.map((item,index)=>{
                      return (
                        <div className="space"  style={{marginTop:"8px"}}>
                      <div className="container-lg item" style={{fontFamily:"cursive",width:"40%",textAlign:"justify",backgroundColor:index%2===0?'yellow':'orange'}}>
                           {item}
                           <div style={{float:'right',position:"relative"}}>
                           <a href="#"><i onClick={()=>EditKey(index)}  className="edit icon"></i></a>
                           <a href="#"><i onClick ={()=>Deletekey(index)} className="window close icon"></i></a>
                           </div>
                           </div>
                      </div>
                      
                    )})}
                </div>
            </div>
            </div>

        </div>
        </div>
    )
}
export default Form;