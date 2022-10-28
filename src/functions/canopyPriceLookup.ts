export function canopyPriceLookup(
  canopyPriceTable: Record<string, Record<string, unknown>>,
  lookup: string
) {
  const rows = Object.keys(canopyPriceTable)
  const cols = Object.keys(canopyPriceTable[rows[0]])
  const tableArray = tableObjectToArray(canopyPriceTable)

  for (let index = 0; index < tableArray.length; index++) {
    const element = String(tableArray[index][0])
    if (lookup === element) {
      return tableArray[index][1]
    }
  }
}
