import type { BuildingData, BuildingInfo, Customer, FramedOpenings, Trim } from './types/Building'
import inchesInputToImperial from './inchesToImperial'

export class Building {
	readonly CUSTOMER: Customer
	readonly DATA: BuildingData
	readonly UNDERCUT = 4.25

	constructor() {
		this.CUSTOMER = {} as Customer
		this.DATA = {
			info: {},
			exteriorPanels: {},
			trim: {},
			personnelDoors: {},
			overheadDoors: {},
			windows: {},
			framedOpenings: {},
			insulation: {},
			additionalOptions: {},
		} as BuildingData
	}

	/**
	 * Converts inches as a string into a number and then converts that number
	 * into a string with the imperial measurement
	 *
	 * @param inches
	 * @returns {string} string of inches in imperial measurement
	 */
	static inchesInputToImperial(inches: string) {
		return inchesInputToImperial(parseInt(inches))
	}

	get buildingData() {
		return this.DATA
	}

	get buildingInfo() {
		return this.DATA.info
	}

	set buildingInfo(buildingInfo: BuildingInfo) {
		this.DATA.info = buildingInfo
	}

	set trim(trim: Trim) {
		this.DATA.trim = trim
	}

	set framedOpenings(framedOpenings: FramedOpenings) {
		this.DATA.framedOpenings = framedOpenings
	}
}
