import { addBanner } from './banner.js';
import styles from './counter.module.css';
import './postcss.css';
export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');
  countElement.classList.add(styles.count);
  let count = 0;

  const render = () => {
    countElement.textContent = count;

    if (count < 0) {
      addBanner("You're below ziro!");
    }
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;
    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
