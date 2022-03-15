/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import Image from "next/image";
import ArrowRight from "../icons/ArrowRight";

function SendEnquiry() {
  return (
    <div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 text-white">
        <div className="aspect-video md:aspect-auto h-full md:max-h-[100%] relative">
          <div className="absolute z-5 left-0 right-0 top-0 bottom-0">
            <Image
              src="https://i.postimg.cc/9M54KPWv/woman-writing-on-paper.jpg"
              className="h-full w-full"
              layout="fill"
              objectFit="cover"
              alt="enquiry"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-[rgba(28, 30, 83, 0.5)]"
            style={{ background: "rgba(28, 30, 83, 0.5)" }}
          ></div>
          <div className="relative z-20 py-10 px-3 md:px-10">
            <div className="hidden lg:block h2 mb-3">
              Building stellar websites for early startups
            </div>
            <div className="lg:hidden h3 mb-3">
              Building stellar websites for early startups
            </div>

            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </Typography>
          </div>
        </div>
        <div>
          <div className="bg-tintblue py-10 px-4 md:px-14 text-white">
            <div className="h5">Send inquiry</div>

            <Typography variant="subtitle1" className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Typography>
            <div className="w-[450px] max-w-[100%] mx-auto">
              <div className="input-outlined mt-5">
                <input placeholder="Name" />
              </div>
              <div className="input-outlined mt-5">
                <input placeholder="Email" />
              </div>
              <div className="input-outlined mt-5">
                <input placeholder="Figma link" />
              </div>
              <div className="mt-5 w-[100%]">
                <div className="btn btn-block">Send an Inquiry </div>
              </div>
            </div>

            <div className="mt-7 text-center">
              <div className="flex justify-center items-center cursor-pointer hover:underline">
                <Typography variant="subtitle2" className="mr-2">
                  Get in touch with us
                </Typography>
                <div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendEnquiry;
