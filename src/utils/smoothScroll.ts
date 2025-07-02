// Smooth scroll utility with distance-based duration for consistent speed
export const smoothScrollToSection = (sectionId: string, baseSpeed: number = 1400) => {
  if (sectionId === 'home') {
    smoothScrollTo(0, baseSpeed);
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
  
  smoothScrollTo(targetPosition, baseSpeed);
};

// Function for scrolling to bottom with consistent speed
export const smoothScrollToBottom = (baseSpeed: number = 1400) => {
  const targetPosition = document.body.scrollHeight - window.innerHeight;
  smoothScrollTo(targetPosition, baseSpeed);
};

const smoothScrollTo = (targetPosition: number, baseSpeed: number) => {
  const startPosition = window.pageYOffset;
  const distance = Math.abs(targetPosition - startPosition);
  
  // Calculate duration based on distance for consistent speed
  // baseSpeed is pixels per second (1400px/s = slightly faster comfortable speed)
  const minDuration = 600;  // Minimum 0.6 seconds for very short distances
  const maxDuration = 2500; // Maximum 2.5 seconds for very long distances
  
  // Calculate duration: distance / speed, with min/max bounds
  const calculatedDuration = Math.max(minDuration, Math.min(maxDuration, (distance / baseSpeed) * 1000));
  
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / calculatedDuration, 1);

    // Easing function for smooth animation
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

    if (timeElapsed < calculatedDuration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Smooth easing function
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};