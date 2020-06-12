import React, { useState } from "react";
import PackingListItem from "./PackingListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./PackingList.scss";

export default function PackingList(props) {
  const [packingList, setPackingList] = useState([]);
  const [newItem, setNewItem] = useState(false);

  const addPackingListItem = () => {
    setNewItem(true);
  };

  const packingItems =
    packingList.length > 0
      ? packingList.map((item) => {
          return (
            <PackingListItem
              key={item.packing_item.id}
              id={item.packing_item.id}
              text={item.packing_item.description}
              setPackingList={setPackingList}
              trip_id={props.tripID}
              setNewItem={setNewItem}
            />
          );
        })
      : props.packingList.map((item) => {
          return (
            <PackingListItem
              key={item.packing_item.id}
              id={item.packing_item.id}
              text={item.packing_item.description}
              setPackingList={setPackingList}
              trip_id={props.tripID}
              setNewItem={setNewItem}
            />
          );
        });

  const newInput = newItem ? (
    <PackingListItem
      trip_id={props.tripID}
      setPackingList={setPackingList}
      setNewItem={setNewItem}
    />
  ) : null;

  return (
    <div id="packing-list">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Packing List
            <AddCircleIcon onClick={() => addPackingListItem()} />
          </Typography>

          <container>
            {/* Shows all packing list items */}
            {packingItems}
            {/* Shows new input field */}
            {newInput}
          </container>
        </CardContent>
      </Card>
    </div>
  );
}
