import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const workExperiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'AI Marketplace',
      period: 'Recent',
      description: 'Developed full-stack web applications with modern technologies, focusing on user experience and scalable architecture.',
      skills: ['React', 'Node.js', 'Database Design', 'API Development'],
      icon: Building
    },
    {
      title: 'Freelance Cybersecurity Research Analyst',
      company: 'Cyber Range Analytics',
      period: '2023',
      description: 'Conducted cybersecurity research and analysis, contributing to threat intelligence and security assessments.',
      skills: ['Security Analysis', 'Research', 'Documentation', 'Risk Assessment'],
      icon: Building
    },
    {
      title: 'Research Assistant',
      company: 'Arizona State University',
      period: '2023 - Present',
      description: 'Conducting research on cloud infrastructure optimization and Kubernetes resource management. Developing tools for automated deployment and scaling of containerized applications.',
      skills: ['Kubernetes', 'Research', 'Cloud Computing', 'Automation'],
      icon: Briefcase
    },
    {
      title: 'Software Engineering Intern',
      company: 'Tech Solutions Inc.',
      period: 'Summer 2022',
      description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to implement new features and fix bugs.',
      skills: ['JavaScript', 'React', 'Node.js', 'Git'],
      icon: Building
    }
  ];

  const achievements = [
    {
      title: 'Viral X Post',
      description: 'Cyber Range Analytics post reached 69.5K impressions',
      icon: Award
    },
    {
      title: 'Certified',
      description: 'Arizona Cyber Warfare Range Certificate',
      icon: Award
    },
    {
      title: 'Kubernetes Certified Administrator',
      description: 'Cloud Native Computing Foundation',
      icon: Award
    },
    {
      title: 'AWS Certified Solutions Architect',
      description: 'Amazon Web Services',
      icon: Award
    }
  ];

  const education = [
    {
      degree: 'MS Computer Science',
      institution: 'Arizona State University',
      period: '2023-2025',
      icon: GraduationCap
    },
    {
      degree: 'BE Computer Engineering',
      institution: 'University of Pune',
      period: '2020-2023',
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
              
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-8"
                >
                  <div className="absolute left-6 w-4 h-4 bg-card border-4 border-primary rounded-full hidden md:block"></div>
                  
                  <div className="md:ml-16 bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 w-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} /> {exp.period}
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <exp.icon size={20} />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="technology-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Education Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
              
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 mb-6 last:mb-0"
                >
                  <div className="p-2 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-lg">
                    <achievement.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 mb-6 last:mb-0"
                  >
                    <div className="p-2 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
                      <edu.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;