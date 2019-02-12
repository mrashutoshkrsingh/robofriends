import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import CardList from './CardList'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robot';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
