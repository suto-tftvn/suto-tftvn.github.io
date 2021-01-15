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
      position: 'relative',
      overflow: 'hidden',
      "&:hover": {
        textDecoration: 'underline',
        color:'#fff',
      },
      "&:hover::after": {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transition: 'all 0.5s'
      },
      '&::after': {
        top: 0,
        bottom: 0,
        left: "-100%",
        right: "100%",
        content: "''",
        background: '#2196f3',
        position: 'absolute',
        zIndex: '-1',
        padding: '0.85em 0.75em',
        display: 'block',
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
    // console.log(router);

    return (
        <div className={classes.root}>
            <div className={classes.title}>Thư viện</div>
            <Link href="/thu-vien/tuong">
              <div className={classes.item + (router.pathname === '/thu-vien/tuong' ? ' '+classes.selected : '')}>
                Tướng
              </div>
            </Link>
            <Link href="/thu-vien/toc">
            <div className={classes.item + (router.pathname === '/thu-vien/toc' ? ' '+classes.selected : '')}>
              Tộc
              </div>
            </Link>
            <Link href="/thu-vien/he">
            <div className={classes.item + (router.pathname === '/thu-vien/he' ? ' '+classes.selected : '')}>
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
