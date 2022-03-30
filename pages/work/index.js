import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../../components/icons/ArrowRight";
import { workExamples } from "../../data/work";

export default function Work() {
  return (
    <div>
      <div className="bg-grey">
        <div className="container mx-auto py-14">
          <div className="text-center">
            <div>
              <Typography variant="subtitle2" sx={{ color: "var(--darkblue)" }}>
                What we created
              </Typography>
            </div>
            <div className="my-2">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "var(--darkblue)",
                  display: { xs: "block", md: "none" },
                }}
              >
                Our Work Portfolio
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "600",
                  color: "var(--darkblue)",
                  display: { xs: "none", md: "block", lg: "none" },
                }}
              >
                Our Work Portfolio
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "600",
                  color: "var(--darkblue)",
                  display: { xs: "none", lg: "block" },
                }}
              >
                Our Work Portfolio
              </Typography>
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
                We help teams create great digital products by providing them
                with tools and technology to make the design-to-code process
                universally accessible.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto mt-8 mb-14 md:mt-14 text-darkblue">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExamples.map((work) => (
              <div key={work.title} className="my-2 px-2">
                <div>
                  <div style={{ background: work.bg }}>
                    <div className="mx-4 py-4">
                      <div className="aspect-video w-[100%] mx-auto relative">
                        <Image
                          src={work.imgUrl}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {work.title}
                  </Typography>
                </div>
                <div className="my-1">
                  <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                    {work.subtitle}
                  </Typography>
                </div>
                <div className="flex items-center mt-2">
                  <Link href={`/work/${work.id}`} passHref>
                    <Typography
                      variant="subtitle2"
                      className="mr-3 cursor-pointer hover:underline text-darkblue"
                    >
                      Read case study
                    </Typography>
                  </Link>
                  <div>
                    <ArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto my-14">
          <div className="text-center mb-2">
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, display: { xs: "none", md: "block" } }}
            >
              {`Let's build something great together`}
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: 600, display: { xs: "block", md: "none" } }}
            >
              {`Let's build something`} <br></br>
              great together
            </Typography>
          </div>

          <div className="py-2">
            <div
              className="w-max-90%"
              style={{
                maxWidth: "90%",
                width: "550px",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "var(--darkblue)", opacity: "0.7" }}
              >
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies nec dolor sit amet, scelerisque cursus purus.
              </Typography>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/contact-us" passHref>
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
                <Typography variant="body-2 capitalize">Contact Us</Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
