import { Typography } from "@mui/material";
import Image from "next/image";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="text-white bg-tintblue w-full">
      <div className="px-3 container pt-20 pb-5 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="">
            <div>
              <Image src="/nav/logo.svg" alt="logo" height="28" width="122" />
            </div>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              We are always open to discuss your project
              <br /> and improve your online presence.
            </Typography>
          </div>
          <div>
            {/* <div className="hidden md:block h2">Lets Talk!</div>
            <div className="block md:hidden">Lets Talk!</div> */}
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Lets Talk!
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </Typography>

            <div className="mt-4 flex">
              <div className="mr-3">
                <Facebook sx={{ color: "lightgrey" }} />
              </div>
              <div className="mr-3">
                <Instagram sx={{ color: "lightgrey" }} />
              </div>
              <div className="mr-3">
                <Twitter sx={{ color: "lightgrey" }} />
              </div>
              <div className="mr-3">
                <LinkedIn sx={{ color: "lightgrey" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-center">
        <Typography variant="body2">© Copyright 2022, Finsweet.com</Typography>
      </div>
    </div>
  );
}

export default Footer;
