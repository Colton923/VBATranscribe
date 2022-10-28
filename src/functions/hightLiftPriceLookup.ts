export function highLiftPriceLookup(
  highLiftPriceTable: Record<string, number>,
  buildingZ: number,
  z_Height: number
) {
  const tableInches = Object.keys(highLiftPriceTable)
  const inches = buildingZ - z_Height
  let score = 1000
  let key = tableInches[0]

  for (let i = 0; i < tableInches.length; i++) {
    const currInches = Number(tableInches[i])

    if (Math.abs(inches - currInches) < score) {
      score = Math.abs(inches - currInches)
      key = tableInches[i]
    }
  }

  return highLiftPriceTable[key]
}
