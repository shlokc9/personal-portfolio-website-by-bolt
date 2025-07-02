import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shlokc9',
      link: 'https://www.linkedin.com/in/shlokc9'
    },
    {
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      label: 'X (Twitter)',
      value: '@shlokc9',
      link: 'https://x.com/shlokc9'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'shlokmc9.work@gmail.com',
      link: 'mailto:shlokmc9.work@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shlokc9',
      link: 'https://github.com/shlokc9'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@shlokc9',
      link: 'https://www.instagram.com/shlokc9'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (312) 404-0210',
      link: 'tel:+13124040210'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            Whether you want to discuss a project, explore collaboration opportunities, 
            or just say hello, I'd love to hear from you. Feel free to reach out through 
            any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 sm:mb-16"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 min-h-[80px] sm:min-h-[100px]"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={18} />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base mb-1">{info.label}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm break-words">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;