import React, { Fragment,useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {champions} from '../../../until/constant/champions';
import TitleContent from './TitleContent';
import {getOriginName,getOriginIcon,getClassName,getClassIcon} from '../../../until/common';
import OriginPopover from '../../../components/popover/OriginPopover';
import ClassPopover from '../../../components/popover/ClassPopover';
import Hidden from '@material-ui/core/Hidden';

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
        '& img': {
            width: '60px',
            margin: '10px',
            borderRadius: '5px',
            [theme.breakpoints.down('xs')]: {
                width: '40px',
                margin: '5px',
            },
        },
        '& .cost_1':{
            border: '2px #9e9e9e solid'
        },
        '& .cost_2':{
            border: '2px #a2cf6e solid'
        },
        '& .cost_3':{
            border: '2px #2196f3 solid'
        },
        '& .cost_4':{
            border: '2px #e040fb solid'
        },
        '& .cost_5':{
            border: '2px #e65100 solid'
        },
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
    }
}));

export default function Champions(props) {
    const classes = useStyles();
    const [data,setData] = useState(champions);

    const onSearch = (val) => {
        let newData = champions.filter((item) => item.name.toLowerCase().indexOf(val.toLowerCase())!==-1);
        setData(newData);
        // console.log(newData);
    }
    return (
        <div className={classes.root}>
            <TitleContent title='Danh sách các tướng' onChange={onSearch}/>
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Tướng</StyledTableCell>
                            <StyledTableCell>Hệ</StyledTableCell>
                            <StyledTableCell>Tộc</StyledTableCell>
                            <StyledTableCell>Giá</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item,index) => {
                            return (
                            <StyledTableRow key={'champion_'+index}>
                                <StyledTableCell component="th" scope="row" width="20%">
                                    <div className={classes.iconWrapper}>
                                        <img className={'cost_'+item.stat.Cost}  alt="avatar-chamipon" src={'/img/champions/'+item.avt}/>
                                        <Hidden xsDown>
                                            <div>{item.name}</div>
                                        </Hidden>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell width="30%">
                                    {
                                        item.class.map((sub_item,index) => (
                                            <ClassPopover class={sub_item || 0} key={'class-popover-'+index}>
                                            <div className={classes.descriptionWrapperBuff}>
                                                <img src={'/img/classes/'+getClassIcon(sub_item)} alt="icon_class"/>
                                                <Hidden xsDown>
                                                    <div className={classes.nameOrigin}>{getClassName(sub_item)}</div>
                                                </Hidden>
                                            </div>
                                            </ClassPopover>
                                        ))
                                    }
                                </StyledTableCell>
                                <StyledTableCell width="30%">
                                    {
                                        item.origin.map((sub_item,index) => (
                                            <OriginPopover origins={sub_item || 0} key={'origin-popover-'+index}>
                                                <div className={classes.descriptionWrapperBuff}>
                                                    <img src={'/img/origins/'+getOriginIcon(sub_item)} alt="icon_origin"/>
                                                    <Hidden xsDown>
                                                        <div className={classes.nameOrigin}>{getOriginName(sub_item)}</div>
                                                    </Hidden>
                                                </div>
                                            </OriginPopover>
                                        ))
                                    }
                                </StyledTableCell>
                                <StyledTableCell width="20%">
                                    {item.stat.Cost}
                                </StyledTableCell>
                            </StyledTableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
