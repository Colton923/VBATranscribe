export default function roundSixteenth(number: number) {
  const whole = Math.floor(number)
  const numofSixteenths = Math.ceil((number - whole) / 0.0625)
  return whole + numofSixteenths * 0.0625
}
