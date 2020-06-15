import React from "react";
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

export default function ComponentItem(props) {
  const classes = useStyles();

  const onDelete = () => {
    axios({
      method: "DELETE",
      url: `/api/component_items/${props.component_item.id}`,
      data: {
        component_id: props.component_id,
      },
    }).then((res) => {
      props.getData();
    });
  };

  const text = props.component_item.image_url ? (
    <Typography>
      <Avatar variant="rounded" className={classes.rounded}>
        <img
          class="place"
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${props.component_item.image_url}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          alt="attraction"
        />
      </Avatar>
      <div class="text-area">
        {props.component_item.description}

        <b>{props.component_item.address}</b>
      </div>
    </Typography>
  ) : (
    <Typography>{props.component_item.description}</Typography>
  );

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <ListItemText primary={props.component_item.title} />
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete()}>
            <DeleteIcon />
          </IconButton>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{text}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
