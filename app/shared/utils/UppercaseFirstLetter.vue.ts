export const UppercaseFirstLetter = (word: string) => {
	const letters = word.split('')
	console.log(letters[0].toUpperCase + letters[1])
}
