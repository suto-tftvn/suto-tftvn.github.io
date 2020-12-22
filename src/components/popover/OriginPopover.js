import React, { Fragment, useEffect } from "react";
import Popover from "@material-ui/core/Popover";
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { getOrigin,getChampions } from "../../until/common";

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
  },
  title: {
    display: "flex",
    alignItems: "center",
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
    display:'flex',
    paddingTop:'5px',
    '& div':{
      margin: '2px'
    }
  },
  itemImage: {
    border: '2px #a2cf6e solid',
    borderRadius: '3px',
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

export default function OriginPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dataOrigin, setOrigin] = React.useState({});

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (props.origins !== 0) {
      let newData = getOrigin(props.origins);
      setOrigin(newData);
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
              style={{ filter: "brightness(0.5)" }}
              src={
                dataOrigin && dataOrigin.icon
                  ? "/img/origins/" + dataOrigin.icon
                  : "Unknow"
              }
              alt="icon_origin"
            />
            {dataOrigin && dataOrigin.name ? dataOrigin.name : "Unknow"}
          </div>
          <div>
            {dataOrigin && dataOrigin.active && 
              <div>
                {
                  dataOrigin.desc && <div className={classes.descriptionWrapper}>
                    {dataOrigin.desc}
                  </div>
                }
                {dataOrigin.active.map((sub_item, index) => (
                  <div className={classes.descriptionWrapperBuff}  key={'data-class-popover-'+index}>
                    <div className={classes.activeNumberItem}>{sub_item}</div>
                    <div>{dataOrigin.effect[index]}</div>
                  </div>
                ))}
            </div>}
          </div>
          <div className={classes.unitsBlock}>
            {dataOrigin && dataOrigin.units && dataOrigin.units.map((sub_item, index) => {
                const dataChamp = getChampions(sub_item);
                return (
                  <div key={'avt_champion_'+index}>
                    <img className={classes.itemImage+' cost_'+dataChamp.stat.Cost} src={'/img/champions/'+dataChamp.avt} alt="avt-champion" width="40px"/>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </Popover>
    </Fragment>
  );
}
