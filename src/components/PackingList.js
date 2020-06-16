import React, { useState } from "react";
import PackingListItem from "./PackingListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./PackingList.scss";

export default function PackingList(props) {
  const [newItem, setNewItem] = useState(false);

  const addPackingListItem = () => {
    setNewItem(true);
  };

  const newInput = newItem ? (
    <PackingListItem
      trip_id={props.tripID}
      setNewItem={setNewItem}
      getData={props.getData}
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

          <div>
            {/* Shows all packing list items */}
            {props.packingList.map((item) => {
              return (
                <PackingListItem
                  key={item.packing_item.id}
                  id={item.packing_item.id}
                  text={item.packing_item.description}
                  checked={item.packing_item.checked}
                  trip_id={props.tripID}
                  setNewItem={setNewItem}
                  getData={props.getData}
                  creator_name={item.packing_item.creator_name}
                />
              );
            })}
            {/* Shows new input field */}
            {newInput}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
