import { domAPI } from '../utils/domAPI.js';

export const initRoot = (ROOT_WIDTH, ROOT_HEIGHT) => {
  const root = domAPI.querySelector('.root');
  const title = domAPI.querySelector('.title');

  root.style.width = `${ROOT_WIDTH}px`;
  root.style.height = `${ROOT_HEIGHT}px`;
  title.style.width = `${ROOT_WIDTH}px`;

  return root;
};
