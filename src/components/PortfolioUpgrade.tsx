import { useEffect, useState } from 'react';
import { motion, useAnimation, stagger } from 'framer-motion';

const PortfolioUpgrade = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Staggered animations
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    });
  }, []);

  const features = [
    { icon: '✨', title: 'New Design', description: 'Modern, clean interface' },
    { icon: '🚀', title: 'Performance', description: 'Faster loading times' },
    { icon: '🖼️', title: 'Projects', description: 'Latest case studies' },
    { icon: '📱', title: 'Responsive', description: 'Better mobile experience' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 p-4 overflow-hidden">
      <motion.div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Status bar */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white mix-blend-overlay"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        <div className="p-8 md:p-10 relative z-10">
          {/* Logo with 3D effect */}
          <motion.div 
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg"
            initial={{ rotate: -15, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
            </motion.span>
          </motion.div>
          
          {/* Heading with text gradient */}
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Portfolio Upgrade in Progress
          </motion.h1>
          
          {/* Status indicator */}
          <motion.div 
            className="flex items-center gap-2 text-blue-600 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span 
              className="w-3 h-3 bg-blue-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Currently working on exciting updates
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm crafting an <span className="font-semibold text-blue-600">exceptional experience</span> with new projects, cutting-edge design, and blazing-fast performance. The new version will showcase my skills in the most impressive way possible.
          </motion.p>
          
          {/* Features grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex gap-3 items-start`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.span 
                  className="text-2xl p-2 bg-blue-50 rounded-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.span>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA with floating animation */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="mailto:contact@example.com"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.span 
                className="relative z-10"
                animate={{ 
                  x: isHovered ? [0, 5, -5, 0] : 0 
                }}
                transition={{ duration: 0.5 }}
              >
                Contact Me
              </motion.span>
              {isHovered && (
                <>
                  <motion.span 
                    className="absolute inset-0 bg-white opacity-10"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.span 
                    className="absolute inset-0 bg-white opacity-5"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </>
              )}
            </motion.a>
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-200 rounded-full"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.4 + 0.1
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default PortfolioUpgrade;
