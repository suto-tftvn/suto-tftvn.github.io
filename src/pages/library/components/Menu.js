import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { useRouter } from "../../../until/hook/useRouter"
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      '& div' : {
        padding: '10px',
      },
      '& a' : {
        color: 'inherit'
      }
    },
    title: {
      borderBottom: '1px solid #90caf9',
      fontSize:'18px',
      fontWeight:'bold',
      marginBottom:'5px'
    },
    item: {
      // color:'inherit',
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
    console.log(router);

    return (
        <div className={classes.root}>
            <div className={classes.title}>Thư viện</div>
            <Link href="/thu-vien/tuong">
              <div className={classes.item + (router.pathname === '/thu-vien/tuong' ? ' '+classes.selected : '')}>
                Tướng
              </div>
            </Link>
            <Link href="/thu-vien/he">
            <div className={classes.item + (router.pathname === '/thu-vien/he' ? ' '+classes.selected : '')}>
              Tộc
              </div>
            </Link>
            <Link href="/thu-vien/toc">
            <div className={classes.item + (router.pathname === '/thu-vien/toc' ? ' '+classes.selected : '')}>
              Hệ
              </div>
              </Link>
              <Link href="/thu-vien/trang-bi">
            <div className={classes.item + (router.pathname === '/thu-vien/trang-bi' ? ' '+classes.selected : '')}>
              Trang bị
              </div>
              </Link>
            {/* <div className={classes.item}>Tỉ lệ xoay tướng</div> */}
        </div>
    );
}
