import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from './components/Menu';
import { renderRoutes } from 'react-router-config';
import { useRouter } from "../../until/hook/useRouter"

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
    const classes = useStyles();
    const router = useRouter();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Menu/>
                </Grid>
                <Grid item xs={12} sm={9} style={{borderLeft: '1px solid #90caf9'}}>
                    {renderRoutes(props.route.routes, { someProp: 'these extra props are optional' })}
                </Grid>
            </Grid>
        </div>
    );
}
