/* eslint-disable react/prop-types */
import { useState } from "react";
import up from "../assets/images/up.svg";
import down from "../assets/images/down.svg";

function FaqQuestions({ title, description }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="bg-[#F2F5F9]">
        <div className="px-5 py-2 md:px-60">
          <div className="flex justify-between">
            <h3 className="font-bold">{title}</h3>

            <div onClick={() => setIsActive(!isActive)}>
              {isActive ? (
                <img src={up} alt="minus button" className="h-5 w-5 end-5" />
              ) : (
                <img src={down} alt="plus button" className="h-5 w-5 end-5" />
              )}
            </div>
          </div>

          <div className="border-b">
            {isActive && (
              <div className="py-2 font-light text-sm">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqQuestions;
