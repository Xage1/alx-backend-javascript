function cleanSet(set, startString) {
	const filteredValues = Array.from(set)
	.filter(value => value.startsWith(startString))
	.map(value => value.slice(startString.length))
	.join('-');

	return filteredValues;
}
export default cleanSet;
