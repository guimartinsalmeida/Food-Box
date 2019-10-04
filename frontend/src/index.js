import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import Myprovider from './context'

ReactDOM.render(<Myprovider><Router /></Myprovider>, document.getElementById('root'));

serviceWorker.unregister();
