import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }),
);

export default function TodoItem() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>xs=12</Paper>
  );
}
