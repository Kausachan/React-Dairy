import React from 'react';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import CalenderBoard from './components/calender/Calender.component';
import {connect} from 'react-redux';
import SetCurrentUser from './redux/user/user.actions';
import {Route, Switch, withRouter} from 'react-router-dom';
import TaskList from './components/task-list/TaskList.component';
import Header from './components/header/Header.component';

class App extends React.Component{

unSubscribeFromAuth = null;


  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>
     {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
            })
          })
        }
        else{ setCurrentUser(userAuth); }
    }) 
  }

  render(){
    return(
        <div className = "app-center">
          <Header/>
          <Switch>
            <Route exact path = '/' component = {CalenderBoard}/>
            <Route path = {`/month/:id`} component = {TaskList}/>
          </Switch>
        </div>
      )
  }
}

const MapDispatchAction = (dispatch) => ({
  setCurrentUser : user => dispatch(SetCurrentUser(user))
})

export default withRouter(connect(null, MapDispatchAction)(App));
