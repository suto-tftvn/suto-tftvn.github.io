import React, { useState, useCallback, useEffect, useTheme } from "react";
import Card from "./card";
import Box from "./box";
import Dustbin from "./dustbin";
import DustbinRemove from "./dustbinRemove";
import update from "immutability-helper";
import {champions} from "../../until/constant/champions";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Builder() {
  // console.log(champions);
  const rowBattel = [1,2,3,4];
  const cellBattel = [1,2,3,4,5,6,7];
  const [dustbins,setDustbins] = useState(
    [{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},
      {champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},
      {champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},
      {champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1},{champ:null,type:1}]
  );
  const [boxes] = useState(champions);
  const handleDrop = useCallback(
    (index, item) => {
      setDustbins(
        update(dustbins, {
          [index]: {
            champ: {
              $set: item.champ,
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
    console.log(item);
    return {type:'battleToBattle', pos:index}
  }

  const callbackUpdateBattle = (item,type,oldIndex,newIndex) => {
    // console.log(item);
    if(type === 'remove' && oldIndex>=0){
      setDustbins(
        update(dustbins, {
          [oldIndex]: {
            champ: {$set: null},
            type: {$set: 1},
          }
        }),
      )
      return;
    }
    if(type==='battleToBattle'){
      // console.log(item,type,oldIndex,newIndex);
      if(oldIndex<0){
        // const oldData = dustbins[newIndex];
        setDustbins(
          update(dustbins, {
            [newIndex]: {
              champ: {$set: item.champ}
            },
          }),
        )
      } else{
        const oldData = dustbins[newIndex];
        setDustbins(
          update(dustbins, {
            [oldIndex]: {
              champ: {$set: oldData.champ}
            },
            [newIndex]: {
              champ: {$set: item.champ}
            },
          }),
        )
      }
    } 
    if (type==='draftToBattle') {
        if(oldIndex>=0){
          setDustbins(
            update(dustbins, {
              [oldIndex]: {
                champ: {$set: null},
                type: {$set: 1},
              },
              [newIndex]: {
                champ: {$set: item.champ},
                type: {$set: 2},
              },
            }),
          )
        }
      }
  }

  const matches = useMediaQuery('(min-width:768px)');

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both", textAlign:'initial', paddingBottom:'35px'}}>
        {
          rowBattel.map((row_item,index) => {
            return (
              <div style={{marginBottom: matches ? '-25px' : '-3%'}}>
                {
                  index%2!==0 && <div style={{display:'inline-block', width:'6.5%', maxWidth:'50px'}}></div>
                }
                {
                  cellBattel.map((cell_item,c_index) => {
                    let n_index = index*7 + c_index;
                    let item = dustbins[n_index]
                    if(item.type===1){
                      // console.log(1,item);
                      return <Dustbin data={item} onDrop={(item) => handleDrop(n_index, item)} pos={n_index} type_pos='battle' key={'battle_empty_'+n_index}/>
                    } else if (item.type===2){
                      // console.log(2,item);
                      return <Box 
                      champ={item.champ}
                      type_pos='battle'
                      key={'battle_full_'+n_index} 
                      pos={n_index} 
                      updateData={callbackUpdateBattle}
                      onDrop={(item) => moveOnBattle(n_index,item)}
                      />
                    } else {
                      return null;
                    }
                  })
                }
                {/* {
                  dustbins.map((item,index) => {
                    if(item.type===1){
                      // console.log(1,item);
                      return <Dustbin data={item} onDrop={(item) => handleDrop(index, item)} pos={index} type_pos='battle' key={'battle_empty_'+index}/>
                    } else if (item.type===2){
                      // console.log(2,item);
                      return <Box 
                      champ={item.champ}
                      type_pos='battle'
                      key={'battle_full_'+index} 
                      pos={index} 
                      updateData={callbackUpdateBattle}
                      onDrop={(item) => moveOnBattle(index,item)}
                      />
                    } else {
                      return null;
                    }
                  })
                } */}
              </div>
            )
          })
      }
      </div>
      <div style={{ overflow: "hidden", clear: "both", width: "70%" }}>
        <DustbinRemove onDrop={(item) => handleDropRemove(item)}>
          {
            boxes.map((item, index) => (
              <Box
                champ={item}
                type_pos='draft'
                key={index}
                pos={-2}
                updateData={callbackUpdateBattle}
              />
            ))
          }
        </DustbinRemove>
      </div>
      <div>
        item
      </div>
    </div>
  );
}
