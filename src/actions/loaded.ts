import { LOADED } from '../constants';

export const loaded = (loaded: boolean): object => ({
  type: LOADED,
  payload: {
    loaded
  }
});
