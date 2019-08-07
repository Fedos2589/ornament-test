import React from 'react';
import { Button } from '@material-ui/core';
import { undoRecordDelete } from '../../actions';

interface TProps {
    undoRecordDelete: typeof undoRecordDelete
}

const UndoButton = ({ undoRecordDelete }: TProps) => {
    const handleButtonClick = () => undoRecordDelete({ text: '' })

    return <Button onClick={ handleButtonClick }>Undo</Button>
}

export default UndoButton;
