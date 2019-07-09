import { combineReducers } from "redux";
import recordsReducer, { TRecords } from "./recordsReducer";

export interface AppState {
  records: TRecords;
}

export default combineReducers<AppState>({
  records: recordsReducer
});
