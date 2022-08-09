import Notiflix from 'notiflix';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success('Sol lucet omnibus');
  } else {
    // Reject
    Notiflix.Notify.failure('Qui timide rogat docet negare');
  }
}



