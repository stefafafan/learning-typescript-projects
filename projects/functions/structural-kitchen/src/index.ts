type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};
type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (
		recipe: (ingredients: Stock) =>
			| {
					succeeded: false;
			  }
			| {
					succeeded: true;
					newStock: Stock;
			  }
	) => boolean;
};

function increaseStock(a: Stock, b: Stock): Stock {
	const added: Stock = {
		breads: a.breads + b.breads,
		fruits: a.fruits + b.fruits,
		sauces: a.sauces + b.sauces,
		vegetables: a.vegetables + b.vegetables,
	};
	return added;
}

export function createKitchen(
	budget: number,
	cleaner: (dirt: number, time?: number) => number,
	supplier: (expense: number) => Stock
): Kitchen {
	let currentBudget = budget;
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	const kitchen: Kitchen = {
		announce: () => {
			return `I have ${dirt} much dirt, ${currentBudget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`;
		},
		clean: (time?: number) => {
			dirt = cleaner(dirt, time);
		},
		purchase: (expense: number) => {
			if (currentBudget < expense) {
				return false;
			}
			const supplied = supplier(expense);
			stock = increaseStock(stock, supplied);
			currentBudget -= expense;
			return true;
		},
		prepare: (
			recipe: (ingredients: Stock) =>
				| {
						succeeded: false;
				  }
				| {
						succeeded: true;
						newStock: Stock;
				  }
		) => {
			if (dirt >= 100) {
				return false;
			}
			const created = recipe(stock);
			dirt++;
			if (created.succeeded) {
				stock = created.newStock;
				return true;
			}
			return false;
		},
	};
	return kitchen;
}
