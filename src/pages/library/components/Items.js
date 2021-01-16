import React, { Fragment,useEffect,useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {data_item} from '../../../until/constant/items';
import TitleContent from './TitleContent';
// import {getOriginName,getOriginIcon,getClassName,getClassIcon} from '../../../until/common';
import ItemPopover from '../../../components/popover/ItemPopover'
import {getItem} from '../../../until/common';
import LazyLoad from 'react-lazyload';
import Hidden from '@material-ui/core/Hidden';
var _ = require("lodash");

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#e3f2fd',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottom:'1px solid #90caf9'
    },
    body: {
        fontSize: 14,
        borderBottom:'1px solid #90caf9'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        },
        '&:hover': {
            backgroundColor:'#e8f5e9'
        }
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    root: {
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    descriptionWrapper: {
        textAlign: 'justify'
    },
    descriptionWrapperBuff: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            filter: "brightness(0.5)"
        }
    },
    nameOrigin: {
        padding:'0 10px'
    },
    itemsWrapper: {
        display:'flex',
        flexWrap: 'wrap'
    },
    itemImage: {
        border: '2px #a2cf6e solid',
        borderRadius: '10px',
        margin: '5px',
        [theme.breakpoints.down('xs')]: {
            width: '50px',
        }
    }
}));

export default function Items(props) {
    const classes = useStyles();
    const [data,setData] = useState([]);

    useEffect(() => {
        //re-sort data
        let newData = _.sortBy(data_item, ['type', 'id']);
        setData(newData);
    },[])

    // const onSearch = (val) => {
    //     let newData = champions.filter((item) => {
    //         let val_reformat = val.toLowerCase();
    //         if(item.searchText.indexOf(val_reformat)!=-1){
    //             return item
    //         }
    //     });
    //     setData(newData);
    //     console.log(newData);
    // }
    return (
        <div className={classes.root}>
            <TitleContent title='Danh sách trang bị'/>
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Trang bị</StyledTableCell>
                            <StyledTableCell>Sức mạnh</StyledTableCell>
                            <Hidden xsDown>
                            <StyledTableCell>Đồ lớn</StyledTableCell>
                            <StyledTableCell>Đồ nhỏ</StyledTableCell>
                            </Hidden>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => {
                            return (
                            <StyledTableRow key={'item_'+item.id}>
                                <StyledTableCell component="th" scope="row" width="15%">
                                    <div className={classes.iconWrapper}>
                                        <LazyLoad height={64}>
                                            <img className={classes.itemImage} alt="avatar-item" src={'/img/items/'+item.icon}/>
                                        </LazyLoad>
                                        <Hidden xsDown>
                                            <div>{item.name}</div>
                                        </Hidden>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell>
                                    {item.desc}
                                </StyledTableCell>
                                <Hidden xsDown>
                                <StyledTableCell width="40%">
                                    <div className={classes.itemsWrapper}>
                                        {
                                            item.type === 'base' ?
                                            item.citem.map((sub_item,index) => (
                                                <ItemPopover item_id={sub_item || 0} key={'item-base-popover-'+index}>
                                                    <div>
                                                        <LazyLoad height={64}>
                                                            <img className={classes.itemImage} src={'/img/items/'+getItem(sub_item).icon} alt="img-item" width="64px"/>
                                                        </LazyLoad>
                                                    </div>
                                                </ItemPopover>
                                            )) : null
                                        }
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell width="25%">
                                    <div className={classes.itemsWrapper}>
                                        {
                                            item.type === 'combinedItem' ?
                                            item.bitem.map((sub_item,index) => (
                                                <ItemPopover item_id={sub_item || 0} key={'item-combind-popover-'+index}>
                                                    <div>
                                                        <LazyLoad height={64}>
                                                            <img className={classes.itemImage} src={'/img/items/'+getItem(sub_item).icon} alt="img-item" width="64px"/>
                                                        </LazyLoad>
                                                    </div>
                                                </ItemPopover>
                                            )) : null
                                        }
                                    </div>
                                </StyledTableCell>
                                </Hidden>
                            </StyledTableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
