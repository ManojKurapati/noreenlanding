import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
  speedX: number;
  speedY: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const numStars = 120;

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < numStars; i++) {
        // Varying sizes (0.5px to 2.2px) to simulate depth
        const size = Math.random() * 1.7 + 0.5;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          // Brighter base alpha for larger stars, dimmer for tiny stars
          baseAlpha: Math.random() * 0.5 + 0.3,
          alpha: 0,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
          // Extremely slow drift speeds (drift direction slightly angled)
          speedX: (Math.random() - 0.5) * 0.05 - 0.02,
          speedY: (Math.random() - 0.5) * 0.04 - 0.01,
        });
      }
    };

    // Track mouse position relative to screen center
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - centerX) / centerX;
      mouseRef.current.targetY = (e.clientY - centerY) / centerY;
    };

    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoothly interpolate mouse movement (easing)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const w = canvas.width;
      const h = canvas.height;

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Update phase for twinkling
        star.phase += star.twinkleSpeed;
        star.alpha = star.baseAlpha + Math.sin(star.phase) * 0.25;
        // Clamp alpha between 0.1 and 1.0
        star.alpha = Math.max(0.1, Math.min(1.0, star.alpha));

        // Update position (drift)
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen boundaries
        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
        if (star.y < 0) star.y = h;
        if (star.y > h) star.y = 0;

        // Apply subtle mouse parallax offset based on star size
        // Larger stars move more (look closer)
        const parallaxX = mouse.x * star.size * 12;
        const parallaxY = mouse.y * star.size * 12;

        let drawX = star.x - parallaxX;
        let drawY = star.y - parallaxY;

        // Wrap drawn coordinate so it stays within screen boundaries cleanly
        if (drawX < 0) drawX += w;
        if (drawX > w) drawX -= w;
        if (drawY < 0) drawY += h;
        if (drawY > h) drawY -= h;

        // Draw star
        ctx.beginPath();
        // Give stars a premium faint blue/teal glow
        ctx.fillStyle = `rgba(235, 245, 255, ${star.alpha})`;
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow effect for a few larger stars
        if (star.size > 1.8) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(165, 243, 252, ${star.alpha * 0.15})`;
          ctx.arc(drawX, drawY, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
