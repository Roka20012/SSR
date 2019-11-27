import { ERROR } from '../constants';

export const error = (error: any): object => ({
	type: ERROR,
	payload: {
		error
	}
});
