import { TRecordAction } from './actions/';
import { AppState } from './reducers';
import { Dispatch } from 'redux';

export type TDispatch = Dispatch<TRecordAction>;
