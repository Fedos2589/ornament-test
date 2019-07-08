import { TRecord } from '../reducers/recordsReducer';

enum Records {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE'
}

export type TRecordAction = {
  type: string;
  payload: TRecord;
};

export default Records;