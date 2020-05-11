import React, { useState, useCallback, useEffect } from "react";
import Card from "./card";
import Box from "./box";
import Dustbin from "./dustbin";
import DustbinRemove from "./dustbinRemove";
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
  const handleDrop = useCallback(
    (index, item) => {
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
      return {type:'draftToBattle', pos:index}
    },[dustbins]
  )

  const handleDropRemove = () => {
    return {type:'remove', pos:-1}
  }

  const moveOnBattle = (index,item) => {
    console.log('move battle');
    return {type:'battleToBattle', pos:index}
  }

  const callbackUpdateBattle = (item,type,oldIndex,newIndex) => {
    if(type === 'remove' && oldIndex>=0){
      setDustbins(
        update(dustbins, {
          [oldIndex]: {
            name: {$set: null},
            type: {$set: 1},
          }
        }),
      )
      return;
    }
    if(type==='battleToBattle'){
        const oldData = dustbins[newIndex];
        setDustbins(
          update(dustbins, {
            [oldIndex]: {
              name: {$set: oldData.name}
            },
            [newIndex]: {
              name: {$set: item.name,}
            },
          }),
        )
    } 
    if (type==='draftToBattle') {
        if(oldIndex>=0){
          setDustbins(
            update(dustbins, {
              [oldIndex]: {
                name: {$set: null},
                type: {$set: 1},
              },
              [newIndex]: {
                name: {$set: item.name,},
                type: {$set: 2},
              },
            }),
          )
        }
      }
  }

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {
          dustbins.map((item,index) => {
            if(item.type===1){
              return <Dustbin name={item.name} onDrop={(item) => handleDrop(index, item)} pos={index} type_pos='battle' />
            } else if (item.type===2){
              return <Box 
              name={item.name} 
              type_pos='battle' 
              pos={index} 
              updateData={callbackUpdateBattle}
              onDrop={(item) => moveOnBattle(index,item)}
              />
            } else {
              return null;
            }
          })
        }
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <DustbinRemove onDrop={(item) => handleDropRemove(item)}>
          {
            boxes.map((item, index) => (
              <Box
                name={item.name}
                type_pos='draft'
                key={index}
                pos={-2}
                updateData={callbackUpdateBattle}
              />
            ))
          }
        </DustbinRemove>
      </div>
    </div>
  );
}
