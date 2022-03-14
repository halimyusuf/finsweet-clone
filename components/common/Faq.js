import { faqs } from "../../data/faq";
import { Close, Add } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
function Faq() {
  const [currentFaq, setCurrentFaq] = useState(null);
  return (
    <div>
      <div className="container mx-auto">
        <div className="md:flex justify-between">
          <div className="w-[330px] max-w-[100%] mr-10">
            <div className="h3">Frequently asked questions</div>
            <div className="label-1 text-blue cursor-pointer hover:opacity-70">
              Contact us for more info
            </div>
          </div>
          <div className="w-[850px] max-w-[100%]">
            {faqs.map((item, i) => (
              <div key={item.title}>
                <div className="flex justify-between py-5">
                  <div className="flex">
                    <Typography
                      variant="h6"
                      sx={{ color: "var(--blue)", marginRight: "1.25rem" }}
                    >
                      {item.count}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "var(--darkblue)", marginRight: "1.25rem" }}
                    >
                      <div className="mb-2"> {item.title} </div>
                      {currentFaq === i && (
                        <Typography variant="subtitle1" sx={{ opacity: "0.8" }}>
                          {item.label}
                        </Typography>
                      )}
                    </Typography>
                  </div>
                  {currentFaq === i ? (
                    <div>
                      <IconButton
                        onClick={() => setCurrentFaq(null)}
                        size="small"
                      >
                        <Close />
                      </IconButton>
                    </div>
                  ) : (
                    <div>
                      <IconButton onClick={() => setCurrentFaq(i)} size="small">
                        <Add />
                      </IconButton>
                    </div>
                  )}
                </div>

                {i !== faqs.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
