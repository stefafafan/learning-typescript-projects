export function shallowDifferences(
	a: string[],
	b: string[]
): (string | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}
	let arr: (string | undefined)[] = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) {
			arr[i] = a[i];
		} else {
			arr[i] = undefined;
		}
	}
	return arr;
}
