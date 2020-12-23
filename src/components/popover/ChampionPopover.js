import React, { Fragment, useEffect } from "react";
import Popover from "@material-ui/core/Popover";
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { getClass, getOrigin, getChampions } from "../../until/common";

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
    top: '5px',
    right: '5px',
    fontWeight: "normal",
    '& span': {
      display: 'flex',
      alignItems: 'center',
      width: '15px'
    },
    '& img': {
      filter: 'brightness(0.5)'
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

  useEffect(() => {
    if (props.class !== 0) {
      let newData = getChampions(props.id_champion);
      setChampion(newData);
    }
  }, []);

  const open = Boolean(anchorEl);

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
          <div className={classes.title}>
            <img
            //   style={{ filter: "brightness(0.5)" }}
              src={
                dataChampion && dataChampion.avt
                  ? "/img/champions/" + dataChampion.avt
                  : "Unknow"
              }
              alt="icon_class"
              width="45px"
            />
            <div>
                <p style={{margin:'0',marginTop:'-5px'}}>{dataChampion && dataChampion.name ? dataChampion.name : "Unknow"}</p>
                <div>
                  <div className={classes.originBlock}>
                    {
                      dataChampion && dataChampion.origin && dataChampion.origin.map((sub_item,index) => {
                        let data_origin = getOrigin(sub_item);
                        return (
                          <div>
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
                          <div>
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
          {/* <div>
            {dataChampion && dataChampion.active && 
              <div>
                {
                  dataChampion.desc && <div className={classes.descriptionWrapper}>
                    {dataChampion.desc}
                  </div>
                }
                {dataChampion.active.map((sub_item, index) => (
                  <div className={classes.descriptionWrapperBuff}  key={'data-class-popover-'+index}>
                    <div className={classes.activeNumberItem}>{sub_item}</div>
                    <div>{dataChampion.effect[index]}</div>
                  </div>
                ))}
              </div>}
          </div> */}
          <div className={classes.unitsBlock}>Trang bị : </div>
        </div>
      </Popover>
    </Fragment>
  );
}
