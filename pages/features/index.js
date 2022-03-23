import { Button, Typography } from "@mui/material";
import { dotC, gradientBox2, gradientBox1 } from "../../data/home";
import Image from "next/image";
import ComapanySupport from "../../components/common/CompanySupports";
import DescAndImage from "../../components/common/DescAndImage";
import { descImage } from "../../data/features";
import Faq from "../../components/common/Faq";
import GradientLine from "../../components/common/GradientLine";
import GradientLine2 from "../../components/common/GradientLine2";
import SDots from "../../components/common/SDots";

import Link from "next/link";

export default function Features() {
  return (
    <div>
      <div className="bg-tintblue text-white pb-20">
        <div className="px-3 container mx-auto md:grid grid-cols-2 gap-4 pt-8 md:pt-14">
          {/* column 1 */}
          <div>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", display: { xs: "block", md: "none" } }}
            >
              All the features <br /> you need
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                display: { xs: "none", md: "block", lg: "none" },
              }}
            >
              All the features <br /> you need
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "600", display: { xs: "none", lg: "block" } }}
            >
              All the features <br /> you need
            </Typography>
            <div className="body-1 opacity-70 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="hidden items-center md:flex">
              <Link href="/pricing" passHref>
                <div className="btn btn-large mr-8 hover:bg-lightyellow">
                  View Pricing
                </div>
              </Link>
            </div>
          </div>
          {/* column 2 */}
          <div className="mb-10 md:mb-0">
            <div className="aspect-video w-[80%] mx-auto glass-bg-1 rounded-lg relative py-3">
              <div className=" w-[86%] mx-auto mx-auto min-h-[100%] h-[100%]">
                <div className="glass-bg-4 w-full h-[10%] max-h-[33px] rounded-full px-3">
                  <div className="flex h-[100%] items-center">
                    {dotC.map((dot) => (
                      <SDots key={dot} color={dot} />
                    ))}
                  </div>
                </div>
              </div>

              {/* image */}

              {/* gradient lines right */}
              <div className="absolute aspect-[7/3] w-[42%] glass-bg-6 top-[20%] left-[7%] rounded-md px-1 py-1">
                <div className="h-[100%] grid grid-cols-3 gap-1">
                  <div className="h-[100%] w-[100%] glass-bg-6 rounded"></div>
                  <div className="h-[100%] w-[100%] rounded glass-bg-6 col-span-2"></div>
                  <div className="h-[100%] w-[100%] rounded flex flex-col  justify-between">
                    <div
                      className="h-[15%] w-[100%] rounded"
                      style={{ background: "rgba(48, 50, 98, 0.5)" }}
                    ></div>
                    <div
                      className="h-[15%] w-[100%] rounded"
                      style={{ background: "rgba(48, 50, 98, 0.5)" }}
                    ></div>
                    <div
                      className="h-[15%] w-[100%] rounded"
                      style={{ background: "rgba(48, 50, 98, 0.5)" }}
                    ></div>
                    <div
                      className="h-[15%] w-[100%] rounded"
                      style={{ background: "rgba(48, 50, 98, 0.5)" }}
                    ></div>
                  </div>
                  <div className="h-[100%] w-[100%] glass-bg-6 rounded"></div>
                  <div className="h-[100%] w-[100%] glass-bg-6 rounded"></div>
                </div>
              </div>

              {/* gradient lines bottom */}
              <div className="absolute w-[86%] h-[30%] left-[7%] bottom-[10%] glass-bg-8 rounded-md px-3 py-3">
                <div className="min-h-[100%] h-[100%]"></div>
              </div>

              {/* gradient lines right */}
              <div
                className="absolute aspect-[7/3] w-[38%] top-[20%] right-[7%] rounded-md px-2 py-2"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="h-[100%] flex flex-col justify-between">
                  {gradientBox2.map((gr, i) => (
                    <GradientLine2 key={gr[0] + i} grds={gr} />
                  ))}
                </div>
              </div>

              {/* gradient lines left */}
              <div
                className="absolute aspect-[7/3] w-[38%] bottom-[-10%] left-[-15%] rounded-md px-2 py-2"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="h-[100%] flex flex-col justify-between">
                  {gradientBox2.map((gr, i) => (
                    <GradientLine2 key={gr[0] + i} grds={gr} />
                  ))}
                </div>
              </div>

              {/* Setting image */}
              <div className="absolute aspect-[5/4] w-[25%] bottom-[-15%] right-[-10%] rounded-md">
                <div className="min-h-[100%] h-[100%] w-[100%] relative">
                  <Image
                    alt=""
                    layout="fill"
                    src="/Fill 1.svg"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center text-center md:hidden mt-6 justify-center">
            <Link href="/pricing" passHref>
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
                <Typography variant="body-2 capitalize">
                  View Pricing
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* sect 2 */}
      <div>
        <div className="container mx-auto my-14">
          <ComapanySupport />
        </div>
      </div>

      {/* sect 3 */}
      <div>
        <div className="my-14">
          {descImage.map((desc) => (
            <div
              key={desc.title}
              style={{ backgroundColor: desc.bg }}
              className="pt-14 pb-14 lg:pb-0"
            >
              <div className="container mx-auto">
                <DescAndImage {...desc} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="my-14 px-4">
          <Faq />
        </div>
      </div>
    </div>
  );
}
