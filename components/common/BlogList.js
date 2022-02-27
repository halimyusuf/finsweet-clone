/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";

function BlogList({ image_url: imgUrl, date, title, content, id }) {
  return (
    <div className="mb-4">
      <div className="aspect-video w-[100%] mb-2">
        <img src={imgUrl} className="w-[100%] h-[100%]" alt="Blog image" />
      </div>
      <div className="mb-2">
        <div className="label-2 opacity-70 text-darkblue">
          {new Date(date).toDateString()}
        </div>
      </div>

      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <div className="mb-2">
        <div className="body-1 opacity-70"> {content} </div>
      </div>
      <div className="my-2">
        <div className="flex items-center">
          <Link href={"/"}>
            <div className="label-2 mr-3 cursor-pointer hover:underline text-darkblue">
              Read More
            </div>
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
