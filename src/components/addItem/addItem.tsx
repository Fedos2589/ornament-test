import React, { useState } from 'react';
import { addRecord } from '../../actions';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Input from '@material-ui/core/Input';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addItem__container: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '10px',
      padding: '0 20px',
    },
    addItem__text: {
      width: '85%',
    },
    addItem__button: {
      margin: '10px',
    }
  }),
);

interface TProps {
  addRecord: typeof addRecord
}

const AddItem = ({ addRecord }: TProps) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleAddButtonClick = () => {
    addRecord({ text: text, done: false })
    setText('')
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <div className={ classes.addItem__container }>
      <Input
        className={ classes.addItem__text }
        value={ text }
        onChange={ handleInputChange }
      />
      <Fab
        color="primary"
        aria-label="Add"
        className={ classes.addItem__button }
        onClick={ handleAddButtonClick }
      >
        <Add />
      </Fab>
    </div>
  );
}

export default AddItem;
