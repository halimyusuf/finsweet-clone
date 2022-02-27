import React from "react";
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

const pages = ["Products", "Pricing", "Blog"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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
    <AppBar position="static" sx={{ backgroundColor: "#1C1E53" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Image src="/nav/logo.svg" alt="logo" height="28" width="122" />
          </Box>

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
              <Link href="/" key={page.label} passHref>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="mr-4 text-[#bbbbcb] cursor-pointer hover:text-white"
                >
                  {page.label}
                </Typography>
              </Link>
            ))}
            <div className="ml-2">
              <Button
                size="large"
                className="text-white capitalize border border-slate-300 hover:border-slate-400"
                variant="outlined"
                sx={{
                  borderRadius: "999px",
                  border: "1px solid rgba(187, 187, 203, 0.4)",
                }}
              >
                <Typography variant="body2">Contact Us</Typography>
              </Button>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
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
