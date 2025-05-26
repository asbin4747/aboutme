import * as React from "react";
import { Avatar } from "@mui/material";

export default function Education() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row lg:items-start">
      {/* Title Column */}
      <div className="flex-shrink-0 mb-12 lg:mb-0 lg:pr-8 lg:w-1/4">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold">Education</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto lg:mx-0 mt-2"></div>
        </div>
      </div>
      {/* Cards Column */}
      <div className="lg:w-3/4 flex flex-col sm:flex-row gap-6">
        {/* Masters Card */}
        <section className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gray-50 p-4 flex items-center justify-center">
            <Avatar
              src={prefix + "/UT-Austin.png"}
              variant="rounded"
              sx={{ height: [60, 120], width: [60, 120] }}
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">Masters in Artificial Intelligence</h3>
            <p className="text-gray-600">University of Texas at Austin</p>
          </div>
        </section>
        {/* Bachelor Card */}
        <section className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gray-50 p-4 flex items-center justify-center">
            <Avatar
              src={prefix + "/CSUNS.svg.png"}
              variant="rounded"
              sx={{ height: [60, 120], width: [60, 120] }}
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2">Bachelor in Computer Science</h3>
            <p className="text-gray-600">California State University</p>
            <p className="text-gray-600">Cum Laude Honors</p>
          </div>
        </section>
      </div>
    </div>
  );
}
