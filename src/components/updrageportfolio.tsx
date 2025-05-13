import { useEffect, useState } from 'react';

const PortfolioUpgrade = () => {
  const [featuresVisible, setFeaturesVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setFeaturesVisible(true);
  }, []);

  const features = [
    { icon: '✨', title: 'New Design', description: 'Modern, clean interface' },
    { icon: '🚀', title: 'Performance', description: 'Faster loading times' },
    { icon: '🖼️', title: 'Projects', description: 'Latest case studies' },
    { icon: '📱', title: 'Responsive', description: 'Better mobile experience' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Status bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
        
        <div className="p-8 md:p-10">
          {/* Logo */}
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl mb-6">
            P
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio Upgrade in Progress
          </h1>
          
          {/* Status indicator */}
          <div className="flex items-center gap-2 text-blue-600 font-medium mb-8">
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
            Currently working on updates
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            I'm enhancing my portfolio with new projects, improved design, and better performance. 
            The new version will showcase my latest work and skills more effectively.
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gray-50 p-4 rounded-lg flex gap-3 transition-all duration-300 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-xl">{feature.icon}</span>
                <div>
                  <h3 className="font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:contact@example.com"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href="mailto:contact@example.com"
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Need immediate access? Email me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioUpgrade;
