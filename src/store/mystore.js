const ADD_FILE = 'ADD_FILE'
import { combineReducers } from 'redux';

// actions
export function fileUpload(payload){
    return{
        type: 'ADD_FILE',
        payload
    }
}

//reducers

const defaultFile = [
    {
        img: null
    }
]
function files(state= defaultFile, action){
    switch (action.type) {
        case ADD_FILE:
          return [
            ...state,
            {
              name: action.payload,
              
            }
          ];
        default:
          return state;
      }
}

const mystore = combineReducers({
    files
  });

  export default mystore;
  