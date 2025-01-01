import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            <span className="text-blue-700">P</span>ortfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
    {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
      (item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item}
        </a>
      )
    )}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a
      target="_blank"
      href="https://github.com/syedmehedi34"
      className="text-gray-600 hover:text-gray-900"
    >
      <Github size={20} />
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/syedmehedi34/"
      className="text-gray-600 hover:text-gray-900"
    >
      <Linkedin size={20} />
    </a>
    <a
      target="_blank"
      href="mailto:syedmehedi34@gmail.com"
      className="text-gray-600 hover:text-gray-900"
    >
      <Mail size={20} />
    </a>
  </div>
);

export default Header;
