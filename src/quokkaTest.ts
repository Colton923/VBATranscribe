/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  highLift: boolean
  window: OverheadDoorWindow
  leftEdgePos: number
}

type OverheadDoorType = 'Sectional' | 'RUD' | 'Customer Provided'
type OverheadDoorInsulation = 'None' | 'Vinyl Backed' | 'Steel Backed'
type OverheadDoorOperation = 'Manual' | 'Chain Hoist' | 'Electric Opener'
type OverheadDoorWindow = 'None' | 'Non-Insulated' | 'Insulated' | 'Full Glass Panels'

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
  | 'None'
  | '24" Exhaust Fan'
  | '30" Exhaust Fan'
  | '36" Exhaust Fan'
  | '24" Louver'
  | '30" Louver'
  | '36" Louver'

type WeatherHood = 'None' | '24"' | '30"' | '36"'

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

export const overheadDoorPricingTable = {
  8: {
    8: '$889.86',
    9: '$1,002.22',
    10: '$1,081.62',
    11: '$1,237.42',
    12: '$1,330.30',
    13: '$1,463.63',
    14: '$1,543.03',
    15: '$1,706.32',
    16: '$1,782.73',
    17: '$2,425.41',
    18: '$2,506.30',
    20: '$3,128.01',
    22: '$3,608.90',
    24: '$4,330.97',
  },
  9: {
    8: '$933.31',
    9: '$1,054.65',
    10: '$1,131.06',
    11: '$1,319.82',
    12: '$1,406.71',
    13: '$1,547.53',
    14: '$1,629.92',
    15: '$1,808.19',
    16: '$1,893.58',
    17: '$2,549.75',
    18: '$2,636.64',
    20: '$3,163.96',
    22: '$3,796.16',
    24: '$4,555.69',
  },
  10: {
    8: '$996.23',
    9: '$1,129.56',
    10: '$1,220.94',
    11: '$1,409.70',
    12: '$1,501.09',
    13: '$1,653.89',
    14: '$1,713.81',
    15: '$1,977.48',
    16: '$2,032.91',
    17: '$2,734.01',
    18: '$2,828.39',
    20: '$3,394.67',
    22: '$4,073.30',
    24: '$4,886.77',
  },
  11: {
    8: '$1,098.10',
    9: '$1,244.91',
    10: '$1,334.80',
    11: '$1,549.02',
    12: '$1,628.42',
    13: '$1,820.18',
    14: '$1,899.58',
    15: '$2,137.77',
    16: '$2,247.13',
    17: '$2,990.19',
    18: '$3,107.04',
    20: '$3,728.74',
    22: '$4,474.79',
    24: '$5,369.15',
  },
  12: {
    8: '$1,149.03',
    9: '$1,295.85',
    10: '$1,393.22',
    11: '$1,617.94',
    12: '$1,694.34',
    13: '$1,904.07',
    14: '$1,992.46',
    15: '$2,238.14',
    16: '$2,350.50',
    17: '$3,120.52',
    18: '$3,246.36',
    20: '$3,895.03',
    22: '$4,674.04',
    24: '$5,610.34',
  },
  13: {
    8: '$1,219.44',
    9: '$1,378.24',
    10: '$1,493.59',
    11: '$1,715.31',
    12: '$1,826.17',
    13: '$2,017.93',
    14: '$2,121.29',
    15: '$2,380.46',
    16: '$2,503.31',
    17: '$3,303.29',
    18: '$3,435.12',
    20: '$4,122.74',
    22: '$4,946.69',
    24: '$5,935.43',
  },
  14: {
    8: '$1,250.90',
    9: '$1,415.69',
    10: '$1,546.03',
    11: '$1,766.25',
    12: '$1,889.09',
    13: '$2,074.85',
    14: '$2,190.21',
    15: '$2,450.87',
    16: '$2,570.72',
    17: '$3,400.66',
    18: '$3,529.50',
    20: '$4,235.10',
    22: '$5,083.02',
    24: '$6,098.72',
  },
  15: {
    8: '$1,409.70',
    9: '$1,605.95',
    10: '$1,736.28',
    11: '$1,975.98',
    12: '$2,106.31',
    13: '$2,341.51',
    14: '$2,599.18',
    15: '$2,880.82',
    16: '$3,050.11',
    17: '$4,079.30',
    18: '$4,233.60',
    20: '$5,080.02',
    22: '$6,095.72',
    24: '$7,315.17',
  },
  16: {
    8: '$1,493.59',
    9: '$1,703.33',
    10: '$1,833.66',
    11: '$2,082.34',
    12: '$2,218.67',
    13: '$2,476.34',
    14: '$2,795.43',
    15: '$3,098.05',
    16: '$3,291.30',
    17: '$4,422.36',
    18: '$4,590.14',
    20: '$5,508.47',
    22: '$6,609.57',
    24: '$7,932.38',
  },
  17: {
    8: '$1,868.12',
    9: '$2,139.27',
    10: '$2,314.55',
    11: '$2,626.15',
    12: '$2,928.76',
    13: '$3,237.37',
    14: '$3,538.49',
    15: '$3,860.57',
    16: '$4,067.31',
    17: '$4,663.55',
    18: '$5,424.58',
    20: '$6,509.20',
    22: '$7,811.03',
    24: '$9,373.54',
  },
  18: {
    8: '$1,949.01',
    9: '$2,239.64',
    10: '$2,425.41',
    11: '$2,743.00',
    12: '$3,125.01',
    13: '$3,439.61',
    14: '$3,622.38',
    15: '$4,022.37',
    16: '$4,212.63',
    17: '$4,787.89',
    18: '$5,761.65',
    20: '$6,913.68',
    22: '$8,296.42',
    24: '$9,956.30',
  },
  19: {
    8: '$2,110.81',
    9: '$2,431.40',
    10: '$2,585.70',
    11: '$3,114.53',
    12: '$3,381.19',
    13: '$3,724.25',
    14: '$3,880.05',
    15: '$4,402.88',
    16: '$4,909.24',
    17: '$5,491.99',
    18: '$5,981.87',
    20: '$7,178.84',
    22: '$8,614.01',
    24: '$10,336.81',
  },
  20: {
    8: '$2,190.21',
    9: '$2,524.28',
    10: '$2,666.60',
    11: '$3,297.29',
    12: '$3,507.03',
    13: '$3,865.07',
    14: '$4,004.39',
    15: '$4,602.13',
    16: '$5,349.68',
    17: '$5,972.88',
    18: '$6,178.12',
    20: '$7,414.04',
    22: '$8,897.15',
    24: '$10,675.38',
  },
  21: {
    8: '$2,329.53',
    9: '$2,810.41',
    10: '$3,009.66',
    11: '$3,981.92',
    12: '$3,797.66',
    13: '$4,187.16',
    14: '$4,390.90',
    15: '$5,109.98',
    16: '$5,441.06',
    17: '$6,274.00',
    18: '$6,492.72',
    20: '$7,791.56',
    22: '$9,349.57',
    24: '$11,219.19',
  },
  22: {
    8: '$2,402.93',
    9: '$2,957.23',
    10: '$3,184.94',
    11: '$3,649.34',
    12: '$3,936.98',
    13: '$4,653.06',
    14: '$4,865.79',
    15: '$5,424.58',
    16: '$5,577.38',
    17: '$6,419.31',
    18: '$6,653.01',
    20: '$7,983.32',
    22: '$9,580.28',
    24: '$11,496.33',
  },
  23: {
    8: '$2,498.81',
    9: '$3,074.08',
    10: '$3,307.78',
    11: '$3,757.21',
    12: '$4,350.45',
    13: '$4,766.92',
    14: '$4,979.65',
    15: '$5,542.93',
    16: '$5,718.20',
    17: '$6,551.14',
    18: '$6,786.34',
    20: '$8,143.61',
    22: '$9,772.03',
    24: '$11,727.04',
  },
  24: {
    8: '$2,548.25',
    9: '$3,132.50',
    10: '$3,376.69',
    11: '$4,166.18',
    12: '$4,464.30',
    13: '$4,865.79',
    14: '$5,044.07',
    15: '$5,601.35',
    16: '$5,782.62',
    17: '$6,609.57',
    18: '$6,850.76',
    20: '$8,221.51',
    22: '$9,864.91',
    24: '$11,837.90',
  },
  25: {
    8: '$2,802.92',
    9: '$3,445.60',
    10: '$3,713.76',
    11: '$4,582.65',
    12: '$4,910.74',
    13: '$5,352.67',
    14: '$5,548.92',
    15: '$6,161.64',
    16: '$6,360.89',
    17: '$7,270.22',
    18: '$7,535.39',
    20: '$9,042.46',
    22: '$10,852.16',
    24: '$13,021.39',
  },
  26: {
    8: '$3,083.07',
    9: '$3,790.16',
    10: '$4,085.29',
    11: '$5,041.07',
    12: '$5,402.11',
    13: '$5,887.49',
    14: '$6,103.21',
    15: '$6,777.35',
    16: '$6,997.57',
    17: '$7,998.30',
    18: '$8,288.93',
    20: '$9,947.31',
    22: '$11,936.77',
    24: '$14,324.73',
  },
}

