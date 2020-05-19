// initial state
const initialState = ['item-1', 'item-2'];


// action names
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';


// reducer
export default function reducer (state = initialState, action) {

  const {type, payload} = action;

  if(type === ADD_ITEM) {
    return [...state, payload];
  }

  if(type === DELETE_ITEM) {
    const newState = [...state];
    newState.splice(payload, 1);
    return newState;
  }

  return state;
}



//actions creator
export const addItemAction = (item) => {
// action
  return {
    type: ADD_ITEM,
    payload: item
  }
}

// action creator
export const deleteItemAction = (index) => {
  // action
  return {
    type: DELETE_ITEM,
    payload: index
  }
}