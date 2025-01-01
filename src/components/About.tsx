import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              I'm a passionate Front-End Developer and student of Electronics &
              Telecommunication Engineering in RUET. With a keen eye for design
              and a love for clean code, I create engaging web experiences that
              combine form and function.
            </p>
            <p className="text-gray-600 mb-6">
              Currently pursuing my bachelor degree, I balance my academic
              pursuits with practical web development projects. My goal is to
              bridge the gap between design and technology, creating solutions
              that not only look great but also solve real-world problems.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/resume.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
