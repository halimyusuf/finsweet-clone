import { Typography } from "@mui/material";
import Image from "next/image";
import BlogList from "../../components/common/BlogList";
import { BlogData } from "../../data/blog";

export default function Blog() {
  return (
    <div className="container mx-auto ">
      <div className="mt-10 md:mt-14 mb-14">
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

          <div
            className="w-max-90%"
            style={{
              maxWidth: "90%",
              width: "700px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "var(--darkblue)", opacity: "0.7" }}
            >
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside.
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <div className="my-14">
          <div className="text-center">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Our Blog
            </Typography>
          </div>

          <div className="mt-10">
            <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2 px-3">
              {BlogData.map((item) => (
                <BlogList key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
