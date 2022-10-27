type ProjectData = {
  customer: Customer
  building: BuildingData
}

type BuildingData = {
  info: BuildingInfo
  exteriorPanels: ExteriorPanels
  trim: Trim
  personnelDoors: PersonnelDoors
  overheadDoors: OverheadDoors
  windows: Windows
  framedOpenings: FramedOpenings
  insulation: Insulation
  // additionalOptions: AdditionalOptions
}

type Customer = {
  name: string
  email: string
  primaryPhone: string
  secondaryPhone: string
  billingAddress: {
    street: string
    state: string
    zip: string
  }
  jobsiteAddress: {
    street: string
    state: string
    zip: string
    cityLimits: boolean
  }
}
/**
 * --------------------------
 * Building Information
 * --------------------------
 */

// type SelectBoolean = '0' | '1'
type SelectBoolean = boolean

type Colors =
  | 'Brilliant (White)'
  | 'Black'
  | 'Brown'
  | 'Burgundy'
  | 'Burnished Slate'
  | 'Charcoal'
  | 'Colony Green'
  | 'Copper Metallic'
  | 'Crimson Red'
  | 'Desert Tan'
  | 'Fern Green'
  | 'Forest Green'
  | 'Gallery Blue'
  | 'Galvalume'
  | 'Gray Ash'
  | 'Hawaiian Blue'
  | 'Hunter Green'
  | 'Light Stone'
  | 'Ocean Blue'
  | 'Polar White'
  | 'Tan (saddle)'
  | 'Taupe (tan)'
  | 'Standard Color'
  | 'Rustic Red'

type ColorsOrNone = 'None' | Colors

type PanelShape = 'R-Loc' | 'M-Loc'

type PanelType =
  | 'Prime SMP Colors (Lifetime Warranty)'
  | 'Prime Acrylic AZ55 Galvalume (25yr Warranty)'
  | 'Prime Galvalume Copper Metallic (Lifetime Warranty)'
  | 'Thrifty SMP Colors (20yr Warranty)'
  | 'Standard Galvalume (25yr Warranty)'

type PanelTypeRoof =
  | 'Prime SMP Colors (Lifetime Warranty)'
  | 'Prime Acrylic AZ55 Galvalume (25yr Warranty)'
  | 'Prime Galvalume Copper Metallic (Lifetime Warranty)'

type Endwalls = 'Endwall 1' | 'Sidewall 2' | 'Endwall 3' | 'Sidewall 4' | 'Roof'

/**
 * Building Info
 */
type BuildingInfo = {
  width: number
  height: number
  roofPitch: number
  gutters: boolean
  length: number
  numOfBays: number
  roofShape: string
  bays: Bay[]
  maxPurlinSpacing: 48 | 60 // ADD TO FORM (4ft | 5ft)
  // Calculated properties
  highSideEaveHeight?: number
  sidewall2ExtRafterLength?: number
  sidewall4ExtRafterLength?: number
  netSingleRoofPanelQty?: number
}

type Bay = {
  length: number
}

/**
 * Exterior Panels
 */
type ExteriorPanels = {
  wallPanelShape: PanelShape
  wallPanelType: PanelType
  wallColor: Colors
  linerPanels: SelectBoolean
  roofPanelShape: PanelShape
  roofPanelType: Partial<PanelType>
  roofColor: Colors
  wallAlterations: SelectBoolean
  linerPanelsGroup: {
    endwall1: LinerPanel
    sidewall2: LinerPanel
    endwall3: LinerPanel
    sidewall4: LinerPanel
    roof: LinerPanelRoof
  }
  wallAlterationsGroup: {
    endwall1: WallAlteration
    sidewall2: WallAlteration
    endwall3: WallAlteration
    sidewall4: WallAlteration
  }
}

type LinerPanel = {
  linerPanel: 'None' | "8'" | 'Full Height'
  panelShape: PanelShape
  panelType: PanelType
  panelColor: Colors
}

type LinerPanelRoof = {
  linerPanel: 'None' | 'Full Height'
  panelShape: PanelShape
  panelType: PanelTypeRoof
  panelColor: Colors
}

type WallAlteration = {
  wallStatus: 'Include' | 'Exclude' | 'Partial' | 'Gable Only'
  expandableEndwall: boolean
  length: number
}

/**
 * Trim
 */
type Trim = {
  framedOpenings: Colors
  baseTrim: ColorsOrNone
  rake: ColorsOrNone
  eave: ColorsOrNone
  corner: ColorsOrNone
  guttersAndDownspouts: SelectBoolean
  wainscot: SelectBoolean
  guttersAndDownspoutsColors: GuttersAndDownspouts
  wainscotWalls: {
    trim: ColorsOrNone
    walls: {
      endwall1: WainscotWall
      sidewall2: WainscotWall
      endwall3: WainscotWall
      sidewall4: WainscotWall
    }
  }
}

type GuttersAndDownspouts = {
  gutter: Colors
  downspout: Colors
}

type WainscotWall = {
  type:
    | 'None'
    | '36" Standard'
    | '42" Standard'
    | '48" Standard'
    | '36" Masonry'
    | '42" Masonry'
    | '48" Masonry'
  panelType: PanelType
  panelColor: Colors
}

/**
 * Personnel Doors
 */
type PersonnelDoors = {
  numOfDoors: number
  doors: PersonnelDoor[]
}

type PersonnelDoor = {
  size: PersonnelDoorSize
  wall: PersonnelDoorWall
  halfGlass: SelectBoolean
  canopy: PersonnelDoorCanopy
  jambSize: PersonnelDoorJambSize
  deadBolt: SelectBoolean
  leftEdgePos: number
}

type PersonnelDoorSize = 3070 | 4070
type PersonnelDoorWall = 'Endwall 1' | 'Sidewall 2' | 'Endwall 3' | 'Sidewall 4'
type PersonnelDoorCanopy = 'No' | "4' x 4'6\"" | "4' x 7'6\""
type PersonnelDoorJambSize = 4.25 | 6.25 | 8.25 | 10.25

/**
 * Overhead Doors
 */
type OverheadDoors = {
  numOfDoors: number
  doors: OverheadDoor[]
}

type OverheadDoor = {
  width: number
  height: number
  wall: Endwalls
  type: OverheadDoorType
  insulation: OverheadDoorInsulation
  operation: OverheadDoorOperation
  heightLift: boolean
  window: OverheadDoorWindows
  leftEdgePos: number
}

type OverheadDoorType = 'Sectional' | 'RUD' | 'Customer Provided'
type OverheadDoorInsulation = 'None' | 'Vinyl Backed' | 'Steel Backed'
type OverheadDoorOperation = 'Manual' | 'Chain Hoist' | 'Electric Opener'
type OverheadDoorWindows = 'None' | 'Non-Insulated' | 'Insulated' | 'Full Glass Panels'

/**
 * Windows
 */
type Windows = {
  numOfWindows: number
  windows: Window[]
}

type Window = {
  width: number
  height: number
  wall: WindowWall
  bottomEdgePos: number
  topEdgePos: number
  leftEdgePos: number
  rightEdgePos: number
}

type WindowWall = Endwalls | 'Field Locate'

/**
 * Misc. Framed Openings
 */
type FramedOpenings = {
  numOfFramedOpenings: number
  group: FramedOpening[]
}

type FramedOpening = {
  width: number
  height: number
  wall: FramedOpeningWall
  exhuastFanLouvers: ExhuastFanLouvers
  weatherHood: WeatherHood
  bottomEdgePos: number
  topEdgePos: number
  leftEdgePos: number
  rightEdgePos: number
  steelOption: StructuralSteelOptions
}

