import { Code2, Palette, Terminal, Wrench, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../animations/variants";

const skillsData = {
  "Front-End": {
    icon: <Code2 size={24} />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  Design: {
    icon: <Palette size={24} />,
    skills: ["Figma", "Responsive Design", "UI/UX", "Color Theory"],
  },
  Tools: {
    icon: <Wrench size={24} />,
    skills: ["Git", "VS Code", "Chrome DevTools", "npm/yarn"],
  },
  Other: {
    icon: <Terminal size={24} />,
    skills: ["Node.js", "RESTful APIs", "MongoDB", "Firebase"],
  },
  "Soft Skills": {
    icon: <Brain size={24} />,
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
    ],
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([category, { icon, skills }]) => (
            <motion.div
              key={category}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  className="text-blue-600"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex items-center"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${Math.floor(Math.random() * 30) + 70}%`,
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <span className="ml-3 text-sm text-gray-600 min-w-[100px]">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
