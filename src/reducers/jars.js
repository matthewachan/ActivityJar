// Reducers
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JAR':
      return {
        ...state,
        [action.jar_id]: jar(undefined, action)
      };
    case 'REMOVE_JAR':
      return Object.keys(state)
        .filter(key => key !== action.jar_id)
        .reduce((obj, key) => {
          obj[key] = state[key];
          return obj;
        }, {});
    case 'ADD_ACTIVITY':
      return {
        ...state,
        [action.jar_id]: jar(state, action)
      };
    case 'REMOVE_ACTIVITY':
      return {
        ...state, 
        [action.jar_id]: jar(state, action)
      };
    case 'TOGGLE_REPEAT':
      return state.map(j => jar(j, action));
    case 'DRAW_ACTIVITY':
      return {
        ...state,
        [action.jar_id]: jar(state, action)
      };
    default:
      return state;
  }
};
const jar = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JAR':
      return {
        label: action.label,
        activities: []
      };
    case 'ADD_ACTIVITY':
      var j = state[action.jar_id];
      return {
        label: j.label,
        activities: {
          ...j.activities,
          [action.activity_id]: {
            activity: action.activity,
            repeatable: false
          }
        }
      };
  
    case 'REMOVE_ACTIVITY':
      var j = state[action.jar_id];
      var activities = Object.keys(j.activities)
        .filter(key => key !== action.activity_id)
        .reduce((obj, key) => {
          obj[key] = j.activities[key];
          return obj;
        }, {});
      return {
        label: j.label,
        activities: activities
      };
    case 'TOGGLE_REPEAT':
      if (state.jar_id === action.jar_id) {
        return {
          jar_id: state.jar_id,
          label: state.label,
          activities: activities(state.activities, action)
        }
      }
      return state;
    case 'DRAW_ACTIVITY':
      var j = state[action.jar_id];
      var activities = Object.keys(j.activities)
        .filter(key => key !== action.activity_id || j.activities[key].repeatable)
        .reduce((obj, key) => {
          obj[key] = j.activities[key];
          return obj;
        }, {});
      return {
        label: j.label,
        activities: activities
      };
    default:
      return state;
  }
};

export default reducer;