import { gsap } from 'gsap';
import { flowerPaths } from './flowerPaths.js';

function updateFlowerPaths() {
  // Update middle flower
  const middleFlowerPaths = document.querySelectorAll('.middle-flower');
  middleFlowerPaths[0].setAttribute('d', flowerPaths.middle.stem);
  middleFlowerPaths[1].setAttribute('d', flowerPaths.middle.petals);

  // Update left flower
  const leftFlower = document.getElementById('leftFlower');
  leftFlower.setAttribute('transform', flowerPaths.left.transform);
  const leftFlowerPaths = leftFlower.querySelectorAll('path');
  leftFlowerPaths[0].setAttribute('d', flowerPaths.left.stem);
  leftFlowerPaths[1].setAttribute('d', flowerPaths.left.petals);

  // Update right flower
  const rightFlower = document.getElementById('rightFlower');
  rightFlower.setAttribute('transform', flowerPaths.right.transform);
  const rightFlowerPaths = rightFlower.querySelectorAll('path');
  rightFlowerPaths[0].setAttribute('d', flowerPaths.right.stem);
  rightFlowerPaths[1].setAttribute('d', flowerPaths.right.petals);
}

export function animateFlowers(onComplete) {
  updateFlowerPaths();
  
  // Animate middle flower first
  const middleFlowerPaths = document.querySelectorAll('.middle-flower');
  gsap.to(middleFlowerPaths, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power1.inOut",
    onComplete: () => {
      // Animate side flowers simultaneously
      const sideFlowerPaths = [...document.getElementById('leftFlower').querySelectorAll('.flower-path'),
                              ...document.getElementById('rightFlower').querySelectorAll('.flower-path')];
      
      gsap.to(sideFlowerPaths, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power1.inOut",
        onComplete
      });
    }
  });
}

export function resetFlowerPaths() {
  const flowerPaths = document.querySelectorAll('.flower-path');
  flowerPaths.forEach(path => {
    path.style.strokeDashoffset = '1000';
  });
}