import React from 'react'
import { Chip } from '@mui/joy';

export default function Skills() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Categorized skills data
  const skills = {
    'Languages': ['JavaScript', 'Java', 'Python'],
    'Front-End': ['React', 'Next.js', 'TailwindCSS', 'HTML', 'CSS'],
    'Back-End': ['Node.js', 'Express.js', 'Spring Boot', 'Flask'],
    'Database': ['SQL', 'MongoDB', 'MySQL', 'Neo4j'],
    'Testing': ['JUnit', 'Mockito', 'Jest', 'Playwright', 'Selenium'],
    'Other Tools': ['Docker', 'Kafka', 'Pytorch'],
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row lg:items-start">
      {/* Title Column */}
      <div className="flex-shrink-0 mb-12 lg:mb-0 lg:pr-8 lg:w-1/4">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold">Tech Stack</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto lg:mx-0 mt-2"></div>
        </div>
      </div>
      {/* Skills Categories Column */}
      <div className="lg:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Chip
                    key={tech}
                    variant="outlined"
                    color="primary"
                    className="text-sm"
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
