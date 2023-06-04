import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
export default combineReducers({
  alert,
  auth,
});
const initialState = {
  notes: [], // Add this line to initialize the notes property
  // other properties in the initial state
};
