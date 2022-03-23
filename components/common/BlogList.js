/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";

function BlogList({ image_url: imgUrl, date, title, content, id }) {
  return (
    <div className="mb-4">
      <div className="aspect-video w-[100%] mb-1 relative">
        <Image layout="fill" src={imgUrl} objectFit="cover" alt="Blog image" />
      </div>
      <div className="mb-2">
        <Typography variant="caption" className="opacity-70 text-darkblue">
          {new Date(date).toDateString()}
        </Typography>
      </div>

      <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
        {title}
      </Typography>
      <div className="mb-2">
        <Typography variant="body2" sx={{ opacity: "0.7" }}>
          {content}
        </Typography>
      </div>
      <div className="my-2">
        <div className="flex items-center">
          <Link href={`/blog/${id}`} passHref>
            <Typography
              variant="subtitle2"
              className="mr-3 cursor-pointer hover:underline text-darkblue"
            >
              Read More
            </Typography>
          </Link>
          <div>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
