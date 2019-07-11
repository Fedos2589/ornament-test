import React, { useState } from "react";
import { TRecord } from '../../reducers/recordsReducer';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { Create, DeleteSweep } from '@material-ui/icons';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      padding: theme.spacing(2),
      color: theme.palette.text.primary,
      textAlign: 'center',
    },
    todoItem__paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    todoItem__text: {
      width: '80%',
    },
    todoItem__control: {
      padding: '10px',
    },
  }),
);

const TodoItem = ({ done, text }: TRecord) => {
  const classes = useStyles();
  const [isEditing, setEditingState] = useState(false);

  const renderTextOrInput = () => isEditing ? <TextField /> : text

  return (
    <Paper className={classes.todoItem__paper}>
      <Checkbox checked={done} />
      <div className={classes.todoItem__text}>
        {renderTextOrInput()}
      </div>
      <div>
        <Create className={classes.todoItem__control} onClick={() => setEditingState(!isEditing)} />
        <DeleteSweep className={classes.todoItem__control} />
      </div>
    </Paper>
  );
}

export default TodoItem;
