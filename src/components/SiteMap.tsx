import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Award, Baseline as Timeline, MessageSquare, FileText, ChevronRight } from 'lucide-react';

const SiteMap = () => {
  const pages = [
    {
      title: 'Home',
      path: '/',
      icon: Home,
      description: 'Landing page with hero section and photo gallery',
      children: []
    },
    {
      title: 'About',
      path: '/about',
      icon: User,
      description: 'Professional background and introduction',
      children: []
    },
    {
      title: 'Achievements',
      path: '/achievements',
      icon: Award,
      description: 'Key milestones and accomplishments',
      children: []
    },
    {
      title: 'Timeline',
      path: '/timeline',
      icon: Timeline,
      description: 'Professional journey and career progression',
      children: []
    },
    {
      title: 'Blog',
      path: '/blog',
      icon: FileText,
      description: 'Insights and articles',
      children: [
        {
          title: 'Healthcare Transformation',
          path: '/blog/1',
          description: 'Case study on rural healthcare'
        },
        {
          title: 'Digital Governance',
          path: '/blog/2',
          description: 'Future of public administration'
        },
        {
          title: 'Sustainable Development',
          path: '/blog/3',
          description: 'Implementation at grassroots'
        }
      ]
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: MessageSquare,
      description: 'Get in touch and office details',
      children: []
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Site Structure</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            A comprehensive overview of the website's organization
          </p>
        </div>

        <div className="grid gap-8">
          {pages.map((page, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {React.createElement(page.icon, { 
                      size: 24,
                      className: "text-blue-600" 
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Link 
                        to={page.path}
                        className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {page.title}
                      </Link>
                      <Link 
                        to={page.path}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </Link>
                    </div>
                    <p className="text-gray-600 mt-1">{page.description}</p>
                    
                    {page.children.length > 0 && (
                      <div className="mt-4 pl-4 border-l-2 border-gray-100">
                        {page.children.map((child, childIndex) => (
                          <div key={childIndex} className="mt-3 first:mt-0">
                            <Link 
                              to={child.path}
                              className="flex items-center justify-between group"
                            >
                              <div>
                                <h4 className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                                  {child.title}
                                </h4>
                                <p className="text-sm text-gray-500">{child.description}</p>
                              </div>
                              <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
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

export default SiteMap;