import React, { useState, useEffect } from "react";
import axios from "axios";
import PackingListItem from "./PackingListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./PackingList.scss";

export default function PackingList(props) {
  const [list, setList] = useState([]);
  const [packingList, setPackingList] = useState([]);

  useEffect(() => {
    console.log("Props", props.packingList);
  }, [props]);

  const addPackingListItem = () => {
    const newPackingListItem = {
      id: Math.random().toString(),
      text: "text",
    };
    setList([...list, newPackingListItem]);
  };

  return (
    <div id="packing-list">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Packing List
            <AddCircleIcon onClick={() => addPackingListItem()} />
          </Typography>
          <container>
            {list.map((item) => {
              return <PackingListItem />;
            })}
          </container>
          <container>
            {props.packingList.map((item) => {
              console.log(item.packing_item.description);
              return (
                <PackingListItem
                  key={item.packing_item.id}
                  text={item.packing_item.description}
                  setPackingList={setPackingList}
                />
              );
            })}
          </container>
        </CardContent>
      </Card>
    </div>
  );
}
