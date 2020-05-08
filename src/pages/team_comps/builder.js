import React,{useState,useCallback} from 'react';
import Card from './card';
import update from 'immutability-helper'
const style = {
  width: '100%',
}

export default function Builder () {
    // https://react-dnd.github.io/react-dnd/examples/dustbin/copy-or-move
    const [cards, setCards] = useState([
      {id:1,text:1},{id:2,text:2},{id:3,text:3},{id:4,text:4},{id:5,text:5},{id:6,text:6},{id:7,text:7},
      {id:8,text:1},{id:9,text:2},{id:10,text:3},{id:11,text:4},{id:12,text:5},{id:13,text:6},{id:14,text:7},
      {id:15,text:1},{id:16,text:2},{id:17,text:3},{id:18,text:4},{id:19,text:5},{id:20,text:6},{id:21,text:7},
      {id:22,text:1},{id:23,text:2},{id:24,text:3},{id:25,text:4},{id:26,text:5},{id:27,text:6},{id:28,text:7}
      ])
      const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
          const dragCard = cards[dragIndex]
          setCards(
            update(cards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
              ],
            }),
          )
        },
        [cards],
      )
      const renderCard = (card, index) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      }
      return (
        <>
          <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </>
      )
}