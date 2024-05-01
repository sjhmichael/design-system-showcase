"use client";
import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const FAQContent = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "How do you make holy water?",
      answer:
        "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "Why do you never see elephants hiding in trees?",
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 4,
      question: "What do you call someone with no body and no nose?",
      answer:
        "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    },
  ];
  return (
    <div>
      <div className="w-full mb-24">
        <div className="flex flex-col space-y-8 text-gray-100 text-center mb-16">
          <h1 className="text-5xl font-medium">FAQs</h1>
          <p className="text-slate-400">
            Have a different question and can't find the answer you're looking
            for? Contact us{" "}
            <span className="font-medium text-yellow-500 hover:cursor-pointer">
              here
            </span>{" "}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="my-4">
          {FAQContent.map(({ question, answer, id }) => (
            <Accordion title={question} answer={answer} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
