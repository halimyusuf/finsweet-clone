/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ArrowRight from "../icons/ArrowRight";

function SendEnquiry() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="h-full h-max-[100%] relative">
          <div className="absolute z-5 top-0 bottom-0">
            <img
              src="/enquiry/woman-writing-on-paper.jpg"
              className="h-full w-full"
              alt="enquiry"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-[rgba(28, 30, 83, 0.5)]"
            style={{ background: "rgba(28, 30, 83, 0.5)" }}
          ></div>
          <div className="relative z-20 py-10 px-20">
            <div className="h1 text-white mb-3">
              Building stellar websites for early startups
            </div>
            <div className="body-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </div>
          </div>
        </div>
        <div>
          <div className="bg-tintblue py-10 md:px-14 text-white">
            <div className="h5">Send inquiry</div>
            <div className="label-2 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
            <div className="w-[450px] w-max-[100%]">
              <div className="input-outlined mt-5">
                <input placeholder="Name" />
              </div>
              <div className="input-outlined mt-5">
                <input placeholder="Email" />
              </div>
              <div className="input-outlined mt-5">
                <input placeholder="Figma link" />
              </div>
              <div className="mt-5">
                <div className="btn btn-block">Send an Inquiry </div>
              </div>
            </div>

            <div className="mt-7 text-center">
              <div className="flex justify-center items-center cursor-pointer hover:underline">
                <div className="mr-2 label-1">Get in touch with us</div>
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