type FramedOpeningWall = Endwalls | 'Field Locate'

type ExhuastFanLouvers =
  | '24" Exhaust Fan'
  | '30" Exhaust Fan'
  | '36" Exhaust Fan'
  | '24" Louver'
  | '30" Louver'
  | '36" Louver'
type WeatherHood = '24" Weather Hood' | '30" Weather Hood' | '36" Weather Hood'

type StructuralSteelOptions =
  | 'Full Height Jambs w/ Header & Stool'
  | '7\'2" Jambs w/ Header & Stool'
  | '7\'2" Jambs w/ Stool'
  | '7\'2" Jambs'
  | "5' Jambs w/ Header & Stool"

/**
 * Insulation
 */
type Insulation = {
  walls: InsulationWalls
  roof: InslulationRoof
}

type InsulationWalls = 'None' | "2' VRRR" | "3' VRRR" | "4' VRRR"

type InslulationRoof =
  | 'None'
  | "3' VRRR"
  | "4' VRRR"
  | "6' VRRR"
  | '1" Spray Foam'
  | '2" Spray Foam'

/**
 * Additional Options
 */
type AdditionalOptions = {
  ridgeVentQuanity: number
  ridgeVentType: RidgeVentType
  transWallPanelQuanity: number
  skylightQuantity: number
  overhang: {
    endwall1: Overhang
    endwall2: Overhang
    endwall3: Overhang
    sidewall4: Overhang
  }
  extension: {
    endwall1: Extension
    endwall2: Extension
    endwall3: Extension
    sidewall4: Extension
  }
  sidewall2EaveExtPitch: number
  sidewall4EaveExtPitch: number
}

type RidgeVentType = 'Standard' | 'Low Profile'

type Overhang = {
  measurement: number
  soffit: boolean
  soffitPanelShape: PanelShape
  soffitPanelType: SoffitPanelType
  soffitColor: ColorsOrNone
  soffitTrimColor: ColorsOrNone
}

type SoffitPanelType =
  | 'Prime SMP Colors (Lifetime Warranty)'
  | 'Prime Acrylic AZ55 Galvalume (25yr Warranty)'
  | 'Prime Galvalume Copper Metallic (Lifetime Warranty)'
  | 'Thrifty SMP Colors (20yr Warranty)'
  | 'Standard Galvalume (25yr Warranty)'
  | 'Reverse Prime SMP Colors (Lifetime Warranty)'
  | 'Reverse Prime Acrylic AZ55 Galvalume (25yr Warranty)'
  | 'Reverse Prime Galvalume Copper Metallic (Lifetime Warranty)'
  | 'Reverse Thrifty SMP Colors (20yr Warranty)'
  | 'Reverse Standard Galvalume (25yr Warranty)'

