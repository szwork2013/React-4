// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { TOGGLE_ADD_MODEL } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddModel: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case TOGGLE_ADD_MODEL:
      return {
        showAddModel: !state.showAddModel,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowAddModel = state => state.app.showAddModel;

// Export Reducer
export default AppReducer;
