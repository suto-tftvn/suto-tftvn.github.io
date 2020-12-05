import React, { Fragment, useEffect } from "react";
import Popover from "@material-ui/core/Popover";
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { getClass } from "../../until/common";

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
  }
}));

export default function OriginPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dataClass, setClass] = React.useState({});

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (props.class !== 0) {
      let newData = getClass(props.class);
      setClass(newData);
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
                dataClass && dataClass.icon
                  ? "/img/classes/" + dataClass.icon
                  : "Unknow"
              }
              alt="icon_class"
            />
            {dataClass && dataClass.name ? dataClass.name : "Unknow"}
          </div>
          <div>
            {dataClass && dataClass.active && 
              <div>
                {
                  dataClass.desc && <div className={classes.descriptionWrapper}>
                    {dataClass.desc}
                  </div>
                }
                {dataClass.active.map((sub_item, index) => (
                  <div className={classes.descriptionWrapperBuff}  key={'data-class-popover-'+index}>
                    <div className={classes.activeNumberItem}>{sub_item}</div>
                    <div>{dataClass.effect[index]}</div>
                  </div>
                ))}
              </div>}
          </div>
          <div className={classes.unitsBlock}>Tướng : </div>
        </div>
      </Popover>
    </Fragment>
  );
}
