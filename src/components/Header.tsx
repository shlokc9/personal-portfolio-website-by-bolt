import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, FlaskConical, Calendar } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { smoothScrollToSection, smoothScrollToBottom } from '../utils/smoothScroll';

// Declare Calendly as a global variable for TypeScript
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface HeaderProps {
  activeSection: string;
}

interface NavLink {
  href: string;
  label: string;
  icon?: React.ElementType;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#work-experience', label: 'Experience' },
    { href: '#opensource', label: 'Open-Source' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    
    // Special handling for contact - scroll to bottom of page with consistent speed
    if (sectionId === 'contact') {
      smoothScrollToBottom();
    } else {
      // Use consistent scroll speed for all other sections
      smoothScrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  // Determine if we should show Calendly button (when in contact section)
  const showCalendlyButton = activeSection === 'contact';

  const handleMobileButtonClick = () => {
    if (showCalendlyButton) {
      // Calendly functionality
      if (window.Calendly) {
        window.Calendly.initPopupWidget({url: 'https://calendly.com/shlokc9'});
      } else {
        // Fallback: open in new tab if Calendly script hasn't loaded
        window.open('https://calendly.com/shlokc9', '_blank');
      }
    } else {
      // Passion project functionality - trigger expanded view
      // This will be handled by a callback prop from CurrentWorkBubble
      if (window.triggerPassionProjectExpanded) {
        window.triggerPassionProjectExpanded();
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              onClick={() => smoothScrollToSection('home')}
              className="relative cursor-pointer w-max text-gradient"
              aria-label="Go to top"
            >
              {/* SC text only visible on the home section */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: activeSection === 'home' ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-xl sm:text-2xl font-bold text-gradient"
              >
                SC
              </motion.div>
  
              {/* Home icon only shows once you leave “home” */}
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                initial={{ opacity: 0, x: '-50%', y: '-50%' }}
                animate={{
                  opacity: activeSection === 'home' ? 0 : 1,
                  x: '-50%',
                  y: '-50%',
                }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 left-1/2"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--tw-gradient-from)" />
                    <stop offset="100%" stopColor="var(--tw-gradient-to)" />
                  </linearGradient>
                </defs>
                <path
                  d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5z"
                  stroke="url(#logoGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <div key={link.href} className="relative">
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      whileHover={{ y: -2 }}
                      className={`text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 font-medium relative cursor-pointer flex items-center gap-1 text-sm lg:text-base ${
                        isActive ? 'text-primary' : ''
                      } ${link.icon ? 'pb-1' : ''}`}
                    >
                      {link.icon && <link.icon size={16} />}
                      {!link.icon && link.label}
                    </motion.a>
  
                    {/* Enhanced gradient underline animation - faster and more responsive */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ 
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{ originX: 0.5 }}
                    />
                    
                    {/* Hover effect underline - faster response */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: isActive ? 0 : 1 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      style={{ originX: 0.5 }}
                    />
                  </div>
                );
              })}
              
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Transition Button */}
              <motion.button
                onClick={handleMobileButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium text-xs"
              >
                {showCalendlyButton ? (
                  <>
                    <Calendar size={14} />
                    <span>Schedule</span>
                  </>
                ) : (
                  <>
                    <FlaskConical size={14} />
                    <span>Project</span>
                  </>
                )}
              </motion.button>
              
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <div key={link.href} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer ${
                        isActive ? 'text-primary bg-primary/5 dark:bg-primary/10' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {link.icon && <link.icon size={18} />}
                          <span className="text-base">{link.label}</span>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        )}
                      </div>
                    </a>
                  </div>
                );
              })}
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  );
};

export default Header;