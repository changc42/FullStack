import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import CandyPage from './CandyPage';
import ApplePage from './ApplePage';
import BookPage from './BookPage';

export default class VendingMachine extends Component {
  render() {
    return (
        <div>
            <nav>
                <NavLink activeClassName="App_active_link" exact to="/">Home</NavLink>
                <NavLink activeClassName="App_active_link" exact to="/candy">Candy</NavLink>
                <NavLink activeClassName="App_active_link" exact to="/apples">Apples</NavLink>
                <NavLink activeClassName="App_active_link" exact to="/books">Books</NavLink>
            </nav>
            <Route exact path="/candy" component={()=><CandyPage />}/>
            <Route exact path="/apples" component={()=><ApplePage />}/>
            <Route exact path="/books" component={()=><BookPage />}/>
        </div>
    );
  }
}
