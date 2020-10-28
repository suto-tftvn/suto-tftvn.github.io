import React, { Fragment,useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {classesUnit} from '../../../until/constant/classes';
import TitleContent from './TitleContent';

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
    },
    activeNumberItem: {
        padding: '4px 10px',
        border: '1px #90caf9 solid',
        margin: '10px',
    }
}));

export default function Classes(props) {
    const classes = useStyles();
    const [data,setData] = useState(classesUnit);

    const onSearch = (val) => {
        let newData = classesUnit.filter((item) => {
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
            <TitleContent title='Danh sách các hệ' onSearch={onSearch}/>
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Hệ</StyledTableCell>
                            <StyledTableCell>Sức mạnh</StyledTableCell>
                            <StyledTableCell>Tướng</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <StyledTableRow key={'origin_'+item.id}>
                                <StyledTableCell component="th" scope="row" width="20%">
                                    <div className={classes.iconWrapper}>
                                        <img style={{filter: 'brightness(0.5)'}} alt="icon-class" src={'/img/classes/'+item.icon}/>
                                        <div>{item.name}</div>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell width="40%">
                                    {
                                        item.active.length > 1 ?
                                        <div>
                                            <div className={classes.descriptionWrapper}>{item.description}</div>
                                            {
                                                item.active.map((sub_item,index) => (
                                                    <div className={classes.descriptionWrapperBuff}>
                                                        <div className={classes.activeNumberItem}>{sub_item}</div>
                                                        <div>{item.effect[index]}</div>
                                                    </div>
                                                ))
                                            }
                                        </div> :
                                        <div className={classes.descriptionWrapperBuff}>
                                            <div className={classes.activeNumberItem}>{item.active[0]}</div>
                                            <div>{item.description}</div>
                                        </div>
                                    }
                                </StyledTableCell>
                                <StyledTableCell>
                                    {item.units.length}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
