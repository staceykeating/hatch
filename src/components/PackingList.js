import React, { useState, useEffect } from "react";
import axios from "axios";
import PackingListItem from "./PackingListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./PackingList.scss";

export default function PackingList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`/api/users`).then((res) => {
      console.log(res.data.length);
      setList(res.data);
    });
  }, []);
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
            <AddCircleIcon onClick={addPackingListItem} />
          </Typography>
          <container>
            {list.map((item) => {
              return <PackingListItem key={item.id} text={item.name} />;
            })}
          </container>
        </CardContent>
      </Card>
    </div>
  );
}
