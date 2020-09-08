import React,{Fragment, useEffect} from 'react';
import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {getOrigin} from '../../until/common';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(0),
  },
  content: {
    background:'#f1f8e9',
    padding: '10px'
  },
  title: {
    display:'flex',
    alignItems:'center',
    borderBottom: '1px #689f38 solid',
    '& img' : {
      marginRight: '10px'
    },
    paddingBottom: '5px',
    fontWeight: 'bold',
    fontSize: '18px'
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
    if(props.origins !== 0 ) {
      let newData = getOrigin(props.origins);
      setOrigin(newData);
    }
  },[]);

  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <div
        aria-owns={open ? 'mouse-over-popover' : undefined}
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
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className={classes.content}>
            <div className={classes.title}><img style={{filter: 'brightness(0.5)'}} src={(dataOrigin && dataOrigin.icon) ? "/img/origins/" + dataOrigin.icon : 'Unknow'} alt="icon_origin"/>{(dataOrigin && dataOrigin.name) ? dataOrigin.name : 'Unknow'}</div>
            <div>content a a a a a a a a a aaaaaaaaaaaaaaaaaaaaa  a</div>
            <div>Tướng : </div>
        </div>
      </Popover>
    </Fragment>
  );
}