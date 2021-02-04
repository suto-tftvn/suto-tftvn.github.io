import React,{useRef,Fragment} from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import { Fragment } from 'react'
import { useDrag,useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'64px',
    position: 'relative',
    zIndex: 9
  },
  draft_box: {
    // border: '1px dashed gray',
    // backgroundColor: 'white',
    // padding: '0.5rem 1rem',
    marginRight: '5px',
    // marginBottom: '5px',
    cursor: 'move',
    float: 'left',
    width: '10%',
    maxWidth: '60px',
    '&>img':{
      width: '95%',
      borderRadius: '5px',
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
  },
  battle_box:{
    width:'13%',
    height:'13%',
    maxWidth:'100px',
    maxHeight:'100px',
    display:'inline-block',
    '& .champ': {
      width:'100%',
      height:'100%',
      maxWidth:'100px',
      maxHeight:'100px',
      cursor: 'move',
    }
  },
}));

const Box = (props) => {
  const classes = useStyles();
  const { champ } = props;
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: props.onDrop
  })
  const [{ isDragging }, drag] = useDrag({
    item: { ...{champ: champ}, ...{type: ItemTypes.BOX} },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // console.log(item);
      if (item && dropResult) {
        props.updateData(item,dropResult.type,props.pos,dropResult.pos);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })
  const opacity = isDragging ? 0.4 : 1;
  // const style = props.type_pos === 'battle' ? battle : draft;
  // let backgroundColor = "#222";
  drag(drop(ref));
  // if(props.type_pos === 'battle'){
  //   console.log(99,champ);
  // }
  return (
    <Fragment>
      {
        props.type_pos === 'battle' ?
        <div ref={ref} className={classes.battle_box}>
          <svg className={'champ'} style={{opacity}} viewBox="0 0 100 100">
            <defs>
              <pattern id={"img"+champ.id} patternUnits="userSpaceOnUse" width="100%" height="100%">
                <image href={"/img/champions/"+champ.avt} x="0" width="100%" height="100%" />
              </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={"url(#img"+champ.id+")"}/>
            {/* <text font-size="15" x="50" y="90" textAnchor="middle">{champ.name}</text> */}
          </svg>
        </div> 
        :
        <div ref={ref}  className={classes.draft_box} style={{opacity}}>
          <img src={"/img/champions/"+champ.avt} alt="img-champ" className={'cost_'+champ.stat.Cost}/>
        </div>
      }
    </Fragment>
  )
}
export default Box
