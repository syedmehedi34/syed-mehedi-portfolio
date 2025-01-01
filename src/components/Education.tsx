import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Electronics & Telecommunication Engineering',
    institution: 'Technical University',
    duration: '2020 - Present',
    courses: ['Digital Signal Processing', 'Communication Systems', 'VLSI Design'],
  },
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Technical University',
    duration: '2020 - Present',
    courses: ['Data Structures', 'Web Development', 'Database Management'],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600 mt-1">{edu.institution}</p>
                  <div className="flex items-center text-gray-500 mt-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;