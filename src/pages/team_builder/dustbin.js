import React from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
const style = {
  // height: "12rem",
  // width: "12rem",
  // marginRight: "1.5rem",
  // marginBottom: "1.5rem",
  // color: "white",
  // padding: "1rem",
  // textAlign: "center",
  // fontSize: "1rem",
  // lineHeight: "normal",
  float: "left",
  width:'100px',
  height:'100px'
};
const Dustbin = (props) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: props.onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    // <div ref={drop} style={{ ...style, backgroundColor }}>
    //   {props.name}
    // </div>
    <svg ref={drop} style={style} viewBox="0 0 100 100">
      <defs>
        <pattern id="99" patternUnits="userSpaceOnUse" width="100" height="100">
        </pattern>
      </defs>
      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={backgroundColor} />
      <text font-size="15" x="50" y="90" textAnchor="middle">{props.name}</text>
    </svg>
  );
};
export default Dustbin;
