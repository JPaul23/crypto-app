import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import store from "./app/store";
import 'antd/dist/antd.css'

ReactDOM.render( 
    <Router>
        <Provider store={store}> {/* every component inside app will have access to the store variable*/}
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));