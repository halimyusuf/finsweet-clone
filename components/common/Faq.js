import { faqs } from "../../data/faq";
function Faq() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[330px] w-max-[100%] mr-10">
            <div className="h3">Frequently asked questions</div>
            <div className="label-1 text-blue cursor-pointer hover:opacity-70">
              Contact us for more info
            </div>
          </div>
          <div className="w-[850px] w-max-[100%]">
            {faqs.map((item, i) => (
              <div key={item.title}>
                <div className="flex justify-between py-5">
                  <div className="flex">
                    <div className="h6 text-blue mr-5"> {item.count} </div>
                    <div className="h6 text-darkblue mr-5">
                      <div className="mb-2"> {item.title} </div>
                      {i === 0 && (
                        <div className="opacity-80 label-1">{item.label}</div>
                      )}
                    </div>
                  </div>
                  <div>cancel</div>
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
