import React from 'react';
import HeaderComponent from './HeaderComponent';
import TaskListComponent from './TaskListComponent'
import AboutPageComponent from './AboutPageComponent';
import RegisterComponent from './RegisterComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class MainPageComponent extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent />
                    <Route exact path="/" component={RegisterComponent}></Route>
                    <Route path="/about" component={AboutPageComponent}></Route>
                    <Route path="/register" component={TaskListComponent}></Route>
                </Router>
            </div>
        )
    }
}
export default MainPageComponent;