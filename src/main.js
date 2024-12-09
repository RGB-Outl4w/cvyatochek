import { gsap } from 'gsap';
import { setupGradients } from './gradients.js';
import { animateFlowers, resetFlowerPaths } from './animations.js';

const startButton = document.getElementById('startButton');
const flowerAnimation = document.getElementById('flowerAnimation');
const restartText = document.getElementById('restartText');

// Initialize gradients
setupGradients();

function startAnimation() {
  gsap.to(startButton, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      startButton.classList.add('hidden');
      flowerAnimation.classList.remove('hidden');
      gsap.to(flowerAnimation, {
        opacity: 1,
        duration: 0.5,
        onComplete: () => animateFlowers(showRestartText)
      });
    }
  });
}

function showRestartText() {
  restartText.classList.remove('hidden');
  gsap.to(restartText, {
    opacity: 1,
    duration: 0.5
  });
}

function reset() {
  gsap.to([restartText, flowerAnimation], {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      restartText.classList.add('hidden');
      flowerAnimation.classList.add('hidden');
      resetFlowerPaths();
      startButton.classList.remove('hidden');
      gsap.to(startButton, {
        opacity: 1,
        duration: 0.5
      });
    }
  });
}

// Event Listeners
startButton.addEventListener('click', startAnimation);
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'r') {
    reset();
  }
});