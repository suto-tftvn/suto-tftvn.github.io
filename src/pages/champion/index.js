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
import {champions} from '../../until/constant/champions';
import LazyLoad from 'react-lazyload';
import ChampionPopover from '../../components/popover/ChampionPopover';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { getClass, getOrigin, getItem, getChampions } from "../../until/common";
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
      marginRight: '5px'
    },
    textTransform: 'capitalize'
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
  },
  // content_detail: {
  //   // postion: 'relative'
  //   // background: "#f1f8e9",
  //   // padding: "10px",
  //   // maxWidth: "420px",
  //   // minWidth:"250px"
  // },
  title_detail: {
    display: "flex",
    position: "relative",
    alignItems: "flex-start",
    borderBottom: "1px #90caf9 solid",
    "& img": {
      marginRight: "10px",
    },
    paddingBottom: "5px",
    fontWeight: "bold",
    fontSize: "18px",
    '&.cost_1': {
      background: 'linear-gradient(-125deg, #616161 50%,transparent 50.8%) top right /100px calc(100% - 5px)',
      backgroundRepeat: 'no-repeat'
    },
    '&.cost_2': {
      background: 'linear-gradient(-125deg, #689f38 50%,transparent 50.8%) top right /100px calc(100% - 5px)',
      backgroundRepeat: 'no-repeat'
    },
    '&.cost_3': {
      background: 'linear-gradient(-125deg, #0288d1 50%,transparent 50.8%) top right /100px calc(100% - 5px)',
      backgroundRepeat: 'no-repeat'
    },
    '&.cost_4': {
      background: 'linear-gradient(-125deg, #512da8 50%,transparent 50.8%) top right /100px calc(100% - 5px)',
      backgroundRepeat: 'no-repeat'
    },
    '&.cost_5': {
      background: 'linear-gradient(-125deg, #ef6c00 50%,transparent 50.8%) top right /100px calc(100% - 5px)',
      backgroundRepeat: 'no-repeat'
    },
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
  },
  unitsBlock: {
    borderTop: "1px #90caf9 solid",
    '& .blockItem': {
      display: 'flex',
      padding: '5px 0 0',
      '& img': {
        marginRight: '5px',
        border: '2px solid #a2cf6e ',
        borderRadius: '5px'
      }
    }
  },
  originBlock: {
    display: 'flex',
    fontWeight: "normal",
    '& div': {
      display: 'flex',
      alignItems: 'center',
      '&:first-child': {
        marginRight: '5px'
      }
    },
    '& img': {
      marginRight: '5px',
      filter: 'brightness(0.5)'
    }
  },
  costBlock: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '18px',
    color: 'white',
    fontWeight: "bold",
    '& span': {
      display: 'flex',
      alignItems: 'center',
      width: '15px'
    },
    '& img': {
      // filter: 'brightness(0.5)'
    }
  },
  skillTitle:{
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '5px',
    '& div': {
      marginLeft: '5px'
    },
    '& .skillName': {
      margin: '0',
      marginTop: '-5px',
      fontSize: '16px',
      fontWeight: '500',
    },
    '& .skillType': {
      margin: 0,
      fontSize: '14px'
    }
  },
  skillDesc: {
    margin: '0',
    textAlign: 'justify',
    fontSize: '12px',
    fontStyle: 'italic'
  },
  skillEffect: {
    fontSize: '14px',
    margin: '0 0 5px',
    '& p': {
      margin: 0
    }
  },
  statBlock: {
    fontSize: '14px',
    margin: '0 0 5px',
    '& p': {
      margin: 0
    },
    '& .rangeBlock': {
      display:'flex', 
      alignItems:'center',
      '& .rangeSquare': {
        width:'10px', 
        height:'10px', 
        border: '1px solid #2196f3',
        marginLeft: '5px'
      },
      '& .rangeSquare.active': {
        background: '#2196f3'
      }
    }
  },
  originsWrapper: {
    borderTop: '1px solid #90caf9 ',
    marginTop: '10px',
    '& .originsBlock': {
      display:'flex', 
      flexWrap: 'wrap',
      alignItems:'center',
      backgroundColor: '#dcedc8',
      padding: '5px',
      borderRadius: '0px 5px 5px',
      marginTop: '10px'
    },
    '& .champion_avt': {
      margin: '5px',
      borderRadius: '5px'
    },
    '& .icon': {
      width: '12%',
      textAlign: 'center',
      fontSize: '12px'
    }
  },
  subTitle: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
}));

const listTypeCost = [1,2,3,4,5]

