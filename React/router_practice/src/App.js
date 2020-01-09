import React from 'react';
import Food from './Food';
import {Route, NavLink, Switch} from 'react-router-dom';
import Query from "./Query";

class App extends React.Component{

  
  render(){
    return (
      <div>
        <Route path="/" render={(r)=><Query {...r}/>} />
        
        <Switch>
          <Route 
            exact path="/food/:foodName/drink/:drinkName" 
            render={
              (routeProps) => <Food {...routeProps}/>
            } 
          />
          <Route exact path="/food/:foodName" component={Food} />
          <Route render={()=><h1>404 NOT FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
