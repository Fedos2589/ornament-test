import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addRecord, deleteRecord, updateRecord, undoRecordDelete } from '../../actions';
import { TRecords, TRecord, initialState } from '../../reducers/recordsReducer';
import { AppState } from '../../reducers';
import { TDispatch } from '../../commonTypes';
import { Grid } from '@material-ui/core';
import TodoItem, { useStyles } from '../../components/todoItem/todoItem';
import AddItem from '../../components/addItem/addItem';
import UndoButton from '../../components/undoButton/undoButton';

interface TProps {
  records: TRecords,
  addRecord: typeof addRecord,
  deleteRecord: typeof deleteRecord,
  updateRecord: typeof updateRecord,
  undoRecordDelete: typeof undoRecordDelete
}

function App({ records, addRecord, deleteRecord, updateRecord, undoRecordDelete }: TProps) {
  const classes = useStyles();
  useEffect(() => localStorage.setItem('reduxState', JSON.stringify(initialState)), []);

  return (
    <div className="app">
      <Grid container spacing={3} justify="center">
        <Grid item xs={10} md={8}>
          <h1 className={ classes.heading }>My todo list for Ornament</h1>
          <AddItem addRecord={ addRecord } />
          <div className="todo-item-container">
            { records.map((record: TRecord, i: number) =>
                <TodoItem
                  key={record.text}
                  {...record}
                  deleteRecord={ deleteRecord }
                  updateRecord={ updateRecord }
                  index={ i }
                />
            )}
          </div>
          <UndoButton undoRecordDelete={ undoRecordDelete } />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    records: state.records
  }
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    addRecord: (record: TRecord) => dispatch(addRecord(record)),
    deleteRecord: (record: TRecord) => dispatch(deleteRecord(record)),
    updateRecord: (record: TRecord) => dispatch(updateRecord(record)),
    undoRecordDelete: (record: TRecord) => dispatch(undoRecordDelete(record))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
