import React from 'react';
import  ReactDOM  from "react-dom/client"
import App from './app/App'
import './app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {setUpStore} from './store'
import Cookies from 'js-cookie';
import axios from 'axios';
import {reAuthUser} from '../src/store/Actions/autoUser'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = setUpStore()
const accessToken = Cookies.get('access_token');
if(accessToken)
{ 
 store.dispatch(reAuthUser())
}
root.render(
    <>
    <Provider store={store}>
     <BrowserRouter>
      <App/>
     </BrowserRouter>
    </Provider>
    
    </>
   
)




