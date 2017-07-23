import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f

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
<<<<<<< HEAD
    <BrowserRouter>
  		<App />
    </BrowserRouter>
=======
		<App />
>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
