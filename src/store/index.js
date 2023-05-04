import { proxy } from 'valtio';

const state = proxy({
  DisableClick: 'all'
});

export default state;
