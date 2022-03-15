import { Card, CardContent, Typography } from "@mui/material";

export default function SectDescCard({ title, label, Icon, bg = "white" }) {
  return (
    <Card
      className={`bg-${bg} px-2 py-4`}
      elevation={0}
      sx={{ marginX: "7px" }}
    >
      <CardContent>
        <div className="mb-2">
          <Icon className="h-[35px] w-[30px] text-blue stroke-0" />
        </div>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            marginBottom: "0.5rem",
            color: "var(--darkblue)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ opacity: "0.6", color: "var(--darkblue)" }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