type Extension = {
  measurement: number
  soffit: boolean
  soffitPanelShape: PanelShape
  soffitPanelType: SoffitPanelType
  soffitColor: ColorsOrNone
  soffitTrimColor: ColorsOrNone
  expandable: boolean
}
export function closestTableValue(table: any, row: number, col: number) {
  /* Make arrays for the first column and row of the table */
  const distancesR: any[] = []
  const distancesC: any[] = []

  /* Initialize variables */
  let tblRow = 0
  let tblCol = 0

  /* Initialize other variables to the first possible score */
  let scoreR = Math.abs(+table[1][0] - row)
  let scoreC = Math.abs(+table[0][1] - col)

  /* Load the array with the first row of the table */
  for (let index = 0; index < table.length; index++) {
    distancesR.push(table[index][0])
  }

  /* Load the array with the first column of the table */
  for (let index = 0; index < table[0].length; index++) {
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
  for (let index = 0; index < distancesC.length; index++) {
    const element = distancesC[index]
    if (Math.abs(+element - col) <= scoreC) {
      scoreC = Math.abs(+element - col)
      tblCol = index
    }
  }

  /* return the table value */
  return table[tblRow][tblCol]
}
export function imperialInputToInches(imperial: string) {
  let inches = 0
  for (let i = 0; i < imperial.length; i++) {
    if (imperial.indexOf("'", i) === 2) {
      inches += +imperial.substring(0, 2) * 12
      i = 2
    } else if (imperial.indexOf("'", i) === 1) {
      inches += +imperial.substring(0, 1) * 12
      i = 1
    } else if (imperial.indexOf("'", i) < 1) {
      if (imperial.indexOf('"', i) > 0) {
        inches += +imperial.substring(i, imperial.indexOf('"', i))
        i = imperial.length
      }
    }
  }
  return inches
}
export function steelPriceLookup(me: ThreeD, steelPriceTbl: any) {
  const lookup = me.type
  if (lookup.includes('TS') === true) {
    for (let i = 0; i < steelPriceTbl.length; i++) {
      if (lookup === steelPriceTbl[i][0]) {
        return steelPriceTbl[i][1]
      }
    }
  } else {
    return 0.99
  }
  return 0
}
const steelMiscPriceTable = [
  ['8" Receiver Cee', 4.0],
  ['10" Receiver Cee', 6.25],
  ['8" Purlin', 3.59],
  ['10" Purlin', 6.0],
  ['2x4 Base Angle', 2.0],
  ['Weld Clips', 2.0],
  ['Eave Strut', 6.49],
]
// {string, Price / LF}
const panelPriceTable = [
  ['Prime SMP Colors (Lifetime Warranty)', 4.06],
  ['Prime Acrylic AZ55 Galvalume (25yr Warranty)', 3.31],
  ['Prime Galvalume Copper Metallic (Lifetime Warranty)', 5.08],
  ['Thrifty SMP Colors (20yr Warranty)', 3.91],
  ['Standard Galvalume (25yr Warranty)', 3.0],
]
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
const columnTbl = [
  ['Search Width x Column z_Height', '20', '30', '40', '50', '60', '70', '80'],
  ['30', 'W8x10', 'W10x12', 'W12x14', 'W12x19', 'W14x22', 'W16x26', 'W16x36'],
  ['40', 'W10x12', 'W12x14', 'W12x19', 'W14x22', 'W16x26', 'W16x36', 'W18x40'],
  ['50', 'W12x14', 'W12x19', 'W14x22', 'W16x26', 'W16x36', 'W18x40', 'W21x50'],
  ['60', 'W12x19', 'W14x22', 'W16x26', 'W16x36', 'W18x40', 'W21x50', 'W24x60'],
  ['70', 'W14x22', 'W16x26', 'W16x36', 'W18x40', 'W21x50', 'W24x60', 'W24x84'],
  ['80', 'W16x26', 'W16x36', 'W18x40', 'W21x50', 'W24x60', 'W24x84', 'W27x102'],
]
const rafterTbl = [
  ['Search Width x Search Height', '20', '30', '40', '50', '60', '70', '80'],
  ['25', 'W8x10', 'W8x10', 'W8x10', 'W8x10', 'W8x10', 'W8x10', 'W8x10'],
  ['30', 'W8x13', 'W8x13', 'W8x13', 'W8x13', 'W8x13', 'W8x13', 'W8x13'],
  ['35', 'W10x14', 'W10x14', 'W10x14', 'W10x14', 'W10x14', 'W10x14', 'W10x14'],
  ['40', 'W10x17', 'W10x17', 'W10x17', 'W10x17', 'W10x17', 'W10x17', 'W10x17'],
  ['45', 'W12x19', 'W12x19', 'W12x19', 'W12x19', 'W12x19', 'W12x19', 'W12x19'],
  ['50', 'W12x22', 'W12x22', 'W12x22', 'W12x22', 'W12x22', 'W12x22', 'W12x22'],
  ['55', 'W12x26', 'W12x26', 'W12x26', 'W12x26', 'W12x26', 'W12x26', 'W12x26'],
  ['60', 'W14x26', 'W14x26', 'W14x26', 'W14x26', 'W14x26', 'W14x26', 'W14x26'],
  ['65', 'W16x36', 'W16x36', 'W16x36', 'W16x36', 'W16x36', 'W16x36', 'W16x36'],
  ['70', 'W21x44', 'W21x44', 'W21x44', 'W21x44', 'W21x44', 'W21x44', 'W21x44'],
  ['75', 'W21x50', 'W21x50', 'W21x50', 'W21x50', 'W21x50', 'W21x50', 'W21x50'],
  ['80', 'W24x60', 'W24x60', 'W24x60', 'W24x60', 'W24x60', 'W24x60', 'W24x60'],
]
const nonExpandableColumnTbl = [
  ['Search Width x Column z_Height', '20', '30', '40', '50', '60', '70', '80'],
  ['30', 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19'],
  ['40', 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19'],
  ['50', 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19'],
  ['60', 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19'],
  ['70', 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19'],
  ['80', 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x,19'],
]
function roundSixteenth(number: number) {
  const whole = Math.floor(number)
  const numofSixteenths = Math.ceil((number - whole) / 0.0625)
  return whole + numofSixteenths * 0.0625
}

function inchesInputToImperial(inches: number) {
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
      str = inch + '"'
    }

    // if ft
    if (ft > 0) {
      str = ft + "' " + str
    }
    return str
  }
}
class Building {
  private readonly CUSTOMER: Customer
  private readonly DATA: BuildingData
  private readonly UNDERCUT = 4.25

  constructor(Building: BuildingData) {
    this.CUSTOMER = {} as Customer
    this.DATA = Building
    // this.DATA = {
    //   info: {},
    //   exteriorPanels: {},
    //   trim: {},
    //   personnelDoors: {},
    //   overheadDoors: {},
    //   windows: {},
    //   framedOpenings: {},
    //   insulation: {},
    //   additionalOptions: {},
    // } as BuildingData
  }

  get customer() {
    return this.CUSTOMER
  }

  get buildingData() {
    return this.DATA
  }

  get info() {
    return this.DATA.info
  }

  set info(info: BuildingInfo) {
    this.DATA.info = info
  }

  get exteriorPanels() {
    return this.DATA.exteriorPanels
  }

  get trim() {
    return this.DATA.trim
  }

  set trim(trim: Trim) {
    this.DATA.trim = trim
  }

  get personnelDoors() {
    return this.DATA.personnelDoors
  }

  get overheadDoors() {
    return this.DATA.overheadDoors
  }

  get windows() {
    return this.DATA.windows
  }

  get framedOpenings() {
    return this.DATA.framedOpenings
  }

  set framedOpenings(framedOpenings: FramedOpenings) {
    this.DATA.framedOpenings = framedOpenings
  }

  get insulation() {
    return this.DATA.insulation
  }

  // get additionalOptions() {
  //   return this.DATA.additionalOptions
  // }
}

const TestBuilding = new Building({
  info: {
    numOfBays: 2,
    bays: [
      {
        length: 720,
      },
      {
        length: 720,
      },
    ],
    gutters: true,
    roofShape: 'Gable',
    roofPitch: 1 / 4,
    width: 960,
    height: 240,
    length: 1440,
    maxPurlinSpacing: 48,
  },
  exteriorPanels: {
    wallPanelShape: 'M-Loc',
    linerPanels: true,
    roofPanelShape: 'M-Loc',
    roofPanelType: 'Prime SMP Colors (Lifetime Warranty)',
    roofColor: 'Brilliant (White)',
    wallPanelType: 'Prime SMP Colors (Lifetime Warranty)',
    wallColor: 'Black',
    linerPanelsGroup: {
      endwall1: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
        panelShape: 'M-Loc',
      },
      sidewall2: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
        panelShape: 'M-Loc',
      },
      endwall3: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
        panelShape: 'M-Loc',
      },
      sidewall4: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelShape: 'M-Loc',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
      },
      roof: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelShape: 'M-Loc',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
      },
    },
    wallAlterations: false,
    wallAlterationsGroup: {
      endwall1: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
      sidewall2: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
      endwall3: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
      sidewall4: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
    },
  },
  trim: {
    baseTrim: 'None',
    corner: 'Black',
    eave: 'Black',
    framedOpenings: 'Black',
    guttersAndDownspouts: true,
    guttersAndDownspoutsColors: {
      downspout: 'Black',
      gutter: 'Black',
    },
    rake: 'Black',
    wainscot: false,
    wainscotWalls: {
      trim: 'None',
      walls: {
        endwall1: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
        sidewall2: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
        endwall3: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
        sidewall4: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
      },
    },
  },
  personnelDoors: {
    numOfDoors: 2,
    doors: [
      {
        wall: 'Endwall 1',
        size: 3070,
        canopy: "4' x 4'6\"",
        deadBolt: true,
        halfGlass: false,
        jambSize: 10.25,
        leftEdgePos: 120,
      },
      {
        wall: 'Endwall 1',
        size: 4070,
        canopy: "4' x 4'6\"",
        deadBolt: true,
        halfGlass: false,
        jambSize: 10.25,
        leftEdgePos: 0,
      },
    ],
  },
  overheadDoors: {
    numOfDoors: 3,
    doors: [
      {
        type: 'Sectional',
        width: 288,
        height: 168,
        wall: 'Sidewall 2',
        heightLift: true,
        insulation: 'None',
        leftEdgePos: 36,
        operation: 'Electric Opener',
        window: 'None',
      },
      {
        type: 'Sectional',
        width: 288,
        height: 168,
        wall: 'Sidewall 4',
        heightLift: true,
        insulation: 'Vinyl Backed',
        leftEdgePos: 36,
        operation: 'Chain Hoist',
        window: 'None',
      },
      {
        type: 'RUD',
        width: 288,
        height: 168,
        wall: 'Sidewall 4',
        heightLift: true,
        insulation: 'None',
        leftEdgePos: 36,
        operation: 'Chain Hoist',
        window: 'None',
      },
    ],
  },
  windows: {
    numOfWindows: 1,
    windows: [
      {
        wall: 'Endwall 1',
        width: 36,
        height: 72,
        bottomEdgePos: 12,
        leftEdgePos: 0,
        rightEdgePos: 36,
        topEdgePos: 84,
      },
    ],
  },
  framedOpenings: {
    numOfFramedOpenings: 0,
    group: [],
  },
  insulation: {
    roof: '1" Spray Foam',
    walls: "2' VRRR",
  },
  // additionalOptions: {},
})

const DOORHEIGHT = 84
const DOORWIDTH_3070 = 36
const DOORWIDTH_4070 = 48
const WALL_PANEL_OVERLAP = 3.5
const ROOF_PANEL_OVERLAP = 6
const PANEL_WIDTH = 36
//smallest thing we are measuring by
const DEFAULT_MIN_DISTANCE = 0.0625 // 1/16th of an inch

function roofHeight(Building: Building, POS_X: number) {
  const baseHeight = Building.info.height
  const baseWidth = Building.info.width
  if (Building.info.roofShape === 'Gable' && POS_X > baseWidth / 2) {
    return baseHeight + Building.info.roofPitch * (POS_X - baseWidth)
  }
  return baseHeight + POS_X * Building.info.roofPitch
}

class Pricing {
  private _shape = ''
  private _description = ''
  private _material = ''
  // measurement is a string after it did the inchestoimperial fn
  private _measurement = ''
  private _color = ''
  private _units = ''
  private _cost_per_unit = 0
  private _size = ''
  private _cost = 0

