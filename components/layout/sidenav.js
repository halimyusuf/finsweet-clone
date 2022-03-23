import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { navItems } from "../../data/nav";
import Link from "next/link";
import { Drawer, IconButton, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  paper: {
    background: "transparent",
  },
});

export default function Sidenav({ open, setOpen }) {
  // const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const anchor = "right";

  const list = (anchor) => (
    <Paper
      sx={{
        width: "300px",

        minWidth: "100%",
        height: "100%",
        backgroundColor: "rgba(244, 246, 252, 0.75)",
        // backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(6px)",
        "-webkit-backdrop-filter": "blur(6px)",
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="">
        <div className="text-right">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(false)}
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <List>
        {navItems.map((page) => (
          <div className="" key={page.label}>
            <Link href={page.route} passHref>
              <ListItem button>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "var(--darkblue)",
                    cursor: "pointer",
                    margin: "1rem auto ",
                  }}
                >
                  {page.label}
                </Typography>
              </ListItem>
            </Link>
            <Divider />
          </div>
        ))}

        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </Paper>
  );

  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          sx={{
            backdropFilter: "blur(3px)",
            "-webkit-backdrop-filter": "blur(3px)",
          }}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
