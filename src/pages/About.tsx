import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a dedicated IAS officer, I have committed my career to public service and administrative excellence. With a strong foundation in governance and policy implementation, I strive to create meaningful impact in the lives of citizens through innovative solutions and sustainable development initiatives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach to administration is rooted in transparency, efficiency, and citizen-centric governance. Through various roles in public service, I have gained extensive experience in policy formulation, project management, and community development.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="At work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;