  get shape() {
    return this._shape
  }
  set shape(val: string) {
    this._shape = val
  }
  get description() {
    return this._description
  }
  set description(val: string) {
    this._description = val
  }
  get material() {
    return this._material
  }
  set material(val: string) {
    this._material = val
  }
  get measurement() {
    return this._measurement
  }
  set measurement(val: string) {
    this._measurement = val
  }
  get color() {
    return this._color
  }
  set color(val: string) {
    this._color = val
  }
  get units() {
    return this._units
  }
  set units(val: string) {
    this._units = val
  }
  get cost_per_unit() {
    return this._cost_per_unit
  }
  set cost_per_unit(val: number) {
    this._cost_per_unit = val
  }
  get size() {
    return this._size
  }
  set size(val: string) {
    this._size = val
  }
  get cost() {
    return this._cost
  }
  set cost(val: number) {
    this._cost = Math.round(val * 100) / 100
  }
}

export class ThreeD {
  private _length_Y = 0
  private _width_X = 0
  private _height_Z = 0
  private _xPos = 0
  private _yPos = 0
  private _zPos = 0
  private _Pricings: Pricing[] = []
  name = ''
  type = ''
  constructor() {
    this._Pricings = []
  }

  get length_Y() {
    return this._length_Y
  }

  set length_Y(val: number) {
    this._length_Y = roundSixteenth(val)
  }

  get width_X() {
    return this._width_X
  }

  set width_X(val: number) {
    this._width_X = roundSixteenth(val)
  }

  get height_Z() {
    return this._height_Z
  }

  set height_Z(val: number) {
    this._height_Z = roundSixteenth(val)
  }

  get xPos() {
    return this._xPos
  }

  set xPos(val: number) {
    this._xPos = roundSixteenth(val)
  }

  get yPos() {
    return this._yPos
  }

  set yPos(val: number) {
    this._yPos = roundSixteenth(val)
  }

  get zPos() {
    return this._zPos
  }

  set zPos(val: number) {
    this._zPos = roundSixteenth(val)
  }
  get pricingsList() {
    return this._Pricings
  }

  // FO Pricing Set
  setPrice_fo_personnelDoor(
    halfGlass: boolean,
    canopy: string,
    jambSize: number,
    deadBolt: boolean
  ) {
    const newPricing = new Pricing()
    if (this.name === 'Personnel Door') {
      newPricing.units = '/each'
      newPricing.measurement = jambSize.toString() + '"'
      let sentence = this.type + ' '
      if (canopy !== 'No') {
        sentence += 'Door Slab '
        const newPricing_PD_Canopy = new Pricing()
        newPricing_PD_Canopy.description = canopy + ' Door Canopy'
        newPricing_PD_Canopy.cost_per_unit = miscellaneousPriceLookup(
          newPricing_PD_Canopy.description,
          miscellaneousTbl
        )
        newPricing_PD_Canopy.units = '/each'
        this._Pricings.push(newPricing_PD_Canopy)
      } else {
        sentence += jambSize + ' ' + 'Jamb Kit'
      }
      if (deadBolt === true) {
        sentence += 'W/ Deadbolt '
      } else {
        sentence += 'W/O Deadbolt '
      }
      if (halfGlass === true) {
        sentence += 'W/ Glass '
      } else {
        sentence += 'W/O Glass '
      }
      sentence = sentence.substring(0, sentence.length - 1)
      newPricing.description = sentence
      newPricing.cost_per_unit = miscellaneousPriceLookup(newPricing.description, miscellaneousTbl)
    }
    this._Pricings.push(newPricing)
  }
  setPrice_fo_overheadDoor(
    ohDoorType: string,
    insulation: string,
    operation: string,
    highLift: boolean,
    windows: string,
    height: number
  ) {
    if (this.name === 'Overhead Door') {
      const newPricing = new Pricing()
      newPricing.description = ohDoorType + ' OH Door'
      newPricing.units = '/each'
      if (Math.abs(this.length_Y) > Math.abs(this.width_X)) {
        newPricing.measurement =
          inchesInputToImperial(Math.abs(this.length_Y)) +
          ' x ' +
          inchesInputToImperial(Math.abs(this.height_Z))
      } else {
        newPricing.measurement =
          inchesInputToImperial(Math.abs(this.width_X)) +
          ' x ' +
          inchesInputToImperial(Math.abs(this.height_Z))
      }
      const test = newPricing.measurement.split(' x ')
      switch (ohDoorType) {
        case 'Sectional':
          newPricing.cost_per_unit = +closestTableValue(
            overheadDoor_Sectional_PriceTbl,
            Math.round(imperialInputToInches(test[0]) / 12),
            Math.round(imperialInputToInches(test[1]) / 12)
          )
          newPricing.cost_per_unit += +miscellaneousPriceLookup(operation, miscellaneousTbl)
          if (insulation !== 'None') {
            newPricing.cost_per_unit +=
              +miscellaneousPriceLookup(insulation, miscellaneousTbl) *
              (imperialInputToInches(test[0]) / 12) *
              (imperialInputToInches(test[1]) / 12)
          }
          if (highLift === true) {
            newPricing.cost_per_unit += +highLiftPriceLookup(
              height,
              this.height_Z,
              highLiftPriceTbl
            )
          }
          if (windows !== 'None') {
            newPricing.cost_per_unit += +miscellaneousPriceLookup(windows, miscellaneousTbl)
          }
          break
        case 'RUD':
          newPricing.cost_per_unit +=
            (imperialInputToInches(test[0]) / 12) *
            (imperialInputToInches(test[1]) / 12) *
            rollUpDoorPricePerSqFt
          newPricing.cost_per_unit += +miscellaneousPriceLookup(operation, miscellaneousTbl)
          break
        case 'Customer Provided':
          newPricing.cost_per_unit = 0
          break
      }
      this._Pricings.push(newPricing)
    }
  }
  setPrice_fo_window() {
    if (this.name === 'Window') {
      const newPricing = new Pricing()
      newPricing.units = '/each'
      if (Math.abs(this.length_Y) < Math.abs(this.width_X)) {
        newPricing.cost_per_unit =
          windowPricePerSqFt * Math.round(this.width_X / 12) * Math.round(this.height_Z / 12)
      } else {
        newPricing.cost_per_unit =
          windowPricePerSqFt * Math.round(this.length_Y / 12) * Math.round(this.height_Z / 12)
      }
      this._Pricings.push(newPricing)
    }
  }
  setPrice_fo_misc(exhuastFan: string, weatherHood: string) {
    if (this.name === 'Miscellaneous') {
      const newPricing = new Pricing()
      newPricing.units = '/each'
      newPricing.cost_per_unit = 0
      if (exhuastFan !== 'None') {
        newPricing.cost_per_unit += miscellaneousPriceLookup(exhuastFan, miscellaneousTbl)
      }
      if (weatherHood !== 'None') {
        newPricing.cost_per_unit += miscellaneousPriceLookup(weatherHood, miscellaneousTbl)
      }
      this._Pricings.push(newPricing)
    }
  }
  setPrice_steel() {
    if (this.name === 'Column' || this.name === 'Rafter') {
      const newPricing = new Pricing()
      newPricing.units = '/lb'
      newPricing.cost_per_unit = +steelPriceLookup(this, miscellaneousTbl)
      this._Pricings.push(newPricing)
    }
    if (this.name === 'Purlin' || this.name === 'Receiver Cee' || this.name === 'Girt') {
      const newPricing = new Pricing()
      newPricing.units = '/ft'
      newPricing.cost_per_unit = miscellaneousPriceLookup(
        this.type + ' ' + this.name,
        steelMiscPriceTable
      )
      this._Pricings.push(newPricing)
    }
    if (this.name === 'Eave Strut') {
      const newPricing = new Pricing()
      newPricing.units = '/ft'
      newPricing.cost_per_unit = miscellaneousPriceLookup(this.name, steelMiscPriceTable)
      this._Pricings.push(newPricing)
    }
  }
  setPrice_panel() {
    const newPricing = new Pricing()
    newPricing.units = '/ft'
    newPricing.cost_per_unit = miscellaneousPriceLookup(this.type, panelPriceTable)
    this._Pricings.push(newPricing)
  }
}

