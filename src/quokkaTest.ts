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

export function steelTableValue(table: any, row: number, col: number) {
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
type WeatherHood = '24"' | '30"' | '36"'

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

function roundSixteenth(number: number) {
	const whole = Math.floor(number)
	const numOfSixths = Math.ceil((1 - (Math.ceil(number) - number)) / 0.0625)
	return whole + numOfSixths * 0.0625
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
			str = inch + '" '
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
		numOfDoors: 1,
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
	Pricing(index: number) {
		if (this._Pricings.length < index) {
			return 0
		} else {
			return this._Pricings[index]
		}
	}

	// FO Pricing Set
	fo_personnelDoor(halfGlass: boolean, canopy: string, jambSize: string, deadBolt: boolean) {
		const newPricing = new Pricing()
		if (this.name === 'Personnel Door') {
			newPricing.units = '/each'
			newPricing.measurement = jambSize
			let sentence = this.type + ' '

			if (canopy !== 'No') {
				sentence += canopy + 'Door Slab '
				const newPricing_PD_Canopy = new Pricing()
				newPricing_PD_Canopy.description = '4' + "'" + ' 4' + "'" + '6' + '"' + ' Door Canopy'
				newPricing_PD_Canopy.cost_per_unit = 0 // TODO: Lookup Table
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
			newPricing.description = sentence
			newPricing.cost_per_unit = 0 // TODO: Loookup This Table from fn we built last night
		}
		this._Pricings.push(newPricing)
	}
	fo_overheadDoor(
		ohDoorType: string,
		insulation: string,
		operation: string,
		highLift: boolean,
		windows: string
	) {
		const newPricing = new Pricing()
		if (this.name === 'Overhead Door') {
			newPricing.description = ohDoorType + ' OH Door'
			newPricing.units = '/each'
			if (Math.abs(this.length_Y) > Math.abs(this.width_X)) {
				newPricing.measurement =
					inchesInputToImperial(this.length_Y) + ' x ' + inchesInputToImperial(this.height_Z)
			} else {
				newPricing.measurement =
					inchesInputToImperial(this.width_X) + ' x ' + inchesInputToImperial(this.height_Z)
			}
			switch (ohDoorType) {
				case 'Sectional':
					newPricing.cost_per_unit = 0 // TODO: Lookup Table
				case 'RUD':
					newPricing.cost_per_unit = 0 // TODO: Lookup Table
				case 'Customer Provided':
					newPricing.cost_per_unit = 0 // TODO: Lookup Table
			}
			newPricing.cost_per_unit = 0 // TODO: Loookup This Table from fn we built last night
		}
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
			newFO.fo_personnelDoor(
				personnelDoor.halfGlass,
				personnelDoor.canopy,
				inchesInputToImperial(personnelDoor.jambSize),
				personnelDoor.deadBolt
			)
			console.log(newFO.Pricing(0))
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

			framedOpeningList.push(newFO)
		}
	}

	// Make Columns
	const columnList: ThreeD[] = []

	// Columns are a max of 30' apart. Interior columns only needed if the span of the building (buildingX) > 80

	// Origin Column Gen
	const newColumn = new ThreeD()
	newColumn.yPos = 0
	newColumn.xPos = 0
	newColumn.zPos = 0
	newColumn.height_Z = roofHeight(Building, newColumn.xPos)
	newColumn.name = 'Column'

	if (
		Building.exteriorPanels.wallAlterationsGroup.endwall1.expandableEndwall === true ||
		(Building.info.numOfBays &&
			Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true)
	) {
		newColumn.type = steelTableValue(
			columnTbl,
			Building.info.bays[0].length / 12,
			newColumn.height_Z / 12
		)
	} else {
		newColumn.type = steelTableValue(
			nonExpandableColumnTbl,
			Building.info.bays[0].length / 12,
			newColumn.height_Z / 12
		)
	}

	framedOpeningList.forEach((element) => {
		if (
			element.name === 'Overhead Door' &&
			(element.length_Y > 10 * 12 || element.width_X > 10 * 12)
		) {
			if (newColumn.yPos > element.yPos && newColumn.yPos < element.yPos + element.length_Y) {
				if (newColumn.xPos > element.xPos && newColumn.xPos < element.xPos + element.width_X) {
					newColumn.yPos = element.yPos
					newColumn.xPos = element.xPos
					newColumn.height_Z = roofHeight(Building, newColumn.xPos)
					newColumn.type = steelTableValue(
						columnTbl,
						Building.info.bays[0].length / 12,
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
					columnList.push(extraColumn)
				}
			}
		}
	})

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
				newColumn.type = steelTableValue(
					columnTbl,
					Building.info.bays[indexI].length / 12,
					newColumn.height_Z / 12
				)
			} else {
				newColumn.type = steelTableValue(
					nonExpandableColumnTbl,
					Building.info.bays[indexI].length / 12,
					newColumn.height_Z / 12
				)
			}

			// TODO: refactor
			framedOpeningList.forEach((element) => {
				if (
					element.name === 'Overhead Door' &&
					(element.length_Y > 10 * 12 || element.width_X > 10 * 12)
				) {
					if (newColumn.yPos > element.yPos && newColumn.yPos < element.yPos + element.length_Y) {
						if (newColumn.xPos > element.xPos && newColumn.xPos < element.xPos + element.width_X) {
							newColumn.yPos = element.yPos
							newColumn.xPos = element.xPos
							newColumn.height_Z = roofHeight(Building, newColumn.xPos)
							newColumn.type = steelTableValue(
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
							columnList.push(extraColumn)
						}
					}
				}
			})

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

				framedOpeningList.forEach((element) => {
					if (
						element.name === 'Overhead Door' &&
						(element.length_Y > 10 * 12 || element.width_X > 10 * 12)
					) {
						if (element.yPos === 0 || element.yPos === buildingY) {
							if (
								newColumn.xPos > element.xPos &&
								newColumn.xPos < element.xPos + element.width_X
							) {
								if (
									Math.abs(newColumn.xPos - element.xPos) <
									Math.abs(newColumn.xPos - (element.xPos + element.width_X))
								) {
									newColumn.xPos = element.xPos
								} else {
									newColumn.xPos = element.xPos + element.width_X
								}
							}
						}

						if (element.xPos === 0 || element.xPos === buildingX) {
							if (
								newColumn.yPos > element.yPos &&
								newColumn.yPos < element.yPos + element.length_Y
							) {
								if (
									Math.abs(newColumn.yPos - element.yPos) <
									Math.abs(newColumn.yPos - (element.yPos + element.length_Y))
								) {
									newColumn.yPos = element.yPos
								} else {
									newColumn.yPos = element.yPos + element.length_Y
								}
							}
						}
					}
				})
				newColumn.height_Z = roofHeight(Building, newColumn.xPos)
				newColumn.name = 'Column'
				newColumn.type = steelTableValue(
					columnTbl,
					Building.info.bays[indexI].length / 12,
					newColumn.height_Z / 12
				)

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
	newRafter.type = steelTableValue(
		rafterTbl,
		Building.info.bays[0].length / 12,
		newRafter.height_Z / 12
	)

	rafterList.push(newRafter)

	for (let indexI = 0; indexI < Building.info.numOfBays; indexI++) {
		const newRafter = new ThreeD()
		newRafter.yPos = 0 + (1 + indexI) * Building.info.bays[indexI].length
		newRafter.xPos = 0
		newRafter.zPos = roofHeight(Building, 0)
		newRafter.height_Z = buildingZ - newRafter.zPos
		newRafter.width_X = Building.info.width
		newRafter.name = 'Rafter'
		newRafter.type = steelTableValue(
			rafterTbl,
			Building.info.bays[indexI].length / 12,
			newRafter.height_Z / 12
		)

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
				newPurlin.type = 'C'
			}

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
			recieverChannel.name = 'Reciever Channel'
			if (Building.info.bays[0].length > 25 * 12) {
				recieverChannel.type = '10"'
			} else {
				recieverChannel.type = '8"'
			}
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
			newGirt.name = 'Girt'
			newGirt.type = 'C'
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
			newGirt.name = 'Girt'
			newGirt.type = 'C'
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
			newGirt.name = 'Girt'
			newGirt.type = 'C'
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
			newGirt.name = 'Girt'
			newGirt.type = 'C'
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
		panelList.push(newPanel)
	}

	// Roof
	// This loop is absolutely wrong. Just wanted to push something before we met again. It's close, but wrong.
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
				panelList.push(newPanel)
			}
		}
	}

	// Screw Gen
	const components: any = {
		FramedOpenings: framedOpeningList,
		Columns: columnList,
		Rafters: rafterList,
		Purlins: purlinList,
		Girts: girtList,
		Panels: panelList,
	}
	return components
}

