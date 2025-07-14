import { motion } from 'framer-motion';
import { Code, Cloud, Database, Award, Car, Dumbbell, Utensils, Crown, Tv, Headphones } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Database, number: '4+', label: 'Years Experience' },
    { icon: Cloud, number: '3+', label: 'Open-Source Contributions' },
    { icon: Code, number: '3+', label: 'Companies worked at' },
    { icon: Award, number: '2+', label: 'Major Certifications' }
  ];

  const interests = [
    { icon: Utensils, label: 'Big-time foodie' },
    { icon: Car, label: 'Long drives and wandering in nature' },
    { icon: Dumbbell, label: 'Gym enthusiast' },
    { icon: Crown, label: 'Plays chess' },
    { icon: Tv, label: 'Binge watching' },
    { icon: Headphones, label: 'Listening to country music' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        {/* Main Content - Now uses full container width exactly like stats and interests */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            {/* Grey text now uses full container width - no max-width constraint */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-xl text-muted-foreground leading-relaxed text-justify sm:text-justify">
              <p>
                I'm a software developer passionate about crafting scalable, resilient backend systems that blend thoughtful architecture with robust engineering. My favorite work lies at the intersection of cloud infrastructure and application development, creating solutions that not only perform exceptionally but are meticulously built for reliability and observability.
              </p>
              <p>
                Currently, I'm a Software Engineer with 4 years of experience specializing in Cloud-Native technologies, MLOps/LLMOps solutions and DevOps practices. I contribute to building and maintaining distributed systems that power modern applications, ensuring our platforms meet performance standards and best practices to deliver exceptional user experiences at scale.
              </p>
              <p>
                In the past, I've had the opportunity to develop software across a variety of settings; from large-scale enterprise systems and cloud infrastructure to innovative startups and open-source projects. I've also contributed significantly to CNCF projects like Kubestr, Kanister, and Kopia, helping improve data protection and storage validation tools for the Kubernetes ecosystem.
              </p>
              <p>
                My expertise spans Go, Python, Kubernetes, Docker, AWS, GCP, and various data technologies. Throughout my career, I've optimized system performance by up to 70%, boosted test coverage to 90%, and delivered resilient microservices and APIs that handle millions of requests daily.
              </p>
              <p>
                In my spare time, I'm usually exploring new cloud technologies, contributing to open-source projects, hiking trails around Chicago & San Francisco, or playing chess on{' '}
                <a 
                  href="http://chess.com/member/thewarpup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-300 font-medium"
                >
                  Chess.com
                </a>
                {' '}(always open to a friendly rapid game!).
              </p>
            </div>
          </motion.div>

          {/* Stats Section - Uses same grid layout as other sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-4 sm:p-6 rounded-xl shadow-lg text-center transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="text-white" size={20} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{stat.number}</h4>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Interests - Uses same grid layout as other sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">When I'm not coding</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <interest.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-muted-foreground text-left">
                    {interest.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Philosophy - Now uses full container width like other sections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Philosophy card now uses full container width - no max-width constraint */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl border border-border">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">My Philosophy</h4>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                "Great software isn't just about writing code; it's about understanding the problem deeply, 
                designing elegant solutions, and building systems that can evolve with changing needs. 
                I believe in the power of open-source, continuous learning, and creating technology 
                that makes a meaningful impact on people's lives."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;