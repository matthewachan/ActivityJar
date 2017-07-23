const activity = (state, action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return {
        activity: action.activity, 
        activity_id: action.activity_id, 
        repeat: action.repeat
      };
    case 'REMOVE_ACTIVITY':
      if (state.activity_id === action.activity_id)
        return false;
      return true;
    case 'TOGGLE_REPEAT':
      if (state.activity_id === action.activity_id) {
        return {
          activity: state.activity,
          activity_id: action.activity_id,
          repeat: false
        }
      }
      return state;
    case 'DRAW_ACTIVITY':
      if (state.activity_id === action.activity_id && !state.repeat)
        return false;
      return true;
    default:
      return state;
  }
};
const activities = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [
        ...state,
        activity(undefined, action)
      ];
    case 'REMOVE_ACTIVITY':
      return state.filter(a => activity(a, action));
    case 'TOGGLE_REPEAT':
      return state.map(a => activity(a, action));
    case 'DRAW_ACTIVITY':
      return state.filter(a => activity(a, action));
    default:
      return state;
  }
};
const jar = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JAR':
      return {
        label: action.label,
        jar_id: action.jar_id,
        activities: []
      };
    case 'REMOVE_JAR':
      if(state.jar_id === action.jar_id) 
        return false;
      return true;
    case 'ADD_ACTIVITY':
      if (state.jar_id === action.jar_id) {   
        return {
          jar_id: state.jar_id,
          label: state.label,
          activities: activities(state.activities, action)
        };
      }
      return state;
    case 'REMOVE_ACTIVITY':
      if (state.jar_id === action.jar_id) {
        return {
          jar_id: state.jar_id,
          label: state.label,
          activities: activities(state.activities, action)
        };
      }
      return state;
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
      if (state.jar_id === action.jar_id) {
        return {
          jar_id: state.jar_id,
          label: state.label,
          activities: activities(state.activities, action)
        }
      }
      return state;
    default:
      return state;
  }
};
const jars = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JAR':
      return [
        ...state,
        jar(undefined, action)
      ];
    case 'REMOVE_JAR':
      return state.filter(j => jar(j, action));
    default:
      return state;
  }
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JAR':
      return jars(state, action);
    case 'REMOVE_JAR':
      return jars(state, action);
    case 'ADD_ACTIVITY':
      return state.map(j => jar(j, action));
    case 'REMOVE_ACTIVITY':
      return state.map(j => jar(j, action));
    case 'TOGGLE_REPEAT':
      return state.map(j => jar(j, action));
    case 'DRAW_ACTIVITY':
      return state.map(j => jar(j, action));
    default:
      return state;
  }
};

export default reducer;