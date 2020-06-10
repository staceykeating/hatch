import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

//eventually want to be able to map over this file and generate a new collapsabile everytime a new place is searched or a text bx is created and populate the title and description with either text or text and images and user who created it.

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



export default function Collapsable() {
  const classes = useStyles();
  const [state, setState] = useState([])

  const handleRemove = (i) => {
    setState(state => ({
      data: state.data.filter((content, title) => title !== i),
    }))

  };

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          deleteIcon={<deleteIconSmall />	}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemAvatar>
          <Avatar alt="user" class="user-icon" src="./hatch-icon-2.png"/>
          {/* insert user icon for who created this */}
          </ListItemAvatar>
          <Typography className={classes.heading}> User Created Title
          {/* insert user title */}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Discription from user created text box
            {/* insert user description */}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <ListItemAvatar>
          <Avatar alt="user" class="user-icon" src="./hatch-icon-2.png"/>
          {/* insert user icon for who created this */}
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon
          onClick={() => handleRemove()}
          />
        </IconButton>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Place Description
            Place Image
            <img class="user-icon" src="./hatch-icon-4.png" />
            Place address
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}