export function generateAnimationUtilities(config) {
  const classes = [];

  // Transition Property
  classes.push({ name: 'transition-none', css: '.transition-none { transition-property: none; }' });
  classes.push({ name: 'transition-all', css: '.transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }' });
  classes.push({ name: 'transition', css: '.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }' });
  classes.push({ name: 'transition-colors', css: '.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }' });
  classes.push({ name: 'transition-opacity', css: '.transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }' });
  classes.push({ name: 'transition-shadow', css: '.transition-shadow { transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }' });
  classes.push({ name: 'transition-transform', css: '.transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }' });

  // Transition Duration
  const durations = [0, 75, 100, 150, 200, 300, 500, 700, 1000];
  durations.forEach(d => {
    classes.push({ name: `duration-${d}`, css: `.duration-${d} { transition-duration: ${d}ms; }` });
  });

  // Transition Timing Function
  classes.push({ name: 'ease-linear', css: '.ease-linear { transition-timing-function: linear; }' });
  classes.push({ name: 'ease-in', css: '.ease-in { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }' });
  classes.push({ name: 'ease-out', css: '.ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }' });
  classes.push({ name: 'ease-in-out', css: '.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }' });
  classes.push({ name: 'ease-spring', css: '.ease-spring { transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); }' });
  classes.push({ name: 'ease-bounce', css: '.ease-bounce { transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }' });

  // Transition Delay
  durations.forEach(d => {
    classes.push({ name: `delay-${d}`, css: `.delay-${d} { transition-delay: ${d}ms; }` });
  });

  // Keyframe Animations
  const keyframes = `
@keyframes j-spin {
  to { transform: rotate(360deg); }
}

@keyframes j-ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}

@keyframes j-pulse {
  50% { opacity: .5; }
}

@keyframes j-bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}

@keyframes j-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes j-wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes j-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes j-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes j-slide-in-up {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes j-slide-in-down {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes j-slide-in-left {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes j-slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes j-zoom-in {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes j-zoom-out {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.95); opacity: 0; }
}

@keyframes j-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes j-glow {
  0%, 100% { box-shadow: 0 0 5px var(--j-primary), 0 0 10px var(--j-primary); }
  50% { box-shadow: 0 0 20px var(--j-primary), 0 0 30px var(--j-primary); }
}

@keyframes j-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes j-heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}

@keyframes j-flip {
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(360deg); }
}
`;

  classes.push({ name: 'keyframes', css: keyframes });

  // Animation Classes
  classes.push({ name: 'animate-none', css: '.animate-none { animation: none; }' });
  classes.push({ name: 'animate-spin', css: '.animate-spin { animation: j-spin 1s linear infinite; }' });
  classes.push({ name: 'animate-ping', css: '.animate-ping { animation: j-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }' });
  classes.push({ name: 'animate-pulse', css: '.animate-pulse { animation: j-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }' });
  classes.push({ name: 'animate-bounce', css: '.animate-bounce { animation: j-bounce 1s infinite; }' });
  classes.push({ name: 'animate-shake', css: '.animate-shake { animation: j-shake 0.5s ease-in-out; }' });
  classes.push({ name: 'animate-wiggle', css: '.animate-wiggle { animation: j-wiggle 0.5s ease-in-out infinite; }' });

  // Fade animations
  classes.push({ name: 'animate-fade-in', css: '.animate-fade-in { animation: j-fade-in 0.3s ease-out forwards; }' });
  classes.push({ name: 'animate-fade-out', css: '.animate-fade-out { animation: j-fade-out 0.3s ease-out forwards; }' });

  // Slide animations
  classes.push({ name: 'animate-slide-in-up', css: '.animate-slide-in-up { animation: j-slide-in-up 0.3s ease-out forwards; }' });
  classes.push({ name: 'animate-slide-in-down', css: '.animate-slide-in-down { animation: j-slide-in-down 0.3s ease-out forwards; }' });
  classes.push({ name: 'animate-slide-in-left', css: '.animate-slide-in-left { animation: j-slide-in-left 0.3s ease-out forwards; }' });
  classes.push({ name: 'animate-slide-in-right', css: '.animate-slide-in-right { animation: j-slide-in-right 0.3s ease-out forwards; }' });

  // Zoom animations
  classes.push({ name: 'animate-zoom-in', css: '.animate-zoom-in { animation: j-zoom-in 0.3s ease-out forwards; }' });
  classes.push({ name: 'animate-zoom-out', css: '.animate-zoom-out { animation: j-zoom-out 0.3s ease-out forwards; }' });

  // Futuristic animations
  classes.push({ name: 'animate-float', css: '.animate-float { animation: j-float 3s ease-in-out infinite; }' });
  classes.push({ name: 'animate-glow', css: '.animate-glow { animation: j-glow 2s ease-in-out infinite; }' });
  classes.push({ name: 'animate-shimmer', css: `.animate-shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); background-size: 200% 100%; animation: j-shimmer 1.5s infinite; }` });
  classes.push({ name: 'animate-heartbeat', css: '.animate-heartbeat { animation: j-heartbeat 1.5s ease-in-out infinite; }' });
  classes.push({ name: 'animate-flip', css: '.animate-flip { animation: j-flip 1s ease-in-out; }' });

  // Animation Duration
  const animDurations = ['75', '100', '150', '200', '300', '500', '700', '1000', '2000', '3000'];
  animDurations.forEach(d => {
    classes.push({
      name: `animate-duration-${d}`,
      css: `.animate-duration-${d} { animation-duration: ${d}ms; }`
    });
  });

  // Animation Delay
  animDurations.forEach(d => {
    classes.push({
      name: `animate-delay-${d}`,
      css: `.animate-delay-${d} { animation-delay: ${d}ms; }`
    });
  });

  // Animation Iteration Count
  classes.push({ name: 'animate-infinite', css: '.animate-infinite { animation-iteration-count: infinite; }' });
  classes.push({ name: 'animate-once', css: '.animate-once { animation-iteration-count: 1; }' });
  classes.push({ name: 'animate-twice', css: '.animate-twice { animation-iteration-count: 2; }' });

  // Animation Direction
  classes.push({ name: 'animate-normal', css: '.animate-normal { animation-direction: normal; }' });
  classes.push({ name: 'animate-reverse', css: '.animate-reverse { animation-direction: reverse; }' });
  classes.push({ name: 'animate-alternate', css: '.animate-alternate { animation-direction: alternate; }' });
  classes.push({ name: 'animate-alternate-reverse', css: '.animate-alternate-reverse { animation-direction: alternate-reverse; }' });

  // Animation Fill Mode
  classes.push({ name: 'animate-fill-none', css: '.animate-fill-none { animation-fill-mode: none; }' });
  classes.push({ name: 'animate-fill-forwards', css: '.animate-fill-forwards { animation-fill-mode: forwards; }' });
  classes.push({ name: 'animate-fill-backwards', css: '.animate-fill-backwards { animation-fill-mode: backwards; }' });
  classes.push({ name: 'animate-fill-both', css: '.animate-fill-both { animation-fill-mode: both; }' });

  // Animation Play State
  classes.push({ name: 'animate-running', css: '.animate-running { animation-play-state: running; }' });
  classes.push({ name: 'animate-paused', css: '.animate-paused { animation-play-state: paused; }' });

  return {
    css: classes.map(c => c.css).join('\n'),
    classes
  };
}
