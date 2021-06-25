import React from 'react';
import Habits from './Habits';
import Dailies from './Dailies';
import { BrowserRouter,Route } from 'react-router-dom';

import Nav from './Nav'
import '../Css/style.css'
import '../Css/queries.css'
import Todo from './Todo';
import Rewards from './Rewards';

const App=()=>{
   return( 
       <div class="main">
        <div>
      <BrowserRouter>
      <div>
          <Nav/>
          <Route path="/" exact component={Habits}/>
          <Route path="/dailies" exact component={Dailies}/>
          <Route path="/todo" exact component={Todo}/>
          <Route path="/rewards" exact component={Rewards}/>
    
        </div>
      </BrowserRouter>
      </div>
    </div>



   )}
export default App;