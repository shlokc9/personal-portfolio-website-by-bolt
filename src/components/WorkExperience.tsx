import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, Briefcase, GraduationCap, Download } from 'lucide-react';

const WorkExperience = () => {
  const workExperiences = [
    {
      title: 'Software Engineer',
      company: 'Changing The Present',
      period: 'Mar 2025 - Present',
      description: 'Driving the development of PresentOps, an in-house IaC & GitOps platform to provision and manage Kubernetes environments in minutes—implemented Terraform modules, Go microservices, and CLI wrappers that cut setup/onboarding time by up to 80%. Introduced comprehensive Go unit tests to boost coverage to 90% and reduce production bugs by 40%.',
      skills: ['Go', 'Testify', 'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'Git', 'IaC', 'GitOps', 'Developer Productivity'],
      icon: Briefcase
    },
    {
      title: 'Engineering Intern',
      company: 'Veeam Software',
      period: 'May 2024 - Sep 2024',
      description: 'Designed and built a File-Level Restore feature for Veeam Kasten, slashing compute and storage overhead by over 70% and enabling reliable file recovery from cloud backups. Engineered a custom volume populator and integrated Kubestr browse/restore commands to streamline filesystem comparisons across multi‐volume snapshots.',
      skills: ['Go', 'K8s Controllers & Operators', 'Kubebuilder', 'Docker', 'Git', 'Codefresh', 'Data Protection', 'Storage'],
      icon: Briefcase
    },
    {
      title: 'Research Systems Administrator',
      company: 'Illnois Tech College of Computing—Systems Lab',
      period: 'Aug 2023 - May 2024',
      description: 'Administered a 100+ node Linux cloud on Chameleon, cutting downtime by 90% via high-availability configurations and repurposing idle hardware to expand compute capacity. Managed storage and networking, leveraging Ansible and Proxmox to maintain a resilient research environment under Dr. Ioan Raicu\'s guidance.',
      skills: ['Python', 'Proxmox', 'OpenStack', 'OPNSense', 'Ansible', 'Metal-As-A-Service', 'Linux', 'Shell Scripting'],
      icon: Building
    },
    {
      title: 'Software Engineer',
      company: 'InfraCloud—An Improving Company',
      period: 'Aug 2021 - Nov 2022',
      description: 'Contributed to Kasten\'s Kanister controller by simplifying backup/restore workflows—eliminated 90% of complexity from Restic integrations and built CSI snapshot functions to bolster data protection. Revitalized CI/CD pipelines to stabilize test coverage (up to 90%) and reduce flakiness by 30% through mocked tests and workflow updates.',
      skills: ['Go', 'K8s Controllers & Operators', 'Kubebuilder', 'Docker', 'Git', 'Codefresh', 'Data Protection', 'Storage'],
      icon: Briefcase
    },
    {
      title: 'Associate Software Engineer',
      company: 'Abzooba—A UST Global Company',
      period: 'Dec 2019 - Aug 2021',
      description: 'Led a team to build a Model Monitoring service for UST Xpresso, improving model reliability by 40% and cutting database query times by 30% via optimized SQLAlchemy APIs. Enhanced UX with Jupyter extensions for Kubeflow, streaming Jenkins/Kubeflow status, and authored Pytest suites to raise unit-test coverage to 92%.',
      skills: ['Python', 'FastAPI', 'JavaScript', 'K8s', 'Docker', 'MongoDB', 'Jupyter', 'Git', 'Jenkins', 'Cloud', 'Ansible'],
      icon: Briefcase
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Abzooba—A UST Global Company',
      period: 'Jul 2019 - Dec 2019',
      description: 'Developed a Python data-connection library using Alluxio & Presto that halved data import times and automated Kubernetes deployments with Ansible to eliminate configuration errors. Upgraded an EDA library for unstructured data analysis and integrated GitLab APIs to streamline project versioning.',
      skills: ['Python', 'FastAPI', 'JavaScript', 'K8s', 'Docker', 'MongoDB', 'Jupyter', 'Git', 'Jenkins', 'Cloud', 'Ansible'],
      icon: Briefcase
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Illinois Institute of Technology',
      period: 'Jan 2023 - Dec 2024',
      gpa: 'Graduated',
      icon: GraduationCap
    },
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      period: 'Jun 2015 - Jun 2019',
      gpa: 'Graduated',
      icon: GraduationCap
    }
  ];

  return (
    <section id="work-experience" className="py-24 bg-muted/10">
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
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A short summary of my software engineering career so far.
          </p>
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
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
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

          {/* Education & Certifications Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Education & Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 mb-8 last:mb-0"
                >
                  <div className="p-2 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
                    <edu.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} /> {edu.period}
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">{edu.gpa}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card p-4 rounded-lg shadow-md border border-border mb-4 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold">Certified Kubernetes Adminstrator</h4>
                  <p className="text-sm text-muted-foreground">The Linux Foundation • Valid till 2027</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-4 rounded-lg shadow-md border border-border hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold">Solutions Architect - Associate</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services (AWS) • Valid till 2028</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Resume Section - Separate Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                For more details on my SWE journey
              </h3>
              <motion.a
                href="https://drive.google.com/file/d/1IQGlz9IWZnJ69bJVpAUU_wSacNPwAxAN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={18} />
                View My Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;