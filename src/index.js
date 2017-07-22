import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/jars';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const preloadedState = [{
  jar_id: 0,
  label: 'Jar 1',
  activities: []
},
{
  jar_id: 1,
  label: 'Jar 2',
  activities: [
    {
      activity_id: 0,
      activity: 'Bowling',
      repeat: true
    },
    {
      activity_id: 1,
      activity: 'Basketball',
      repeat: false
    }
  ]
}];
const store = createStore(reducer, preloadedState);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
