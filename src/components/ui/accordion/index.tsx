"use client";

import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { questionsList } from "~lib/utils/data";
import { Chevron } from "~ui/svg";
import { SectionDescription, Subtitle } from "~ui/typography";
import AnimationWrapper from "~ui/wrapper/AnimationWrapper";

const Accordion = () => {
  const [clickId, setClickId] = useState(0);

  const handleClick = (id: number) => {
    if (clickId === id) return setClickId(0);
    setClickId(id);
  };

  return (
    <AnimationWrapper
      data-aos="fade-right"
      className="mt-[50px] flex w-full flex-col md:mt-[100px]"
    >
      {questionsList.map((item) => (
        <div
          key={item.id}
          className={twMerge(
            "flex w-full flex-col items-center justify-center rounded-md border-b-2",
            clickId === item.id ? "bg-primary text-white transition-all ease-in-out" : ""
          )}
        >
          <div className="flex w-full flex-col items-center justify-start p-5">
            <div className="flex w-full items-center justify-between">
              <Subtitle className="mr-5">{item.question}</Subtitle>
              <button
                onClick={() => handleClick(item.id)}
                type="button"
                aria-label="Open and close button"
              >
                <Chevron
                  className={twJoin(
                    clickId === item.id ? "rotate-180 text-white transition-all ease-in-out" : ""
                  )}
                />
              </button>
            </div>
            {clickId === item.id ? (
              <SectionDescription className="mt-3 text-white md:w-[612.97px]">
                {item.answer}
              </SectionDescription>
            ) : null}
          </div>
        </div>
      ))}
    </AnimationWrapper>
  );
};

export default Accordion;
