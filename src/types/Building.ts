/**
 * BuildingData - main
 */
export type ProjectData = {
  customer: Customer
  building: BuildingData
}

export type BuildingData = {
  info: BuildingInfo
  exteriorPanels: ExteriorPanels
  trim: Trim
  personnelDoors: PersonnelDoors
  overheadDoors: OverheadDoors
  windows: Windows
  framedOpenings: FramedOpenings
  insulation: Insulation
  additionalOptions: AdditionalOptions
}

export type Customer = {
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

type SelectBoolean = '0' | '1'

export type Colors =
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
export type BuildingInfo = {
	width: number
	height: number
	roofPitch: number
	gutters: boolean
	length: number
	numOfBays: number
	roofShape: string
	bays?: Bay[]
  // New fields to calculate on form submission
  roofLength: number
  highSideEaveHeight: number
  sidewall2ExtRafterLength: number
  sidewall4ExtRafterLength: number
  netSingleRoofPanelQty: number
}

type Bay = {
	length: number
}

/**
 * Exterior Panels
 */
export type ExteriorPanels = {
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
	expendableEndwall: boolean
	length: number
}

/**
 * Trim
 */
export type Trim = {
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
export type PersonnelDoors = {
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
	rightEdgePos: number
}

type PersonnelDoorSize = 3070 | 4070
type PersonnelDoorWall = 'Endwall 1' | 'Sidewall 2' | 'Sidewall 4' | 'Field Locate'
type PersonnelDoorCanopy = 'No' | "4' x 4'6\"" | "4' x 7'6\""
type PersonnelDoorJambSize = 4.25 | 6.25 | 8.25 | 10.25

/**
 * Overhead Doors
 */
export type OverheadDoors = {
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
	rightEdgePos: number
}

type OverheadDoorType = 'Sectional' | 'RUD' | 'Customer Provided'
type OverheadDoorInsulation = 'None' | 'Vinyl Backed' | 'Steel Backed'
type OverheadDoorOperation = 'Manual' | 'Chain Hoist' | 'Electric Opener'
type OverheadDoorWindows = 'None' | 'Non-Insulated' | 'Insulated' | 'Full Glass Panels'

/**
 * Windows
 */
export type Windows = {
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
export type FramedOpenings = {
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
export type Insulation = {
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
export type AdditionalOptions = {
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

