import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target, Zap, Users, GraduationCap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Graduate Pathway Scholarship by Illinois Tech',
      description: 'Secured a merit-based scholarship fund of $12,000 to attend my MSCS graduate program at Illinois Institute of Technology',
      icon: GraduationCap,
      category: 'Scholarship'
    },
    {
      title: 'Dan Kohn Scholarship by CNCF',
      description: 'Secured a fully-funded Dan Kohn Scholarship to attend KubeCon + CloudNativeCon North America 2023 Chicago',
      icon: Trophy,
      category: 'Scholarship'
    },
    {
      title: 'Employee of the Month by UST Global',
      description: 'Earned Champ of the Team award in May 2021 for outstanding contributions at UST Xpresso Team',
      icon: Award,
      category: 'Employee Recognition'
    },
    {
      title: 'Thank You Award by UST Global',
      description: 'Earned Thank You award for Xpresso Platform Support in a company-wide Data Scientist learning program',
      icon: Star,
      category: 'Employee Recognition'
    },
    {
      title: 'Optimized Compute & Storage at Veeam Kasten',
      description: 'Optimized compute & storage overhead by over 70% in the File-Level Restore process',
      icon: Zap,
      category: 'Technical Achievement'
    },
    {
      title: 'Boosted Test Coverage at Changing The Present',
      description: 'Introduced Go unit tests with GoMock & Testify Frameworks, boosting test coverage to 90%',
      icon: Target,
      category: 'Technical Achievement'
    },
    {
      title: 'Reduced Cloud Downtime at Systems Research Lab',
      description: 'Minimized Chameleon cloud downtime by 90% through high availability setup',
      icon: Zap,
      category: 'Technical Achievement'
    },
    {
      title: 'Open-Source Work',
      description: 'Active contributor to CNCF projects including Kubestr, Kanister, and Kopia',
      icon: Users,
      category: 'Open-Source'
    },
    {
      title: 'Model Reliability Improvement at UST Global',
      description: 'Led a team to build Model Monitoring service for UST Xpresso, increasing model reliability by 40%',
      icon: Trophy,
      category: 'Technical Achievement'
    }
  ];

  const categories = ['All', 'Scholarship', 'Employee Recognition', 'Technical Achievement', 'Open-Source'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const statsData = [
    {
      number: '3+',
      label: 'Years of DevOps/Infra Experience',
      icon: Zap
    },
    {
      number: '90%',
      label: 'Test Coverage',
      icon: Target
    },
    {
      number: '30+',
      label: 'Open-Source Pull Requests',
      icon: Users
    },
    {
      number: '4+',
      label: 'Years of MLOps/Full-Stack Experience',
      icon: Award
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-8xl mx-auto">
            Accomplishments that demonstrate my unwavering dedication to building enterprise-grade software and cultivating a thriving tech community.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                  {achievement.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Updated to match website consistency */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-card p-6 rounded-xl shadow-lg text-center transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={24} />
              </div>
              <h4 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h4>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;