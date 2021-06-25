import React from 'react';

 const Rewards=(props)=> {
    let habitnumber=Number(JSON.parse(localStorage.getItem('numberHabit')));
    let Habitlength=JSON.parse(localStorage.getItem('list')).length;
     let habitvalue=Math.round(100-(Habitlength/habitnumber)*100)

     let dailiesnumber=Number(JSON.parse(localStorage.getItem('numberDailies')));
    let dailieslength=JSON.parse(localStorage.getItem('list1')).length;
     let dailiesvalue=Math.round(100-(dailieslength/dailiesnumber)*100)

     let todonumber=Number(JSON.parse(localStorage.getItem('numberTodo')));
    let todolength=JSON.parse(localStorage.getItem('listw')).length;
     let todovalue=Math.round(100-(todolength/todonumber)*100)

     let overAll=Math.round((habitvalue+dailiesvalue+todovalue)/3)
    
    


     return(
     <div className="container-sm rewards" style={{width:"50%"}}>
         <div className="card text-center">
             <div className="card-header bg-primary">
                 <h2>Productivity</h2>
             </div>
             <div className="card-body">
             <h4>Habit Productivity</h4>
             <div class="progress" style={{width:"50%",marginLeft:"25%",height:"20px"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:`${habitvalue}%`}}>{`${habitvalue}%`}</div>
</div>
        <h4>Dailies Productivity</h4>
        <div class="progress" style={{width:"50%",marginLeft:"25%",height:"20px"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:`${dailiesvalue}%`}}>{`${dailiesvalue}%`}</div>
</div>
        <h4>Todo Productivity</h4>
        <div class="progress" style={{width:"50%",marginLeft:"25%",height:"20px"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:`${todovalue}%`}}>{`${todovalue}%`}</div>
</div>
        <h4>Overall Productivity</h4>
        <div class="progress" style={{width:"50%",marginLeft:"25%",height:"20px"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:`${overAll}%`}}>{`${overAll}%`}</div>
</div>
             </div>


         </div>
        
         </div>
        )
     
     }
    export default Rewards;