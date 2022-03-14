import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../components/icons/ArrowRight";
import {
  dotC,
  gradientBox2,
  gradientBox1,
  howWeWork,
  sect4Cards,
  reviews,
  HomeBlog,
} from "../data/home";
import classes from "../styles/Home.module.css";
import Faq from "../components/common/Faq";
import SendEnquiry from "../components/home/SendEnquiry";
import BlogList from "../components/common/BlogList";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <div className="bg-tintblue text-white pb-20">
        <div className="px-3 container mx-auto md:grid grid-cols-2  gap-4 pt-8 md:pt-14">
          {/* column 1 */}
          <div>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", display: { xs: "block", lg: "none" } }}
            >
              Building stellar websites for early startups
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "600", display: { xs: "none", lg: "block" } }}
            >
              Building stellar websites for early startups
            </Typography>
            <div className="body-1 opacity-70 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <div className="hidden items-center md:flex">
              <div className="btn btn-large mr-8 hover:bg-lightyellow">
                View our work
              </div>
              <div className="body-1 cursor-pointer hover:underline flex items-center">
                <div className="mr-2">View Pricing</div>
                <ArrowRight />
              </div>
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
              <div className="absolute aspect-video w-[40%] glass-bg-3 bottom-[10%] right-[-10%] rounded-md px-3 py-3">
                <div className="min-h-[100%] h-[100%]">
                  {gradientBox2.map((gr, i) => (
                    <GradientLine2 key={gr[0] + i} grds={gr} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="block mx-auto items-center text-center md:hidden mt-6 justify-center">
            <Button
              size="large"
              sx={{
                background: "var(--yellow) !important",
                color: "black",
                marginRight: "2rem",
                borderRadius: "999px",
                padding: "0.5rem 2.5rem",
                "&:hover": { background: "var(--lightyellow)" },
              }}
            >
              <Typography variant="body-2 capitalize">View our work</Typography>
            </Button>
            <div className="body-1 cursor-pointer hover:underline flex items-center justify-center mt-5">
              <div className="mr-2">View Pricing</div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* sect 2 */}
      <div>
        <div className="bg-grey py-14">
          <div className="container px-3 mx-auto">
            <div className="block md:flex">
              <div className="mr-16">
                <div className="h3 md:h2 text-darkblue">How we work</div>
                <div className="body-1 text-darkblue opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </div>
                <div className="text-blue my-2 flex items-center cursor-pointer hover:underline">
                  <Typography
                    variant="body-1"
                    sx={{ color: "var(--blue)", marginRight: "0.5rem" }}
                  >
                    Get in touch with us
                  </Typography>
                  <div className="body-1">
                    <ArrowRight />
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4">
                  {howWeWork.map((item) => (
                    <HowWeWorkCont
                      key={item.title}
                      number={item.n}
                      desc={item.title}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sect 3 */}

      <div>
        <div className="px-3 container mx-auto py-10 max-w-[100%]">
          <div className="flex justify-between items-center">
            <div className="h3 md:h2">View our projects</div>
            <div className="hidden md:flex items-center">
              <Link href={"/"}>
                <div className="label-2 mr-3 cursor-pointer hover:underline">
                  View More
                </div>
              </Link>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-rows-2 grid-cols-3 gap-4">
              <div className="col-span-2 row-span-2 aspect-video max-w-[100%]">
                <Image
                  src={"/home/Card.svg"}
                  width="843"
                  height="600"
                  alt="card"
                />
              </div>
              <div className="col-span-1 row-span-1 aspect-video max-w-[100%]">
                <Image
                  src={"/home/Card-3.svg"}
                  width="843"
                  height="600"
                  alt="card"
                />
              </div>
              <div className="col-span-1 row-span-1 aspect-video max-w-[100%]">
                <Image
                  src={"/home/Card-2.svg"}
                  width="843"
                  height="600"
                  alt="card"
                />
              </div>
            </div>
          </div>
          <div className="flex md:hidden items-center">
            <Link href={"/"}>
              <div className="label-2 mr-3 cursor-pointer hover:underline">
                View More
              </div>
            </Link>
            <div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* sect 4 */}
      <div className="bg-grey">
        <div className="px-3 container py-10 mx-auto">
          <div>
            <div className="label-2 text-center mb-2">Features</div>
            <div className="hidden md:block h3 mx-auto text-center">
              <div> Design that solves </div>
              <div>problems, one product at</div>
              <div>a time </div>
            </div>
            <div className="md:hidden block h6 mx-auto text-center font-[700]">
              <div> Design that solves </div>
              <div>problems, one product at</div>
              <div>a time </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sect4Cards.map((item) => (
                <SectCard
                  key={item.title}
                  title={item.title}
                  label={item.label}
                  Icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* sect 5 */}
      <div className="bg-grey bg-opacity-50">
        <div className="px-3 container mx-auto py-14">
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            <div className="md:col-span-1">
              <div className="h3 mb-0">What our clients say about us</div>
              {/* <div className="label-1 text-blue cursor-pointer hover:opacity-70">
                Contact us for more info
              </div> */}
              <div className="body-1 opacity-70 text-darkblue">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </div>
            </div>
            <div className="md:col-span-2">
              {reviews.map((item) => (
                <Reviews key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* sect 6 */}
      <div>
        <div className="py-14 px-3">
          <Faq />
        </div>
      </div>

      <div>
        <div className="container mx-auto">
          <SendEnquiry />
        </div>
      </div>

      <div>
        <div className="px-3 container mx-auto pt-14">
          <div className="h5">Our Blog</div>
          <div className="mt-10">
            <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2">
              {HomeBlog.map((item) => (
                <BlogList key={item.id} {...item} />
              ))}
            </div>
          </div>
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
    <div className="flex w-[100%] mb-[5%] h-[7%]">
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

function HowWeWorkCont({ number, desc, label }) {
  return (
    <div className="mr-3 pb-5 mt-5 md:ml-3 md:mt-0 max-w-[100%]">
      <div className={`${classes["item-count-cont"]} mb-3`}>
        <div className={`${classes["item-count-cont-inner"]}`}></div>
        <div className={`${classes["item-count-cont-inner1"]}`}></div>
        <div className="flex h-full items-center justify-center">
          <div className="label-1 text-white">{number}</div>
        </div>
      </div>
      <div className="h6 md:h5 text-darkblue">{desc}</div>
      <div className="body-1 text-darkblue opacity-70">{label}</div>
    </div>
  );
}

function SectCard({ title, label, Icon }) {
  return (
    <Card className="bg-white">
      <CardContent>
        <div className="mb-4">
          <Icon className="h-[35px] w-[30px] text-blue" />
        </div>
        <Typography variant="h6" className="mb-2 text-darkblue">
          {title}
        </Typography>
        <Typography variant="subtitle1" className="text-darkblue opacity-70">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Reviews({ text, name, src, work }) {
  return (
    <div>
      {/* <div className="h6 text-darkblue mb-10"></div> */}
      <Typography
        variant="h6"
        sx={{ marginBottom: "1.5rem", color: "var(--darkblue)" }}
      >
        {text}
      </Typography>
      <div className="flex">
        <div className="mr-5">
          <Image
            src={src}
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="label-1">{name}</div>
          <div className="cap-2">{work}</div>
        </div>
      </div>
    </div>
  );
}
