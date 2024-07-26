export function runCommands() {
	let availableResource: "Food" | "Water" | null = null;
	let food = 5;
	let water = 5;

	for (let day = 1; day < 8; day++) {
		let randomValue = Math.floor(6 * Math.random()) + 1;
		if (randomValue === 1) {
			availableResource = "Food";
		}
		if (randomValue === 2) {
			availableResource = "Water";
		}
		if (randomValue >= 3) {
			if (availableResource === "Food") {
				food += randomValue;
				availableResource = null;
			} else if (availableResource === "Water") {
				water += randomValue;
				availableResource = null;
			} else {
				availableResource = randomValue % 2 == 0 ? "Food" : "Water";
			}
		}
		food--;
		water--;
		if (food === 0 || water === 0) {
			return false;
		}
	}
	return true;
}
