import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Homepage from './components/Homepage';
import ViewPage from './components/viewpage';
import UploadPage from './components/UploadPage';
import NewPatientPage from './components/NewPatientPage';
import LoginPage from './components/loginpage';
import CreateAccount from './components/createAccount';

class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component = {Homepage}>
                        <LoginPage />
                    </Route>
                    <Route path = "/home" component = {LoginPage}>
                        <Homepage/>
                    </Route>
                    <Route path = "/create" component = {CreateAccount}>
                        <CreateAccount/>
                    </Route>
                    <Route path="/viewpage" component = {ViewPage}>
                        <ViewPage />
                    </Route>
                    <Route path="/upload" component = {UploadPage}>
                        <UploadPage/>
                    </Route>
                    <Route path="/newpatient" component = {NewPatientPage}>
                        <NewPatientPage/>
                    </Route>
                </Switch>
            </Router>
          );
        }
    }

export default App;
