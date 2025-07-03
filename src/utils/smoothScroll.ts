// Smooth scroll utility with distance-based duration for consistent speed
export const smoothScrollToSection = (sectionId: string) => {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) return;

  // Get the header height dynamically
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 80;
  
  // Calculate target position with CONSISTENT offset for all sections
  // Using a standardized offset that ensures uniform spacing across all sections
  const standardOffset = -72; // This creates the perfect visual spacing
  const targetPosition = section.offsetTop - headerHeight - standardOffset;
  
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};

// Function for scrolling to bottom with consistent speed
export const smoothScrollToBottom = () => {
  const targetPosition = document.body.scrollHeight - window.innerHeight;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};