export const tableObjectToArray = (table: Record<string, Record<string, unknown>>): any[][] =>
  Object.keys(table).map((rowVal) => Object.values(table[rowVal]))

export function closestTableValue(
  table: Record<string, Record<string, string>>,
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

export const steelMiscTable = {
  '8" Receiver Cee': 4,
  '10" Receiver Cee': 6.25,
  '8" Purlin': 3.59,
  '10" Purlin': 6,
  '2x4 Base Angle': 2,
  'Weld Clips': 2,
  'Eave Strut': 6.49,
}

// {string, Price / LF}
const panelPriceTable = {
  'Prime SMP Colors (Lifetime Warranty)': 4.06,
  'Prime Acrylic AZ55 Galvalume (25yr Warranty)': 3.31,
  'Prime Galvalume Copper Metallic (Lifetime Warranty)': 5.08,
  'Thrifty SMP Colors (20yr Warranty)': 3.91,
  'Standard Galvalume (25yr Warranty)': 3.0,
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

export const windowPricePerSqFt = 17
export const rollUpDoorPricePerSqFt = 8.52

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

const columnTable = {
  30: {
    20: 'W8x10',
    30: 'W10x12',
    40: 'W12x14',
    50: 'W12x19',
    60: 'W14x22',
    70: 'W16x26',
    80: 'W16x36',
  },
  40: {
    20: 'W10x12',
    30: 'W12x14',
    40: 'W12x19',
    50: 'W14x22',
    60: 'W16x26',
    70: 'W16x36',
    80: 'W18x40',
  },
  50: {
    20: 'W12x14',
    30: 'W12x19',
    40: 'W14x22',
    50: 'W16x26',
    60: 'W16x36',
    70: 'W18x40',
    80: 'W21x50',
  },
  60: {
    20: 'W12x19',
    30: 'W14x22',
    40: 'W16x26',
    50: 'W16x36',
    60: 'W18x40',
    70: 'W21x50',
    80: 'W24x60',
  },
  70: {
    20: 'W14x22',
    30: 'W16x26',
    40: 'W16x36',
    50: 'W18x40',
    60: 'W21x50',
    70: 'W24x60',
    80: 'W24x84',
  },
  80: {
    20: 'W16x26',
    30: 'W16x36',
    40: 'W18x40',
    50: 'W21x50',
    60: 'W24x60',
    70: 'W24x84',
    80: 'W27x102',
  },
}

export const rafterTable = {
  25: { 20: 'W8x10', 30: 'W8x10', 40: 'W8x10', 50: 'W8x10', 60: 'W8x10', 70: 'W8x10', 80: 'W8x10' },
  30: { 20: 'W8x13', 30: 'W8x13', 40: 'W8x13', 50: 'W8x13', 60: 'W8x13', 70: 'W8x13', 80: 'W8x13' },
  35: {
    20: 'W10x14',
    30: 'W10x14',
    40: 'W10x14',
    50: 'W10x14',
    60: 'W10x14',
    70: 'W10x14',
    80: 'W10x14',
  },
  40: {
    20: 'W10x17',
    30: 'W10x17',
    40: 'W10x17',
    50: 'W10x17',
    60: 'W10x17',
    70: 'W10x17',
    80: 'W10x17',
  },
  45: {
    20: 'W12x19',
    30: 'W12x19',
    40: 'W12x19',
    50: 'W12x19',
    60: 'W12x19',
    70: 'W12x19',
    80: 'W12x19',
  },
  50: {
    20: 'W12x22',
    30: 'W12x22',
    40: 'W12x22',
    50: 'W12x22',
    60: 'W12x22',
    70: 'W12x22',
    80: 'W12x22',
  },
  55: {
    20: 'W12x26',
    30: 'W12x26',
    40: 'W12x26',
    50: 'W12x26',
    60: 'W12x26',
    70: 'W12x26',
    80: 'W12x26',
  },
  60: {
    20: 'W14x26',
    30: 'W14x26',
    40: 'W14x26',
    50: 'W14x26',
    60: 'W14x26',
    70: 'W14x26',
    80: 'W14x26',
  },
  65: {
    20: 'W16x36',
    30: 'W16x36',
    40: 'W16x36',
    50: 'W16x36',
    60: 'W16x36',
    70: 'W16x36',
    80: 'W16x36',
  },
  70: {
    20: 'W21x44',
    30: 'W21x44',
    40: 'W21x44',
    50: 'W21x44',
    60: 'W21x44',
    70: 'W21x44',
    80: 'W21x44',
  },
  75: {
    20: 'W21x50',
    30: 'W21x50',
    40: 'W21x50',
    50: 'W21x50',
    60: 'W21x50',
    70: 'W21x50',
    80: 'W21x50',
  },
  80: {
    20: 'W24x60',
    30: 'W24x60',
    40: 'W24x60',
    50: 'W24x60',
    60: 'W24x60',
    70: 'W24x60',
    80: 'W24x60',
  },
}

export const nonExpandableColumnTable = {
  30: {
    20: 'TS 4x4x11GA',
    30: 'TS 4x4x3/16',
    40: 'TS 4x4x1/4',
    50: 'W8x13',
    60: 'W10x12',
    70: 'W12x14',
    80: 'W12x19',
  },
  40: {
    20: 'TS 4x4x11GA',
    30: 'TS 4x4x3/16',
    40: 'TS 4x4x1/4',
    50: 'W8x13',
    60: 'W10x12',
    70: 'W12x14',
    80: 'W12x19',
  },
  50: {
    20: 'TS 4x4x11GA',
    30: 'TS 4x4x3/16',
    40: 'TS 4x4x1/4',
    50: 'W8x13',
    60: 'W10x12',
    70: 'W12x14',
    80: 'W12x19',
  },
  60: {
    20: 'TS 4x4x11GA',
    30: 'TS 4x4x3/16',
    40: 'TS 4x4x1/4',
    50: 'W8x13',
    60: 'W10x12',
    70: 'W12x14',
    80: 'W12x19',
  },
  70: {
    20: 'TS 4x4x11GA',
    30: 'TS 4x4x3/16',
    40: 'TS 4x4x1/4',
    50: 'W8x13',
    60: 'W10x12',
    70: 'W12x14',
    80: 'W12x19',
  },
  80: {
    20: 'TS 4x4x11GA',
    30: 'TS 4x4x3/16',
    40: 'TS 4x4x1/4',
    50: 'W8x13',
    60: 'W10x12',
    70: 'W12x14',
    80: 'W12x,19',
  },
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
        highLift: true,
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
        highLift: true,
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
        highLift: true,
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

function roofHeight(info: BuildingInfo, POS_X: number) {
  const baseHeight = info.height
  const baseWidth = info.width

  if (info.roofShape === 'Gable' && POS_X > baseWidth / 2) {
    return baseHeight + info.roofPitch * (POS_X - baseWidth)
  }

  return baseHeight + POS_X * info.roofPitch
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
  personnelDoorPricing(personnelDoor: PersonnelDoor) {
    const pricing = new Pricing()
    pricing.units = 'each'
    pricing.measurement = inchesInputToImperial(personnelDoor.jambSize)

    let sentence = this.type + ' '

    if (personnelDoor.canopy !== 'No') {
      sentence += 'Door Slab '

      pricing.description = personnelDoor.canopy + ' Door Canopy'
      // @ts-ignore
      pricing.cost_per_unit = miscPriceTable[pricing.description]
      pricing.units = 'each'

      this._Pricings.push(pricing)
    } else {
      sentence += personnelDoor.jambSize + ' ' + 'Jamb Kit'
    }

    if (personnelDoor.deadBolt === true) {
      sentence += 'W/ Deadbolt '
    } else {
      sentence += 'W/O Deadbolt '
    }

    if (personnelDoor.halfGlass === true) {
      sentence += 'W/ Glass '
    } else {
      sentence += 'W/O Glass '
    }

    sentence = sentence.substring(0, sentence.length - 1)
    pricing.description = sentence

    // @ts-ignore
    pricing.cost_per_unit = miscPriceTable[pricing.description]

    this._Pricings.push(pricing)
  }

  overheadDoorPricing(overheadDoor: OverheadDoor) {
    const pricing = new Pricing()

    pricing.description = overheadDoor.type + ' OH Door'
    pricing.units = 'each'

    if (Math.abs(this.length_Y) > Math.abs(this.width_X)) {
      pricing.measurement =
        inchesInputToImperial(Math.abs(this.length_Y)) +
        ' x ' +
        inchesInputToImperial(Math.abs(this.height_Z))
    } else {
      pricing.measurement =
        inchesInputToImperial(Math.abs(this.width_X)) +
        ' x ' +
        inchesInputToImperial(Math.abs(this.height_Z))
    }

    const widthHeight = pricing.measurement.split(' x ')

    switch (overheadDoor.type) {
      case 'Sectional':
        pricing.cost_per_unit = +closestTableValue(
          overheadDoorPricingTable,
          Math.round(imperialInputToInches(widthHeight[0]) / 12),
          Math.round(imperialInputToInches(widthHeight[1]) / 12)
        )

        pricing.cost_per_unit += miscPriceTable[overheadDoor.operation]

        if (overheadDoor.insulation !== 'None') {
          pricing.cost_per_unit +=
            miscPriceTable[overheadDoor.insulation] *
            (imperialInputToInches(widthHeight[0]) / 12) *
            (imperialInputToInches(widthHeight[1]) / 12)
        }

        if (overheadDoor.highLift === true) {
          pricing.cost_per_unit += highLiftPriceLookup(
            highLiftPriceTable,
            overheadDoor.height,
            this.height_Z
          )
        }

        if (overheadDoor.window !== 'None') {
          pricing.description = overheadDoor.window + ' Window'
          // @ts-ignore
          pricing.cost_per_unit += miscPriceTable[pricing.description]
        }
        break

      case 'RUD':
        pricing.cost_per_unit +=
          (imperialInputToInches(widthHeight[0]) / 12) *
          (imperialInputToInches(widthHeight[1]) / 12) *
          rollUpDoorPricePerSqFt
        pricing.cost_per_unit += miscPriceTable[overheadDoor.operation]
        break

      case 'Customer Provided':
        pricing.cost_per_unit = 0
        break
    }
  }

  windowPricing() {
    const pricing = new Pricing()

    pricing.units = 'each'

    if (Math.abs(this.length_Y) < Math.abs(this.width_X)) {
      pricing.cost_per_unit =
        windowPricePerSqFt * Math.round(this.width_X / 12) * Math.round(this.height_Z / 12)
    } else {
      pricing.cost_per_unit =
        windowPricePerSqFt * Math.round(this.length_Y / 12) * Math.round(this.height_Z / 12)
    }

    this._Pricings.push(pricing)
  }

  miscPricing(exhuastFan: ExhuastFanLouvers, weatherHood: WeatherHood) {
    const pricing = new Pricing()

    pricing.units = 'each'
    pricing.cost_per_unit = 0

    if (exhuastFan !== 'None') {
      // @ts-ignore
      pricing.cost_per_unit += miscPriceTable[exhuastFan]
    }
    if (weatherHood !== 'None') {
      // @ts-ignore
      pricing.cost_per_unit += miscPriceTable[weatherHood]
    }

    this._Pricings.push(pricing)
  }

  steelPricing() {
    const pricing = new Pricing()

    if (this.name === 'Column' || this.name === 'Rafter') {
      pricing.units = 'lb'
      // If the selected steel type is not included in the miscPriceTable, it is 99 cents per lb
      // @ts-ignore
      pricing.cost_per_unit = miscPriceTable[this.type] || 0.99
    }

    if (this.name === 'Purlin' || this.name === 'Receiver Cee' || this.name === 'Girt') {
      pricing.units = 'ft'
      // @ts-ignore
      pricing.cost_per_unit = miscPriceTable[this.type + ' ' + this.name]
    }
    if (this.name === 'Eave Strut') {
      pricing.units = 'ft'
      pricing.cost_per_unit = miscPriceTable[this.name]
    }

    this._Pricings.push(pricing)
  }

  panelPrice() {
    const newPricing = new Pricing()
    newPricing.units = 'ft'
    // @ts-ignore
    newPricing.cost_per_unit = miscPriceTable[this.type]
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

      newFO.personnelDoorPricing(personnelDoor)
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

      newFO.overheadDoorPricing(overheadDoor)
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

      newFO.windowPricing()
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

      newFO.miscPricing(framedOpening.exhuastFanLouvers, framedOpening.weatherHood)
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
  column00.height_Z = roofHeight(Building.info, column00.xPos)
  column00.name = 'Column'

  if (
    Building.exteriorPanels.wallAlterationsGroup.endwall1.expandableEndwall === true ||
    (Building.info.numOfBays &&
      Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true)
  ) {
    column00.type = closestTableValue(
      columnTable,
      Building.info.bays[0].length / 12,
      column00.height_Z / 12
    )
  } else {
    column00.type = closestTableValue(
      nonExpandableColumnTable,
      Building.info.bays[0].length / 12,
      column00.height_Z / 12
    )
  }

  column00.steelPricing()
  columnList.push(column00)

  const column01 = new ThreeD()
  column01.yPos = 0
  column01.xPos = buildingX
  column01.zPos = 0
  column01.height_Z = roofHeight(Building.info, column01.xPos)
  column01.name = 'Column'

  if (
    Building.exteriorPanels.wallAlterationsGroup.endwall1.expandableEndwall === true ||
    (Building.info.numOfBays &&
      Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true)
  ) {
    column01.type = closestTableValue(
      columnTable,
      Building.info.bays[0].length / 12,
      column01.height_Z / 12
    )
  } else {
    column01.type = closestTableValue(
      nonExpandableColumnTable,
      Building.info.bays[0].length / 12,
      column01.height_Z / 12
    )
  }

  column01.steelPricing()
  columnList.push(column01)

  // Perimeter Column Gen
  for (let indexI = 0; indexI < Building.info.numOfBays; indexI++) {
    for (let indexJ = 0; indexJ < 2; indexJ++) {
      const newColumn = new ThreeD()

      newColumn.yPos = 0 + (indexI + 1) * Building.info.bays[indexI].length
      newColumn.xPos = 0 + indexJ * buildingX
      newColumn.zPos = 0
      newColumn.height_Z = roofHeight(Building.info, newColumn.xPos)
      newColumn.name = 'Column'

      if (
        indexI + 1 === Building.info.numOfBays &&
        Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true
      ) {
        newColumn.type = closestTableValue(
          columnTable,
          Building.info.bays[indexI].length / 12,
          newColumn.height_Z / 12
        )
      } else {
        newColumn.type = closestTableValue(
          nonExpandableColumnTable,
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
              newColumn.height_Z = roofHeight(Building.info, newColumn.xPos)
              newColumn.type = closestTableValue(
                columnTable,
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
              extraColumn.steelPricing()
              columnList.push(extraColumn)
              break
            }
          }
        }
      }

      newColumn.steelPricing()
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
                newColumn.height_Z = roofHeight(Building.info, newColumn.xPos)
                newColumn.type = closestTableValue(
                  columnTable,
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
                extraColumn.steelPricing()
                columnList.push(extraColumn)
                break
              }
            }
          }
        }

        newColumn.height_Z = roofHeight(Building.info, newColumn.xPos)
        newColumn.name = 'Column'
        newColumn.type = closestTableValue(
          columnTable,
          Building.info.bays[indexI].length / 12,
          newColumn.height_Z / 12
        )
        newColumn.steelPricing()
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
  newRafter.height_Z = roofHeight(Building.info, newRafter.xPos)
  newRafter.width_X = Building.info.width
  newRafter.name = 'Rafter'
  newRafter.type = closestTableValue(
    rafterTable,
    Building.info.bays[0].length / 12,
    newRafter.height_Z / 12
  )

  newRafter.steelPricing()
  rafterList.push(newRafter)

  for (let indexI = 0; indexI < Building.info.numOfBays; indexI++) {
    const newRafter = new ThreeD()

    newRafter.yPos = 0 + (1 + indexI) * Building.info.bays[indexI].length
    newRafter.xPos = 0
    newRafter.zPos = roofHeight(Building.info, 0)
    newRafter.height_Z = buildingZ - newRafter.zPos
    newRafter.width_X = Building.info.width
    newRafter.name = 'Rafter'
    newRafter.type = closestTableValue(
      rafterTable,
      Building.info.bays[indexI].length / 12,
      newRafter.height_Z / 12
    )

    newRafter.steelPricing()
    rafterList.push(newRafter)
  }

  // Make Purlins & Eave Struts & "Receiver Cees" (Receiver Channels)

  // Receiver channels only for roofs with a pitch greater than 1:12 and
  // if the bay length is less than or equal to 25' then 8", if greater than 25' then 10"
  // New Building Property = Purlin Spacing Max

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

      newPurlin.steelPricing()
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

      recieverChannel.steelPricing()
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

      newGirt.steelPricing()
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

      newGirt.steelPricing()
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

      newGirt.steelPricing()
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

      newGirt.steelPricing()
      girtList.push(newGirt)
    }
  }

  // Make Panels
  const panelList: ThreeD[] = []
  const optimalCountY = Math.ceil(buildingX / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
  const optimalCountX = Math.ceil(buildingY / (PANEL_WIDTH + WALL_PANEL_OVERLAP))

  // Endwall 1
  for (let indexI = 0; indexI < optimalCountY; indexI++) {
    const newPanel = new ThreeD()
    newPanel.yPos = 0
    newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.zPos = 0
    newPanel.width_X = PANEL_WIDTH
    newPanel.height_Z = roofHeight(Building.info, newPanel.xPos)

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
      ) {
        if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.width_X) {
          newPanel.zPos = element.height_Z
          newPanel.height_Z = roofHeight(Building.info, newPanel.xPos) - element.height_Z
        }
      }
    })

    newPanel.name = 'Panel'
    newPanel.type = Building.exteriorPanels.wallPanelType
    newPanel.panelPrice()
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
    newPanel.panelPrice()
    panelList.push(newPanel)
  }

  // Endwall 3
  for (let indexI = 0; indexI < optimalCountY; indexI++) {
    const newPanel = new ThreeD()

    newPanel.yPos = buildingY
    newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.zPos = 0
    newPanel.width_X = PANEL_WIDTH
    newPanel.height_Z = roofHeight(Building.info, newPanel.xPos)

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_Y > 10 * 12 || element.width_X > 10 * 12)
      ) {
        if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.width_X) {
          newPanel.zPos = element.height_Z
          newPanel.height_Z = roofHeight(Building.info, newPanel.xPos) - element.height_Z
        }
      }
    })

    newPanel.name = 'Panel'
    newPanel.type = Building.exteriorPanels.wallPanelType
    newPanel.panelPrice()
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
    newPanel.panelPrice()
    panelList.push(newPanel)
  }

  // Roof
  // TODO: This loop is absolutely wrong. Just wanted to push something before we met again. It's close, but wrong.

  const optimalCountRoofX = optimalCountX

  const PANEL_LENGTH = 41
  const countRoofY = Math.ceil(buildingX / (PANEL_WIDTH - WALL_PANEL_OVERLAP))
  const countRoofX = Math.ceil(buildingY / (PANEL_LENGTH * 12 - WALL_PANEL_OVERLAP))

  // x^2 + delta(z)^2

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

  if (Building.info.roofShape === 'Gable') {
    for (let indexI = 0; indexI < optimalCountRoofX; indexI++) {
      for (let indexJ = 0; indexJ < optimalCountRoofY; indexJ++) {
        const newPanel = new ThreeD()

        newPanel.yPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
        newPanel.xPos = indexJ * (roofLen / optimalCountRoofY - ROOF_PANEL_OVERLAP)
        newPanel.zPos = roofHeight(Building.info, newPanel.xPos)
        newPanel.width_X = roofLen / optimalCountRoofY
        newPanel.length_Y = PANEL_WIDTH
        newPanel.name = 'Panel'
        newPanel.type = Building.exteriorPanels.wallPanelType
        newPanel.panelPrice()
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