export default function Champion(props) {
  const classes = useStyles();
  
  const [data,setData] = useState(champions);
  const [dataChosen,setDataChosen] = useState(champions[0]);
  const [filterStatus, setFilterStatus] = useState([true,true,true]);
  const [listCostStatus, setListCostStatus] = useState([]);
  const [listOriginStatus, setListOriginStatus] = useState([]);
  const [listClassesStatus, setListClassesStatus] = useState([]);

  const updateListStatus = {
    cost: (newData) => {
      filterChampions(newData,listOriginStatus,listClassesStatus);
      setListCostStatus(newData)
    },
    origin: (newData) => {
      filterChampions(listCostStatus,newData,listClassesStatus);
      setListOriginStatus(newData)
    },
    classes: (newData) => {
      filterChampions(listCostStatus,listOriginStatus,newData);
      setListClassesStatus(newData)
    },
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

  const resetFilter = () => {
    setListCostStatus([]);
    setListOriginStatus([]);
    setListClassesStatus([]);
    setData(champions);
  }

  const filterChampions = (f_cost,f_origin,f_class) => {
    let result = [];
    if(f_cost.length > 0){
      for(let i=0;i<f_cost.length;i++){
        let cost_filter =  _.filter(champions, function(o) { return o.stat.Cost == f_cost[i]});
        result = [...result,...cost_filter]
      }
    } else{
      result = champions;
    }
    if(f_origin.length > 0){
      let origin_filter_res = [];
      for(let i=0;i<f_origin.length;i++){
        let origin_filter = _.filter(result, function(o) {
          let zz = _.indexOf(o.origin, f_origin[i]);
          if(zz !== -1){
            return true;
          }
          return false
        });
        origin_filter_res = [...origin_filter_res,...origin_filter]
      }
      result = origin_filter_res;
    }
    if(f_class.length > 0){
      let class_filter_res = [];
      for(let i=0;i<f_class.length;i++){
        let class_filter = _.filter(result, function(o) {
          let zz = _.indexOf(o.class, f_class[i]);
          if(zz !== -1){
            return true;
          }
          return false
        });
        class_filter_res = [...class_filter_res,...class_filter]
      }
      result = class_filter_res;
    }
    result = _.sortBy(result,['id']);
    result = _.uniqBy(result, function (e) {
      return e.id;
    });
    setData(result);
  }

  const renderRange = (range) => {
    let result;
    let arr_range = [1,1,1,1,1];
    result = <div className='rangeBlock'>Tầm đánh: {
      arr_range.map((item,index) => <div key={'range_square_'+index} className={index < range ? 'rangeSquare active' : 'rangeSquare'}></div>)
    }</div>
    return result
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div>
            <div className={classes.title} style={{ position: "relative" }}>
              Phân loại tướng
              <Tooltip title="Đặt lại bộ lọc">
                <IconButton
                  aria-label="refresh-filter"
                  style={{ position: "absolute", right: "0px", top: "-5px" }}
                  onClick={() => resetFilter()}
                >
                  <RefreshIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              {/* Lọc theo giá */}
              <div>
                <div
                  className={
                    classes.titleFilterOption +
                    (filterStatus[0] ? " active" : "")
                  }
                  onClick={() => changeStatusFilter(0)}
                >
                  {filterStatus[0] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}{" "}
                  Giá tiền
                </div>
                <Collapse in={filterStatus[0]}>
                  <div>
                    {listTypeCost.map((item, index) => {
                      return (
                        <Button
                          variant="outlined"
                          key={"button-cost-" + item}
                          color={
                            checkStatusActive(item, listCostStatus)
                              ? "secondary"
                              : "default"
                          }
                          className={classes.button}
                          startIcon={<AttachMoneyIcon />}
                          size="small"
                          onClick={() =>
                            changeStatusList(item, "cost", listCostStatus)
                          }
                        >
                          {item} Tiền
                        </Button>
                      );
                    })}
                  </div>
                </Collapse>
              </div>
              {/* Lọc theo tộc*/}
              <div>
                <div
                  className={
                    classes.titleFilterOption +
                    (filterStatus[1] ? " active" : "")
                  }
                  onClick={() => changeStatusFilter(1)}
                >
                  {filterStatus[1] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}{" "}
                  Tộc
                </div>
                <Collapse in={filterStatus[1]}>
                  <div>
                    {origins.map((item, index) => {
                      return (
                        <Button
                          variant="outlined"
                          key={"button-origin-" + item.id}
                          color={
                            checkStatusActive(item.id, listOriginStatus)
                              ? "secondary"
                              : "default"
                          }
                          className={classes.button}
                          startIcon={
                            <Avatar
                              src={"/img/origins/" + item.icon}
                              className={
                                checkStatusActive(item.id, listOriginStatus)
                                  ? classes.small + " active"
                                  : classes.small
                              }
                            />
                          }
                          size="small"
                          onClick={() =>
                            changeStatusList(
                              item.id,
                              "origin",
                              listOriginStatus
                            )
                          }
                        >
                          {item.name}
                        </Button>
                      );
                    })}
                  </div>
                </Collapse>
              </div>
              {/* Lọc theo Hệ*/}
              <div>
                <div
                  className={
                    classes.titleFilterOption +
                    (filterStatus[2] ? " active" : "")
                  }
                  onClick={() => changeStatusFilter(2)}
                >
                  {filterStatus[2] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}{" "}
                  Hệ
                </div>
                <Collapse in={filterStatus[2]}>
                  <div>
                    {classesUnit.map((item, index) => {
                      return (
                        <Button
                          variant="outlined"
                          key={"button-classes-" + item.id}
                          color={
                            checkStatusActive(item.id, listClassesStatus)
                              ? "secondary"
                              : "default"
                          }
                          className={classes.button}
                          startIcon={
                            <Avatar
                              src={"/img/classes/" + item.icon}
                              className={
                                checkStatusActive(item.id, listClassesStatus)
                                  ? classes.small + " active"
                                  : classes.small
                              }
                            />
                          }
                          size="small"
                          onClick={() =>
                            changeStatusList(
                              item.id,
                              "classes",
                              listClassesStatus
                            )
                          }
                        >
                          {item.name}
                        </Button>
                      );
                    })}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <div className={classes.title} style={{ position: "relative" }}>
              Danh sách tướng
              <Tooltip title="Đặt lại bộ lọc">
                <IconButton
                  aria-label="refresh-filter"
                  style={{ position: "absolute", right: "0px", top: "-5px" }}
                  onClick={() => resetFilter()}
                >
                  <RefreshIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes.itemsWrapper}>
              {data.map((item, index) => {
                return (
                  <ChampionPopover
                    id_champion={item.id}
                    key={"champ_popover_" + index}
                  >
                    <div key={"champions-" + index}>
                      <LazyLoad height={60} offset={100}>
                        <img
                          className={
                            classes.itemImage + " cost_" + item.stat.Cost
                          }
                          src={"/img/champions/" + item.avt}
                          alt="avt-champion"
                          width="50px"
                          onClick={() => setDataChosen(item)}
                        />
                      </LazyLoad>
                    </div>
                  </ChampionPopover>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} style={{ borderLeft: "1px solid #90caf9" }}>
          <div>
            {dataChosen && !_.isEmpty(dataChosen) && (
              <Fragment>
                <div className={classes.content_detail}>
                  <div className={classes.title_detail + " cost_"+dataChosen.stat.Cost}>
                    <img
                      src={
                        dataChosen && dataChosen.avt
                          ? "/img/champions/" + dataChosen.avt
                          : "Unknow"
                      }
                      alt="icon_class"
                      width="60px"
                    />
                    <div>
                      <p style={{ margin: "0", marginTop: "-5px" }}>
                        {dataChosen && dataChosen.name
                          ? dataChosen.name
                          : "Unknow"}
                      </p>
                      <div>
                        <div className={classes.originBlock}>
                          {dataChosen &&
                            dataChosen.origin &&
                            dataChosen.origin.map((sub_item, index) => {
                              let data_origin = getOrigin(sub_item);
                              return (
                                <div key={"origin_" + index}>
                                  <img
                                    src={"/img/origins/" + data_origin.icon}
                                    alt="icon_origin"
                                    width="20px"
                                  />
                                  <span style={{ fontSize: "14px" }}>
                                    {data_origin.name}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                        <div className={classes.originBlock}>
                          {dataChosen &&
                            dataChosen.class &&
                            dataChosen.class.map((sub_item, index) => {
                              let data_class = getClass(sub_item);
                              return (
                                <div key={"class_" + index}>
                                  <img
                                    src={"/img/classes/" + data_class.icon}
                                    alt="icon_class"
                                    width="20px"
                                  />
                                  <span style={{ fontSize: "14px" }}>
                                    {data_class.name}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      {dataChosen && dataChosen.stat && dataChosen.stat.Cost && (
                        <div className={classes.costBlock}>
                          <span>
                            <img
                              src="/img/icon-gold.svg"
                              alt="gold_icon"
                              width="15px"
                            />
                          </span>
                          {dataChosen.stat.Cost}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {dataChosen && dataChosen.skill && (
                      <div>
                        <div className={classes.skillTitle}>
                          <img
                            src={"/img/champions/skills/" + dataChosen.imgSkill}
                            alt="icon-skill"
                            width="32px"
                          />
                          <div>
                            <p className="skillName">{dataChosen.skill.name}</p>
                            <p className="skillType">{dataChosen.skill.type}</p>
                          </div>
                        </div>
                        <p className={classes.skillDesc}>
                          {dataChosen.skill.des}
                        </p>
                        <div className={classes.skillEffect}>
                          {dataChosen.skill &&
                            dataChosen.skill.effects &&
                            dataChosen.skill.effects.map((sub_item, index) => (
                              <p key={"skill_effect_" + index}>{sub_item}</p>
                            ))}
                        </div>
                      </div>
                    )}
                    {dataChosen && dataChosen.stat && (
                      <div className={classes.statBlock}>
                        {dataChosen.stat &&
                          dataChosen.stat.Range &&
                          renderRange(dataChosen.stat.Range)}
                        {dataChosen.stat.Mana !== "0" && (
                          <p>
                            Mana: {dataChosen.stat.Starting_Mana || 0}/
                            {dataChosen.stat.Mana}
                          </p>
                        )}
                        <p>Máu: {dataChosen.stat.Health}</p>
                        <p>Dame: {dataChosen.stat.Damage}</p>
                        <p>DPS: {dataChosen.stat.DPS}</p>
                        <p>Tốc độ đánh: {dataChosen.stat.Atk_Spd}</p>
                        <p>Giáp: {dataChosen.stat.Armor}</p>
                        <p>Kháng phép: {dataChosen.stat.MR}</p>
                      </div>
                    )}
                  </div>
                  <div className={classes.unitsBlock}>
                    <span className={classes.subTitle}>Trang bị gợi ý</span>
                    <div className={"blockItem"}>
                      {dataChosen &&
                        dataChosen.items &&
                        dataChosen.items.map((item, index) => {
                          let item_info = getItem(item);
                          return (
                            <div key={"recomend_item_" + index}>
                              <img
                                src={"/img/items/" + item_info.icon}
                                alt="item_icon"
                                width="40px"
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className={classes.originsWrapper}>
                      <span className={classes.subTitle}>Đồng minh</span>
                      {
                        dataChosen.origin.map((item, index) => {
                          let origin_data = getOrigin(item);
                          return (
                            <div key={'origin_block_'+index}  className="originsBlock">
                              <div className='icon'>
                                <img src={"/img/origins/" + origin_data.icon} alt="origin-icon" style={{filter: 'brightness(0.5)'}}/>
                                <br/>
                                <span>{origin_data.name}</span>
                              </div>
                              {
                                !_.isEmpty(origin_data) && origin_data.units.map((sub_item,index) => {
                                  let champions_data = getChampions(sub_item);
                                  return (
                                    <div key={'champion_item_'+index} style={{maxWidth: 'calc(10% - 5px)', paddingRight: '5px'}}>
                                      <LazyLoad height={60} offset={100} style={{maxWidth: 'calc(10% - 5px)'}}>
                                        <img onClick={() => setDataChosen(champions_data)} className={"champion_avt"} src={"/img/champions/" + champions_data.avt} alt="champion-avt" width="100%"/>
                                      </LazyLoad>
                                    </div>
                                  )
                                })
                              }
                              <div>
                                <div className={classes.descriptionWrapper}>
                                  {origin_data.desc}
                                </div>
                                {origin_data.active && origin_data.active.map((sub_item, index) => (
                                  <div
                                    className={classes.descriptionWrapperBuff}
                                    key={"des-origin-buff-" + index}
                                  >
                                    <div className={classes.activeNumberItem}>
                                      {sub_item}
                                    </div>
                                    <div>{origin_data.effect[index]}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        })
                      }
                      {
                        dataChosen.class.map((item, index) => {
                          let class_data = getClass(item);
                          return (
                            <div key={'class_block_'+index}  className="originsBlock">
                              <div className='icon'>
                                <img src={"/img/classes/" + class_data.icon} alt="class-icon" style={{filter: 'brightness(0.5)'}}/>
                                <br/>
                                <span>{class_data.name}</span>
                              </div>
                              {
                                !_.isEmpty(class_data) && class_data.units.map((sub_item,index) => {
                                  let champions_data = getChampions(sub_item);
                                  return (
                                    <div key={'champion_item_'+index} style={{maxWidth: 'calc(10% - 5px)', paddingRight: '5px'}}>
                                      <LazyLoad height={60} offset={100} style={{maxWidth: 'calc(10% - 5px)'}}>
                                        <img onClick={() => setDataChosen(champions_data)} className={"champion_avt"} src={"/img/champions/" + champions_data.avt} alt="champion-avt" width="100%"/>
                                      </LazyLoad>
                                    </div>
                                  )
                                })
                              }
                              <div>
                                <div className={classes.descriptionWrapper}>
                                  {class_data.desc}
                                </div>
                                {class_data.active && class_data.active.map((sub_item, index) => (
                                  <div
                                    className={classes.descriptionWrapperBuff}
                                    key={"des-origin-buff-" + index}
                                  >
                                    <div className={classes.activeNumberItem}>
                                      {sub_item}
                                    </div>
                                    <div>{class_data.effect[index]}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                </div>
              </Fragment>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
