export function setupGradients() {
  const svg = document.getElementById('flowerAnimation');
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  // Flower gradient (pink)
  const flowerGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  flowerGradient.setAttribute('id', 'flowerGradient');
  flowerGradient.innerHTML = `
    <stop offset="0%" style="stop-color:#ff69b4"/>
    <stop offset="100%" style="stop-color:#ff1493"/>
  `;

  // Stem gradient (green)
  const stemGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  stemGradient.setAttribute('id', 'stemGradient');
  stemGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
  stemGradient.setAttribute('x1', '0');
  stemGradient.setAttribute('y1', '500');
  stemGradient.setAttribute('x2', '0');
  stemGradient.setAttribute('y2', '250');
  stemGradient.innerHTML = `
    <stop offset="0%" style="stop-color:#00ff87"/>
    <stop offset="100%" style="stop-color:#60efff"/>
  `;

  defs.appendChild(flowerGradient);
  defs.appendChild(stemGradient);
  svg.insertBefore(defs, svg.firstChild);
}