import React,{ Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Menu from './components/Menu';
// import { renderRoutes } from 'react-router-config';
// import { useRouter } from "../../until/hook/useRouter"
import {getItem} from '../../until/common';
import LazyLoad from 'react-lazyload';
import ItemPopover from '../../components/popover/ItemPopover'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    itemImage: {
        border: '1px #a2cf6e solid',
        borderRadius: '10px',
        // margin: '5px'
    }
  }));

const mapItem = [
    [0,1,2,3,4,5,6,7,8,9],
    [9,10,19,27,34,40,44,17,18,19],
    [8,11,20,28,35,41,44,27,28,0],
    [7,12,21,29,36,42,44,37,0,0],
    [6,13,22,30,37,43,44,0,0,0],
    [5,14,23,31,38,44,0,0,0,0],
    [4,15,24,32,39,0,0,0,0,0],
    [3,16,25,33,0,0,0,0,0,0],
    [2,17,26,0,0,0,0,0,0,0],
    [1,18,0,0,0,0,0,0,0,0]
]

export default function Item(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <h1>Nội dung chưa biết</h1>
                </Grid>
                <Grid item xs={12} sm={8} style={{borderLeft: '1px solid #90caf9'}}>
                    <h1>Nội dung đã biết</h1>
                    
                        {
                            mapItem.map((item,index) => {
                                return (
                                    <Grid container spacing={1}>
                                    {mapItem[index].map((item2,index2) => {
                                        return (
                                            <Grid item md={1} xs={1}>
                                                {
                                                    item2 != 0 &&
                                                    <ItemPopover item_id={item2 || 0}>
                                                        <LazyLoad height={45}>
                                                            <img className={classes.itemImage} src={getItem(item2).img} width="100%" alt="img-item"/>
                                                        </LazyLoad>
                                                    </ItemPopover>
                                                }
                                            </Grid>
                                        )
                                    })}
                                    {/* <Grid item md={2} only="md"><Paper className={classes.paper}>null</Paper></Grid> */}
                                </Grid>
                            )}
                        )}
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </div>
    );
}
