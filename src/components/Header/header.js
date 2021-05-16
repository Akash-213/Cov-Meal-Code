import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import BusinessIcon from "@material-ui/icons/Business";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import LinkIcon from "@material-ui/icons/Link";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
// core
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-ui/core";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
} from "@material-ui/core";
// icons

import MenuIcon from "@material-ui/icons/Menu";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
  },
  list: {
    width: 250,
  },
}));

function Header(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { history } = props;

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          style={{
            cursor: "pointer",
            backgroundColor: "rgb(63, 81,181)",
            color: "white"
          }}
          variant="h6"
          className={classes.title}
          onClick={() => history.replace("/")}
        >
          <ListItemIcon>
            <HomeIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="CovMeal" />
        </ListItem>
      </List>

      <List>
        <ListItem
          style={{
            cursor: "pointer",
          }}
          onClick={() => history.push("/partnerList")}>
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Tiffin Services" />
        </ListItem>

        <ListItem
          style={{
            cursor: "pointer",
          }}
          onClick={() => history.push("/utils")}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Helpful Organizations" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          style={{
            cursor: "pointer",
          }}

          onClick={() => history.push("/partnerForm")}>
          <ListItemIcon>
            <AccessibilityNewIcon />
          </ListItemIcon>
          <ListItemText primary="Register as Food Provider" />
        </ListItem>

        <ListItem
          style={{
            cursor: "pointer",
          }}
          onClick={() => history.push("/links")}>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Important Resources" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          style={{
            cursor: "pointer",
          }}
          onClick={() => history.push("/developer")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Developers" />
        </ListItem>

        <ListItem
          style={{
            cursor: "pointer",
          }}
          onClick={() => history.push("/feedback")}>
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
      </List>
    </div>
  );

  var copied = false;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>

          <Typography variant="h6" className={classes.title}>
            CovMeal
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              copied = true;
              navigator.clipboard.writeText("https://covmeal.netlify.app");
            }}
          >
            Copy Website link
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
