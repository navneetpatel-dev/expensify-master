import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import AppRouter, { history } from "./router/AppRouter"
import configureStore from './store/configureStore';
import LoadingPage from './component/LoadingPage';

import "./style/style.scss"
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {firebase} from './firebase/firebase'


const store = configureStore();

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
)

let hasRender = false;
const renderApp = () => {
   if(!hasRender) {
      ReactDOM.render(jsx, document.getElementById('app'));   
      hasRender =true;
   }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));   

firebase.auth().onAuthStateChanged((user) => {
   if(user) {
      store.dispatch(login(user.uid));
      store.dispatch(startSetExpenses()).then(() => {
         renderApp();
         console.log(history.location.pathname)
         if(history.location.pathname === '/') {
            history.push('/dashboard')
         }
      })
      console.log("login")
   } else {
      store.dispatch(logout());
      renderApp();
      history.push('/');  
   }
})


