import { combineReducers } from 'redux';
const ADD_FILE = 'ADD_FILE'
// actions
export function fileUpload(payload){
  console.log(payload)
    return{
        type: 'ADD_FILE',
        payload,
       
    }
    
}

//reducers

const defaultFile = [
    {
        img: null,
        blob: null
      
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
  