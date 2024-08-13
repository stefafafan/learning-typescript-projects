export function createAdvancedCipher(
	onVowel: (text: string) => string,
	onConsonant: (text: string) => string,
	onPunctuation: (text: string) => string
): (text: string) => string {
	return (text: string) => {
		let ciphered = "";
		for (const c of text) {
			if ("aeiou".includes(c)) {
				ciphered += onVowel(c);
			} else if ("bcdfghjklmnpqrstvwxyz".includes(c)) {
				ciphered += onConsonant(c);
			} else {
				ciphered += onPunctuation(c);
			}
		}
		return ciphered;
	};
}
