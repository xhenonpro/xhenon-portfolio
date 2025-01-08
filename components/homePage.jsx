// pages/index.js
"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Hero from './hero';

export default function HomePage() {
  const [text, setText] = useState('Hello guys');
  const showtext = () => {
      console.log(text)
      setText((prev)=>"Hello Xhenonpro")
  }
  return (
    <>
      <Hero />
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:text-white">
        <header className="bg-purple-600 dark:bg-blue-950 text-gray-200 dark:bg-blue-950 py-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Hi, I'm Xhenonpro</h1>
            <p className="mt-4 text-xl">Software Developer with 10+ years of experience</p>
            <div className="mt-6">
              <Link href="#about" className="inline-block px-6 py-3 bg-indigo-700 text-gray-200 dark:bg-blue-950 rounded-lg text-lg hover:bg-indigo-800">
                Learn More About Me
              </Link>
            </div>
          </div>
        </header>

      
        <section id="about" className="py-16 bg-gray-200 dark:bg-blue-950">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-indigo-700">About Me</h2>
            <button
                type="button"
                className="relative px-6 py-2 rounded-lg bg-purple-800 p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={showtext}>try out</button>
              <div className="text-center text-white">{text}</div>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              I'm a passionate software developer with over a decade of experience building scalable, efficient, and innovative applications across various platforms and languages, including JavaScript, Python, Ruby, Flutter, and more.
            </p>
          </div>
        </section>

        <section id="skills" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-indigo-700">Skills</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Frontend Development</h3>
                <ul className="mt-4 list-disc text-left">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Backend Development</h3>
                <ul className="mt-4 list-disc text-left">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python (Django, Flask)</li>
                  <li>Ruby on Rails</li>
                  <li>MySQL, MongoDB</li>
                </ul>
              </div>
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Mobile Development</h3>
                <ul className="mt-4 list-disc text-left">
                  <li>Flutter</li>
                  <li>Dart</li>
                  <li>iOS (Swift)</li>
                  <li>Android (Kotlin)</li>
                </ul>
              </div>
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Other Skills</h3>
                <ul className="mt-4 list-disc text-left">
                  <li>Git/GitHub</li>
                  <li>REST APIs</li>
                  <li>Docker</li>
                  <li>Agile Methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-gray-200 dark:bg-blue-950">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-indigo-700">Featured Projects</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Here are some of the projects I've worked on:
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Project 1</h3>
                <p className="mt-4">Description of the project.</p>
                <Link href="#" className="mt-4 inline-block text-indigo-600 hover:underline">View Project</Link>
              </div>
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Project 2</h3>
                <p className="mt-4">Description of the project.</p>
                <Link href="#" className="mt-4 inline-block text-indigo-600 hover:underline">View Project</Link>
              </div>
              <div className="bg-gray-200 dark:bg-blue-950 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600">Project 3</h3>
                <p className="mt-4">Description of the project.</p>
                <Link href="#" className="mt-4 inline-block text-indigo-600 hover:underline">View Project</Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-indigo-600 text-gray-200 dark:bg-blue-950 py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Xhenonpro. All Rights Reserved.</p>
            <Link href="mailto:xhenonpro@example.com" className="text-gray-200 dark:bg-blue-950 hover:underline">Contact Me</Link>
          </div>
        </footer>
      </div>
    
    </>
  );
}
