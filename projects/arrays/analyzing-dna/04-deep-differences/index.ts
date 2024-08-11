export function deepDifferences(
	a: string[][],
	b: string[][]
): ((string | undefined)[] | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}

	let allArray: ((string | undefined)[] | undefined)[] = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			allArray[i] = undefined;
			continue;
		}

		let array: (string | undefined)[] = [];
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] === b[i][j]) {
				array[j] = a[i][j];
			} else {
				array[j] = undefined;
			}
		}

		allArray[i] = array;
	}

	return allArray;
}
