import Link from "next/link";
import React from "react";
import { GitHub } from "@mui/icons-material";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <section className="project_card">
        <div className="project_card_heading">
          <h2>Graph RAG Agent</h2>
        </div>
        <div className="project_description">
          <p>
            Implemented an AI chatbot by creating a data pipeline to extract clinical notes from PDF documents using LangChain, built a knowledge graph with Neo4j using Cypher queries, and implemented a question–answer system leveraging the Llama3 LLM to synthesize concise patient summaries and facilitate record retrieval via Cypher and Python.
          </p>
        </div>
        <div className="project_techstack mt-2">
          <strong>Tech stack:</strong> Python, LangChain, Neo4j, Cypher, Llama3
        </div>
      </section>
      <section className="project_card">
        <div className="project_card_heading">
          <h2>Deep Learning AI Agent for Supertux Ice Hockey</h2>
        </div>
        <div className="project_description">
          <p>
            Developed an agent for the Supertux ice hockey game employing computer vision and fully convolutional neural networks (FCNN) for real-time puck detection. Built a custom controller and robust data pipelines to analyze image batches, accurately predict puck location, and optimize goal navigation strategies using Python and PyTorch.
          </p>
        </div>
        <div className="project_techstack mt-2">
          <strong>Tech stack:</strong> Python, PyTorch, OpenCV, FCNNs,
        </div>
      </section>
      <section className="project_card">
        <div className="project_card_heading">
          <h2>Amazon Clone React</h2>
          <Link href="https://github.com/asbin4747/Amazon-Clone-React">
            <GitHub fontSize="medium" />
          </Link>
        </div>
        <div className="project_description">
          <p>
            I built this project while learning responsive design and React
            fundamentals, I created this eCommerce website which is a clone
            version of the Amazon website. The site looks very similar to Amazon
            and has basic eCommerce functionalities such as adding items to
            Cart, navigating to the Cart page and simulating a checkout
            behaviour using the Stripe API. Users are also able to sign into
            their gmail account using the google authentication. The styling on
            the page looks very similar to the Amazon website and this was built
            using the TailwindCSS. <br />
            This project is built using React, Next.js, and TailwindCSS.
          </p>
        </div>
        <div className="project_techstack mt-2">
          <strong>Tech stack:</strong> React, Next.js, TailwindCSS, Stripe API, Google Auth, JavaScript
        </div>
      </section>

      <section className="project_card">
        <div className="project_card_heading">
          <h2>OFF-TOP</h2>
          <Link href="https://github.com/Off-Top-App">
            <GitHub fontSize="medium" />
          </Link>
        </div>

        <div className="project_description">
          <p>
            OFF-TOP is a productivity mobile application that helps users to
            stay on topic in real-time. This project was initialized during my
            senior year at CSUN with some of my classmates where we decided to
            build a real time data processing application that would measure the
            user focus on a certain topic using the Stanford NLP, and Kafka for
            real-time data processing. I worked on setting up the Kafka into our
            architecture pipeline, and worked on storing the processed data from
            NLP modles into the MongoDB database. I also created some REST API
            in Flask and Spring Boot, used Postman to tst the REST API and implemented
            MySQL database to store user information. I left the project after our
            senior year but this project helped me gain a good understanding of
            building a software architecture, understanding the real time data
            processing and making myself familiar with machine learning
            concepts.
            <br />
            This project was built using Flutter, Flask, Kafka, MongoDB, MySQL,
            Stanford NLP, and languages used were Java, Python, Dart, and SQL.
          </p>
        </div>
        <div className="project_techstack mt-2">
          <strong>Tech stack:</strong> Flutter, Flask, Kafka, MongoDB, MySQL, Stanford NLP, Java, Python, Dart, SQL
        </div>
      </section>
      <section className="project_card">        <div className="project_card_heading">
          <h2>Software Validation And Testing</h2>
          <Link href="https://github.com/asbin4747/washer-chess">
            <GitHub 
              fontSize="medium" 
              onClick={() => handleGitHubClick('washer-chess')}
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </div>

        <div className="project_description">
          <p>
            This project was a part of our software testing and validation class during my senior 
            year at CSUN where we needed to test and validate a piece of software application. I paired
            with another classmate to identify a chess program that was written using Java Swing. There 
            were several unit tests written to test the individual functionality of the programs using
            JUnit4, performed mock testing usign Mockito and used JaCoCo and PitTest to generate the test coverage 
            for the tests. 
          </p>
        </div>
        <div className="project_techstack mt-2">
          <strong>Tech stack:</strong> Java Swing, JUnit4, Mockito, JaCoCo, PitTest
        </div>
      </section>
      <section className="project_card">
        <div className="project_card_heading">
          <h2>Calendroid</h2>
        </div>

        <div className="project_description">
          <p>
            Calendroid was a concept identical to google calender where users would be able to keep track of notes and
            other daily reminders. This project was developed to get familiarity with android development and the primary language
            used was Java. This project also involved the use of Android Studio and SQLite to store the data.
          </p>
        </div>
        <div className="project_techstack mt-2">
          <strong>Tech stack:</strong> Java, Android Studio, SQLite
        </div>
      </section>
    </div>
  );
}
