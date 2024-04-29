"use client";

import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { FaTimes, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [faq, setFaq] = useState(false);
  const handleClick = () => {
    setFaq(!faq);
  };

  const FAQContent = [
    {
      index: 1,
      question: "Question Example 1",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis",
    },
    {
      index: 2,
      question: "Question Example 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis",
    },
    {
      index: 3,
      question: "Question Example 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis",
    },
    {
      index: 4,
      question: "Question Example 2",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis",
    },
  ];

  return (
    <div>
      <div className="w-full mb-24">
        <div className="flex flex-col space-y-8 text-gray-100 text-center mb-16">
          <h1 className="text-5xl font-medium">FAQs</h1>
          <p className="text-gray-400">
            Have a different question and can't find the answer you're looking
            for? Contact us{" "}
            <span className="font-medium text-yellow-500 hover:cursor-pointer">
              here
            </span>{" "}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        {FAQContent.map(({ question, answer, index }) => (
          <React.Fragment key={index}>
            <div className="my-4 hover:cursor-pointer" onClick={handleClick}>
              <div className="text-gray-100 flex flex-col bg-gray-800 p-6 rounded-lg hover:bg-gray-700">
                <div className="flex flex-row justify-between items-center font-medium">
                  <h1>{question}</h1>
                  <FaTimes className={faq ? "flex" : "hidden"} />
                  <FaMinus className={faq ? "hidden" : "flex"} />
                </div>
                <div className={faq ? "hidden" : "flex"}>
                  <p className="text-slate-400 mt-6">{answer}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
