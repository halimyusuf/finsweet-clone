import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Faq from "../../components/common/Faq";
import { pricingPlans } from "../../data/pricing";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState(1);
  function handleHover() {
    console.log("hpvered");
  }
  return (
    <div>
      <div className="mt-10 md:mt-16 container mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", display: { xs: "block", md: "none" } }}
            >
              Our Pricing Plans
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", display: { xs: "none", md: "block" } }}
            >
              Our Pricing Plans
            </Typography>
          </div>
          <div className="w-[420px] mx-auto max-w-[95%]">
            <Typography
              variant="subtitle2"
              sx={{
                opacity: "0.7",
                color: "var(--darkblue)",
                fontWeight: 500,
                wordWrap: "wrap",
              }}
            >
              {`When you're ready to go beyond prototyping in Figma, Webflow is
              ready to help you bring your designs to life — without coding
              them.`}
            </Typography>
          </div>
        </div>

        <div className="my-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((pp, i) => (
              <Plan
                key={pp.price + i}
                planData={pp}
                active={activePlan == i ? true : false}
                onHover={() => setActivePlan(i)}
              />
            ))}
          </div>
        </div>

        <div className="my-20 px-4 md:px-0">
          <Faq />
        </div>
      </div>
    </div>
  );
}

function Plan({ planData, active, onHover }) {
  const colorModes = {
    accent1: active ? "tintblue" : "grey",
    accent2: active ? "white" : "darkblue",
    accent3: active ? "yellow" : "darkblue",
    accent4: active ? "yellow" : "blue",
  };

  return (
    <Card
      sx={{
        backgroundColor: `var(--${colorModes.accent1})`,
        padding: "2rem 1rem 4rem 1rem",
        position: "relative",
        width: "350px",
        maxWidth: "90%",
        margin: "auto",
        height: "100%",
      }}
      elevation={0}
      onMouseEnter={onHover}
    >
      <CardContent>
        <div className="flex items-center">
          <div className="mr-2">
            <Typography
              variant="h5"
              sx={{ color: `var(--${colorModes.accent2})`, fontWeight: 600 }}
            >
              ${planData.price}
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle2"
              sx={{ color: `var(--${colorModes.accent4})`, fontSize: "12px" }}
            >
              {planData.quantity}
            </Typography>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-3">
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, color: `var(--${colorModes.accent2})` }}
            >
              {planData.projectTypeTitle}
            </Typography>
          </div>
          <div className="h-[80px]">
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                opacity: 0.7,
                color: `var(--${colorModes.accent2})`,
              }}
            >
              {planData.projectTypeSubtitle}
            </Typography>
          </div>
        </div>
        <div className="mb-6">
          {planData.options.map((opt) => (
            <div key={opt.price} className="flex mb-4">
              {/* triangle */}
              <div
                className="mr-2"
                style={{
                  borderLeft: `10px solid var(--${colorModes.accent1})`,
                  borderRight: `10px solid var(--${colorModes.accent1})`,
                  borderBottom: `12px solid ${
                    opt.active ? "#97DAAD" : "#FC80AD"
                  }`,
                  borderRadius: "3px",
                  transform: "rotate(90deg)",
                  mixBlendMode: opt.active ? "normal" : "luminosity",
                }}
              ></div>
              <div>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: `var(--${colorModes.accent2})`,
                  }}
                >
                  {opt.text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-0 w-[100%] absolute bottom-8 text-center">
        {/* <div
            className="btn btn-large mr-8 bg-darkblue"
            style={{ background: "var(--darkblue)", color: "white" }}
          >
            Get Started
          </div> */}
        <Button
          size="large"
          sx={{
            background: `var(--${colorModes.accent3}) !important`,
            color: `var(--${colorModes.accent1})`,
            marginRight: "2rem",
            borderRadius: "999px",
            padding: "0.5rem 2.5rem",
            "&:hover": { background: "var(--lightyellow)" },
          }}
        >
          <Typography variant="body-2 capitalize">Get Started</Typography>
        </Button>
      </div>
    </Card>
  );
}
