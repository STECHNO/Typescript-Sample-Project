import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import HomeScreen from '../components/HomeScreen/HomeScreen';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/homescreen' component={HomeScreen} />
            </Router>
        )
    }
}

export default AppRouter;