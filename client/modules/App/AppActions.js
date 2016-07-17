// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_MODEL = 'TOGGLE_ADD_MODEL';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddModel() {
  return {
    type: TOGGLE_ADD_MODEL,
  };
}
