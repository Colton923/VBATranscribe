export default function inchesInputToImperial(inches: number) {
	let divisor = 16
	let ft = Math.floor(inches / 12)
	let inch = inches - ft * 12 - (inches - ft * 12 - Math.floor(inches - ft * 12))
	let numerator = Math.floor((inches - ft * 12 - inch) * 100) / 100
	let top = Math.ceil(numerator * 16)
	let bot = 16
	let str = ''

	while (top % 2 === 0 && divisor > 1) {
		top /= 2
		bot /= 2
		divisor /= 2
	}

	numerator = top

	// Check if fraction is a whole, if so, add an inch and reset numerator
	if (numerator / bot === 1) {
		numerator = 0
		// If, when incremented, check if inches are now a foot or more
		if (++inch >= 12) {
			inch = 0
			ft++
		}
	}

	// If there is a fraction of an inch
	if (numerator > 0) {
		// Set the fraction string
		str = numerator + '/' + divisor + '"'

		// If there are inches, add it to the front of fraction string
		if (inch > 0) {
			str = inch + '" ' + str
		}

		// If there are feet, add it to the front of the string
		if (ft > 0) {
			str = ft + "' " + str
		}
		// Return the measurement string
		return str

		// if not fraction
	} else {
		// if inch
		if (inch > 0) {
			str = inch + '" '
		}

		// if ft
		if (ft > 0) {
			str = ft + "' " + str
		}
		return str
	}
}
