import React from 'react';
import { Award, Target, Users, Briefcase } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: "Distinguished Service Award",
    description: "Recognized for exceptional contributions to public administration and governance excellence.",
    color: "blue"
  },
  {
    icon: Target,
    title: "Policy Implementation",
    description: "Successfully executed transformative policies impacting millions of citizens positively.",
    color: "indigo"
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Led initiatives that significantly improved social welfare and community engagement.",
    color: "purple"
  },
  {
    icon: Briefcase,
    title: "Administrative Excellence",
    description: "Streamlined governmental processes, improving efficiency by 40% in key departments.",
    color: "pink"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Achievements
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of excellence in public service and administrative leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-lg bg-${achievement.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${achievement.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;