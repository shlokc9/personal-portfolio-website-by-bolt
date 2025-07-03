import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown, Code, Cloud, Database, GitBranch } from 'lucide-react';
import { smoothScrollToSection, smoothScrollToBottom } from '../utils/smoothScroll';

const Hero = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shlokc9/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/shlokc9',
      label: 'GitHub'
    }
  ];

  const keySkills = [
    { icon: Code, label: 'Backend', skills: ['Go', 'Python', 'Java'] },
    { icon: Cloud, label: 'Cloud/DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'IaC'] },
    { icon: Database, label: 'Data', skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'CassandraDB'] },
    { icon: GitBranch, label: 'Open-Source', skills: ['Kubestr', 'Kanister', 'Kopia'] }
  ];

  const scrollToBottom = () => {
    smoothScrollToBottom();
  };

  return (
    <section id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-8xl py-8 sm:py-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                Shlok Chaudhari.
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6"
            >
              <span className="text-gradient">
                A Software Engineer.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-center lg:text-justify px-2 sm:px-0"
            >
              I'm a backend engineer with a deep appreciation for the CNCF ecosystem. I love building scalable microservices and designing robust MLOps, LLMOps, and DevOps strategies for cloud-native systems. Committed to open-source, I deliver resilient, observable distributed architectures.
            </motion.p>

            {/* Compact Key Skills Section - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-4 sm:mb-6"
            >
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start px-2 sm:px-0">
                {keySkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-card px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300 flex items-center gap-1 sm:gap-2 min-w-0"
                  >
                    <skill.icon className="text-primary flex-shrink-0" size={14} />
                    <span className="font-medium text-xs sm:text-sm truncate">{skill.label}</span>
                    <div className="hidden sm:flex gap-1 flex-shrink-0">
                      {skill.skills.map((tech) => (
                        <span 
                          key={tech}
                          className="px-1.5 py-0.5 bg-muted text-muted-foreground rounded text-xs whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6 px-2 sm:px-0"
            >
              <motion.button
                onClick={scrollToBottom}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 text-center cursor-pointer text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => smoothScrollToSection('work-experience')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center cursor-pointer text-sm sm:text-base"
              >
                View My Work
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1IQGlz9IWZnJ69bJVpAUU_wSacNPwAxAN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary text-secondary px-3 sm:px-4 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download size={14} className="flex-shrink-0" />
                <span className="hidden sm:inline">View My Resume</span>
                <span className="sm:hidden">Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-3 sm:space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-foreground hover:text-primary"
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mb-4 sm:mb-0"
          >
            <div className="relative">
              {/* Permanent glow effects - responsive sizing */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl sm:blur-2xl scale-125 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg sm:blur-xl scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-md sm:blur-lg scale-105"></div>
              
              {/* Professional photo container - responsive sizing */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src="/IMG_5240.JPG"
                  alt="Shlok Chaudhari - Software Engineer"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 15%',
                    transform: 'scale(2.8)'
                  }}
                />
                
                {/* Inner glow overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Mobile optimized positioning */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          onClick={() => smoothScrollToSection('about')}
          className="hidden md:block absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to About section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;