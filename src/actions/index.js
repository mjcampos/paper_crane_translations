export const INCREMENT = 'INCREMENT';
export const FIND_FACT = 'FIND_FACT';

export function increment() {
	return {
		type: INCREMENT
	}
}

export function findFact(code) {
	return {
		type: FIND_FACT,
		code
	}
}