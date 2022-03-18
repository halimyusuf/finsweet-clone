import { Typography } from "@mui/material";
import Image from "next/image";

export default function DescAndImage({
  imgRight = true,
  image_url,
  title,
  subtitle,
  comment,
}) {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 gaps-8">
        {!imgRight && (
          <div className="hidden md:block aspect-[5/3] w-[100%] mt-7 md:mt-0">
            <div className="w-[100%] h-[100%] md:w-[80%] md:h-[80%] relative">
              <Image
                src={image_url}
                layout="fill"
                objectFit="cover"
                alt="About Us"
              />
            </div>
          </div>
        )}
        <div className="px-3">
          <div className="mb-2">
            <Typography variant="subtitle2" sx={{ color: "var(--darkblue)" }}>
              {comment}
            </Typography>
          </div>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              display: { xs: "block", lg: "none" },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "600",
              display: { xs: "none", lg: "block" },
            }}
          >
            {title}
          </Typography>
          <div className="mt-4">
            <Typography
              variant="body1"
              sx={{ color: "var(--darkblue)", opacity: "0.7" }}
            >
              {subtitle}
            </Typography>
          </div>
        </div>
        <div
          className={`block ${
            imgRight ? "" : "md:hidden"
          } aspect-[5/3] w-[100%] mt-7 md:mt-0`}
        >
          <div className="w-[100%] h-[100%] md:w-[80%] md:h-[80%] relative float-right">
            <Image
              src={image_url}
              layout="fill"
              objectFit="cover"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
