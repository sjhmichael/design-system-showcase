import React from "react";
import CTAButton from "./CTAButton";
import { FaCheck } from "react-icons/fa6";

function PricingMain() {
  return (
    <div className="w-full flex justify-center items-center pt-[172px] px-8">
      <div className="max-w-[1000px] flex flex-col justify-center">
        <div className="items-center flex flex-col space-y-8 text-center">
          <h1 className="text-gray-100 text-5xl font-medium">Pricing</h1>
          <p className="text-slate-400 text-balance">
            Choose your Atomic Design plan. Upgrade to enable unlimited issues,
            enhanced security controls, and additional features.
          </p>
        </div>
        <div className="grid lg:grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] gap-6 text-gray-100 mt-8 mb-24">
          <div className="p-8 border-2 flex justify-start flex-col rounded-3xl border-gray-800 text-balance space-y-6 bg-gradient-to-t from-gray-950/50 to-gray-800/50 hover:bg-gradient-to-t hover:from-gray-950 hover:to-gray-800">
            <h1 className="text-xl font-medium text-gray-100">Basic</h1>
            <p className="text-sm text-slate-400">
              The essentials to provide your best work for clients.
            </p>
            <h1 className="text-slate-400">
              <span className="text-4xl font-bold text-gray-100">$15</span>{" "}
              /month
            </h1>
            <div className="border-t-[1px] border-gray-700" />
            <ul className="flex flex-col space-y-4 text-slate-400 text-sm">
              <li>
                <div className="flex flex-row space-x-4 items-center">
                  <FaCheck className="fill-yellow-500" />
                  <p>5 products</p>
                </div>
              </li>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Up to 1,000 subscribers</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Basic analytics</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>48-hour support response time</p>
              </div>
            </ul>
            <div className="h-full w-full flex justify-end flex-col">
              <button className="bg-slate-800 rounded-full text-center p-3">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="p-8 border-2 flex justify-start flex-col rounded-3xl border-yellow-500 text-balance space-y-6 bg-gradient-to-t from-gray-950/50 to-gray-800/50 hover:bg-gradient-to-t hover:from-gray-950 hover:to-gray-800">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl font-medium text-gray-100">Standard</h1>
              <h1 className="bg-yellow-500 text-gray-900 p-1 px-2 rounded-full text-sm font-medium">
                Most Popular
              </h1>
            </div>
            <p className="text-sm text-slate-400">
              A plan that scales with your rapidly growing business.
            </p>
            <h1 className="text-slate-400">
              <span className="text-4xl font-bold text-gray-100">$30</span>{" "}
              /month
            </h1>
            <div className="border-t-[1px] border-gray-700" />
            <ul className="flex flex-col space-y-4 text-slate-400 text-sm">
              <li>
                <div className="flex flex-row space-x-4 items-center">
                  <FaCheck className="fill-yellow-500" />
                  <p>25 products</p>
                </div>
              </li>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Up to 10,000 users</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Advanced analytics</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>24-hour support</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Marketing automations</p>
              </div>
            </ul>
            <div className="h-full w-full flex justify-end flex-col">
              <button className="bg-slate-800 rounded-full text-center p-3">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="p-8 border-2 flex justify-start flex-col rounded-3xl border-gray-800 text-balance space-y-6 bg-gradient-to-t from-gray-950/50 to-gray-800/50 hover:bg-gradient-to-t hover:from-gray-950 hover:to-gray-800">
            <h1 className="text-xl font-medium text-gray-100">Professional</h1>
            <p className="text-sm text-slate-400">
              A plan that scales with your rapidly growing business.
            </p>
            <h1 className="text-slate-400">
              <span className="text-4xl font-bold text-gray-100">$48</span>{" "}
              /month
            </h1>
            <div className="border-t-[1px] border-gray-700" />
            <ul className="flex flex-col space-y-4 text-slate-400 text-sm">
              <li>
                <div className="flex flex-row space-x-4 items-center">
                  <FaCheck className="fill-yellow-500" />
                  <p>Unlimited products</p>
                </div>
              </li>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Unlimited subscribers</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Advanced analytics</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>1-hour dedicated response time</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Marketing automations</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="fill-yellow-500" />
                <p>Custom reporting tools</p>
              </div>
            </ul>
            <div className="h-full w-full flex justify-end flex-col">
              <button className="bg-slate-800 rounded-full text-center p-3">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingMain;
