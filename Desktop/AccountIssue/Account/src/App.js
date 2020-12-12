import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Login, Pinf, Signup, Manage} from './components';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li> <Link to = "/" >Login</Link></li>
                        <li> <Link to = "/signup" >Signup</Link></li>
                        <li> <Link to = "/PersonalInfo" >PersonalInf</Link></li> 
                        <li> <Link to = "/manage" >Manage</Link></li>
 
                    </ul>
                    <div>
                        <Route path = "/" component = {Login} exact/>
                        <Route path = "/signup" component = {Signup} exact/>
                        <Route path = "/PersonalInfo" component = {Pinf} exact/>

                        <Route path = "/manage" component = {Manage} exact/>
                        
                    </div>
                
                </BrowserRouter>
            </div>
        );
    }
}

export default App;