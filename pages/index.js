import Image from "next/image";
import ArrowRight from "../components/icons/ArrowRight";
import { dotC, gradientBox2, gradientBox1 } from "../data/home";

export default function Home() {
  return (
    <div>
      <div className="bg-tintblue text-white pb-20">
        <div className="container mx-auto grid grid-cols-2 gap-4 pt-14">
          {/* column 1 */}
          <div>
            <div className="h1">
              Building stellar websites for early startups
            </div>
            <div className="body-1 opacity-70 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <div className="flex items-center">
              <div className="btn btn-large mr-8 hover:bg-lightyellow">
                View our work
              </div>
              <div className="body-1 cursor-pointer hover:underline flex items-center">
                <div className="mr-2">View Pricing</div>
                <ArrowRight />
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div>
            <div className="aspect-video w-[100%] mx-auto glass-bg-1 rounded-lg relative py-3">
              <div className="px-6 mx-auto h-[100%]">
                <div className="glass-bg-4 w-full h-[18%] max-h-[33px] rounded-full px-4">
                  <div className="flex h-[100%] items-center">
                    {dotC.map((dot) => (
                      <SDots key={dot} color={dot} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute aspect-video w-[40%] glass-bg-2 top-[25%] left-[-10%] rounded-md">
                <div className="grid grid-cols-2 gap-4 py-6 px-3 h-[100%]">
                  <div className="px-3 py-3 glass-bg-5 h-[100%] w-[100%] rounded-md flex items-end">
                    <Image
                      src="/Vector 9.svg"
                      alt="img"
                      width="100%"
                      height="50%"
                    />
                  </div>
                  <div>
                    <div className="h-[100%]">
                      <>
                        {gradientBox1.map((gr, i) => (
                          <GradientLine key={gr.color + i} gr={gr} />
                        ))}
                      </>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-square h-[100%] rounded-full bg-[#767799]"></div>
                        <div className="aspect-square h-[100%] rounded-md bg-[#767799]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" absolute aspect-video w-[40%] glass-bg-3 bottom-[10%] right-[-10%] rounded-md px-3 py-3">
                <div className="h-[100%]">
                  {gradientBox2.map((gr, i) => (
                    <GradientLine2 key={gr[0] + i} grds={gr} />
                  ))}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SDots({ color }) {
  return (
    <div
      className="aspect-square h-[13px] max-h-[40%] rounded-full mr-2"
      style={{ background: color }}
    ></div>
  );
}

function GradientLine({ gr }) {
  return (
    <div
      className="rounded-full h-[13%] mb-[10%]"
      style={{
        background: gr.color,
        width: gr.line,
      }}
    ></div>
  );
}

function GradientLine2({ grds }) {
  return (
    <div className="flex w-[100%] mb-[5%] h-[7%]">
      {grds.map((gr) => (
        <div
          key={gr.line}
          className="rounded-full"
          style={{
            background: gr.color,
            width: gr.line,
            marginRight: "3px",
          }}
        ></div>
      ))}
    </div>
  );
}
