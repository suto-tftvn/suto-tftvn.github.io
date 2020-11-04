import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Menu from './components/Menu';
// import { renderRoutes } from 'react-router-config';
// import { useRouter } from "../../until/hook/useRouter"
import { getItem } from "../../until/common";
import LazyLoad from "react-lazyload";
import ItemPopover from "../../components/popover/ItemPopover";

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

const mapItem = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [9, 10, 19, 27, 34, 40, 44, 17, 18, 19],
  [8, 11, 20, 28, 35, 41, 44, 27, 28, 0],
  [7, 12, 21, 29, 36, 42, 44, 37, 0, 0],
  [6, 13, 22, 30, 37, 43, 44, 0, 0, 0],
  [5, 14, 23, 31, 38, 44, 0, 0, 0, 0],
  [4, 15, 24, 32, 39, 0, 0, 0, 0, 0],
  [3, 16, 25, 33, 0, 0, 0, 0, 0, 0],
  [2, 17, 26, 0, 0, 0, 0, 0, 0, 0],
  [1, 18, 0, 0, 0, 0, 0, 0, 0, 0],
];

export default function Champion(props) {
  const classes = useStyles();
  const [itemChosen, setItemChosen] = useState(null);

  const choseItem = (item) => {
    console.log(getItem(item));
    setItemChosen(getItem(item));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
        <h1>Fillter</h1>
          {/* {itemChosen && (
            <Grid container spacing={0}>
              <Grid item sm={2}>
                <LazyLoad height={45}>
                  <img
                    className={classes.itemImage}
                    src={itemChosen.img}
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
                {itemChosen.description}
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
                              src={getItem(item).img}
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
                              src={getItem(item).img}
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
          )} */}
        </Grid>
        <Grid item xs={12} sm={9} style={{ borderLeft: "1px solid #90caf9" }}>
            <h1>unknow</h1>
          {/* {mapItem.map((item, index) => {
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
                              src={getItem(item2).img}
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
          })} */}
        </Grid>
      </Grid>
    </div>
  );
}
