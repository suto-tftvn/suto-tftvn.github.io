import React, { useState, useCallback, useEffect } from "react";
import Card from "./card";
import Box from "./box";
import Dustbin from "./dustbin";
import update from "immutability-helper";
const style = {
  width: "100%",
};

export default function Builder() {
  const [dustbins,setDustbins] = useState([
    {name:null,type:1},
    {name:null,type:1},
    {name:null,type:1}
  ]);
  const [boxes] = useState([
    { name: 'Bottle'},
    { name: 'Banana'},
    { name: 'Magazine'},
  ])
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      // setDroppedBoxNames(
      //   update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      // )
      console.log(dustbins);
      let oldData = dustbins;
      setDustbins(
        update(dustbins, {
          [index]: {
            name: {
              $set: item.name,
            },
            type: {
              $set: item.type==='box' ? 2 : 1,
            },
          },
        }),
      )
    },[dustbins,droppedBoxNames]
  )
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {
          dustbins.map((item,index) => {
            if(item.type===1){
              return <Dustbin name={item.name} onDrop={(item) => handleDrop(index, item)} />
            } else if (item.type===2){
              return <Box name={item.name} />
            } else {
              return null;
            }
          })
        }
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
          {
            boxes.map((item, index) => (
              <Box
                name={item.name}
                isDropped={isDropped(item.name)}
                key={index}
              />
            ))
          }
      </div>
    </div>
  );
}
