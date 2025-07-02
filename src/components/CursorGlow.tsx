import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const glowElement = glowRef.current;
    if (!glowElement) return;

    // Check if device supports hover (desktop only)
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isDesktop = window.innerWidth > 768;
    
    if (!supportsHover || !isDesktop) {
      glowElement.style.display = 'none';
      return;
    }

    // Direct DOM manipulation for zero-lag cursor tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        glowElement.style.opacity = '1';
        isVisibleRef.current = true;
      }
      
      // Direct transform update - no React state, no delays
      glowElement.style.left = `${e.clientX}px`;
      glowElement.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      glowElement.style.opacity = '0';
      isVisibleRef.current = false;
    };

    // Use passive listeners for maximum performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow-main"
      style={{
        opacity: 0,
        left: 0,
        top: 0,
      }}
    />
  );
};

export default CursorGlow;