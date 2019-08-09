import { TRecordAction } from '../actions';
import Records from '../actions/types';

export interface TRecord {
  text?: string;
  done?: boolean;
  index?: number;
}

export type TRecords = TRecord[];

export const initialState = [
  {
    text: "skype call with PO",
    done: true
  },
  {
    text: "test task (todo)",
    done: true
  },
  {
    text: "call with teamlead",
    done: false
  },
  {
    text: "get offer",
    done: false
  },
  {
    text: "relocation to Montenegro",
    done: false
  }
];

let stateHistory: string[] = [];

const pushNewStateToHistory = (state: TRecords) => stateHistory.push(JSON.stringify(state));

export default function recordsReducer(
  state: TRecords = initialState,
  action: TRecordAction = { type: "", payload: {} }
): TRecords {
  switch (action.type) {
    case Records.ADD:
      pushNewStateToHistory(state);
      return [{ text: action.payload.text, done: false }, ...state];
    case Records.DELETE:
      pushNewStateToHistory(state);
      return state.filter((record, index) => index !== action.payload.index);
    case Records.UPDATE:
      pushNewStateToHistory(state);
      return state.map((record, index) =>
        index === action.payload.index ? action.payload : record
      );
    case Records.UNDO:
      const previousState = JSON.parse(stateHistory[stateHistory.length - 1]);
      if (previousState.length > state.length) {
        return previousState
      }
    default:
      return state;
  }
}
