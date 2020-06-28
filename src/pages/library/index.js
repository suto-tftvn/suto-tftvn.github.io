import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Library(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>menu</Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>content</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
