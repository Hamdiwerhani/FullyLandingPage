import { pricingOptions } from "../constants/index";
import { CircleCheck } from "lucide-react";

export default function Pricing() {
  return (
    <div className="mt-20">
      <div className="text-3xl sm:text-5xl lg:text-6xl text-center mb-5">
        Pricing
      </div>
      <div className="flex flex-wrap">
        {pricingOptions.map((price, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 rounded-lg p-10">
              <div className="text-4xl mb-8">
                {price.title}
                {price.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </div>
              <div className="mb-8">
                <span className="text-5xl mt-6 mr-2">{price.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </div>
              <div className="mb-8">
                {price.features.map((feature, index) => (
                  <div key={index} className="flex items-center my-10">
                    <div>
                      <CircleCheck />
                    </div>
                    <div className="mx-2 text-sm">{feature}</div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex justify-center items-center w-full text-xl border tracking-tight hover:bg-orange-900 transition duration-200 border-orange-900 py-2 rounded-lg"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
