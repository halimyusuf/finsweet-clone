import { Typography } from "@mui/material";
import Image from "next/image";
import OurTeam from "../../components/about-us/OurTeam";
import ComapanySupport from "../../components/common/CompanySupports";
import DescAndImage from "../../components/common/DescAndImage";
import SectDescCard from "../../components/common/SectDescCard";
import { benefitsOfWorking, descImage } from "../../data/about-us";

export default function AboutUs() {
  return (
    <div>
      <div className="mt-10 md:mt-20 my-10 container md:mx-auto">
        <div className="md:grid grid-cols-2 gaps-8">
          <div className="px-3">
            <div className="mb-2">
              <Typography variant="subtitle2" sx={{ color: "var(--darkblue)" }}>
                About Us
              </Typography>
            </div>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", display: { xs: "block", lg: "none" } }}
            >
              Our designs solve problems
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "600", display: { xs: "none", lg: "block" } }}
            >
              Our designs solve problems
            </Typography>
            <div className="mt-4">
              <Typography
                variant="body1"
                sx={{ color: "var(--darkblue)", opacity: "0.7" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Typography>
            </div>
          </div>
          <div className="aspect-[5/3] w-[100%] mt-7 md:mt-0">
            <div className="w-[100%] h-[100%] md:w-[80%] md:h-[80%] relative float-right">
              <Image
                src="https://i.postimg.cc/QC1y3Vq7/pexels-fauxels-3184360.jpg"
                layout="fill"
                objectFit="cover"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-14 pt-10 bg-[#F4F5F5] container mx-auto">
          <div className="">
            <div className="px-5 md:px-10 md:grid grid-cols-2 gap-4">
              <div>
                <div className="mb-1">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "var(--darkblue)" }}
                  >
                    Who We Are
                  </Typography>
                </div>
                <div className="mb-3">
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "var(--darkblue)" }}
                  >
                    Goal Focused
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body1"
                    sx={{ color: "var(--darkblue)", opacity: "0.7" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </div>
              </div>
              <div>
                <div className="mt-7 mb-3">
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "var(--darkblue)" }}
                  >
                    Continuous improvement
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant="body1"
                    sx={{ color: "var(--darkblue)", opacity: "0.7" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="aspect-[5/2.7] md:aspect-[10/3] min-w-[100%]  mt-10">
              <div className="h-[100%] w-[100%] relative">
                <Image
                  // src="https://i.postimg.cc/MTWLSzF3/pexels-rodnae-productions-7413917.jpg"
                  src="https://i.postimg.cc/h4QYRZyB/pexels-moe-magners-7495613.jpg"
                  layout="fill"
                  alt="White board"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="my-14 container mx-auto">
          <div className="text-center">
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, display: { xs: "none", md: "block" } }}
            >
              The process we follow
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, display: { xs: "block", md: "none" } }}
            >
              The process we follow
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#EEF4FA] my-14">
          <div className="container pt-16 pb-4 mx-auto">
            {descImage.map((desc) => (
              <div key={desc.title} className="mb-10">
                <DescAndImage {...desc} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto my-14">
          <div className="text-center mb-10">
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, display: { xs: "none", md: "block" } }}
            >
              The benefits of working with us
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, display: { xs: "block", md: "none" } }}
            >
              The benefits of working <br /> with us
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsOfWorking.map((item) => (
              <SectDescCard
                bg="grey"
                key={item.title}
                title={item.title}
                label={item.label}
                Icon={item.icon}
              />
            ))}
          </div>

          <div className="mt-10">
            <ComapanySupport />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-grey py-14">
          <OurTeam />
        </div>
      </div>
    </div>
  );
}
