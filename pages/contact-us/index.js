import { Button, styled, TextField, Typography } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgba(0,0,0,0.1)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(0,0,0,0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(0,0,0,0.1)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0,0,0,0.1)",
    },
  },
});

export default function ContactUs() {
  return (
    <div>
      <div className="container mx-auto mt-10 mb-14">
        <div className="text-center">
          <Typography
            variant="h4"
            sx={{ fontWeigth: 600, display: { xs: "block", md: "block" } }}
          >
            Contact Us
          </Typography>
          {/* <Typography
            variant="h5"
            sx={{ fontWeigth: 600, display: { xs: "block", md: "none" } }}
          >
            Contact Us
          </Typography> */}
        </div>

        <div
          style={{
            width: "560px",
            maxWidth: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
          className="pt-2"
        >
          <Typography variant="body1" sx={{ opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Typography>
        </div>

        <div className="mt-10 mx-auto">
          <div className="bg-grey w-[1000px] max-w-[90%] mx-auto rounded px-5 md:px-10 py-10">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="mb-2">
                    <Typography variant="body1">Name</Typography>
                  </div>
                  <CssTextField fullWidth placeholder="Enter your name" />
                </div>

                <div>
                  <div className="mb-2">
                    <Typography variant="body1">Email</Typography>
                  </div>
                  <CssTextField fullWidth placeholder="Enter your Emial" />
                </div>

                <div>
                  <div className="mb-2">
                    <Typography variant="body1">Subject</Typography>
                  </div>
                  <CssTextField fullWidth placeholder="Provide context" />
                </div>

                <div>
                  <div className="mb-2">
                    <Typography variant="body1">Subject</Typography>
                  </div>
                  <CssTextField fullWidth placeholder="Select Subject" />
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <div className="mb-2">
                    <Typography variant="body1">Message</Typography>
                  </div>
                  <CssTextField
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Write your  question here"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button
                  sx={{
                    background: "var(--darkblue) !important",
                    color: "var(--grey)",
                    borderRadius: "999px",
                    padding: "0.5rem 2.5rem",
                    "&:hover": { background: "var(--darkblue)" },
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <Typography variant="body-2 capitalize">
                    Contact Us
                  </Typography>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
