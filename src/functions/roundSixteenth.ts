export default function roundSixteenth(number: number) {
	const whole = Math.floor(number)
	const numOfSixths = Math.ceil((1 - (Math.ceil(number) - number)) / 0.0625)
	return whole + numOfSixths * 0.0625
}
