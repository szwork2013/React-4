import { ADD_MODEL, ADD_MODELS, DELETE_MODEL } from './ModelActions';

// Initial State
const initialState = { data: [] };

const ModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODEL :
      return {
        data: [action.model, ...state.data],
      };

    case ADD_MODELS :
      return {
        data: action.models,
      };

    case DELETE_MODEL :
      return {
        data: state.data.filter(model => model.id !== action.id),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getModels = state => state.models.data;

// Get post by cuid
export const getModel = (state, id) => state.models.data.filter(model => model.id === id)[0];

// Export Reducer
export default ModelReducer;
