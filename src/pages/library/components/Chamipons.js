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
import OriginPopover from '../../../components/popover/OriginPopover'
import ClassPopover from '../../../components/popover/ClassPopover'

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
    }
}));

export default function Champions(props) {
    const classes = useStyles();
    const [data,setData] = useState(champions);

    const onSearch = (val) => {
        let newData = champions.filter((item) => {
            let val_reformat = val.toLowerCase();
            if(item.searchText.indexOf(val_reformat)!=-1){
                return item
            }
        });
        setData(newData);
        console.log(newData);
    }
    return (
        <div className={classes.root}>
            <TitleContent title='Danh sách các tướng'/>
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
                            <StyledTableRow key={'origin_'+index}>
                                <StyledTableCell component="th" scope="row" width="20%">
                                    <div className={classes.iconWrapper}>
                                        <img alt="avatar-chamipon" src={'/img/classes/c_1.png'}/>
                                        <div>{item.name}</div>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell width="30%">
                                    {
                                        item.class.map((sub_item,index) => (
                                            <ClassPopover class={sub_item || 0} key={'class-popover-'+index}>
                                            <div className={classes.descriptionWrapperBuff}>
                                                <img src={'/img/classes/'+getClassIcon(sub_item)} alt="icon_class"/>
                                                <div className={classes.nameOrigin}>{getClassName(sub_item)}</div>
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
                                                    <div className={classes.nameOrigin}>{getOriginName(sub_item)}</div>
                                                </div>
                                            </OriginPopover>
                                        ))
                                    }
                                </StyledTableCell>
                                <StyledTableCell width="20%">
                                    {item.cost}
                                </StyledTableCell>
                            </StyledTableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
