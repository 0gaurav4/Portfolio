const animatedElement = document.getElementById('animated-element');

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  animatedElement.style.left = `${x}px`;
  animatedElement.style.top = `${y}px`;
});

