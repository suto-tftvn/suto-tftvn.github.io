import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Menu from './components/Menu';
// import { renderRoutes } from 'react-router-config';
// import { useRouter } from "../../until/hook/useRouter"
// import { getItem } from "../../until/common";
// import LazyLoad from "react-lazyload";
// import ItemPopover from "../../components/popover/ItemPopover";
import Button from '@material-ui/core/Button';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Collapse from '@material-ui/core/Collapse';
import {origins} from '../../until/constant/origins';
import Avatar from '@material-ui/core/Avatar';
var _ = require("lodash");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    borderBottom: '1px solid #90caf9',
    fontSize:'20px',
    fontWeight:'bold',
    marginBottom:'5px',
    paddingBottom: '10px'
  },
  button: {
    margin: '0px 5px 5px 0px',
    '& .MuiButton-startIcon': {
      marginRight: '0px'
    }
  },
  titleFilterOption: {
    padding: '10px 0px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    cursor: 'pointer',
    '&:hover': {
      color: theme.greenPrimary,
    },
    '&.active': {
      color: theme.greenPrimary,
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    filter: 'brightness(0.5)'
  },
}));

// const mapItem = [
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [9, 10, 19, 27, 34, 40, 44, 17, 18, 19],
//   [8, 11, 20, 28, 35, 41, 44, 27, 28, 0],
//   [7, 12, 21, 29, 36, 42, 44, 37, 0, 0],
//   [6, 13, 22, 30, 37, 43, 44, 0, 0, 0],
//   [5, 14, 23, 31, 38, 44, 0, 0, 0, 0],
//   [4, 15, 24, 32, 39, 0, 0, 0, 0, 0],
//   [3, 16, 25, 33, 0, 0, 0, 0, 0, 0],
//   [2, 17, 26, 0, 0, 0, 0, 0, 0, 0],
//   [1, 18, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

const listTypeCost = [1,2,3,4,5]

export default function Champion(props) {
  const classes = useStyles();

  const [filterStatus, setFilterStatus] = useState([true,true,true]);
  const [listCostStatus, setListCostStatus] = useState([]);
  const [listOriginStatus, setListOriginStatus] = useState([]);

  const updateListStatus = {
    cost: (newData) => {setListCostStatus(newData)},
    origin: (newData) => {setListOriginStatus(newData)},
  };

  const changeStatusFilter = (index) => {
    let newStatus = _.clone(filterStatus);
    newStatus[index] = !filterStatus[index];
    setFilterStatus(newStatus);
  }

  const changeStatusList = (id,type,old_data) => {
    let newData = _.clone(old_data);
    const index = newData.indexOf(id);
    if(index !== -1){
      newData.splice(index, 1);
    } else {
      newData.push(id);
    }
    updateListStatus[type](newData);
  }

  const checkStatusActive = (id,dataCheck) => {
    let data = dataCheck;
    if(data){
      const index = data.indexOf(id);
      if(index !== -1){
        return true;
      }
    }
    return false
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div>
            <div className={classes.title}>Phân loại tướng</div>
            <div>
              {/* Lọc theo giá */}
              <div>
                <div className={classes.titleFilterOption + (filterStatus[0] ? " active" : "")} onClick={() => changeStatusFilter(0)}>
                  {filterStatus[0] ? <ArrowDropDownIcon/> : <ArrowRightIcon/>} Giá tiền
                </div>
                <Collapse in={filterStatus[0]}>
                  <div>
                    {
                      listTypeCost.map((item,index) => {
                        return(
                          <Button
                            variant="outlined"
                            key={"button-cost-"+item}
                            color={checkStatusActive(item,listCostStatus) ? "secondary" : "default"}
                            className={classes.button}
                            startIcon={<AttachMoneyIcon />}
                            size="small"
                            onClick={() => changeStatusList(item,'cost',listCostStatus)}
                          >
                            {item} Tiền
                          </Button>
                        )
                      })
                    }
                  </div>
                </Collapse>
              </div>
              {/* Lọc theo tộc*/}
              <div>
                <div className={classes.titleFilterOption + (filterStatus[1] ? " active" : "")} onClick={() => changeStatusFilter(1)}>
                  {filterStatus[1] ? <ArrowDropDownIcon/> : <ArrowRightIcon/>} Tộc
                </div>
                <Collapse in={filterStatus[1]}>
                  <div>
                    {
                      origins.map((item,index) => {
                        return(
                          <Button
                            variant="outlined"
                            key={"button-origin-"+item.id}
                            color={checkStatusActive(item.id,listOriginStatus) ? "secondary" : "default"}
                            className={classes.button}
                            startIcon={<Avatar src={"/img/origins/"+item.icon} className={classes.small}/>}
                            size="small"
                            onClick={() => changeStatusList(item.id,'origin',listOriginStatus)}
                          >
                            {item.name}
                          </Button>
                        )
                      })
                    }
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} style={{ borderLeft: "1px solid #90caf9" }}>
          <div>
            <div className={classes.title}>Danh sách tướng</div>
            <div>
              123
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
