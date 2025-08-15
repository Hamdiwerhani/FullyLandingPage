import { CircleCheck } from "lucide-react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants/index";

export default function Workflow() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full lg:w-1/2">
          <img src={code} alt="coding" />
        </div>
        <div className="lg:w-1/2 mt-5">
          {checklistItems.map((list, index) => (
            <div key={index} className="flex">
              <div className="mx-4 px-2 bg-neutral-900 w-10 h-10 rounded-full flex justify-center items-center">
                <CircleCheck className="text-green-500" />
              </div>
              <div className="mt-2">
                <h5 className="text-xl">{list.title}</h5>
                <div className="text-lg py-2 lg:mb-14 mb-10 text-neutral-500">
                  {list.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
