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

  const scrollToAbout = () => {
    smoothScrollToSection('about', 1400);
  };

  const scrollToBottom = () => {
    smoothScrollToBottom(1400);
  };

  return (
    <section id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient">
                Shlok Chaudhari.
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl lg:text-3xl font-bold mb-6"
            >
              <span className="text-gradient">
                A Software Engineer.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-6 leading-relaxed text-justify"
            >
              I'm a backend engineer with a deep appreciation for the CNCF ecosystem. I love building scalable microservices and designing robust MLOps, LLMOps, and DevOps strategies for cloud-native systems. Committed to open-source, I deliver resilient, observable distributed architectures.
            </motion.p>

            {/* Compact Key Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {keySkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-card px-3 py-2 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300 flex items-center gap-2"
                  >
                    <skill.icon className="text-primary" size={16} />
                    <span className="font-medium text-sm">{skill.label}</span>
                    <div className="flex gap-1">
                      {skill.skills.map((tech) => (
                        <span 
                          key={tech}
                          className="px-1.5 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={scrollToBottom}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 text-center cursor-pointer"
              >
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => smoothScrollToSection('work-experience', 1400)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center cursor-pointer"
              >
                View My Work
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1IQGlz9IWZnJ69bJVpAUU_wSacNPwAxAN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Download size={18} />
                View My Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-foreground hover:text-primary"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end mt-[-2rem]"
          >
            <div className="relative">
              {/* Permanent glow effects - multiple layers for enhanced visibility */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl scale-125 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-lg scale-105"></div>
              
              {/* Professional LinkedIn-style photo container */}
              <div className="relative w-[32rem] h-[32rem] rounded-full overflow-hidden shadow-2xl border-4 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
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

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to About section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;