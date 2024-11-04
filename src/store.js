import { AppReduser } from './reduser';
import { createStore } from 'redux';

// export const createStore = (AppReduser, initialState) => {
// 	let state = initialState;

// 	return {
// 		dispach: (action) => {
// 			state = AppReduser(state, action);
// 		},
// 		getState: () => state,
// 		// subscribe: (fn) => fn(store.getState),
// 	};
// };

export const store = createStore(AppReduser);
