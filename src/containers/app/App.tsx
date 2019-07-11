import React from "react";
import { connect } from 'react-redux';
import { addRecord } from '../../actions';
import { TRecords, TRecord } from '../../reducers/recordsReducer';
import { AppState } from '../../reducers';
import { TDispatch } from '../../commonTypes';
import Grid from '@material-ui/core/Grid';
import TodoItem, { useStyles } from '../../components/todoItem/todoItem';

interface TProps {
  records: TRecords,
  addRecord: typeof addRecord
}

function App(props: TProps) {
  const classes = useStyles();

  return (
    <div className='app'>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10} md={8}>
          <h1 className={classes.heading} onClick={() => props.addRecord({text: 'sdfg', done: true})}>My todo list for Ornament</h1>
          <div className='todo-item-container'>
            {props.records.map((record: TRecord) => <TodoItem key={record.text} {...record} />)}
          </div>
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
    addRecord: (record: TRecord) => dispatch(addRecord(record))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
