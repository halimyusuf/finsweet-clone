import { faqs } from "../../data/faq";
import { Close } from "@mui/icons-material";
import { Typography } from "@mui/material";
function Faq() {
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
                    <Typography variant="h6" className="text-blue mr-5">
                      {item.count}
                    </Typography>
                    {/* <div className="h6 text-darkblue mr-5">
                      <div className="mb-2"> {item.title} </div>
                      {i === 0 && (
                        <div className="opacity-80 label-1">{item.label}</div>
                      )}
                    </div> */}
                    <Typography variant="h6" className="text-darkblue mr-5">
                      <div className="mb-2"> {item.title} </div>
                      {i === 0 && (
                        // <div className="opacity-80 label-1">{item.label}</div>
                        <Typography variant="subtitle1" className="opacity-80">
                          {item.label}
                        </Typography>
                      )}
                    </Typography>
                  </div>
                  <div>
                    <Close />
                  </div>
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
