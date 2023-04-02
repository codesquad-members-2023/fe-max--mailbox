export function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export async function delayedCallback(callback, ms) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(callback()), ms);
    } catch (error) {
      reject(error);
    }
  });
}
