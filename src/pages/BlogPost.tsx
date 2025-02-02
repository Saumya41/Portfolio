import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = {
  '1': {
    title: 'Transforming Rural Healthcare: A Case Study',
    date: '2024-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    category: 'Healthcare',
    content: `
      <p class="mb-6">The transformation of rural healthcare has been one of our most significant challenges and achievements. This case study examines how we implemented innovative solutions to improve healthcare access in rural areas.</p>

      <h2 class="text-2xl font-bold mb-4">The Challenge</h2>
      <p class="mb-6">Rural communities faced numerous healthcare challenges, including limited access to medical facilities, shortage of healthcare professionals, and inadequate infrastructure. These challenges were further complicated by geographical barriers and resource constraints.</p>

      <h2 class="text-2xl font-bold mb-4">Our Approach</h2>
      <p class="mb-6">We adopted a multi-faceted approach that included:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Establishing mobile health clinics to reach remote areas</li>
        <li class="mb-2">Implementing telemedicine solutions for remote consultations</li>
        <li class="mb-2">Training local health workers and building capacity</li>
        <li class="mb-2">Creating a robust emergency response system</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Implementation Process</h2>
      <p class="mb-6">The implementation was carried out in phases, starting with pilot programs in selected villages. We worked closely with local communities, healthcare providers, and technology partners to ensure sustainable solutions.</p>

      <h2 class="text-2xl font-bold mb-4">Results and Impact</h2>
      <p class="mb-6">The initiative has shown remarkable results:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">40% increase in healthcare access</li>
        <li class="mb-2">Reduction in emergency response time by 60%</li>
        <li class="mb-2">Improved health outcomes in target communities</li>
        <li class="mb-2">Enhanced community participation in healthcare initiatives</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Future Directions</h2>
      <p class="mb-6">Building on these successes, we are now focusing on scaling the program to other districts and incorporating new technologies to further improve healthcare delivery.</p>
    `
  },
  // Add more blog posts here
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft size={16} className="mr-1" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
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

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;