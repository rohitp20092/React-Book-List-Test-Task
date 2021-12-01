import { combineReducers } from "redux";
import Users from "./usersReducer";
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
  Users:Users,
  form:formReducer,
});

export default rootReducer;
