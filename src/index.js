import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import reducer from './reducers/jars';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

function getStateFromCollection(collection) {
  var state = {};

  collection.forEach(doc => {
    state[doc.jar_id] = {
      label: doc.label,
      owner_id: doc.owner_id,
      viewable_by: doc.viewable_by,
      editable_by: doc.editable_by,
      activities: doc.activities
    };
  })

  return state;
}

global.fetch('http://localhost:8080/jars?user_id=54321')
.then(res => res.json()
  .then(data => getStateFromCollection(data))
  .then(state => {
    const store = createStore(reducer, state);
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>, document.getElementById('root')
    );
    registerServiceWorker();
  })
)



// })

// const preloadedState = {
//   2553487358: {
//     label: 'Food Jar',
//     activities: {
//       179021649: {
//         activity: 'Sushi',
//         repeat: false
//       },
//       2088074780: {
//         activity: 'Pasta',
//         repeat: false
//       },
//       170218834: {
//         activity: 'Soup',
//         repeat: false
//       }
//     }
//   },
//   1472647057: {
//     jar_id: 1,
//     label: 'Activity Jar',
//     activities: {
//       2888167059: {
//         activity: 'Bowling',
//         repeat: true
//       },
//       395274124: {
//         activity: 'Basketball',
//         repeat: false
//       },
//       760014489: {
//         activity: 'Rock Climbing',
//         repeat: false
//       }
//     }
//   }
// };

