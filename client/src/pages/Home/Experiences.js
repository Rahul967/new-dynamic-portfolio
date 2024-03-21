import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experience";
const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5  border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full">
          {experiences.map((experience, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
                className="p-5 cursor-pointer"
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4  bg-[#1a7f5a5f] -ml-[23px] py-3 sm:w-full"
                      : "text-white"
                  } `}
                >
                  {experience.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
