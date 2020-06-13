import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import iconLogo from "./images/hatch-icon.png";

//eventually want to be able to map over this file and generate a new collapsabile everytime a new place is searched or a text bx is created and populate the title and description with either text or text and images and user who created it.

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  rounded: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: "#fff",
    backgroundColor: "#2b2b2b",
  },
}));

export default function Collapsable(props) {
  const classes = useStyles();
  const [resData, setResData] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [address, setAddress] = useState("");

  //props.compement_id - from parent scope later

  useEffect(() => {
    axios.get(`/api/component_items/1`).then((res) => {
      setResData(res.data);
      setDescription(res.data.description);
      setAddress(res.data.address);
      setImage(res.data.image_url);
      setTitle(res.data.title);
    });
  }, []);

  const onDelete = (id) => {
    axios({
      method: "DELETE",
      url: `/api/component_items/2`,
      data: {
        trip_id: props.tripID,
      },
    }).then((res) => {
      setResData(res.data);
      setDescription(res.data.description);
      setAddress(res.data.address);
      setImage(res.data.image_url);
      setTitle(res.data.title);
    });
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <ListItemText primary={title} />
          {/* <IconButton edge="end" aria-label="delete">
          <DeleteIcon
          onClick={(component_item) => onDelete(component_item.id)}/>
        </IconButton> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Description: {description}
            <br />
            Address: {address}
            <br />
            <Avatar variant="rounded" className={classes.rounded}>
              <img class="place" src={iconLogo} alt="Add a Photo" />
            </Avatar>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
