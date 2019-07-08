import Records, { TRecordAction } from '../actions';

export type TRecord = {
  text: string;
  done: boolean;
  index?: number;
}

export type TRecords = Array<TRecord>;

export const initialState = [
  {
    text: 'skype call with PO',
    done: true
  },
  {
    text: 'test task (todo)',
    done: true
  },
  {
    text: 'call with teamlead',
    done: false
  },
  {
    text: 'get offer',
    done: false
  },
  {
    text: 'relocation to Montenegro',
    done: false
  }
]

export default function recordsReducer(
  state: TRecords = initialState, action: TRecordAction
): TRecords {
  switch (action.type) {
    case (Records.ADD):
      return [...state, { text: action.payload.text, done: false }]
    case (Records.DELETE):
      return state.filter((record, index) => index !== action.payload.index)
    case (Records.UPDATE):
      return state.map((record, index) => index === action.payload.index ? action.payload : record)
    default:
      return state;
  }
}
