import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch } from "react-redux";
import { logout, login, selectUser} from './features/userSlice';
import { useSelector } from 'react-redux';


function App() {
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        dispatch(logout);
        console.log("No user");
      }
    });
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) :
            (<Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
            )
        }
      </Router>
    </div>
  );
}

export default App;
