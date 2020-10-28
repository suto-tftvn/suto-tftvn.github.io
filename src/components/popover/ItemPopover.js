import React, { Fragment, useEffect } from "react";
import Popover from "@material-ui/core/Popover";
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { getItem } from "../../until/common";

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
      border: '2px #a2cf6e solid',
      borderRadius: '10px',
    },
    paddingBottom: "5px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  unitsBlock: {
    borderTop: "1px #689f38 solid"
  },
  listItemWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  itemImage: {
      border: '2px #a2cf6e solid',
      borderRadius: '10px',
      margin: '5px 5px 0 0'
  },
  descriptionItem: {
    margin: '5px',
    textAlign: "justify"
  }
}));

export default function ItemPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dataItem, setItemInfo] = React.useState({});

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (props.item_id !== 0) {
      let newData = getItem(props.item_id);
      setItemInfo(newData);
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
              width="40px"
              src={
                dataItem && dataItem.img
                  ? dataItem.img
                  : "Unknow"
              }
              alt="icon_item"
            />
            <div>
              {dataItem && dataItem.name ? dataItem.name : "Unknow"}
              <div>Chỉ số</div>
            </div>
          </div>
          <div className={classes.descriptionItem}>
              {dataItem.description}
          </div>
          <div className={classes.unitsBlock}>
            {
              dataItem.type === 'base' ? (
                <div className={classes.listItemWrapper}>
                  {
                    dataItem.citem.map((sub_item, index) => (
                      <div>
                        <img width="30px" className={classes.itemImage} src={getItem(sub_item).img} alt="img-item"/>
                      </div>
                    ))
                  }
                </div>
              ) : null
            }
            {
              dataItem.type === 'combinedItem' ? (
                <div className={classes.listItemWrapper}>
                  {
                    dataItem.bitem.map((sub_item, index) => (
                      <div>
                        <img width="35px" className={classes.itemImage} src={getItem(sub_item).img} alt="img-item"/>
                      </div>
                    ))
                  }
                </div>
              ) : null
            }
          </div>
        </div>
      </Popover>
    </Fragment>
  );
}
