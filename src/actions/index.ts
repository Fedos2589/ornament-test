import { TRecord } from "../reducers/recordsReducer";
import Records from "./types";

export interface TRecordAction {
  type: string;
  payload: TRecord;
}

export const addRecord = (record: TRecord): TRecordAction => ({
  type: Records.ADD,
  payload: record
});

export const deleteRecord = (record: TRecord): TRecordAction => ({
  type: Records.DELETE,
  payload: record
});

export const updateRecord = (record: TRecord): TRecordAction => ({
  type: Records.UPDATE,
  payload: record
});