/*
 ************************** Every value is to be read in inches **************************
 * Unsure about the below... TODO: Roll through the algo and make sure it can be read this way. It's a ratio.
 * Roof pitch needs to be decimal like =1/12, =1/11, = 1/10, = 1/9, ... , 1/1
 */

export function steelBuilding(Building: Building) {
  const buildingY = Building.info.length
  const buildingX = Building.info.width
  let buildingZ = 0

  if (Building.info.roofShape === 'Gable') {
    buildingZ = Building.info.height + (Building.info.roofPitch * buildingX) / 2
  } else {
    buildingZ = Building.info.height + Building.info.roofPitch * buildingX
  }
  // Make Framed Openings
  const framedOpeningList: ThreeD[] = []

  // Personnel Doors
  if (Building.personnelDoors.numOfDoors > 0) {
    for (let index = 0; index < Building.personnelDoors.numOfDoors; index++) {
      const personnelDoor = Building.personnelDoors.doors[index]
      const newFO = new ThreeD()

      if (personnelDoor.wall === 'Endwall 1') {
        newFO.yPos = 0
        newFO.xPos = personnelDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.width_X = DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.width_X = DOORWIDTH_4070
          newFO.type = '4070'
        }
      } else if (personnelDoor.wall === 'Sidewall 2') {
        newFO.yPos = buildingY - personnelDoor.leftEdgePos
        newFO.xPos = 0
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.length_Y = -DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.length_Y = -DOORWIDTH_4070
          newFO.type = '4070'
        }
      } else if (personnelDoor.wall === 'Endwall 3') {
        newFO.yPos = buildingY
        newFO.xPos = buildingX - personnelDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.width_X = -DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.width_X = -DOORWIDTH_4070
          newFO.type = '4070'
        }
      } else if (personnelDoor.wall === 'Sidewall 4') {
        newFO.yPos = personnelDoor.leftEdgePos
        newFO.xPos = buildingX
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.length_Y = DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.length_Y = DOORWIDTH_4070
          newFO.type = '4070'
        }
      }
      newFO.setPrice_fo_personnelDoor(
        personnelDoor.halfGlass,
        personnelDoor.canopy,
        personnelDoor.jambSize,
        personnelDoor.deadBolt
      )
      framedOpeningList.push(newFO)
    }
  }

  // Second: Overhead Doors
  if (Building.overheadDoors.numOfDoors > 0) {
    for (let index = 0; index < Building.overheadDoors.numOfDoors; index++) {
      const overheadDoor = Building.overheadDoors.doors[index]
      const newFO = new ThreeD()

      if (overheadDoor.wall === 'Endwall 1') {
        newFO.yPos = 0
        newFO.xPos = overheadDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.width_X = overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      } else if (overheadDoor.wall === 'Sidewall 2') {
        newFO.yPos = buildingY - overheadDoor.leftEdgePos
        newFO.xPos = 0
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.length_Y = -overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      } else if (overheadDoor.wall === 'Endwall 3') {
        newFO.yPos = buildingY
        newFO.xPos = buildingX - overheadDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.width_X = -overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      } else if (overheadDoor.wall === 'Sidewall 4') {
        newFO.yPos = overheadDoor.leftEdgePos
        newFO.xPos = buildingX
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.length_Y = overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      }
      newFO.setPrice_fo_overheadDoor(
        overheadDoor.type,
        overheadDoor.insulation,
        overheadDoor.operation,
        overheadDoor.heightLift,
        overheadDoor.window,
        Building.info.height
      )
      framedOpeningList.push(newFO)
    }
  }
  // Third: Windows
  if (Building.windows.numOfWindows > 0) {
    for (let index = 0; index < Building.windows.numOfWindows; index++) {
      const window = Building.windows.windows[index]
      const newFO = new ThreeD()

      if (window.wall === 'Endwall 1') {
        newFO.yPos = 0
        newFO.xPos = window.leftEdgePos
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.width_X = window.width
        newFO.name = 'Window'
        newFO.type = ''
      } else if (window.wall === 'Sidewall 2') {
        newFO.yPos = buildingY - window.leftEdgePos
        newFO.xPos = 0
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.length_Y = -window.width
        newFO.name = 'Window'
        newFO.type = ''
      } else if (window.wall === 'Endwall 3') {
        newFO.yPos = buildingY
        newFO.xPos = buildingX - window.leftEdgePos
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.width_X = -window.width
        newFO.name = 'Window'
        newFO.type = ''
      } else if (window.wall === 'Sidewall 4') {
        newFO.yPos = window.leftEdgePos
        newFO.xPos = buildingX
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.length_Y = window.width
        newFO.name = 'Window'
        newFO.type = ''
      }
      newFO.setPrice_fo_window()
      framedOpeningList.push(newFO)
    }
  }

  // Fourth: Miscellaneous
  if (Building.framedOpenings.numOfFramedOpenings > 0) {
    for (let index = 0; index < Building.framedOpenings.numOfFramedOpenings; index++) {
      const framedOpening = Building.framedOpenings.group[index]
      const newFO = new ThreeD()

      if (framedOpening.wall === 'Endwall 1') {
        newFO.yPos = 0
        newFO.xPos = framedOpening.leftEdgePos
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.width_X = framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      } else if (framedOpening.wall === 'Sidewall 2') {
        newFO.yPos = buildingY - framedOpening.leftEdgePos
        newFO.xPos = 0
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.length_Y = -framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      } else if (framedOpening.wall === 'Endwall 3') {
        newFO.yPos = buildingY
        newFO.xPos = buildingX - framedOpening.leftEdgePos
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.width_X = -framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      } else if (framedOpening.wall === 'Sidewall 4') {
        newFO.yPos = framedOpening.leftEdgePos
        newFO.xPos = buildingX
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.length_Y = framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      }
      newFO.setPrice_fo_misc(framedOpening.exhuastFanLouvers, framedOpening.weatherHood)
      framedOpeningList.push(newFO)
    }
  }

  // Make Columns
  const columnList: ThreeD[] = []

  // Columns are a max of 30' apart. Interior columns only needed if the span of the building (buildingX) > 80

  // First row of Columns
  const column00 = new ThreeD()
  column00.yPos = 0
  column00.xPos = 0
  column00.zPos = 0
  column00.height_Z = roofHeight(Building, column00.xPos)
  column00.name = 'Column'

  if (
    Building.exteriorPanels.wallAlterationsGroup.endwall1.expandableEndwall === true ||
    (Building.info.numOfBays &&
      Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true)
  ) {
    column00.type = closestTableValue(
      columnTbl,
      Building.info.bays[0].length / 12,
      column00.height_Z / 12
    )
  } else {
    column00.type = closestTableValue(
      nonExpandableColumnTbl,
      Building.info.bays[0].length / 12,
      column00.height_Z / 12
    )
  }
  column00.setPrice_steel()
  columnList.push(column00)

  const column01 = new ThreeD()
  column01.yPos = 0
  column01.xPos = buildingX
  column01.zPos = 0
  column01.height_Z = roofHeight(Building, column01.xPos)
  column01.name = 'Column'

  if (
    Building.exteriorPanels.wallAlterationsGroup.endwall1.expandableEndwall === true ||
    (Building.info.numOfBays &&
      Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true)
  ) {
    column01.type = closestTableValue(
      columnTbl,
      Building.info.bays[0].length / 12,
      column01.height_Z / 12
    )
  } else {
    column01.type = closestTableValue(
      nonExpandableColumnTbl,
      Building.info.bays[0].length / 12,
      column01.height_Z / 12
    )
  }
  column01.setPrice_steel()
  columnList.push(column01)

  // Perimeter Column Gen
  for (let indexI = 0; indexI < Building.info.numOfBays; indexI++) {
    for (let indexJ = 0; indexJ < 2; indexJ++) {
      const newColumn = new ThreeD()
      newColumn.yPos = 0 + (indexI + 1) * Building.info.bays[indexI].length
      newColumn.xPos = 0 + indexJ * buildingX
      newColumn.zPos = 0
      newColumn.height_Z = roofHeight(Building, newColumn.xPos)
      newColumn.name = 'Column'

      if (
        indexI + 1 === Building.info.numOfBays &&
        Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true
      ) {
        newColumn.type = closestTableValue(
          columnTbl,
          Building.info.bays[indexI].length / 12,
          newColumn.height_Z / 12
        )
      } else {
        newColumn.type = closestTableValue(
          nonExpandableColumnTbl,
          Building.info.bays[indexI].length / 12,
          newColumn.height_Z / 12
        )
      }

      for (let i = 0; i < framedOpeningList.length; i++) {
        const element = framedOpeningList[i]
        if (
          element.name === 'Overhead Door' &&
          (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
        ) {
          if (newColumn.yPos > element.yPos && newColumn.yPos < element.yPos + element.length_Y) {
            if (newColumn.xPos > element.xPos && newColumn.xPos < element.xPos + element.width_X) {
              newColumn.yPos = element.yPos
              newColumn.xPos = element.xPos
              newColumn.height_Z = roofHeight(Building, newColumn.xPos)
              newColumn.type = closestTableValue(
                columnTbl,
                Building.info.bays[indexI].length / 12,
                newColumn.height_Z / 12
              )

              const extraColumn = new ThreeD()
              extraColumn.yPos = element.yPos + element.length_Y
              extraColumn.xPos = element.xPos + element.width_X
              extraColumn.zPos = 0
              extraColumn.height_Z = newColumn.height_Z
              extraColumn.length_Y = newColumn.length_Y
              extraColumn.width_X = newColumn.width_X
              extraColumn.name = newColumn.name
              extraColumn.type = newColumn.type
              extraColumn.setPrice_steel()
              columnList.push(extraColumn)
              break
            }
          }
        }
      }
      newColumn.setPrice_steel()
      columnList.push(newColumn)
    }
  }

  // Interior Columns Gen
  if (buildingX > 80 * 12) {
    for (let indexI = 1; indexI < Building.info.numOfBays; indexI++) {
      for (let indexJ = 1; indexJ < Math.ceil(buildingX / 30 / 12); indexJ++) {
        const newColumn = new ThreeD()
        newColumn.yPos = indexI * Building.info.bays[indexI].length
        newColumn.xPos = (indexJ * buildingX) / Math.ceil(buildingX / 30 / 12)
        newColumn.zPos = 0

        for (let i = 0; i < framedOpeningList.length; i++) {
          const element = framedOpeningList[i]
          if (
            element.name === 'Overhead Door' &&
            (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
          ) {
            if (newColumn.yPos > element.yPos && newColumn.yPos < element.yPos + element.length_Y) {
              if (
                newColumn.xPos > element.xPos &&
                newColumn.xPos < element.xPos + element.width_X
              ) {
                newColumn.yPos = element.yPos
                newColumn.xPos = element.xPos
                newColumn.height_Z = roofHeight(Building, newColumn.xPos)
                newColumn.type = closestTableValue(
                  columnTbl,
                  Building.info.bays[indexI].length / 12,
                  newColumn.height_Z / 12
                )

                const extraColumn = new ThreeD()
                extraColumn.yPos = element.yPos + element.length_Y
                extraColumn.xPos = element.xPos + element.width_X
                extraColumn.zPos = 0
                extraColumn.height_Z = newColumn.height_Z
                extraColumn.length_Y = newColumn.length_Y
                extraColumn.width_X = newColumn.width_X
                extraColumn.name = newColumn.name
                extraColumn.type = newColumn.type
                extraColumn.setPrice_steel()
                columnList.push(extraColumn)
                break
              }
            }
          }
        }
        newColumn.height_Z = roofHeight(Building, newColumn.xPos)
        newColumn.name = 'Column'
        newColumn.type = closestTableValue(
          columnTbl,
          Building.info.bays[indexI].length / 12,
          newColumn.height_Z / 12
        )
        newColumn.setPrice_steel()
        columnList.push(newColumn)
      }
    }
  }

  // Make Rafters
  const rafterList: ThreeD[] = []

  // Origin Rafter
  const newRafter = new ThreeD()
  newRafter.yPos = 0
  newRafter.xPos = 0
  newRafter.zPos = Building.info.height
  newRafter.height_Z = roofHeight(Building, newRafter.xPos)
  newRafter.width_X = Building.info.width
  newRafter.name = 'Rafter'
  newRafter.type = closestTableValue(
    rafterTbl,
    Building.info.bays[0].length / 12,
    newRafter.height_Z / 12
  )
  newRafter.setPrice_steel()
  rafterList.push(newRafter)

  for (let indexI = 0; indexI < Building.info.numOfBays; indexI++) {
    const newRafter = new ThreeD()
    newRafter.yPos = 0 + (1 + indexI) * Building.info.bays[indexI].length
    newRafter.xPos = 0
    newRafter.zPos = roofHeight(Building, 0)
    newRafter.height_Z = buildingZ - newRafter.zPos
    newRafter.width_X = Building.info.width
    newRafter.name = 'Rafter'
    newRafter.type = closestTableValue(
      rafterTbl,
      Building.info.bays[indexI].length / 12,
      newRafter.height_Z / 12
    )
    newRafter.setPrice_steel()
    rafterList.push(newRafter)
  }

  // Make Purlins & Eave Struts & "Receiver Cees" (Receiver Channels)

  // Receiver channels only for roofs with a pitch greater than 1:12 and
  // if the bay length is less than or equal to 25' then 8", if greater than 25' then 10"
  // New Building Property = Purlin Spacing Max
  //
  // TODO:
  // Confirmation that Building.info.MaxPurlinSpacing Exists ?
  //

  const purlinList: ThreeD[] = []
  const purlinCount = Math.ceil(buildingX / Building.info.maxPurlinSpacing)
  let purlinLengthX = 0
  let purlinCountX = 0

  if (
    Math.ceil(buildingY / (20 * 12)) <=
    Math.min(Math.ceil(buildingY / (25 * 12)), Math.ceil(buildingY / (30 * 12)))
  ) {
    purlinCountX = Math.ceil(buildingY / (20 * 12))
    purlinLengthX = 20 * 12
  } else if (Math.ceil(buildingY / (25 * 12)) <= Math.ceil(buildingY / (30 * 12))) {
    purlinCountX = Math.ceil(buildingY / (25 * 12))
    purlinLengthX = 25 * 12
  } else {
    purlinCountX = Math.ceil(buildingY / (30 * 12))
    purlinLengthX = 30 * 12
  }

  let purlinSpace = Math.ceil((buildingX / purlinCount) * 100) / 100

  for (let indexJ = 0; indexJ < purlinCountX; indexJ++) {
    for (let indexI = 0; indexI <= purlinCount; indexI++) {
      const newPurlin = new ThreeD()
      newPurlin.yPos = indexJ * purlinLengthX

      if (indexJ === purlinCountX - 1) {
        newPurlin.length_Y = buildingY - newPurlin.yPos
      } else {
        newPurlin.length_Y = purlinLengthX
      }

      newPurlin.xPos = 0 + indexI * purlinSpace
      newPurlin.zPos = buildingZ

      if (indexI === purlinCount) {
        purlinSpace = buildingX / indexI
        newPurlin.name = 'Eave Strut'
        newPurlin.type = ''
      } else if (indexI === 0) {
        newPurlin.name = 'Eave Strut'
        newPurlin.type = ''
      } else {
        newPurlin.name = 'Purlin'
        if (Building.info.bays[0].length > 25 * 12) {
          newPurlin.type = '10"'
        } else {
          newPurlin.type = '8"'
        }
      }
      newPurlin.setPrice_steel()
      purlinList.push(newPurlin)
    }
  }

  // Make Reciever Channels
  if (Building.info.roofPitch / 12 > 1) {
    for (let indexJ = 0; indexJ < 2; indexJ++) {
      const recieverChannel = new ThreeD()
      recieverChannel.yPos = indexJ * buildingY
      recieverChannel.xPos = 0
      recieverChannel.width_X =
        2 *
        Math.sqrt(
          ((Building.info.roofPitch * buildingX) / 2) *
            ((Building.info.roofPitch * buildingX) / 2) +
            (buildingX / 2) * (buildingX / 2)
        )
      recieverChannel.name = 'Reciever Cee'
      if (Building.info.bays[0].length > 25 * 12) {
        recieverChannel.type = '10"'
      } else {
        recieverChannel.type = '8"'
      }
      recieverChannel.setPrice_steel()
      purlinList.push(recieverChannel)
    }
  }

  // Make Girts
  const girtList: ThreeD[] = []
  const firstGirt = 7 * 12 + 2
  const girtSpace = 5 * 12
  const girtCount = Math.ceil((Building.info.height - firstGirt) / girtSpace) + 1

  // Endwall 1
  let girtCountY = 0
  let girtWidthY = 0

  if (
    Math.ceil(buildingX / (20 * 12)) <=
    Math.min(Math.ceil(buildingX / (25 * 12)), Math.ceil(buildingX / (30 * 12)))
  ) {
    girtCountY = Math.ceil(buildingX / (20 * 12))
    girtWidthY = 20 * 12
  } else if (Math.ceil(buildingX / (25 * 12)) <= Math.ceil(buildingX / (30 * 12))) {
    girtCountY = Math.ceil(buildingX / (25 * 12))
    girtWidthY = 25 * 12
  } else {
    girtCountY = Math.ceil(buildingX / (30 * 12))
    girtWidthY = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountY; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.yPos = 0
      newGirt.xPos = indexJ * girtWidthY
      if (indexJ === girtCountY - 1) {
        newGirt.width_X = buildingX - newGirt.xPos
      } else {
        newGirt.width_X = girtWidthY
      }
      newGirt.zPos = girtSpace * indexI + firstGirt
      newGirt.name = 'Purlin'
      if (Building.info.bays[0].length > 25 * 12) {
        newGirt.type = '10"'
      } else {
        newGirt.type = '8"'
      }
      newGirt.setPrice_steel()
      girtList.push(newGirt)
    }
  }

  // Sidewall 2
  let girtCountX = 0
  let girtLengthX = 0

  if (
    Math.ceil(buildingY / (20 * 12)) <=
    Math.min(Math.ceil(buildingY / (25 * 12)), Math.ceil(buildingY / (30 * 12)))
  ) {
    girtCountX = Math.ceil(buildingY / (20 * 12))
    girtLengthX = 20 * 12
  } else if (Math.ceil(buildingY / (25 * 12)) <= Math.ceil(buildingY / (30 * 12))) {
    girtCountX = Math.ceil(buildingY / (25 * 12))
    girtLengthX = 25 * 12
  } else {
    girtCountX = Math.ceil(buildingY / (30 * 12))
    girtLengthX = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountX; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.yPos = indexJ * girtLengthX
      newGirt.xPos = 0
      if (indexJ === girtCountX - 1) {
        newGirt.length_Y = buildingY - newGirt.yPos
      } else {
        newGirt.length_Y = girtLengthX
      }
      newGirt.zPos = girtSpace * indexI + firstGirt
      newGirt.name = 'Purlin'
      if (Building.info.bays[0].length > 25 * 12) {
        newGirt.type = '10"'
      } else {
        newGirt.type = '8"'
      }
      newGirt.setPrice_steel()
      girtList.push(newGirt)
    }
  }

  // Endwall 3
  girtCountY = 0
  girtWidthY = 0

  if (
    Math.ceil(buildingX / (20 * 12)) <=
    Math.min(Math.ceil(buildingX / (25 * 12)), Math.ceil(buildingX / (30 * 12)))
  ) {
    girtCountY = Math.ceil(buildingX / (20 * 12))
    girtWidthY = 20 * 12
  } else if (Math.ceil(buildingX / (25 * 12)) <= Math.ceil(buildingX / (30 * 12))) {
    girtCountY = Math.ceil(buildingX / (25 * 12))
    girtWidthY = 25 * 12
  } else {
    girtCountY = Math.ceil(buildingX / (30 * 12))
    girtWidthY = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountY; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.yPos = buildingY
      newGirt.xPos = indexJ * girtWidthY
      if (indexJ === girtCountY - 1) {
        newGirt.width_X = buildingX - newGirt.xPos
      } else {
        newGirt.width_X = girtWidthY
      }
      newGirt.zPos = girtSpace * indexI + firstGirt
      newGirt.name = 'Purlin'
      if (Building.info.bays[0].length > 25 * 12) {
        newGirt.type = '10"'
      } else {
        newGirt.type = '8"'
      }
      newGirt.setPrice_steel()
      girtList.push(newGirt)
    }
  }

  // Sidewall 4
  girtCountX = 0
  girtLengthX = 0

  if (
    Math.ceil(buildingY / (20 * 12)) <=
    Math.min(Math.ceil(buildingY / (25 * 12)), Math.ceil(buildingY / (30 * 12)))
  ) {
    girtCountX = Math.ceil(buildingY / (20 * 12))
    girtLengthX = 20 * 12
  } else if (Math.ceil(buildingY / (25 * 12)) <= Math.ceil(buildingY / (30 * 12))) {
    girtCountX = Math.ceil(buildingY / (25 * 12))
    girtLengthX = 25 * 12
  } else {
    girtCountX = Math.ceil(buildingY / (30 * 12))
    girtLengthX = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountX; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.yPos = indexJ * girtLengthX
      newGirt.xPos = buildingX

      if (indexJ === girtCountX - 1) {
        newGirt.length_Y = buildingY - newGirt.yPos
      } else {
        newGirt.length_Y = girtLengthX
      }

      newGirt.zPos = girtSpace * indexI + firstGirt
      newGirt.name = 'Purlin'
      if (Building.info.bays[0].length > 25 * 12) {
        newGirt.type = '10"'
      } else {
        newGirt.type = '8"'
      }
      newGirt.setPrice_steel()
      girtList.push(newGirt)
    }
  }

  // Make Panels
  const panelList: ThreeD[] = []
  const optimalCountY = Math.ceil(buildingX / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
  const optimalCountX = Math.ceil(buildingY / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
  const optimalCountRoofX = optimalCountX
  const roofLen = Math.sqrt(
    (buildingX / 2) * (buildingX / 2) +
      (buildingZ - Building.info.height) * (buildingZ - Building.info.height)
  )
  const optimalCountRoofY = Math.ceil(roofLen / (41 * 12))
  const yVector = [optimalCountRoofY]
  const tempPanelLen = roofLen / optimalCountRoofY
  let totalPanelLen = 0
  if (optimalCountRoofY % 2 !== 0 && Building.info.roofShape === 'Gable') {
    for (let i = 0; i < optimalCountRoofY; i++) {
      if (totalPanelLen <= roofLen / 2) {
        yVector[i] = i * tempPanelLen
        totalPanelLen += tempPanelLen
      }
    }
  }

  // Endwall 1
  for (let indexI = 0; indexI < optimalCountY; indexI++) {
    const newPanel = new ThreeD()
    newPanel.yPos = 0
    newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.zPos = 0
    newPanel.width_X = PANEL_WIDTH
    newPanel.height_Z = roofHeight(Building, newPanel.xPos)

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
      ) {
        if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.width_X) {
          newPanel.zPos = element.height_Z
          newPanel.height_Z = roofHeight(Building, newPanel.xPos) - element.height_Z
        }
      }
    })

    newPanel.name = 'Panel'
    newPanel.type = Building.exteriorPanels.wallPanelType
    newPanel.setPrice_panel()
    panelList.push(newPanel)
  }

  // Sidewall 2
  for (let indexI = 0; indexI < optimalCountX; indexI++) {
    const newPanel = new ThreeD()
    newPanel.yPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.xPos = 0
    newPanel.zPos = 0
    newPanel.length_Y = PANEL_WIDTH
    newPanel.height_Z = Building.info.height

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
      ) {
        if (newPanel.yPos > element.yPos && newPanel.yPos < element.yPos + element.length_Y) {
          newPanel.zPos = element.height_Z
          newPanel.height_Z = Building.info.height - element.height_Z
        }
      }
    })

    newPanel.name = 'Panel'
    newPanel.type = Building.exteriorPanels.wallPanelType
    newPanel.setPrice_panel()
    panelList.push(newPanel)
  }

  // Endwall 3
  for (let indexI = 0; indexI < optimalCountY; indexI++) {
    const newPanel = new ThreeD()
    newPanel.yPos = buildingY
    newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.zPos = 0
    newPanel.width_X = PANEL_WIDTH
    newPanel.height_Z = roofHeight(Building, newPanel.xPos)

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
      ) {
        if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.width_X) {
          newPanel.zPos = element.height_Z
          newPanel.height_Z = roofHeight(Building, newPanel.xPos) - element.height_Z
        }
      }
    })

    newPanel.name = 'Panel'
    newPanel.type = Building.exteriorPanels.wallPanelType
    newPanel.setPrice_panel()
    panelList.push(newPanel)
  }

  // Sidewall 4
  for (let indexI = 0; indexI < optimalCountX; indexI++) {
    const newPanel = new ThreeD()
    newPanel.yPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.xPos = buildingX
    newPanel.zPos = 0
    newPanel.length_Y = PANEL_WIDTH
    newPanel.height_Z = Building.info.height

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
      ) {
        if (newPanel.yPos > element.yPos && newPanel.yPos < element.yPos + element.length_Y) {
          newPanel.zPos = element.height_Z
          newPanel.height_Z = Building.info.height - element.height_Z
        }
      }
    })

    newPanel.name = 'Panel'
    newPanel.type = Building.exteriorPanels.wallPanelType
    newPanel.setPrice_panel()
    panelList.push(newPanel)
  }

  // Roof
  // TODO: This loop is absolutely wrong. Just wanted to push something before we met again. It's close, but wrong.
  if (Building.info.roofShape === 'Gable') {
    for (let indexI = 0; indexI < optimalCountRoofX; indexI++) {
      for (let indexJ = 0; indexJ < optimalCountRoofY; indexJ++) {
        const newPanel = new ThreeD()
        newPanel.yPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
        newPanel.xPos = indexJ * (roofLen / optimalCountRoofY - ROOF_PANEL_OVERLAP)
        newPanel.zPos = roofHeight(Building, newPanel.xPos)
        newPanel.width_X = roofLen / optimalCountRoofY
        newPanel.length_Y = PANEL_WIDTH
        newPanel.name = 'Panel'
        newPanel.type = Building.exteriorPanels.wallPanelType
        newPanel.setPrice_panel()
        panelList.push(newPanel)
      }
    }
  }

  // TODO: Other Items (screws, tape, weld plates, etc.)
  const components: any = []
  components.push(framedOpeningList)
  components.push(framedOpeningList)
  components.push(columnList)
  components.push(rafterList)
  components.push(purlinList)
  components.push(girtList)
  components.push(panelList)
  return components
}

