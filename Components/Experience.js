import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import experienceData from "./ExperienceData.json";
import { useRouter } from 'next/router';

export default function Experience() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/ExperiencePage")
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row lg:items-start">
      {/* Section title with underline */}
      <div className="flex-shrink-0 mb-12 lg:mb-0 lg:pr-8 lg:w-1/4">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold">Career</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto lg:mx-0 mt-2"></div>
        </div>
      </div>
      {/* Experience cards grid */}
      <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experienceData.map((exp, idx) => (
          <article
            key={idx}
            onClick={handleClick}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 cursor-pointer flex flex-col items-center text-center"
          >
            <div className="-mt-12 mb-4">
              <Avatar
                alt={exp.cardTitle.company}
                src={exp.cardTitle.imgSource}
                sx={{
                  height: 96,
                  width: 96,
                  border: 2,
                  borderColor: 'indigo.500',
                }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">
              {exp.cardTitle.position}
            </h3>
            <p className="text-indigo-600 font-medium mb-2">
              {exp.cardTitle.company}
            </p>
            <p className="text-gray-500 text-sm mb-1">
              {exp.cardTitle.date}
            </p>
            <p className="text-gray-500 text-sm">
              {exp.cardTitle.location}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
