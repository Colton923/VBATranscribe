import { ThreeD } from 'quokkaTest'

export function steelPriceLookup(me: ThreeD, steelPriceTbl: any) {
  const length = Math.max(Math.abs(me.length_Y), Math.abs(me.width_X), Math.abs(me.height_Z))
  const lookup = me.type
  if (lookup.includes('TS') === true) {
    for (let i = 0; i < steelPriceTbl.length; i++) {
      if (lookup === steelPriceTbl[i][0]) {
        return steelPriceTbl[i][1]
      }
    }
  } else {
    const dims = lookup.split('x')
    const lbsPerFt = +dims[1]
    return lbsPerFt
  }
  return 0
}
// This table can only be {String, Number}
export const miscellaneousTbl = [
  ['Non-Insulated Window', 30],
  ['Insulated Window', 50],
  ['Full Glass Panel Window', 25],
  ['Manual', 0],
  ['Chain Hoist', 300],
  ['Electric Opener', 0],
  ['Vinyl Backed', 2.5],
  ['Steel Backed', 3.5],
  ['4' + "'" + ' x ' + '4' + "'" + '6" Door Canopy', 500],
  ['4' + "'" + ' x ' + '7' + "'" + '6" Door Canopy', 800],
  ['3070 Door Slab W/O Deadbolt W/O Glass', 171.96],
  ['3070 Door Slab W/ Deadbolt W/O Glass', 237.7],
  ['3070 Door Slab W/O Deadbolt W/ Glass', 364.0],
  ['3070 Door Slab W/ Deadbolt W/ Glass', 327.5],
  ['4070 Door Slab W/O Deadbolt W/O Glas', 306.06],
  ['4070 Door Slab W/ Deadbolt W/O Glass', 372.0],
  ['4070 Door Slab W/O Deadbolt W/ Glass', 346.0],
  ['4070 Door Slab W/ Deadbolt W/ Glass', 403.75],
  ['3070 4.25" Jamb Kit W/O Deadbolt', 264.31],
  ['3070 4.25" Jamb Kit W/ Deadbolt', 348.57],
  ['3070 6.25" Jamb Kit W/O Deadbolt', 264.31],
  ['3070 6.25" Jamb Kit W/ Deadbolt', 264.31],
  ['3070 8.25" Jamb Kit W/O Deadbolt', 229.27],
  ['3070 8.25" Jamb Kit W/ Deadbolt', 359.13],
  ['3070 10.25" Jamb Kit W/O Deadbolt', 207.13],
  ['3070 10.25" Jamb Kit W/ Deadbolt', 237.04],
  ['4070 4.25" Jamb Kit W/O Deadbolt', 276.83],
  ['4070 4.25" Jamb Kit W/ Deadbolt', 248.17],
  ['4070 6.25" Jamb Kit W/O Deadbolt', 276.85],
  ['4070 6.25" Jamb Kit W/ Deadbolt', 248.17],
  ['4070 8.25" Jamb Kit W/O Deadbolt', 276.85],
  ['4070 8.25" Jamb Kit W/ Deadbolt', 248.17],
  ['4070 10.25" Jamb Kit W/O Deadbolt', 236.0],
  ['4070 10.25" Jamb Kit W/ Deadbolt', 265.92],
  ['24" Exhaust Fan', 270],
  ['30" Exhaust Fan', 315],
  ['36" Exhaust Fan', 390],
  ['24" Weather Hood', 333],
  ['30" Weather Hood', 258],
  ['36" Weather Hood', 448],
  ['TS 4x4x11GA', 1.2],
  ['TS 4x4x3/16', 1],
  ['TS 4x4x1/4', 1],
  ['TS 4x4x3/8', 1],
  ['TS 4x4x1/2', 1],
  ['8" Receiver Cee', 4],
  ['10" Receiver Cee', 4],
  ['8" C Purlin', 4],
  ['10" C Purlin', 4],
  ['Eave Strut', 6.49],
]
export const highLiftPriceTbl = [
  ['36" High Lift', 60],
  ['54" High Lift', 90],
  ['72" High Lift', 120],
  ['96" High Lift', 150],
  ['120" High Lift', 180],
]
export const windowPricePerSqFt = 17
export const rollUpDoorPricePerSqFt = 8.52
export function canopyPriceLookup(lookup: string, canopyPriceTbl: any) {
  for (let index = 0; index < canopyPriceTbl.length; index++) {
    const element = String(canopyPriceTbl[index][0])
    if (lookup === element) {
      return canopyPriceTbl[index][1]
    }
  }
}
export function miscellaneousPriceLookup(lookup: string, tbl: any) {
  for (let index = 0; index < tbl.length; index++) {
    const element = String(tbl[index][0])
    if (lookup === element) {
      return tbl[index][1]
    }
  }
}
export function highLiftPriceLookup(buildingZ: number, z_Height: number, highLiftPriceTbl: any) {
  const inches = buildingZ - z_Height
  let score = 1000
  let index = 0
  for (let i = 0; i < highLiftPriceTbl.length; i++) {
    const search = highLiftPriceTbl[i][0].substring(0, highLiftPriceTbl[i][0].indexOf('"', 0))
    if (Math.abs(inches - search) < score) {
      score = Math.abs(inches - search)
      index = i
    }
  }
  return highLiftPriceTbl[index][1]
}
export const overheadDoor_Sectional_PriceTbl = [
  [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24],
  [
    8, 889.86, 1002.22, 1081.62, 1237.42, 1330.3, 1463.63, 1543.03, 1706.32, 1782.73, 2425.41,
    2506.3, 3128.01, 3608.9, 4330.97,
  ],
  [
    9, 933.31, 1054.65, 1131.06, 1319.82, 1406.71, 1547.53, 1629.92, 1808.19, 1893.58, 2549.75,
    2636.64, 3163.96, 3796.16, 4555.69,
  ],
  [
    10, 996.23, 1129.56, 1220.94, 1409.7, 1501.09, 1653.89, 1713.81, 1977.48, 2032.91, 2, 734.01,
    2828.39, 3394.67, 4073.3, 4886.77,
  ],
  [
    11, 1098.1, 1244.91, 1334.8, 1549.02, 1628.42, 1820.18, 1899.58, 2137.77, 2247.13, 2990.19,
    3107.04, 3728.74, 4474.79, 5369.15,
  ],
  [
    12, 1149.03, 1295.85, 1393.22, 1617.94, 1694.34, 1904.07, 1992.46, 2238.14, 2350.5, 3120.52,
    3246.36, 3895.03, 4674.04, 5610.34,
  ],
  [
    13, 1219.44, 1378.24, 1493.59, 1715.31, 1826.17, 2017.93, 2121.29, 2380.46, 2503.31, 3303.29,
    3435.12, 4122.74, 4946.69, 5935.43,
  ],
  [
    14, 1250.9, 1415.69, 1546.03, 1766.25, 1889.09, 2074.85, 2190.21, 2450.87, 2570.72, 3400.66,
    3529.5, 4235.1, 5083.02, 6098.72,
  ],
  [
    15, 1409.7, 1605.95, 1736.28, 1975.98, 2106.31, 2341.51, 2599.18, 2880.82, 3050.11, 4079.3,
    4233.6, 5080.02, 6095.72, 7315.17,
  ],
  [
    16, 1493.59, 1703.33, 1833.66, 2082.34, 2218.67, 2476.34, 2795.43, 3098.05, 3291.3, 4422.36,
    4590.14, 5508.47, 6609.57, 7932.38,
  ],
  [
    17, 1868.12, 2139.27, 2314.55, 2626.15, 2928.76, 3237.37, 3538.49, 3860.57, 4067.31, 4663.55,
    5424.58, 6509.2, 7811.03, 9373.54,
  ],
  [
    18, 1949.01, 2239.64, 2425.41, 2743.0, 3125.01, 3439.61, 3622.38, 4022.37, 4212.63, 4787.89,
    5761.65, 6913.68, 8296.42, 9956.3,
  ],
  [
    19, 2110.81, 2431.4, 2585.7, 3114.53, 3381.19, 3724.25, 3880.05, 4402.88, 4909.24, 5491.99,
    5981.87, 7178.84, 8614.01, 10336.81,
  ],
  [
    20, 2190.21, 2524.28, 2666.6, 3297.29, 3507.03, 3865.07, 4004.39, 4602.13, 5349.68, 5972.88,
    6178.12, 7414.04, 8897.15, 10675.38,
  ],
  [
    21, 2329.53, 2810.41, 3009.66, 3981.92, 3797.66, 4187.16, 4390.9, 5109.98, 5441.06, 6274.0,
    6492.72, 7791.56, 9349.57, 11219.19,
  ],
  [
    22, 2402.93, 2957.23, 3184.94, 3649.34, 3936.98, 4653.06, 4865.79, 5424.58, 5577.38, 6419.31,
    6653.01, 7983.32, 9580.28, 11496.33,
  ],
  [
    23, 2498.81, 3074.08, 3307.78, 3757.21, 4350.45, 4766.92, 4979.65, 5542.93, 5718.2, 6551.14,
    6786.34, 8143.61, 9772.03, 11727.04,
  ],
  [
    24, 2548.25, 3132.5, 3376.69, 4166.18, 4464.3, 4865.79, 5044.07, 5601.35, 5782.62, 6609.57,
    6850.76, 8221.51, 9864.91, 11837.9,
  ],
  [
    25, 2802.92, 3445.6, 3713.76, 4582.65, 4910.74, 5352.67, 5548.92, 6161.64, 6360.89, 7270.22,
    7535.39, 9042.46, 10852.16, 13021.39,
  ],
  [
    26, 3083.07, 3790.16, 4085.29, 5041.07, 5402.11, 5887.49, 6103.21, 6777.35, 6997.57, 7998.3,
    8288.93, 9947.31, 11936.77, 14324.73,
  ],
]
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
