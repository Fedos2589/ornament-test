import React, { useState } from 'react';
import { TRecord } from '../../reducers/recordsReducer';
import { deleteRecord, updateRecord } from '../../actions';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
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
    container: {
      textAlign: 'center'
    },
    todoItem__paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    todoItem__text: {
      width: 'calc(100% - 140px)',
    },
    todoItem__control: {
      padding: '10px',
    },
  }),
);

interface TActionsProps {
  deleteRecord: typeof deleteRecord,
  updateRecord: typeof updateRecord
};

type TProps = TRecord & TActionsProps & { index: number };

const TodoItem = ({ done, text, deleteRecord, updateRecord, index }: TProps) => {
  const classes = useStyles();
  const [isEditing, setEditingState] = useState(false);
  const [newText, setText] = useState(text);

  const renderTextOrInput = () =>
    isEditing
      ? <Input
          className={ classes.todoItem__text }
          autoFocus
          value={ newText }
          onKeyPress={ handleAddButtonClick }
          onChange={ handleInputChange }
          onBlur={ handleInputBlur }
        />
      : text;

  const handleAddButtonClick = (e: React.KeyboardEvent) => {
    if (e.charCode === 13) {
      updateRecordAndStopEditing()
    }
  };

  const handleInputBlur = () => updateRecordAndStopEditing()

  const updateRecordAndStopEditing = () => {
    updateRecord({ text: newText, done, index })
    setEditingState(false)
  }

  const handleDeleteButtonClick = () => deleteRecord({ text: newText, done, index })

  const handleEditingButtonClick = () => setEditingState(!isEditing)

  const handleCheckboxClick = () => updateRecord({ text, done: !done, index })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <Paper className={ classes.todoItem__paper }>
      <Checkbox checked={ done } onClick={ handleCheckboxClick } />
      <div className={ classes.todoItem__text } id={ `text${index}` }>
        { renderTextOrInput() }
      </div>
      <div>
        <Create
          className={ classes.todoItem__control }
          onClick={ handleEditingButtonClick }
        />
        <DeleteSweep
          className={ classes.todoItem__control }
          onClick={ handleDeleteButtonClick }
        />
      </div>
    </Paper>
  );
}

export default TodoItem;
