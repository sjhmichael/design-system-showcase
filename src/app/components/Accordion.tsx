import clsx from "clsx";
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const Accordion = ({ title, answer }: any) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div>
      <div className="text-gray-100 w-full">
        <div className="bg-gray-900 rounded-lg p-6 my-4 group hover:bg-gray-800 duration-300">
          <div
            className="flex flex-row items-center justify-between group-hover:cursor-pointer"
            onClick={() => setAccordion(!accordion)}
          >
            <h1 className="font-medium">{title}</h1>
            <FaChevronUp
              className={clsx(
                "fill-gray-100 group-hover:scale-125",
                accordion ? "rotate-0 duration-300" : "rotate-180 duration-300"
              )}
            />
          </div>
          <h1
            className={clsx(
              "text-slate-300 mt-8 text-sm",
              accordion ? "flex" : "hidden"
            )}
          >
            {answer}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
