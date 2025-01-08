import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3d0066] via-[#510087] to-[#5c0099] py-8">
      <div className="max-w-screen-xl mx-auto px-6 text-white">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="https://github.com/xhenonpro" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#fdc500] transition-all duration-300">
              <i className="fab fa-github"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://www.linkedin.com/in/xhenonpro" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#fdc500] transition-all duration-300">
              <i className="fab fa-linkedin"></i> {/* FontAwesome icon */}
            </a>
            <a href="https://twitter.com/xhenonpro" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#fdc500] transition-all duration-300">
              <i className="fab fa-twitter"></i> {/* FontAwesome icon */}
            </a>
          </div>
          <p className="text-center text-lg">
            &copy; {new Date().getFullYear()} Xhenonpro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
