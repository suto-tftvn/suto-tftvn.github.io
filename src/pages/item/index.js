import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Menu from './components/Menu';
// import { renderRoutes } from 'react-router-config';
// import { useRouter } from "../../until/hook/useRouter"
import { getItem } from "../../until/common";
import LazyLoad from "react-lazyload";
import ItemPopover from "../../components/popover/ItemPopover";
import { data_item } from '../../until/constant/items';
var _ = require("lodash");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  itemImage: {
    border: "1px #a2cf6e solid",
    borderRadius: "10px",
    // margin: '5px'
  },
}));

const mapItem = [[0,1,2,3,4,5,28,29,30,31],[31,49,25,9,26,43,51,17,35,36],[30,11,54,20,15,48,50,12,19,0],[29,13,44,14,41,16,42,45,0,0],[28,38,22,37,47,10,33,0,0,0],[5,21,46,7,39,6,0,0,0,0],[4,40,24,18,23,0,0,0,0,0],[3,32,27,8,0,0,0,0,0,0],[2,53,52,0,0,0,0,0,0,0],[1,34,0,0,0,0,0,0,0,0]];

export default function Item(props) {
  const classes = useStyles();
  const [itemChosen, setItemChosen] = useState(null);

  // const processData = () => {
  //   let list_base = _.filter(data_item, { 'type': 'base' });
  //   let final_list = [[0]]
  //   console.log(list_base);
  //   for (let i = 9; i > 0; i--) {
  //     let x = [];
  //     final_list[0].push(list_base[9 - i].id);
  //     let newLine = [list_base[i - 1].id];
  //     for (let j = 0; j < (i); j++) {
  //       newLine.push(getId([list_base[i - 1].id, list_base[j].id]));
  //     }
  //     final_list.push(newLine);
  //   }
  //   for (let k = 2; k < final_list.length; k++) {
  //     let fillEmty = []
  //     for (let j = 0; j < (10 - final_list[k].length); j++) {
  //       fillEmty.push(0);
  //     }
  //     final_list[k] = [...final_list[k], ...fillEmty]
  //   }
  //   console.log(final_list);
  // }

  // const getId = (value) => {
  //   let list_comnine_item = _.filter(data_item, { 'type': 'combinedItem' });
  //   const found = list_comnine_item.find(element => _.isEqual(element.bitem.sort(), value.sort()));
  //   return found.id;
  // }

  const choseItem = (item) => {
    console.log(getItem(item));
    setItemChosen(getItem(item));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {itemChosen && (
            <Grid container spacing={0}>
              <Grid item sm={2}>
                <LazyLoad height={45}>
                  <img
                    className={classes.itemImage}
                    src={'/img/items/' + itemChosen.icon}
                    width="40px"
                    alt="img-item"
                  />
                </LazyLoad>
              </Grid>
              <Grid item sm={10}>
                <b>{itemChosen.name}</b>
                <br />
                <b>Chỉ số</b>
              </Grid>
              <Grid item sm={12}>
                {itemChosen.desc}
              </Grid>
              <hr />
              {itemChosen.type === "base" && (
                <Grid container spacing={1}>
                  <Grid item sm={12}>
                    <h3>Có thể ghép thành</h3>
                  </Grid>
                  {itemChosen.citem.map((item, index) => {
                    return (
                      <Fragment key={"citem-" + index}>
                        <Grid item sm={2}>
                          <LazyLoad height={45}>
                            <img
                              className={classes.itemImage}
                              src={'/img/items/' + getItem(item).icon}
                              width="90%"
                              alt="img-item"
                              onClick={() => choseItem(item)}
                            />
                          </LazyLoad>
                        </Grid>
                        <Grid item sm={10}>
                          <b>{getItem(item).name}</b>
                        </Grid>
                      </Fragment>
                    );
                  })}
                </Grid>
              )}
              {itemChosen.type === "combinedItem" && (
                <Grid container spacing={1}>
                  <Grid item sm={12}>
                    <h3>Ghép từ</h3>
                  </Grid>
                  {itemChosen.bitem.map((item, index) => {
                    return (
                      <Fragment key={"bitem-" + index}>
                        <Grid item sm={2}>
                          <LazyLoad height={45}>
                            <img
                              className={classes.itemImage}
                              src={'/img/items/' + getItem(item).icon}
                              width="90%"
                              alt="img-item"
                              onClick={() => choseItem(item)}
                            />
                          </LazyLoad>
                        </Grid>
                        <Grid item sm={10}>
                          <b>{getItem(item).name}</b>
                        </Grid>
                      </Fragment>
                    );
                  })}
                </Grid>
              )}
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} sm={8} style={{ borderLeft: "1px solid #90caf9" }}>
          {mapItem.map((item, index) => {
            return (
              <Grid container spacing={1} key={"item-row-" + index}>
                {mapItem[index].map((item2, index2) => {
                  return (
                    <Grid item md={1} xs={1} key={"item-col-" + index2}>
                      {item2 !== 0 && (
                        <ItemPopover item_id={item2 || 0}>
                          <LazyLoad height={45}>
                            <img
                              className={classes.itemImage}
                              src={'/img/items/' + getItem(item2).icon}
                              width="100%"
                              alt="img-item"
                              onClick={() => choseItem(item2)}
                            />
                          </LazyLoad>
                        </ItemPopover>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
