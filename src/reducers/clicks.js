export const INCREMENT = 'INCREMENT';

function clicks(state = 0, action) {
	switch(action.type) {
		case INCREMENT:
			return state += 1;
		default:
			return state;
	}
}

export default clicks;