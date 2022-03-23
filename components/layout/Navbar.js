import React, { useState } from "react";
import Image from "next/image";
import { navItems } from "../../data/nav";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Sidenav from "./sidenav";

const pages = ["Products", "Pricing", "Blog"];

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const trigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
    disableHysteresis: true,
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setOpen(true);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position={trigger ? "fixed" : "static"}
        sx={{
          backgroundColor: trigger ? "rgba(28, 30, 83, 0.8)" : "#1C1E53",
          backdropFilter: "blur(9.9px)",
          "-webkit-backdrop-filter": "blur(9.9px)",
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href={"/"} passHref>
              <Box sx={{ flexGrow: 1 }}>
                <Image src="/nav/logo.svg" alt="logo" height="28" width="122" />
              </Box>
            </Link>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
            >
              {navItems.map((page) => (
                <Link href={page.route} key={page.label} passHref>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      marginRight: "1rem",
                      color: "#bbbbcb",
                      cursor: "pointer",
                      "&:hover": { color: "white" },
                    }}
                  >
                    {page.label}
                  </Typography>
                </Link>
              ))}
              <div className="ml-2">
                <Link href="/contact-us" passHref>
                  <Button
                    size="large"
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderRadius: "999px",
                      border: "1px solid rgba(187, 187, 203, 0.4)",
                      textTransform: "capitalize",
                      // border: "1px solid rgb(203 213 225)",
                      "&:hover": { border: "1px solid rgb(203 213 225)" },
                    }}
                  >
                    <Typography variant="body2">Contact Us</Typography>
                  </Button>
                </Link>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidenav open={isOpen} setOpen={setOpen} />
    </>
    // <div>
    //   <div className="bg-tintblue h-[82px]">
    //     <div className="h-full flex justify-between items-center container mx-auto">
    //       <div>
    //         <Image src="/nav/logo.svg" alt="logo" height="28" width="122" />
    //       </div>
    //       <div className="hidden md:flex">
    //         <div className="flex items-center mr-4">
    //           <>
    //             {navItems.map((nav) => (
    //               <div
    //                 className="pr-5 text-[#bbbbcb] cursor-pointer hover:text-white"
    //                 // className="font-medium px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900"
    //                 key={nav.label}
    //               >
    //                 <div>{nav.label}</div>
    //               </div>
    //             ))}
    //           </>
    //         </div>
    //         <div className="btn-outlined">Contact us</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
