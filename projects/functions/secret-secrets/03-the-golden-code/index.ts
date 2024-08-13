export function createCodeCracker(settings: {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
}): (text: string) => string | undefined {
	return (text: string) => {
		for (let attempt = 0; attempt < settings.attempts; attempt++) {
			const guess = settings.makeGuess(text, attempt);
			const isCorrect = settings.validateGuess(guess);
			if (isCorrect) {
				return guess;
			}
		}
		return undefined;
	};
}
