export function createCipher(
	cipher: (text: string) => string
): (text: string) => string {
	return (text: string) => {
		let ciphered = "";
		for (const c of text) {
			ciphered += cipher(c);
		}
		return ciphered;
	};
}
