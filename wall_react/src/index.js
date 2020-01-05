import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import WallPage from './pages/wall_page';
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
global.jquery = jQuery;
require('bootstrap');


ReactDOM.render(<WallPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
