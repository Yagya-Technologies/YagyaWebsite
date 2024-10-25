import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const ballsRef = useRef([]);
  const colors = [
    "rgb(26, 188, 156)",
    "rgb(46, 204, 113)",
    "rgb(52, 152, 219)",
    "rgb(155, 89, 182)",
    "rgb(241, 196, 15)",
    "rgb(230, 126, 34)",
    "rgb(231, 76, 60)"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let mouseTimeout;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Ball {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 10;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.dx = (Math.random() - 0.5) * 4;
        this.dy = (Math.random() - 0.5) * 4;
        this.lifetime = 120; // How long the ball will last
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
        
        // Ball moves within bounds
        if (this.x + this.size > canvas.width || this.x - this.size < 0) this.dx *= -1;
        if (this.y + this.size > canvas.height || this.y - this.size < 0) this.dy *= -1;

        // Decrease size based on lifetime
        if (this.lifetime > 0) {
          this.lifetime--;
          this.size *= 0.95; // Gradually reduce size
        }
      }

      isAlive() {
        return this.lifetime > 0 && this.size > 0.5; // Return true if alive
      }
    }

    const animationLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ballsRef.current.forEach((ball) => {
        ball.update();
        ball.draw(ctx);
      });
      ballsRef.current = ballsRef.current.filter(ball => ball.isAlive()); // Remove dead balls
      requestAnimationFrame(animationLoop);
    };

    const handleMouseMove = (e) => {
      clearTimeout(mouseTimeout); // Clear existing timeout
      ballsRef.current.push(new Ball(e.clientX, e.clientY));

      mouseTimeout = setTimeout(() => {
        // When mouse stops moving, allow some time for balls to disappear
        ballsRef.current.forEach(ball => {
          ball.lifetime = 0; // Set lifetime to 0 to start fading out
        });
      }, 1000); // Adjust time as needed (1 second here)
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fullscreen-canvas"
    />
  );
};

export default CanvasAnimation;
