/*                                Summary
 * This function takes the constTables/Steel.ts table, and whatever you gave it for the "row" and "col" and converts it to make sense
 * First it gets the arrays of the first column, and first row of the table.
 * Then it compares the "row" value it was given to get the closest match farthest from the origin. This is because it will take values like 27.01 and say that value is further from
 * 30 than 30.01 is. This is so that we can round up while using the table. Finally it does this again for the column, and returns the value in the table.
 */

export default function steelIndex(table: any, row: number, col: number) {
	/* Make arrays for the first column and row of the table */
	const distancesR: any[] = []
	const distancesC: any[] = []

	/* Initialize variables */
	let tblRow = 0
	let tblCol = 0

	/* Initialize other variables */
	let scoreR = 1000
	let scoreC = 1000

	/* Load the array with the first row of the table */
	for (let index = 0; index < table.length; index++) {
		distancesR.push(table[index][0])
	}

	/* Load the array with the first column of the table */
	for (let index = 0; index < table.length; index++) {
		distancesC.push(table[0][index])
	}

	/* Find the closest match of given 'row' variable to the value in the table and return the index in the table */
	for (let index = 0; index < distancesR.length; index++) {
		const element = distancesR[index]
		if (Math.abs(+element - row) <= scoreR) {
			scoreR = Math.abs(+element - row)
			tblRow = index
		}
	}

	/* Find the closest match of given 'col' variable to the value in the table and return the index in the table */
	for (let index = 0; index < distancesC[0].length; index++) {
		const element = distancesC[0][index]
		if (Math.abs(+element - col) <= scoreC) {
			scoreC = Math.abs(+element - col)
			tblCol = index
		}
	}

	/* return the table value */
	return table[tblRow][tblCol]
}
