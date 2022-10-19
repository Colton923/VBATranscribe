import { Building } from './Main'
import { BuildingInfo } from './types/Project'

const DOORHEIGHT = 84
const DOORWIDTH_3070 = 36
const DOORWIDTH_4070 = 48
const WALL_PANEL_OVERLAP = 3.5
const ROOF_PANEL_OVERLAP = 6
const PANEL_WIDTH = 36
//smallest thing we are measuring by
const DEFAULT_MIN_DISTANCE = 0.0625 // 1/16th of an inch

/*
 ************************** Every value is to be read in inches **************************
 * Unsure about the below... TODO: Roll through the algo and make sure it can be read this way. It's a ratio.
 * Roof pitch needs to be decimal like =1/12, =1/11, = 1/10, = 1/9, ... , 1/1
 */

//single-sloped building high side is the last side.
export default function steelBuilding(Building: Building) {
	const buildingX = Building.info.length
	const buildingY = Building.info.width
	const buildingZ = 0

	if (Building.info.roofShape === 'Gable') {
		const buildingZ = Building.info.height + (Building.info.roofPitch * buildingY) / 2
	} else {
		const buildingZ = Building.info.height + Building.info.roofPitch * buildingY
	}

	const perimeter =
		buildingX * 2 +
		buildingY * 2 +
		Building.exteriorPanels.wallAlterationsGroup.endwall1.length +
		Building.exteriorPanels.wallAlterationsGroup.sidewall2.length +
		Building.exteriorPanels.wallAlterationsGroup.endwall3.length +
		Building.exteriorPanels.wallAlterationsGroup.sidewall4.length
	// Make Columns
	const columnList: ThreeD[] = []

	// First generation of Columns doesn't include columns additional due to OverHead Doors
	if (Building.info.numOfBays > 0 && Building.info.bays) {
		for (let indexI = 0; indexI <= Building.info.numOfBays; indexI++) {
			for (let indexJ = 0; indexJ < Math.ceil(buildingY / 30); indexJ++) {
				if (indexI === 0 || indexI === Building.info.numOfBays) {
					const newColumn = new ThreeD()
					newColumn.xPos = 0 + indexI * Building.info.bays[indexI].length
					newColumn.yPos = 0 + ((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30)
					newColumn.zPos = 0
					newColumn.height_Z = roofHeight(Building.info, newColumn.yPos)
					newColumn.name = 'Column'

					// Need the steel lookup tables accessible.
					// TODO Use lookup table for type
					newColumn.type = 'W#x#'
					columnList.push(newColumn)
				} else if (
					((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30) === 0 ||
					((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30) ===
						(Math.ceil(buildingY / 30) * buildingY) / Math.ceil(buildingY / 30)
				) {
					const newColumn = new ThreeD()
					newColumn.xPos = 0 + indexI * Building.info.bays[indexI].length
					newColumn.yPos = 0 + ((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30)
					newColumn.zPos = 0
					newColumn.height_Z = roofHeight(Building.info, newColumn.yPos)
					newColumn.name = 'Column'

					// Need the steel lookup tables accessible.
					// TODO Use lookup table for type
					newColumn.type = 'W#x#'
					columnList.push(newColumn)
				}
			}
		}
	}
	// Add logic here for if there's an overhead door and it intersects an existing
	// column, then move the column to the left side of the OH Door,
	// and add another column on the right side of the OH Door

	// Make Rafters
	const rafterList: ThreeD[] = []

	if (Building.info.numOfBays > 0 && Building.info.bays) {
		for (let indexI = 0; indexI <= Building.info.numOfBays; indexI++) {
			const newRafter = new ThreeD()
			newRafter.xPos = 0 + (1 + indexI) * Building.info.bays[indexI].length
			newRafter.yPos = 0
			newRafter.zPos = Building.info.roofHeight

			if (Building.info.roofShape === 'Gable') {
				newRafter.height_Z = (Building.info.roofPitch * Building.info.width) / 2
			} else {
				newRafter.height_Z = Building.info.roofPitch * Building.info.width
			}

			newRafter.width_Y = Building.info.width
			newRafter.name = 'Rafter'
			// Need the steel lookup tables accessible.
			// TODO Use lookup table for type
			newRafter.type = 'W#x#'
			rafterList.push(newRafter)
		}
	}

	// Make Purlins & Eave Struts & "Receiver Cees" (Receiver Channels)

	// Receiver channels only for roofs with a pitch greater than 1:12 and
	// if the bay length is less than or equal to 25' then 8", if greater than 25' then 10"
	// New Building Property = Purlin Spacing Max
	const purlinList: ThreeD[] = []
	const purlinCount = Math.ceil(buildingY / Building.info.maxPurlinSpacing)
	let purlinSpace = Math.ceil((buildingY / purlinCount) * 100) / 100

	for (let indexI = 0; indexI <= purlinCount; indexI++) {
		const newPurlin = new ThreeD()
		newPurlin.xPos = 0

		if (indexI === purlinCount) {
			purlinSpace = buildingY / indexI
			newPurlin.name = 'Eave Strut'
		} else if (indexI === 0) {
			newPurlin.name = 'Eave Strut'
		} else {
			newPurlin.name = 'Purlin'
		}

		newPurlin.yPos = 0 + indexI * purlinSpace

		if (Building.info.roofShape === 'Gable') {
			newPurlin.zPos = (Building.info.roofPitch * Building.info.width) / 2
		} else {
			newPurlin.zPos = Building.info.roofPitch * Building.info.width
		}

		newPurlin.length_X = buildingX
		// Need the steel lookup tables accessible.
		// TODO Use lookup table for type
		newPurlin.type = 'W#x#'
		purlinList.push(newPurlin)
	}

	// Make Girts
	const girtList: ThreeD[] = []
	const firstGirt = 7 + 1 / 6

	// Endwall 1
	let girtSpace = 5
	let girtCount = Math.ceil((buildingZ - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new ThreeD()
		if (indexI * girtSpace + firstGirt > Building.info.roofHeight) {
			newGirt.xPos = 0
			newGirt.yPos = pos_Y_fromMid_givenRoofHeight(Building.info, indexI * girtSpace)
			newGirt.width_Y = newGirt.yPos * 2
		} else {
			newGirt.xPos = 0
			newGirt.yPos = 0
			newGirt.width_Y = buildingY
		}
	}

	// Sidewall 2
	girtSpace = 5
	girtCount = Math.ceil((Building.info.roofHeight - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new ThreeD()
		newGirt.xPos = 0
		newGirt.yPos = 0

		if ((indexI = 1)) {
			girtSpace = Math.ceil(((Building.info.roofHeight - firstGirt) / girtCount) * 100) / 100
		}
	}

	// Endwall 3
	girtSpace = 5
	girtCount = Math.ceil((buildingZ - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new ThreeD()
		if (indexI * girtSpace + firstGirt > Building.info.roofHeight) {
			newGirt.xPos = buildingX
			newGirt.yPos = pos_Y_fromMid_givenRoofHeight(Building.info, indexI * girtSpace)
			newGirt.width_Y = newGirt.yPos * 2
		} else {
			newGirt.xPos = buildingX
			newGirt.yPos = buildingY
			newGirt.width_Y = buildingY
		}
	}

	// Sidewall 4
	girtSpace = 5
	girtCount = Math.ceil((Building.info.roofHeight - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new ThreeD()
		newGirt.xPos = 0
		newGirt.yPos = buildingY

		if ((indexI = 1)) {
			girtSpace = Math.ceil(((Building.info.roofHeight - firstGirt) / girtCount) * 100) / 100
		}
	}

	// Make Panels
	const panelList: threeD[] = []
	const optimalCountY = Math.ceil(buildingY / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
	const optimalCountX = Math.ceil(buildingX / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
	const optimalCountRoofX = optimalCountX
	const roofLen =
		2 *
		Math.sqrt(
			(buildingY / 2) *
				Building.DATA.info.roofPitch *
				((buildingY / 2) * Building.DATA.info.roofPitch) +
				(buildingY / 2) * (buildingY / 2)
		)
	let optimalCountRoofY = Math.ceil(
		(2 *
			Math.sqrt(
				(buildingY / 2) *
					Building.DATA.info.roofPitch *
					((buildingY / 2) * Building.DATA.info.roofPitch) +
					(buildingY / 2) * (buildingY / 2)
			)) /
			(41 * 12)
	)
	if (optimalCountRoofY % 2 != 0) {
		optimalCountRoofY += 1
	}
	// Endwall 1
	for (let indexI = 0; indexI < optimalCountY; indexI++) {
		const newPanel = new threeD()
		newPanel.xPos = 0
		newPanel.yPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
		newPanel.zPos = 0
		newPanel.width_Y = PANEL_WIDTH
		newPanel.height_Z = roofHeight(Building, newPanel.yPos)
		framedOpeningList.forEach((element) => {
			if (
				element.name === 'Overhead Door' &&
				(element.length_X > 10 * 12 || element.width_Y > 10 * 12)
			) {
				if (newPanel.yPos > element.yPos && newPanel.yPos < element.yPos + element.width_Y) {
					newPanel.zPos = element.height_Z
					newPanel.height_Z = roofHeight(Building, newPanel.yPos) - element.height_Z
				}
			}
		})
		newPanel.name = 'Panel'
		panelList.push(newPanel)
	}

	// Sidewall 2
	for (let indexI = 0; indexI < optimalCountX; indexI++) {
		const newPanel = new threeD()
		newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
		newPanel.yPos = 0
		newPanel.zPos = 0
		newPanel.length_X = PANEL_WIDTH
		newPanel.height_Z = Building.DATA.info.roofHeight
		framedOpeningList.forEach((element) => {
			if (
				element.name === 'Overhead Door' &&
				(element.length_X > 10 * 12 || element.width_Y > 10 * 12)
			) {
				if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.length_X) {
					newPanel.zPos = element.height_Z
					newPanel.height_Z = Building.DATA.info.roofHeight - element.height_Z
				}
			}
		})
		newPanel.name = 'Panel'
		panelList.push(newPanel)
	}

	// Endwall 3
	for (let indexI = 0; indexI < optimalCountY; indexI++) {
		const newPanel = new threeD()
		newPanel.xPos = buildingX
		newPanel.yPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
		newPanel.zPos = 0
		newPanel.width_Y = PANEL_WIDTH
		newPanel.height_Z = roofHeight(Building, newPanel.yPos)
		framedOpeningList.forEach((element) => {
			if (
				element.name === 'Overhead Door' &&
				(element.length_X > 10 * 12 || element.width_Y > 10 * 12)
			) {
				if (newPanel.yPos > element.yPos && newPanel.yPos < element.yPos + element.width_Y) {
					newPanel.zPos = element.height_Z
					newPanel.height_Z = roofHeight(Building, newPanel.yPos) - element.height_Z
				}
			}
		})
		newPanel.name = 'Panel'
		panelList.push(newPanel)
	}

	// Sidewall 4
	for (let indexI = 0; indexI < optimalCountX; indexI++) {
		const newPanel = new threeD()
		newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
		newPanel.yPos = buildingY
		newPanel.zPos = 0
		newPanel.length_X = PANEL_WIDTH
		newPanel.height_Z = Building.DATA.info.roofHeight
		framedOpeningList.forEach((element) => {
			if (
				element.name === 'Overhead Door' &&
				(element.length_X > 10 * 12 || element.width_Y > 10 * 12)
			) {
				if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.length_X) {
					newPanel.zPos = element.height_Z
					newPanel.height_Z = Building.DATA.info.roofHeight - element.height_Z
				}
			}
		})
		newPanel.name = 'Panel'
		panelList.push(newPanel)
	}

	// Roof
	// This loop is absolutely wrong. Just wanted to push something before we met again. It's close, but wrong.
	if (Building.DATA.info.roofShape === 'Gable') {
		for (let indexI = 0; indexI < optimalCountRoofX; indexI++) {
			for (let indexJ = 0; indexJ < optimalCountRoofY; indexJ++) {
				const newPanel = new threeD()
				newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
				newPanel.yPos = indexJ * (roofLen / optimalCountRoofY - ROOF_PANEL_OVERLAP)
				newPanel.zPos = roofHeight(Building, newPanel.yPos)
				newPanel.width_Y = roofLen / optimalCountRoofY
				newPanel.length_X = PANEL_WIDTH
				newPanel.name = 'Panel'
				panelList.push(newPanel)
			}
		}
	}

	const components: buildingComponents = {
		FramedOpenings: framedOpeningList,
		Columns: columnList,
		Rafters: rafterList,
		Purlins: purlinList,
		Girts: girtList,
		Panels: panelList,
	}
	return components
}
function roofHeight(info: BuildingInfo, POS_Y: number) {
	if (info.roofShape === 'Gable' && POS_Y > info.width / 2) {
		return info.roofHeight + info.roofPitch * (POS_Y - info.width)
	}
	return info.roofHeight + POS_Y * info.roofPitch
}

function pos_Y_fromMid_givenRoofHeight(info: BuildingInfo, otherRoofHeight: number) {
	if (info.roofShape === 'Gable') {
		return (info.width / 2 - 1) / ((otherRoofHeight - info.roofHeight) * info.roofPitch)
	}

	return (info.width - 1) / ((otherRoofHeight - info.roofHeight) * info.roofPitch)
}

class ThreeD {
	length_X = 0
	width_Y = 0
	height_Z = 0
	xPos = 0
	yPos = 0
	zPos = 0
	name = ''
	type = ''
}
