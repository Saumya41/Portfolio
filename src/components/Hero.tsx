import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Indian Administrative Service
            </div>
            
            <div className="relative">
              <div className="text-8xl font-bold text-blue-600/10 absolute -top-14 left-0">
                IAS
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 relative">
                Officer Name
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                District Collector
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl">
              Dedicated to transforming governance through innovative leadership and sustainable development initiatives. Committed to excellence in public service and administrative leadership.
            </p>

            <div className="flex gap-4">
              <a 
                href="#achievements" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Achievements
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
              alt="Professional portrait"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;