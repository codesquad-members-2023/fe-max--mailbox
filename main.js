import { villageMaker } from './villageMaker.js';

function main() {
  const root = document.querySelector('root');

  const towns = villageMaker();
  console.log(towns);
}

main();
