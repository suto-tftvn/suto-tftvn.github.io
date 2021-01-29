import React, { Fragment, useEffect } from "react";
import Popover from "@material-ui/core/Popover";
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { getClass, getOrigin, getChampions, getItem } from "../../until/common";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(0),
  },
  content: {
    background: "#f1f8e9",
    padding: "10px",
    maxWidth: "420px",
    minWidth:"250px"
  },
  title: {
    display: "flex",
    alignItems: "flex-start",
    borderBottom: "1px #689f38 solid",
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
    borderTop: "1px #689f38 solid",
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
    top: '15px',
    right: '15px',
    fontWeight: "bold",
    color:'#fff',
    '& span': {
      display: 'flex',
      alignItems: 'center',
      // width: '15px'
    },
    '& img': {
      marginRight: '5px'
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
  }
}));

export default function ChampionPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dataChampion, setChampion] = React.useState({});

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   console.log('didmount');
  //   if (props.class !== 0) {
  //     let newData = getChampions(props.id_champion);
  //     setChampion(newData);
  //   }
  // }, []);

  useEffect(() => {
    // console.log('will recpice props');
    if (props.class !== 0) {
      let newData = getChampions(props.id_champion);
      setChampion(newData);
    }
  }, [props]);

  const open = Boolean(anchorEl);

  const renderRange = (range) => {
    let result;
    let arr_range = [1,1,1,1,1];
    result = <div className='rangeBlock'>Tầm đánh: {
      arr_range.map((item,index) => <div key={'range_square_'+index} className={index < range ? 'rangeSquare active' : 'rangeSquare'}></div>)
    }</div>
    return result
  }

  return (
    <Fragment>
      <div
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.children}
      </div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className={classes.content}>
          <div className={classes.title + (dataChampion && dataChampion.stat ? ' cost_'+dataChampion.stat.Cost : ' cost_1')}>
            <img
            //   style={{ filter: "brightness(0.5)" }}
              src={
                dataChampion && dataChampion.avt
                  ? "/img/champions/" + dataChampion.avt
                  : "Unknow"
              }
              alt="icon_class"
              width="60px"
            />
            <div>
                <p style={{margin:'0',marginTop:'-5px'}}>{dataChampion && dataChampion.name ? dataChampion.name : "Unknow"}</p>
                <div>
                  <div className={classes.originBlock}>
                    {
                      dataChampion && dataChampion.origin && dataChampion.origin.map((sub_item,index) => {
                        let data_origin = getOrigin(sub_item);
                        return (
                          <div key={'origin_'+index}>
                            <img src={"/img/origins/"+data_origin.icon} alt="icon_origin" width="20px"/>
                            <span style={{fontSize:'14px'}}>{data_origin.name}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className={classes.originBlock}>
                    {
                      dataChampion && dataChampion.class && dataChampion.class.map((sub_item,index) => {
                        let data_class = getClass(sub_item);
                        return (
                          <div key={'class_'+index}>
                            <img src={"/img/classes/"+data_class.icon} alt="icon_class" width="20px"/>
                            <span style={{fontSize:'14px'}}>{data_class.name}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                {dataChampion && dataChampion.stat && dataChampion.stat.Cost && <div className={classes.costBlock}><span><img src="/img/icon-gold.svg" alt="gold_icon" width="12px"/></span>{dataChampion.stat.Cost}</div>}
            </div>
          </div>
          <div>
            {dataChampion && dataChampion.skill &&
              <div>
                <div className={classes.skillTitle}>
                  <img src={'/img/champions/skills/'+dataChampion.imgSkill} alt="icon-skill" width="32px"/>
                  <div>
                    <p className='skillName'>{dataChampion.skill.name}</p>
                    <p className='skillType'>{dataChampion.skill.type}</p>
                  </div>
                </div>
                <p className={classes.skillDesc}>{dataChampion.skill.des}</p>
                <div className={classes.skillEffect}>
                  {
                    dataChampion.skill && dataChampion.skill.effects && dataChampion.skill.effects.map((sub_item,index) => <p key={'skill_effect_'+index}>{sub_item}</p>)
                  }
                </div>
              </div>
            }
            {
              dataChampion && dataChampion.stat &&
              <div className={classes.statBlock}>
                {/* <p>Tầm đánh: {dataChampion.stat && dataChampion.stat.Range && renderRange(dataChampion.stat.Range)}</p> */}
                {/* <div></div> */}
                {dataChampion.stat && dataChampion.stat.Range && renderRange(dataChampion.stat.Range)}
                {
                  dataChampion.stat.Mana !== "0" && <p>Mana: {dataChampion.stat.Starting_Mana || 0}/{dataChampion.stat.Mana}</p>
                }
                <p>Máu: {dataChampion.stat.Health}</p>
                <p>Dame: {dataChampion.stat.Damage}</p>
                <p>DPS: {dataChampion.stat.DPS}</p>
              </div>
            }
          </div>
          <div className={classes.unitsBlock}>
            Trang bị gợi ý: 
            <div className={'blockItem'}>
              {dataChampion && dataChampion.items && dataChampion.items.map((item, index) => {
                  let item_info = getItem(item);
                  return <div key={"recomend_item_"+index}>
                    <img src={'/img/items/'+item_info.icon} alt="item_icon" width="40px"/>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </Popover>
    </Fragment>
  );
}
