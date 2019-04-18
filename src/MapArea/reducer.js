/**
 * This module receives redux actions and responses with action handlers
 */
import {
  async,
} from './actions';

const {
  SOME_ASYNC,
  SOME_ASYNC_FAILURE,
  SOME_ASYNC_SUCCEED,
} = async;

/**
 * Initial state value of react store
 */
const initialState = {
  isLoading: false,
  count: 1,
  data: [],
};

/**
 * Reducer function manipulates home leaf node of redux store
 * @param {Object} state - Previous leaf node of redux store
 * @param {Object} action - Redux action
 * @param {string} action.type - Redux action name
 * @return {Object}
 */
export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case SOME_ASYNC:
      return {
        ...state,
        isLoading: true,
      };
    case SOME_ASYNC_SUCCEED:
      return {
        ...state,
        isLoading: false,
        count: state.count + 1,
      };
    case SOME_ASYNC_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
