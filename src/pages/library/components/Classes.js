import React, { Fragment, useState, useCallback } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { classesUnit } from "../../../until/constant/classes";
import TitleContent from "./TitleContent";
import ChampionPopover from '../../../components/popover/ChampionPopover';
import {getChampions} from '../../../until/common';
import LazyLoad from 'react-lazyload';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#e3f2fd",
    fontSize: 16,
    fontWeight: "bold",
    borderBottom: "1px solid #90caf9",
  },
  body: {
    fontSize: 14,
    borderBottom: "1px solid #90caf9",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      backgroundColor: "#e8f5e9",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {},
  iconWrapper: {
    display: "flex",
    alignItems: "center",
  },
  descriptionWrapper: {
    textAlign: "justify",
  },
  descriptionWrapperBuff: {
    display: "flex",
    alignItems: "center",
  },
  activeNumberItem: {
    padding: "4px 10px",
    border: "1px #90caf9 solid",
    margin: "10px",
  },
  itemsWrapper: {
    display:'flex',
    flexWrap: 'wrap'
  },
  itemImage: {
      border: '2px #a2cf6e solid',
      borderRadius: '5px',
      margin: '5px',
      '&.cost_1':{
        border: '2px #9e9e9e solid'
      },
      '&.cost_2':{
        border: '2px #a2cf6e solid'
      },
      '&.cost_3':{
        border: '2px #2196f3 solid'
      },
      '&.cost_4':{
        border: '2px #e040fb solid'
      },
      '&.cost_5':{
        border: '2px #e65100 solid'
      },
  }
}));

export default function Classes(props) {
  const classes = useStyles();
  const [data, setData] = useState(classesUnit);

  const onSearch = useCallback((val) => {
    let newData = classesUnit.filter((item) => {
      let val_reformat = val.toLowerCase();
      let res = null;
      if (item.searchText.indexOf(val_reformat) !== -1) {
        res = item;
      }
      return res;
    });
    setData(newData);
    console.log(newData);
  }, []);

  return (
    <div className={classes.root}>
      <TitleContent title="Danh sách các hệ" onChange={onSearch} />
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
              <StyledTableRow key={"origin_" + item.id}>
                <StyledTableCell component="th" scope="row" width="20%">
                  <div className={classes.iconWrapper}>
                    <img
                      style={{ filter: "brightness(0.5)" }}
                      alt="icon-class"
                      src={"/img/classes/" + item.icon}
                    />
                    <div>{item.name}</div>
                  </div>
                </StyledTableCell>
                <StyledTableCell width="40%">
                  <div>
                    <div className={classes.descriptionWrapper}>
                      {item.desc}
                    </div>
                    {item.active.map((sub_item, index) => (
                      <div
                        className={classes.descriptionWrapperBuff}
                        key={"des-class-buff-" + index}
                      >
                        <div className={classes.activeNumberItem}>
                          {sub_item}
                        </div>
                        <div>{item.effect[index]}</div>
                      </div>
                    ))}
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <div className={classes.itemsWrapper}>
                    {item.units.map((sub_item, index) => {
                      const dataChamp = getChampions(sub_item);
                      return (
                        <ChampionPopover id_champion={sub_item} key={'champ_popover_'+index}>
                          <div>
                            <LazyLoad height={60} offset={100}>
                              <img className={classes.itemImage+' cost_'+dataChamp.stat.Cost} src={'/img/champions/'+dataChamp.avt} alt="img-item" width="60px"/>
                            </LazyLoad>
                          </div>
                        </ChampionPopover>
                      )
                    })}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
