import Typography from "@mui/joy/Typography";
import Head from "next/head";

export default function AboutSectionText() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12 flex flex-col lg:flex-row lg:items-start">
        {/* Title Column */}
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:pr-8 lg:w-1/4">
           <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold">About me</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto lg:mx-0 mt-2"></div>
        </div>
        </div>
        {/* Content Column with image and styled card */}
        <div className="lg:w-3/4 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Text Card */}
          <div className="w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 space-y-4 sm:space-y-6">
            <Typography
              level="body1"
              className="text-black text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              Full-Stack Software Engineer specializing in
              developing high-performance systems across AI/ML and e-commerce.
            </Typography>
            <Typography
              level="body1"
              className="text-black text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              My experience includes building a React/Redux-Saga e-commerce
              platform driving $1M+ in monthly revenue, re-architected two
              legacy stores into a unified Spring Boot/Node.js solution serving
              100K+ users daily, and designed fault-tolerant integrations with
              Kafka, IBM MQ, and OMS.
            </Typography>
            <Typography
              level="body1"
              className="text-black text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              Beyond work, I’ve tackled projects from an Amazon clone
              (Next.js/Tailwind) to AI-driven tools like a LangChain/Neo4j
              chatbot for clinical documents and a PyTorch-based vision agent
              for Supertux hockey. My tech stack spans front-end, back-end, and
              machine learning, enabling me to build seamless, scalable
              solutions with React, Next.js, TailwindCSS, Spring Boot, Node.js,
              Kafka, Python (PyTorch/OpenCV), and modern CI/CD. I thrive on
              clean abstractions, end-to-end ownership, and iterating toward
              intuitive user experiences.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
