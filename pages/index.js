import AboutSectionText from '../Components/AboutSectionText'
import Experience from '../Components/Experience'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import Link from 'next/link'

export default function Home() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <>
      <main className="container mx-auto px-6 py-12 space-y-24">
        <section id="about">
          <AboutSectionText />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
    </>
  );
}
