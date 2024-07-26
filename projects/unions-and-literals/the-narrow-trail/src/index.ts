class Status {
	constructor(
		private availableResource: "Food" | "Water" | null = null,
		private food: number = 5,
		private water: number = 5
	) {}
	setAvailableResource(resource: "Food" | "Water"): void {
		this.availableResource = resource;
	}
	isAlive(): boolean {
		return this.food !== 0 && this.water !== 0;
	}
	consume(): void {
		this.food--;
		this.water--;
	}
	resupply(diceValue: number): void {
		if (this.availableResource === "Food") {
			this.food += diceValue;
			this.availableResource = null;
		} else if (this.availableResource === "Water") {
			this.water += diceValue;
			this.availableResource = null;
		} else {
			this.availableResource = diceValue % 2 == 0 ? "Food" : "Water";
		}
	}
}

export function runCommands() {
	let status = new Status();

	for (let day = 1; day < 8; day++) {
		let diceValue = Math.floor(6 * Math.random()) + 1;
		if (diceValue === 1) {
			status.setAvailableResource("Food");
		}
		if (diceValue === 2) {
			status.setAvailableResource("Water");
		}
		if (diceValue >= 3) {
			status.resupply(diceValue);
		}
		status.consume();
		if (!status.isAlive()) {
			return false;
		}
	}
	return true;
}
