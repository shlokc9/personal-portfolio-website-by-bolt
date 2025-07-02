import { motion } from 'framer-motion';
import { Code, Cloud, Database, BookOpen, PenTool as Tool, GraduationCap, Layers, HardDrive, Library, Wrench, Heart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Golang', 'Python', 'Rust', 'TypeScript', 'JavaScript', 'Java', 'C++', 'HTML/CSS', 'Bash', 'Shell Scripting'],
      color: 'from-primary to-secondary',
      icon: Code
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Apache Cassandra', 'PostgreSQL', 'Amazon Redshift', 'Neo4j'],
      color: 'from-primary to-secondary',
      icon: Database
    },
    {
      title: 'Libraries',
      skills: ['Gin', 'Gorilla', 'Ginkgo', 'Client-Go', 'Django', 'FastAPI', 'Flask', 'Pytest', 'SQLAlchemy', 'Pandas', 'Pyspark', 'Numpy', 'Matplotlib', 'Spring Boot', 'React.js', 'Node.js'],
      color: 'from-primary to-secondary',
      icon: BookOpen
    },
    {
      title: 'Tools',
      skills: ['Docker', 'Kubernetes', 'Helm', 'Ansible', 'Terraform', 'Redis', 'RabbitMQ', 'Kafka', 'Jupyter Hub', 'Excalidraw', 'MS Visio', 'JIRA', 'Confluence', 'Bitbucket', 'GitHub'],
      color: 'from-primary to-secondary',
      icon: Tool
    },
    {
      title: 'Cloud Platforms & Services',
      skills: ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Microsoft Azure', 'GitHub Actions', 'Codefresh', 'Argo CD', 'Jenkins'],
      color: 'from-primary to-secondary',
      icon: Cloud
    },
    {
      title: 'Coursework',
      skills: ['Data-Structures', 'Algorithms', 'Object-Oriented Programming', 'Database Organization', 'Design Patterns', 'Machine Learning', 'Distributed Systems', 'Cloud Computing', 'Full-Stach Development'],
      color: 'from-primary to-secondary',
      icon: GraduationCap
    }
  ];

  const interests = [
    'Microservices',
    'REST APIs',
    'gRPC',
    'Event-Driven Architecture',
    'Caching',
    'System Architecture',
    'Load Balancing',
    'Kubernetes Controllers & Operators',
    'CI/CD',
    'DevOps',
    'GitOps',
    'Infrastructure Automation',
    'Open-Source Development',
    'MLOps',
    'LLMOps',
    'Serverless',
    'Cloud Platforms',
    'Test-Driven Development',
    'Developer Productivity',
    'Storage',
    'Data Protection'
  ];

  const statsData = [
    {
      icon: Layers,
      label: '10+',
      description: 'Programming Languages'
    },
    {
      icon: HardDrive,
      label: '6+',
      description: 'Database Systems'
    },
    {
      icon: Library,
      label: '15+',
      description: 'Libraries & Frameworks'
    },
    {
      icon: Wrench,
      label: '15+',
      description: 'Development Tools'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to build highly available software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="bg-card p-5 rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.03) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary Stats - Updated with larger font sizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={20} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.label}</div>
              <div className="text-base text-muted-foreground font-medium">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interests Section - Optimized spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-5 rounded-xl shadow-md border border-border">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Interests</h3>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground rounded-full text-sm font-medium border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;