type MaterialsPriceListItem = {
  quantity: number
  shape: string
  description: string
  measurement: string
  color: string
  footageCost: string
  unitPrice: string
  totalCost: string
}

function materialsPriceList(steelBuilding: any[]) {
  const materialsListTable: any[] = []
  for (let i = 0; i < steelBuilding.length; i++) {
    const elementI = steelBuilding[i]
    let materialsListSubTable: MaterialsPriceListItem[] = []
    const lineItem: MaterialsPriceListItem = {
      quantity: 1,
      shape: 'Test Shape',
      description: elementI[0].name + ' ' + elementI[0].type,
      measurement: inchesInputToImperial(
        Math.max(elementI[0].width_X, elementI[0].length_Y, elementI[0].height_Z)
      ),
      color: 'Test Color',
      footageCost: elementI[0].pricingsList[0].units,
      unitPrice: String(elementI[0].pricingsList[0].cost_per_unit),
      totalCost: 'Test Color',
    }
    materialsListSubTable.push(lineItem)

    for (let j = 1; j < elementI.length; j++) {
      const elementJ = elementI[j]
      const pricingList = elementJ.pricingsList
      pricingList.forEach((pricing: Pricing) => {
        const lineItem: MaterialsPriceListItem = {
          quantity: 1,
          shape: 'Test Shape',
          description: elementJ.name + ' ' + elementJ.type,
          measurement: inchesInputToImperial(
            Math.max(elementJ.width_X, elementJ.length_Y, elementJ.height_Z)
          ),
          color: 'Test Color',
          footageCost: pricing.units,
          unitPrice: String(pricing.cost_per_unit),
          totalCost: 'Test Color',
        }
        let found = false
        for (let k = 0; k < materialsListSubTable.length; k++) {
          if (found === false) {
            const elementK = materialsListSubTable[k]
            // I looked up how to compare two types to see if they are identical, and I didn't like it, so this:
            if (
              elementK.color === lineItem.color &&
              elementK.description === lineItem.description &&
              elementK.footageCost === lineItem.footageCost &&
              elementK.measurement === lineItem.measurement &&
              elementK.shape === lineItem.shape &&
              elementK.unitPrice === lineItem.unitPrice
            ) {
              elementK.quantity += 1
              found = true
            }
            if (found === false) {
              materialsListSubTable.push(lineItem)
            }
          }
        }
      })
    }
    materialsListTable.push(materialsListSubTable)
    materialsListSubTable = []
  }
  return materialsListTable
}

const result = steelBuilding(TestBuilding)
console.log(
  result[0].length +
    result[1].length +
    result[2].length +
    result[3].length +
    result[4].length +
    result[5].length +
    result[6].length
)

// The below result of the function is too big for Quokka?
// const result0 = materialsPriceList(result)
// console.log(result0)
