import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideIn } from "../animations/variants";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              {/* Front-End Developer */}
              SYED MEHEDI HASAN
              <motion.span className="block text-blue-600" variants={slideIn}>
                Front-End Developer
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600">
              Crafting beautiful web experiences with modern technologies
            </p>
            <motion.div className="flex space-x-4" variants={fadeInUp}>
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co.com/7j5VYTk/my-photo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-32 bg-blue-600 rounded-full opacity-20"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
