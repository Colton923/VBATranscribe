export function steelPriceLookup(
  steelPriceTable: Record<string, Record<string, unknown>>,
  me: ThreeD
) {
  const rows = Object.keys(steelPriceTable)
  const cols = Object.keys(steelPriceTable[rows[0]])
  const tableArray = tableObjectToArray(steelPriceTable)
  const lookup = me.type

  if (lookup.includes('TS')) {
    for (let i = 0; i < rows.length; i++) {
      const element = tableArray[i]

      if (lookup === tableArray[i][0]) {
        return tableArray[i][1]
      }
    }
  } else {
    return 0.99
  }
  return 0
}
