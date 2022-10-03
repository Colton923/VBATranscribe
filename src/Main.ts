import type { BuildingData, BuildingInfo, Customer, ExteriorPanels, FramedOpenings, Trim } from './types/Project'
import inchesInputToImperial from './inchesToImperial'

export class Building {
	private readonly CUSTOMER: Customer
	private readonly DATA: BuildingData
	private readonly UNDERCUT = 4.25

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

	get data() {
		return this.DATA
	}

	get info() {
		return this.DATA.info
	}

	set info(buildingInfo: BuildingInfo) {
		this.DATA.info = buildingInfo
	}

	get exteriorPanels() {
		return this.DATA.exteriorPanels
	}

	set exteriorPanels(buildingInfo: ExteriorPanels) {
		this.DATA.exteriorPanels = buildingInfo
	}

  get trim() {
    return this.DATA.trim
  }

	set trim(trim: Trim) {
		this.DATA.trim = trim
	}

  get framedOpenings() {
    return this.DATA.framedOpenings
  }

	set framedOpenings(framedOpenings: FramedOpenings) {
		this.DATA.framedOpenings = framedOpenings
	}
}
