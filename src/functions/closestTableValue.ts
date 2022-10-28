/*                                Summary
 * This function takes the constTables/Steel.ts table, and whatever you gave it for the "row" and "col" and converts it to make sense
 * First it gets the arrays of the first column, and first row of the table.
 * Then it compares the "row" value it was given to get the closest match farthest from the origin. This is because it will take values like 27.01 and say that value is further from
 * 30 than 30.01 is. This is so that we can round up while using the table. Finally it does this again for the column, and returns the value in the table.
 */

export default function closestTableValue(
  table: Record<string, Record<string, unknown>>,
  width: number,
  col: number
) {
  const rows = Object.keys(table)
  const cols = Object.keys(table[rows[0]])
  const tableArray = tableObjectToArray(table)

  /* Initialize variables */
  let rowIndex = 0
  let colIndex = 0

  /* Initialize other variables to the first possible score */
  let scoreR = Math.abs(+rows[0] - width)
  let scoreC = Math.abs(+cols[0] - col)

  /* Find the closest match of given 'row' variable to the value in the table and return the index in the table */
  for (let index = 0; index < rows.length; index++) {
    const element = rows[index]
    if (Math.abs(+element - width) <= scoreR) {
      scoreR = Math.abs(+element - width)
      rowIndex = index
    }
  }

  /* Find the closest match of given 'col' variable to the value in the table and return the index in the table */
  for (let index = 0; index < cols.length; index++) {
    const element = cols[index]
    if (Math.abs(+element - col) <= scoreC) {
      scoreC = Math.abs(+element - col)
      colIndex = index
    }
  }

  /* return the table value */
  return tableArray[rowIndex][colIndex]
}
