import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { ourTeam as ourTeamData } from "../../data/about-us";

export default function OurTeam() {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="text-center mb-10">
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, display: { xs: "none", md: "block" } }}
          >
            Meet our team
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, display: { xs: "block", md: "none" } }}
          >
            Meet our team
          </Typography>
        </div>

        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center">
            {ourTeamData.map((ot) => (
              <div className="mx-auto" key={ot.name}>
                <Card
                  elevation={0}
                  sx={{
                    marginX: "7px",
                  }}
                >
                  <CardContent sx={{ paddingX: "3rem", textAlign: "center" }}>
                    <div className="rounded-full relative w-[150px] h-[150px] overflow-hidden text-center">
                      <Image
                        src={ot.imgUrl}
                        layout="fill"
                        alt=""
                        objectFit="cover"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <Typography
                        variant="h6"
                        sx={{ color: "var(--darkblue)" }}
                      >
                        {ot.name}
                      </Typography>
                    </div>
                    <div className="text-center">
                      <Typography
                        variant="subtitle2"
                        sx={{
                          opacity: "0.7",
                          color: "var(--darkblue)",
                          fontWeight: 400,
                        }}
                      >
                        {ot.position}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
