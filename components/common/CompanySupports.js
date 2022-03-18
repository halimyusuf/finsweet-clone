/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import Image from "next/image";

export default function ComapanySupport() {
  return (
    <div>
      <div className="px-3 grid grid-cols-3 lg:grid-cols-6 gap-4 place-content-center">
        <div className="text-center">
          <div>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: "var(--darkblue)",
                display: { xs: "none", md: "block" },
              }}
            >
              100.000+
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "var(--darkblue)",
                display: { xs: "block", md: "none" },
              }}
            >
              100.000+
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle2"
              sx={{ opacity: "0.7", color: "var(--darkblue)", fontWeight: 400 }}
            >
              Finsweet Users
            </Typography>
          </div>
        </div>

        <div className="text-center">
          <Image
            width="130"
            height="60"
            src="/common/Avast_software_logo.svg"
            alt="brand logo"
          />
        </div>

        <div className="text-center">
          <Image
            width="130"
            height="60"
            src="/common/Luxottica_logo.svg"
            alt="brand logo"
          />
        </div>

        <div className="text-center">
          <Image
            width="130"
            height="60"
            src="/common/Oakley_logo.svg"
            alt="brand logo"
          />
        </div>

        <div className="text-center">
          <Image
            width="130"
            height="60"
            src="/common/Persol_logo.svg"
            alt="brand logo"
          />
        </div>

        <div className="text-center">
          <Image
            width="130"
            height="60"
            src="/common/Versace_logo.svg"
            alt="brand logo"
          />
        </div>
      </div>
    </div>
  );
}
