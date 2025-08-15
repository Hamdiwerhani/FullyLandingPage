import { testimonials } from "../constants/index";

export default function Testimonials() {
  return (
    <div className="mt-20 tracki">
      <div className="text-3xl sm:text-5xl lg:text-6xl text-center mb-5">
        What People are saying
      </div>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testim, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 px-4">
            <div className="bg-neutral-900 p-5 border border-neutral-800 font-light rounded-lg text-md">
              <p>{testim.text}</p>
              <div className="flex gap-2 items-center mt-10">
                <div>
                  <img
                    src={testim.image}
                    alt="user"
                    className="w-10 h-10 rounded-full border border-neutral-300"
                  />
                </div>
                <div>
                  <h6>{testim.user}</h6>
                  <p className="text-sm text-neutral-600 font-normal italic">
                    {testim.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
