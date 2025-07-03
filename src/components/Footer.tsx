import { motion } from 'framer-motion';
import { Heart, Zap, Code, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-2 whitespace-nowrap">
              <span>© {new Date().getFullYear()} Shlok Chaudhari. Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>and React</span>
            </p>
            
            {/* Credits Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <motion.a
                href="https://stackblitz.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Zap size={14} />
                <span>Built on StackBlitz</span>
              </motion.a>
              
              <span className="hidden sm:inline text-gray-600 dark:text-gray-500">•</span>
              
              <motion.a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Code size={14} />
                <span>Powered by Bolt</span>
              </motion.a>

              <span className="hidden sm:inline text-gray-600">•</span>
              
              <motion.a
                href="https://netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Globe size={14} />
                <span>Hosted by Netlify</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;