import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function textReducer(state = initialState.texts, action) {
  switch (action.type) {
    case types.LOAD_TEXTS_SUCCESS:
      return action.texts;

    case types.CREATE_TEXT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.text)
      ];

    case types.UPDATE_TEXT_SUCCESS:
      return [
        ...state.filter(text => text.id !== action.text.id),
        Object.assign({}, action.text)
      ];

    default:
      console.log("Unknown state");
      return state;
  }
}
