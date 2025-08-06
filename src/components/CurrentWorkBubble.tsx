import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Lightbulb, X, Github, ExternalLink, Linkedin, Calendar } from 'lucide-react';

interface CurrentWorkBubbleProps {
  activeSection: string;
}

const CurrentWorkBubble = ({ activeSection }: CurrentWorkBubbleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine if we should show Calendly button (when in contact section)
  const showCalendlyButton = activeSection === 'contact';

  const currentWork = {
    title: "Axon-Konduit 🧠",
    company: "An Open-Source MLOps Project",
    description: "Currently building Axon-Konduit, a lightweight open-source GitOps-native approach to MLOps on Kubernetes. The central idea is to abstract away the complexity of Kubernetes for data scientists. I've built an operator in Go that, instead of complex pipeline definitions, uses a single, high-level Custom Resource, Signal, to manage the entire train-and-serve lifecycle.",
    highlights: [
      "Go microservices architecture",
      "Kubernetes controllers & operators", 
      "GitOps workflows with ArgoCD"
    ],
    githubUrl: "https://github.com/shlokc9/axon-konduit",
    status: "In Active Development"
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Calendly Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
        >
          <AnimatePresence mode="wait">
            {showCalendlyButton ? (
              <motion.button
                key="calendly"
                onClick={() => {
                  // @ts-ignore - Calendly is loaded globally
                  window.Calendly?.initPopupWidget({url: 'https://calendly.com/shlokc9'});
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="bg-gradient-to-r from-secondary to-primary text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium text-sm"
              >
                <Calendar size={18} />
                <span className="hidden sm:inline">Schedule time with me</span>
                <span className="sm:hidden">Schedule Call</span>
              </motion.button>
            ) : (
              <motion.button
                key="passion-project"
                onClick={() => setIsExpanded(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium text-sm"
              >
                <FlaskConical size={18} />
                <span className="hidden sm:inline">Working on a Passion Project</span>
                <span className="sm:hidden">Working on a Passion Project</span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Window */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsExpanded(false)}
            />

            {/* Chatbox Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-6 right-6 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={20} />
                    <h3 className="font-semibold">Open to Collaborate</h3>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {currentWork.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-2">
                    {currentWork.company}
                  </p>
                  <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                    {currentWork.status}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
                  {currentWork.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-foreground mb-2">Key Technologies:</h5>
                  <div className="flex flex-wrap gap-1">
                    {currentWork.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.a
                    href={currentWork.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    View Work on GitHub
                    <ExternalLink size={14} />
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/shlokc9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border-2 border-primary text-primary py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Linkedin size={16} />
                    Connect with me to know more
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CurrentWorkBubble;