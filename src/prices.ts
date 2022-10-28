import { ThreeD } from 'quokkaTest'

// What table is being used?
export function steelPriceLookup(steelPriceTable: any, me: ThreeD) {
  const length = Math.max(Math.abs(me.length_Y), Math.abs(me.width_X), Math.abs(me.height_Z))

  if (me.type.startsWith('TS') === true) {
    for (let i = 0; i < steelPriceTable.length; i++) {
      if (me.type === steelPriceTable[i][0]) {
        return steelPriceTable[i][1]
      }
    }
  } else {
    const dims = me.type.split('x')
    const lbsPerFt = +dims[1]
    return lbsPerFt
  }
  return 0
}
// This table can only be {String, Number}
export const miscPriceTable = {
  'Non-Insulated Window': 30,
  'Insulated Window': 50,
  'Full Glass Panel Window': 25,
  Manual: 0,
  'Chain Hoist': 300,
  'Electric Opener': 0,
  'Vinyl Backed': 2.5,
  'Steel Backed': 3.5,
  '4 x 4\'6" Door Canopy': 500,
  '4 x 7\'6" Door Canopy Door Canopy': 800,
  '3070 Door Slab W/O Deadbolt W/O Glass': 171.96,
  '3070 Door Slab W/ Deadbolt W/O Glass': 237.7,
  '3070 Door Slab W/O Deadbolt W/ Glass': 364.0,
  '3070 Door Slab W/ Deadbolt W/ Glass': 327.5,
  '4070 Door Slab W/O Deadbolt W/O Glass': 306.06,
  '4070 Door Slab W/ Deadbolt W/O Glass': 372.0,
  '4070 Door Slab W/O Deadbolt W/ Glass': 346.0,
  '4070 Door Slab W/ Deadbolt W/ Glass': 403.75,
  '3070 4.25" Jamb Kit W/O Deadbolt': 264.31,
  '3070 4.25" Jamb Kit W/ Deadbolt': 348.57,
  '3070 6.25" Jamb Kit W/O Deadbolt': 264.31,
  '3070 6.25" Jamb Kit W/ Deadbolt': 264.31,
  '3070 8.25" Jamb Kit W/O Deadbolt': 229.27,
  '3070 8.25" Jamb Kit W/ Deadbolt': 359.13,
  '3070 10.25" Jamb Kit W/O Deadbolt': 207.13,
  '3070 10.25" Jamb Kit W/ Deadbolt': 237.04,
  '4070 4.25" Jamb Kit W/O Deadbolt': 276.83,
  '4070 4.25" Jamb Kit W/ Deadbolt': 248.17,
  '4070 6.25" Jamb Kit W/O Deadbolt': 276.85,
  '4070 6.25" Jamb Kit W/ Deadbolt': 248.17,
  '4070 8.25" Jamb Kit W/O Deadbolt': 276.85,
  '4070 8.25" Jamb Kit W/ Deadbolt': 248.17,
  '4070 10.25" Jamb Kit W/O Deadbolt': 236.0,
  '4070 10.25" Jamb Kit W/ Deadbolt': 265.92,
  '24" Exhaust Fan': 270,
  '30" Exhaust Fan': 315,
  '36" Exhaust Fan': 390,
  '24" Weather Hood': 333,
  '30" Weather Hood': 258,
  '36" Weather Hood': 448,
  'TS 4x4x11GA': 1.2,
  'TS 4x4x3/16': 1,
  'TS 4x4x1/4': 1,
  'TS 4x4x3/8': 1,
  'TS 4x4x1/2': 1,
  '8" Receiver Cee': 4,
  '10" Receiver Cee': 4,
  '8" C Purlin': 4,
  '10" C Purlin': 4,
  'Eave Strut': 6.49,
}
/**
 * hight lift inches: price
 */
export const highLiftPriceTable = {
  36: 60,
  54: 90,
  72: 120,
  96: 150,
  120: 180,
}

export const WINDOW_PRICE_PER_SQ_FT = 17
export const ROLLUPDOOR_PRICE_PER_SQ_FT = 8.52

export function canopyPriceLookup(canopyPriceTable: any, lookup: string) {
  for (let index = 0; index < canopyPriceTable.length; index++) {
    const element = String(canopyPriceTable[index][0])
    if (lookup === element) {
      return canopyPriceTable[index][1]
    }
  }
}

export function miscellaneousPriceLookup(miscPriceTable: any, item: string) {
  return miscPriceTable[item]
}

export function highLiftPriceLookup(highLiftPriceTable: any, buildingZ: number, z_Height: number) {
  const inches = buildingZ - z_Height
  const tableInches = Object.keys(highLiftPriceTable)
  let score = 1000
  let key = ''

  for (let i = 0; i < tableInches.length; i++) {
    const item = Number(tableInches[i])

    if (Math.abs(inches - item) < score) {
      score = Math.abs(inches - item)
      key = tableInches[i]
    }
  }

  return highLiftPriceTable[key]
}

// export function overheadDoor_Sectional_PriceLookup(
//   row: number,
//   col: number,
//   overheadDoor_Sectional_PriceTbl: any
// ) {
//   for (let i = 0; i < overheadDoor_Sectional_PriceTbl.length; i++) {
//     const colZero = overheadDoor_Sectional_PriceTbl[i][0]
//     if (row === colZero) {
//       for (let j = 0; j < overheadDoor_Sectional_PriceTbl[0].length; j++) {
//         const rowZero = overheadDoor_Sectional_PriceTbl[0][j]
//         if (col === rowZero) {
//           return overheadDoor_Sectional_PriceTbl[i][j]
//         }
//       }
//       return 0
//     }
//   }
// }
