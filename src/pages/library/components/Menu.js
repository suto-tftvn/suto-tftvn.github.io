import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { useRouter } from "../../../until/hook/useRouter"

const useStyles = makeStyles((theme) => ({
    root: {
      '& div' : {
        padding: '10px',
      }
    },
    title: {
      borderBottom: '1px solid #90caf9',
      fontSize:'18px',
      fontWeight:'bold',
      marginBottom:'5px'
    },
    item: {
      "&:hover": {
        backgroundColor: '#2196f3',
        textDecoration: 'underline',
        color:'#fff'
      }
    },
    selected: {
      borderLeft: '4px solid #2196f3',
      paddingLeft: '6px !important'
    }
  }));

export default function Menu(props) {
    const classes = useStyles();
    const router = useRouter();
    console.log(router.pathname);

    return (
        <div className={classes.root}>
            <div className={classes.title}>Thư viện</div>
            <div className={classes.item + ' ' + classes.selected}>Tướng</div>
            <div className={classes.item}>Tộc</div>
            <div className={classes.item}>Hệ</div>
            <div className={classes.item}>Trang bị</div>
            <div className={classes.item}>Tỉ lệ xoay tướng</div>
        </div>
    );
}