// class MaterialsList extends ThreeD {
// 	quantity = 0
// 	shape = ''
// 	description = ''
// 	measurement = ''
// 	color = ''
// 	footageCost = 0
// 	unitPrice = 0
// 	totalCost = 0

// 	constructor(threeD: ThreeD) {
// 		super(threeD)
// 	}
// }

// Pricing Object
type StructuralSteelPricing = {
	price: number
	unit: 'each' | 'ft' | 'lb'
	weightPerFeet: number
}

type StructuralSteelPriceTable = Record<string, StructuralSteelPricing>

const structuralSteelPriceTable: StructuralSteelPriceTable = {
	'TS 4x4x11GA': {
		price: 120,
		unit: 'lb',
		weightPerFeet: 6.46,
	},
}

function calculateStructuralSteelPrice(name: string, value: number) {
	const item = structuralSteelPriceTable[name]

	if (item.unit === 'each') {
		return item.price * value
	} else if (item.unit === 'lb') {
		return item.price * ((value * 12) / item.weightPerFeet)
	} else {
		return item.price * (value * 12)
	}
}

function calculateFramedOpeningsPrices(framedOpenings: ThreeD[]) {
	const overheadDoors: ThreeD[] = []
	const windows: ThreeD[] = []
	const personnelDoors: ThreeD[] = []

	framedOpenings.forEach((threeD) => {
		if (threeD.type === 'overheadDoor') {
			overheadDoors.push(threeD)
		}
	})

	const calculatedOverheadDoors = calculateOverheadDoors(overheadDoors)
}

// function calculateOverheadDoors(doors: ThreeD[]) {
// 	const
// }

// function generateMaterialsList() {
//   // List of Lists of ThreeDs
//  //
//

// framed openings -
// Steel

// }
const result = steelBuilding(TestBuilding)
//console.log(result.Panels)
// TODO: Convert Steel.ts and SteelTableIndexer, and all it's usage in the above to the new system
// console.log(TestBuilding.info.height)
// console.log(TestBuilding.info.roofPitch)
