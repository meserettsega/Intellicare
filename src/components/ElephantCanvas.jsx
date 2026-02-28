import React, { useLayoutEffect, useRef, useCallback } from "react";

const ElephantCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let width, height;
    let time = 0;

    const config = {
      primary: "#27b6af", 
      lineAlpha: 0.6,      // Bold visibility
      lineWidth: 2.5,     // Thicker connected lines
      nodeRadius: 4,      // Larger visible dots
      influenceRadius: 350, // Large area of movement
      returnStrength: 0.015, // Smooth float back
      friction: 0.92       // Snappy movement
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();

    // --- Node Structure ---
    const nodes = [];
    const centerX = 0.5;
    const centerY = 0.45;
    const layers = 4;

    for (let layer = 1; layer <= layers; layer++) {
      const points = 10 + layer * 5;
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const radius = 0.07 * layer;
        
        nodes.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          baseX: centerX + Math.cos(angle) * radius,
          baseY: centerY + Math.sin(angle) * radius,
          vx: 0,
          vy: 0,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // --- Physics Logic ---
      nodes.forEach((node) => {
        // Constant organic floating
        node.vx += Math.sin(time + node.phase) * 0.0001;
        node.vy += Math.cos(time + node.phase) * 0.0001;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x / width - node.x;
          const dy = mouseRef.current.y / height - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < config.influenceRadius / width) {
            // "Move Freely" - Nodes are strongly pulled by the cursor
            const force = (1 - dist / (config.influenceRadius / width)) * 0.012;
            node.vx += dx * force;
            node.vy += dy * force;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= config.friction;
        node.vy *= config.friction;

        // Smooth return to base shape
        node.x += (node.baseX - node.x) * config.returnStrength;
        node.y += (node.baseY - node.y) * config.returnStrength;
      });

      // --- Draw Bold Connections ---
      ctx.lineWidth = config.lineWidth;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = (nodes[i].x - nodes[j].x) * width;
          const dy = (nodes[i].y - nodes[j].y) * height;
          const distSq = dx * dx + dy * dy;

          if (distSq < 100 * 100) { 
            const opacity = (1 - Math.sqrt(distSq) / 100) * config.lineAlpha;
            ctx.strokeStyle = `rgba(39, 182, 175, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
            ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
            ctx.stroke();
          }
        }
      }

      // --- Draw Bold Nodes ---
      nodes.forEach((node) => {
        ctx.fillStyle = config.primary;
        ctx.beginPath();
        ctx.arc(node.x * width, node.y * height, config.nodeRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const onMouseMove = useCallback((e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { mouseRef.current.active = false; }}
      className="absolute inset-0 w-full h-full block bg-transparent"
      style={{ pointerEvents: 'auto', cursor: 'default' }} // Shows standard cursor
    />
  );
};

export default ElephantCanvas;