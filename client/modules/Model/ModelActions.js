import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_MODEL = 'ADD_MODEL';
export const ADD_MODELS = 'ADD_MODELS';
export const DELETE_MODEL = 'DELETE_MODEL';

// Export Actions
export function addModel(model) {
  return {
    type: ADD_MODEL,
    model,
  };
}

export function addModelRequest(model) {
  return (dispatch) => {
    return callApi('models', 'post', {
      model: {
        firstName: model.name.first,
        lastName: model.name.last,
        gender: model.gender,
      },
    }).then(res => dispatch(addModel(res.model)));
  };
}

export function addModels(models) {
  return {
    type: ADD_MODELS,
    models,
  };
}

export function getModels() {
  return (dispatch) => {
    return callApi('models').then(res => {
      dispatch(addModels(res.models));
    });
  };
}
