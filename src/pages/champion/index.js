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
import {classesUnit} from '../../until/constant/classes';
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
    filter: 'brightness(0.2)',
    '&.active': {
      filter: 'invert(49%) sepia(46%) saturate(4083%) hue-rotate(186deg) brightness(101%) contrast(91%)'
    }
  },
}));

const listTypeCost = [1,2,3,4,5]

export default function Champion(props) {
  const classes = useStyles();

  const [filterStatus, setFilterStatus] = useState([true,true,true]);
  const [listCostStatus, setListCostStatus] = useState([]);
  const [listOriginStatus, setListOriginStatus] = useState([]);
  const [listClassesStatus, setListClassesStatus] = useState([]);

  const updateListStatus = {
    cost: (newData) => {setListCostStatus(newData)},
    origin: (newData) => {setListOriginStatus(newData)},
    classes: (newData) => {setListClassesStatus(newData)},
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
        <Grid item xs={12} sm={12}>
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
                            startIcon={<Avatar src={"/img/origins/"+item.icon} className={checkStatusActive(item.id,listOriginStatus) ? classes.small+' active' : classes.small}/>}
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
              {/* Lọc theo Hệ*/}
              <div>
                <div className={classes.titleFilterOption + (filterStatus[2] ? " active" : "")} onClick={() => changeStatusFilter(2)}>
                  {filterStatus[2] ? <ArrowDropDownIcon/> : <ArrowRightIcon/>} Hệ
                </div>
                <Collapse in={filterStatus[2]}>
                  <div>
                    {
                      classesUnit.map((item,index) => {
                        return(
                          <Button
                            variant="outlined"
                            key={"button-classes-"+item.id}
                            color={checkStatusActive(item.id,listClassesStatus) ? "secondary" : "default"}
                            className={classes.button}
                            startIcon={<Avatar src={"/img/classes/"+item.icon} className={checkStatusActive(item.id,listClassesStatus) ? classes.small+' active' : classes.small}/>}
                            size="small"
                            onClick={() => changeStatusList(item.id,'classes',listClassesStatus)}
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
        <Grid item xs={12} sm={4}>
          <div>
            <div className={classes.title}>Danh sách tướng</div>
            <div>
              123
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} style={{ borderLeft: "1px solid #90caf9" }}>
          <div>
            <div className={classes.title}>Champion name</div>
            <div>
              123
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
