import React from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A distinguished career path marked by leadership and innovation
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>

          {/* Timeline items */}
          <div className="space-y-20">
            {/* Current Position */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="absolute w-6 h-6 bg-blue-600 rounded-full left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-sm font-semibold text-blue-600">2020 - Present</span>
                </div>
                <h3 className="text-xl font-bold mb-2">District Collector</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leading administrative initiatives and implementing transformative policies for district development.
                </p>
              </div>
            </div>

            {/* Previous Position */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="absolute w-6 h-6 bg-indigo-600 rounded-full left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-sm font-semibold text-indigo-600">2015 - 2020</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Joint Secretary</h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordinated inter-departmental initiatives and policy implementation at the state level.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="absolute w-6 h-6 bg-purple-600 rounded-full left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-sm font-semibold text-purple-600">2014</span>
                </div>
                <h3 className="text-xl font-bold mb-2">IAS Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Completed comprehensive training at Lal Bahadur Shastri National Academy of Administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;