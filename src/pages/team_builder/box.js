import React,{useRef} from 'react'
import { useDrag,useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
const draft = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const battle = {
  border: '1px dashed red',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const Box = (props) => {
  const { name } = props;
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: props.onDrop
  })
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        props.updateData(item,dropResult.type,props.pos,dropResult.pos);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })
  const opacity = isDragging ? 0.4 : 1;
  const style = props.type_pos === 'battle' ? battle : draft;
  drag(drop(ref))
  return (
    <div ref={ref} style={{ ...style, opacity }}>
        {name}
    </div>
  )
}
export default Box
