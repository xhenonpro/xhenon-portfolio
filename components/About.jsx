import { FaJs, FaHtml5, FaCss3, FaPython, FaReact, FaGem, FaFigma, FaBootstrap, FaLaravel, FaCogs, FaDocker, FaLinux, FaUikit } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPerl, SiSwift, SiRubyonrails, SiDjango, SiSymfony, SiUnrealengine, SiCanva, SiCplusplus } from 'react-icons/si';
import { TbBrandCpp, TbBrandPhp } from 'react-icons/tb';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-[#2d00f7] via-[#8900f2] to-[#f20089] py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Bio */}
        <h2 className="text-3xl font-semibold text-[#e500a4]">Hi, I'm Xhenonpro</h2>
        <p className="mt-4 text-xl md:text-2xl font-light">
          Software Developer with 10+ years of experience
        </p>
        <p className="mt-6 text-lg font-light max-w-2xl mx-auto">
          I'm a passionate software developer with over a decade of experience building scalable, efficient, and
          innovative applications across various platforms and languages, including JavaScript, Python, Ruby, Flutter, Dart, Perl, Ruby on Rails, Figma Design, and much more.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Skills</h3>
          <p className="mt-2 text-lg font-light">Here are some of the technologies and tools I work with:</p>
          <div className="mt-8 bg-light rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* Skill Cards with respective colors */}
              <div className="flex flex-col items-center p-1 text-red-600 tex hover:scale-110 transition duration-300">
                <FaGem className="text-4xl mb-0" />
                <span>Ruby</span>
              </div>
              <div className="flex flex-col items-center p-1 text-blue-400 tex hover:scale-105 transition duration-300">
                <FaHtml5 className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-blue-400 tex hover:scale-105 transition duration-300">
                <FaBootstrap className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-blue-400 tex hover:scale-105 transition duration-300">
                <FaCss3 className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-black tex hover:scale-105 transition duration-300">
                <FaFigma className="text-4xl mb-0" />
                <span>Figma</span>
              </div>
              <div className="flex flex-col items-center p-1 text-yellow-500 hover:scale-105 transition duration-300">
                <FaJs className="text-4xl mb-0" />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-1 text-purple-500 hover:scale-105 transition duration-300">
                <FaUikit className="text-4xl mb-0" />
                <span>Material UI</span>
              </div>
              <div className="flex flex-col items-center p-1 text-[#00af41] hover:scale-105 transition duration-300">
                <FaCogs className="text-4xl mb-0" />
                <span>C</span>
              </div>
              <div className="flex flex-col items-center p-1 text-[#1c1c1c] hover:scale-105 transition duration-300">
                <SiMysql className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#716aca] hover:scale-105 transition duration-300">
                <SiPerl className="text-4xl mb-0" />
                <span>Perl</span>
              </div>
              
              <div className="flex flex-col items-center p-1 text-violet-500 hover:scale-105 transition duration-300">
                <TbBrandPhp className="text-4xl mb-0" />
              </div>
              
              <div className="flex flex-col items-center p-1 text-blue-600 hover:scale-105 transition duration-300">
                <SiCplusplus     className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-yellow-300 hover:scale-105 transition duration-300">
                <FaPython className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-blue-500 hover:scale-105 transition duration-300">
                <FaReact className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#333] tex hover:scale-105 transition duration-300">
                <SiTailwindcss className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#563d7c] hover:scale-105 transition duration-300">
                <FaLaravel className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#ff9a8b] hover:scale-105 transition duration-300">
                <SiSwift className="text-4xl mb-0" />
              </div>    
              <div className="flex flex-col items-center p-1 text-[#dd3d44] hover:scale-105 transition duration-300">
                <SiRubyonrails className="text-4xl mb-0" />
              </div>    
              <div className="flex flex-col items-center p-1 text-[#092e20] hover:scale-105 transition duration-300">
                <SiDjango className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#009c95] hover:scale-105 transition duration-300">
                <SiSymfony className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#2496ed] hover:scale-105 transition duration-300">
                <FaDocker className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-orange-500 hover:scale-105 transition duration-300">
                <FaLinux className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-indigo-800 hover:scale-105 transition duration-300">
                <SiUnrealengine className="text-4xl mb-0" />
              </div>
              <div className="flex flex-col items-center p-1 text-[#2961ff] hover:scale-105 transition duration-300">
                <SiCanva className="text-4xl mb-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="mt-12">
          <a
            href="/resume.pdf" // Replace with your resume file
            download
            className="bg-white text-[#6a00f4] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#8900f2] hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
