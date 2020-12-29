import React, { useState, Children } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
const style = {
  // height: "12rem",
  // width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "red",
  // padding: "1rem",
  // textAlign: "center",
  // fontSize: "1rem",
  // lineHeight: "normal",
  // float: "left",
};
const DustbinRemove = (props) => {
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
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {props.children}
    </div>
  );
};
export default DustbinRemove;