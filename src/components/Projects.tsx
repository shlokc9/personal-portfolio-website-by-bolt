import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Tenant Lifecycle K8s Controller',
      description: 'Built Tenant Custom resource & Go controller (controller-runtime) to automate namespace provisioning, deletion, & error handling. Implemented per-tenant NetworkPolicies for intra-namespace traffic, optional egress, & blocking cross-namespace communication.',
      tech: ['Go', 'Kubernetes', 'Controller-Runtime', 'Client-Go', 'Docker', 'Helm', 'GitOps'],
      github: 'https://github.com/shlokc9/akuity-tenant-controller'
    },
    {
      title: 'GitHub Repository Forecasting App',
      description: 'Built a React JS Application to capture GitHub repository names & display forecast plots via Flask APIs. Developed a Python Flask backend to fetch, clean, & aggregate repo metrics from GitHub & orchestrate forecasting requests.',
      tech: ['Python', 'Flask', 'React', 'TensorFlow', 'Prophet', 'Docker', 'GCP', 'CI/CD'],
      github: 'https://github.com/shlokc9/Analyse-And-Forecast-GitHub-Repositories'
    },
    {
      title: 'Chia Blockchain\'s Plotting Process',
      description: 'Conducted a phase-by-phase breakdown of Chia\'s plot generation process to pinpoint latency issues. Employed the Mystic testbed to automate plot creation and collect granular hardware/software metrics (CPU, memory, disk I/O).',
      tech: ['Python', 'Shell Scripting', 'Linux', 'Cloud', 'Performance Analysis', 'Blockchain'],
      github: 'https://github.com/shlokc9/Plot-Generation-in-Chia'
    },
    {
      title: 'Diabetes Forecasting (MLOps-focus)',
      description: 'Orchestrated a Kubeflow + MLflow pipeline to perform hyperparameter sweeps of RandomForest models for diabetes prediction. Provisioned a Kind cluster & Helm-deployed Kubeflow Pipelines v1.8.5 & MLflow.',
      tech: ['Python', 'Kubernetes', 'Kubeflow', 'MLflow', 'Docker', 'Helm', 'Machine Learning'],
      github: 'https://github.com/shlokc9/Experiment-tracking-for-Diabetes-Prediction-using-MLflow-and-KubeFlow'
    },
    {
      title: 'Cloud Costs per Model Dashboards',
      description: 'Built Grafana dashboards to track per-model cloud spend, enabling teams to optimize costs across the AI Marketplace. Implemented Kubecost, Prometheus & Grafana to monitor performance & resource usage across NLP, CV, & deep-learning models.',
      tech: ['Python', 'Flask', 'Kubecost', 'Prometheus', 'Grafana', 'Kubernetes', 'AWS'],
      github: 'https://github.com/shlokc9'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-6xl mx-auto">
            A showcase of my technical projects spanning cloud infrastructure, machine learning, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="project-card transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="technology-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;