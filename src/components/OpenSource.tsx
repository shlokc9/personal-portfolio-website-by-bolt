import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, GitPullRequest, Calendar } from 'lucide-react';

const OpenSource = () => {
  const contributions = [
    {
      title: 'Kubestr',
      company: 'Veeam Software—Veeam Kasten',
      period: 'May 2024 - Sep 2024',
      description: 'Contributed to kubestr, a tool for discovering, validating and evaluating Kubernetes storage options. Developed Kubestr\'s browse & restore CLI functionality to enable efficient file search & selective restoration from backup volumes.',
      skills: ['Go', 'Kubernetes', 'Docker', 'Storage', 'Cobra CLI', 'Google Container Registry', 'Makefile', 'Go Mock', 'Fake Tests', 'Helm Charts', 'GitHub Actions'],
      icon: Code,
      link: 'https://github.com/kastenhq/kubestr/pulls?q=is%3Apr+author%3Ashlokc9'
    },
    {
      title: 'Kanister',
      company: 'CNCF Sandbox Project—Veeam Kasten',
      period: 'Dec 2021 - Nov 2022',
      description: 'Enhanced Kanister, a framework for application-level data management on Kubernetes. Enhanced app protection workflows by developing CSI supported Kanister functions & the Kopia Repository Server controller.',
      skills: ['Go', 'Kubernetes', 'Docker', 'Data Protection', 'Backup/Restore', 'K8s Controllers', 'Container Storage Interface', 'Kopia', 'Restic', 'PostgreSQL', 'MySQL', 'Cloud Native'],
      icon: Code,
      link: 'https://github.com/kanisterio/kanister/pulls?q=is%3Apr+author%3Ashlokc9+is%3Aclosed'
    },
    {
      title: 'Kopia',
      company: 'Open Community Driven',
      period: 'Jun 2022 - Jun 2022',
      description: 'Contributed to Kopia, a fast and secure open-source backup/restore tool. Fixed a critical CLI bug where the users encountered unknown unit error while setting backup retention period for backups in days.',
      skills: ['Go', 'Kingpin CLI', 'Backup/Restore', 'Security & Encryption', 'Data Deduplication & Compression', 'Amazon S3', 'Azure Blob Storage', 'Google Cloud Storage', 'Backblaze B2'],
      icon: Code,
      link: 'https://github.com/kopia/kopia/pulls?q=is%3Apr+author%3Ashlokc9+is%3Aclosed'
    }
  ];

  return (
    <section id="opensource" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Open-Source Contributions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-6xl mx-auto">
            I believe in the value of giving back to the tech community by engaging with open-source software.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary hidden md:block"></div>
          
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start ${index === contributions.length - 1 ? 'mb-0' : 'mb-12'}`}
            >
              <div className="absolute left-6 w-4 h-4 bg-card border-4 border-secondary rounded-full hidden md:block"></div>
              
              <div className="md:ml-16 bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 w-full">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{contribution.title}</h3>
                    <p className="text-secondary font-medium mb-2">{contribution.company}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} /> {contribution.period}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <contribution.icon size={20} />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{contribution.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="technology-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={contribution.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors duration-300"
                >
                  <GitPullRequest size={16} className="mr-2" />
                  <span>View Contributions</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;