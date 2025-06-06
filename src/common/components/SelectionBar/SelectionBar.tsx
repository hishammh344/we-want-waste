import { Skip } from "@/types";
import React from "react";

type Props = {
  selectedSkip: Skip | null;
};

const SelectionBar = ({ selectedSkip }: Props) => {
  return (
    <div className="bg-yellow-400">
      <small className="text-center">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </small>
      <div className="flex flex-wrap">
        <div className="flex gap-5">
          <p>{selectedSkip?.size} Yard Skip</p>
          <b>
            ${selectedSkip?.price_before_vat ?? 0.0 + selectedSkip?.vat! ?? 0.0}
            <span>{selectedSkip?.hire_period_days} day hire</span>
          </b>
        </div>
        <div className="flex gap-3">
          <button className="bg-yellow-500 text-white rounded-4xl py-4 px-3 mt-6 self-end cursor-pointer hover:bg-yellow-400 transition-all duration-500 hover:shadow-[0_0_15px_#fff900]">
            Back
          </button>
          <button className="bg-yellow-500 text-white rounded-4xl py-4 px-3 mt-6 self-end cursor-pointer hover:bg-yellow-400 transition-all duration-500 hover:shadow-[0_0_15px_#fff900]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionBar;
