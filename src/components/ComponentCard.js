import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Collapsable from "./Collapsable";
import EditButton from "./EditButton";
import axios from "axios";

export default function ComponentCard() {

return(
 <>
 <Card>
   <CardContent>
     <Typography>
       Title of box
     </Typography>
     <EditButton>
     </EditButton>
     <Collapsable>
     </Collapsable>
   </CardContent>
 </Card>
 </>
)

}