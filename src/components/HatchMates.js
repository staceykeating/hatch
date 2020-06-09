import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./HatchMates.scss";

export default function HatchMates() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hatch-Mates
        </Typography>
        <div>
          {" "}
          <img class="user-icon" src="./hatch-icon-2.png" />
          Joey
        </div>
        <div>
          {" "}
          <img class="user-icon" src="./hatch-icon-3.png" />
          Stacey
        </div>
        <div>
          {" "}
          <img class="user-icon" src="./hatch-icon-4.png" />
          Jyoti
        </div>
      </CardContent>
    </Card>
  );
}
