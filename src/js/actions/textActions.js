import * as types from './actionTypes';
import textApi from '../api/mockTextApi';

export function loadTextsSuccess(texts) {
  return { type: types.LOAD_TEXTS_SUCCESS, texts};
}

export function createTextSuccess(text) {
  return {type: types.CREATE_TEXT_SUCCESS, text};
}

export function updateTextSuccess(text) {
  return {type: types.UPDATE_TEXT_SUCCESS, text};
}

export function loadTexts() {
  return function(dispatch) {
    return textApi.getAllTexts().then(texts => {
      dispatch(loadTextsSuccess(texts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveText(text) {
  return function (dispatch) {
    return textApi.saveText(text).then(text => {
      text.id ? dispatch(updateTextSuccess(text)) :
        dispatch(createTextSuccess(text));
    }).catch(error => {
      throw(error);
    });
  };
}
