'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "I  am a software developer with 10+ years of experience.";

  useEffect(() => {
    let i = 0;
    const typeEffect = setInterval(() => {
      if (i < fullText.length-1) {
        setTypingText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(typeEffect); // Stop the interval after the full text is typed
      }
    }, 100);
    return () => clearInterval(typeEffect); // Cleanup the interval on unmount
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#2d00f7] via-[#8900f2] to-[#f20089] min-h-screen flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="container mx-auto px-6 z-10 text-center">
        {/* Avatar or Profile Picture */}
        <div className="mb-6">
          <Image
            src="/profile.jpg" // Replace with your profile image
            alt="Xhenonpro"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-white shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-[#e500a4]">Xhenonpro</span>.
        </h1>

        {/* Typing Effect */}
        <p className="text-xl md:text-2xl mt-4 font-light">
          {typingText}
          {typingText !== fullText && <span className="animate-pulse">|</span>}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/resume.pdf" // Replace with your resume file
            download
            className="bg-white text-[#6a00f4] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#8900f2] hover:text-white transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-[#db00b6] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#f20089] hover:shadow-xl transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-[800px] h-[800px] opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <circle cx="500" cy="500" r="450" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
