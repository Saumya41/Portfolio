import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Transforming Rural Healthcare: A Case Study',
    excerpt: 'An in-depth look at how we revolutionized healthcare access in rural areas through innovative policy implementation and community engagement.',
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    category: 'Healthcare'
  },
  {
    id: '2',
    title: 'Digital Governance: The Future of Public Administration',
    excerpt: 'Exploring the implementation of digital solutions in public administration and its impact on citizen services.',
    date: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Sustainable Development in Practice',
    excerpt: 'How we\'re implementing sustainable development goals at the grassroots level and creating lasting impact.',
    date: '2024-03-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80',
    category: 'Development'
  }
];

const BlogPage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts and perspectives on public administration, governance, and development
          </p>
        </div>

        <div className="grid gap-12 mt-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2">
                  <div className="h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;