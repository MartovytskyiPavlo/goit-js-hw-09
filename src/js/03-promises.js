import Notiflix from 'notiflix';

const form = document.querySelector("form.form");

form.addEventListener("submit", createProcess);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(event => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
}

function createProcess(event) {
  event.preventDefault();

  const sDelay = form.elements.delay;
  const sStep = form.elements.delayIncrement;
  const sAmount = form.elements.amount;

  delay = Number(sDelay); 
  delayIncrement = Number(sStep);
  amount = Number(sAmount);

  for(let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayIncrement;
  }
}