import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { workExamples } from "../../data/work";

export default function ReadCaseStudy() {
  const router = useRouter();
  let work = workExamples.find((a) => a.id == router.query.id);

  return (
    <div>
      <div className="pt-4">
        <div className="container mx-auto text-darkblue my-14 px-3">
          <div>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Web design and development
            </Typography>
          </div>
          <div
            className="my-2"
            style={{
              maxWidth: "90%",
              width: "640px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                display: { xs: "block", md: "none" },
              }}
            >
              Finsweet Design case studies
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                display: { xs: "none", md: "block", lg: "none" },
              }}
            >
              Finsweet Design case studies
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "600",
                display: { xs: "none", lg: "block" },
              }}
            >
              Finsweet Design case studies
            </Typography>
          </div>
          <div
            style={{
              maxWidth: "90%",
              width: "750px",
            }}
          >
            <Typography variant="body2" sx={{ opacity: "0.7" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </Typography>
          </div>

          {work && (
            <div className="mt-10">
              <div style={{ background: work.bg }} className="md:w-[80%]">
                <div className="mx-8 py-8">
                  <div className="aspect-video w-[100%] mx-auto relative">
                    <Image
                      src={work.imgUrl}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <div
              className="grid grid-cols-3 gap-4 py-10"
              style={{ borderBottom: "1px solid rgba(40, 41, 56, 0.3)" }}
            >
              <div className="text-center">
                <div className="mb-1">
                  <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                    Client
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">Facebook.com</Typography>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1">
                  <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                    Service
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">Product Design</Typography>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1">
                  <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                    Deliverable
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">
                    UI Screens, UX Flow & Prototype
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3">
        <div className="container mx-auto text-darkblue">
          <div>
            <div>
              <Typography variant="h4">About the project</Typography>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <div
              style={{
                background:
                  "linear-gradient(131.34deg, #F4EDE1 16.74%, #98B1C6 103.17%)",
              }}
              className="md:w-[80%]"
            >
              <div className="mx-8 py-8">
                <div className="aspect-video w-[100%] mx-auto relative">
                  <Image
                    src="https://i.postimg.cc/52Bjb791/image-15-7.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <Typography variant="h4">How we do it</Typography>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </Typography>
                </li>
                <li className="my-2">
                  <Typography variant="body1">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div>

      </div> */}

      <div>
        <div className="container mx-auto my-14">
          <div className="text-center mb-2">
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, display: { xs: "none", md: "block" } }}
            >
              {`Let's build something great together`}
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: 600, display: { xs: "block", md: "none" } }}
            >
              {`Let's build something`} <br></br>
              great together
            </Typography>
          </div>

          <div className="py-2">
            <div
              className="w-max-90%"
              style={{
                maxWidth: "90%",
                width: "550px",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "var(--darkblue)", opacity: "0.7" }}
              >
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies nec dolor sit amet, scelerisque cursus purus.
              </Typography>
            </div>
          </div>

          <div className="text-center mt-4">
            <Button
              size="large"
              sx={{
                background: "var(--yellow) !important",
                color: "black",
                borderRadius: "999px",
                padding: "0.5rem 2.5rem",
                "&:hover": { background: "var(--lightyellow)" },
              }}
            >
              <Typography variant="body-2 capitalize">Contact Us</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
