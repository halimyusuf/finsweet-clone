import { Typography } from "@mui/material";
import Image from "next/image";

export default function SingleBlog() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="my-14">
          <div className="text-center">
            <div
              className="py-4"
              style={{ width: "800px", maxWidth: "90%", margin: "0 auto" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "600",
                  color: "var(--darkblue)",
                  display: { xs: "block", md: "none" },
                }}
              >
                A UX Case Study on Creating a Studious Environment for Students
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "var(--darkblue)",
                  display: { xs: "none", md: "block", lg: "none" },
                }}
              >
                A UX Case Study on Creating a Studious Environment for Students
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "var(--darkblue)",
                  display: { xs: "none", lg: "block" },
                }}
              >
                A UX Case Study on Creating a Studious Environment for Students
              </Typography>
            </div>

            <div className="flex justify-center">
              <Typography
                variant="subtitle2"
                sx={{
                  color: "var(--darkblue)",
                  opacity: "0.8",
                  marginRight: "3px",
                }}
              >
                Andrew Jonson
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "var(--darkblue)" }}>
                Posted on 27th January 2021
              </Typography>
            </div>

            <div className="my-6">
              <div className="aspect-[10/3] w-[100%] relative">
                <Image
                  src="https://i.postimg.cc/d3Gfj2Qx/pexels-rodnae-productions-7490892.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-14 px-3">
          <div className="mt-10">
            <div>
              <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: { xs: "block", md: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
            <div className="mt-5">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  Excepteur sint
                </a>
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Ut enim ad minim veniam, quis nostrud.
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: { xs: "block", md: "none" } }}
              >
                Ut enim ad minim veniam, quis nostrud.
              </Typography>
            </div>
            <div className="mt-5">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
            <div className="opacity-70 text-darkblue mt-5">
              <ul style={{ listStyle: "initial" }} className="pl-5">
                <li className="my-2">
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </Typography>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>

            <div className="mt-5 aspect-[10/4] md:aspect-[10/3] w-[100%] relative">
              <Image
                src="https://i.postimg.cc/HkHwKgLp/pexels-lara-jameson-9623794.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>

          <div className="mt-10">
            <div>
              <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Ut enim ad minim veniam, quis nostrud.
              </Typography>
              <Typography
                variant="h5"
                sx={{ display: { xs: "block", md: "none" } }}
              >
                Ut enim ad minim veniam, quis nostrud.
              </Typography>
            </div>
            <div className="mt-5">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
