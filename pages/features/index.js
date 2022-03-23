import { Button, Typography } from "@mui/material";
import { dotC, gradientBox2, gradientBox1 } from "../../data/home";
import Image from "next/image";
import ComapanySupport from "../../components/common/CompanySupports";
import DescAndImage from "../../components/common/DescAndImage";
import { descImage } from "../../data/features";
import Faq from "../../components/common/Faq";
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
          <div>
            <div className="aspect-video w-[80%] mx-auto glass-bg-1 rounded-lg relative py-3">
              <div className="px-6 mx-auto min-h-[100%] h-[100%]">
                <div className="glass-bg-4 w-full h-[18%] max-h-[33px] rounded-full px-4">
                  <div className="flex h-[100%] items-center">
                    {dotC.map((dot) => (
                      <SDots key={dot} color={dot} />
                    ))}
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="absolute aspect-video w-[40%] glass-bg-2 top-[25%] left-[-10%] rounded-md">
                <div className="grid grid-cols-2 gap-4 py-6 px-3 h-[100%]">
                  <div className="px-3 py-3 glass-bg-5 h-[100%] w-[100%] rounded-md flex items-end">
                    <Image
                      src="/Vector 9.svg"
                      alt="img"
                      width="100%"
                      height="50%"
                    />
                  </div>
                  <div>
                    <div className="h-[100%]">
                      <>
                        {gradientBox1.map((gr, i) => (
                          <GradientLine key={gr.color + i} gr={gr} />
                        ))}
                      </>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-square h-[100%] rounded-full bg-[#767799]"></div>
                        <div className="aspect-square h-[100%] rounded-md bg-[#767799]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* gradient lines */}
              <div className="absolute aspect-video w-[38%] glass-bg-3 bottom-[10%] right-[-10%] rounded-md px-3 py-3">
                <div className="min-h-[100%] h-[100%]">
                  {gradientBox2.map((gr, i) => (
                    <GradientLine2 key={gr[0] + i} grds={gr} />
                  ))}
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

function SDots({ color }) {
  return (
    <div
      className="aspect-square h-[13px] max-h-[40%] rounded-full mr-2"
      style={{ background: color }}
    ></div>
  );
}

function GradientLine({ gr }) {
  return (
    <div
      className="rounded-full h-[13%] mb-[10%]"
      style={{
        background: gr.color,
        width: gr.line,
      }}
    ></div>
  );
}

function GradientLine2({ grds }) {
  return (
    <div className="flex w-[100%] mb-[6%] h-[8%]">
      {grds.map((gr) => (
        <div
          key={gr.line}
          className="rounded-full"
          style={{
            background: gr.color,
            width: gr.line,
            marginRight: "3px",
          }}
        ></div>
      ))}
    </div>
  );
}
