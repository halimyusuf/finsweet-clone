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
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        height: "100%",
        backgroundColor: "rgba(244, 246, 252, 0.56)",
        backdropFilter: "blur(8.4px)",
        "-webkit-backdrop-filter": "blur(8.4px)",
      }}
      role="presentation"
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
          <React.Fragment key={page.label}>
            <ListItem button>
              <Link href={page.route} passHref>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    color: "var(--darkblue)",
                    cursor: "pointer",
                    margin: "0 auto ",
                  }}
                >
                  {page.label}
                </Typography>
              </Link>
            </ListItem>
            <Divider />
          </React.Fragment>
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
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          sx={{
            backdropFilter: "blur(8.4px)",
            "-webkit-backdrop-filter": "blur(8.4px)",
          }}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
