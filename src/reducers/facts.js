import facts_json from '../data/facts.json';

export const FIND_FACT = 'FIND_FACT';

function facts (state = "", action) {
	switch(action.type) {
		case FIND_FACT:
			var fact = facts_json.find(fact => fact.code === action.code);

			return fact ? fact.fact : "";
		default:
			return state;
	}
}

export default facts;