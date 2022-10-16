import { Building } from './Main'
import { rafterTbl, columnTbl, nonExpandableColumnTbl } from './constTables/Steel'
import steelTableValue from './functions/steelTableIndexer'

const DOORHEIGHT = 84
const DOORWIDTH_3070 = 36
const DOORWIDTH_4070 = 48
const SIDEWALL2_POS_X = 0
//smallest thing we are measuring by
const DEFAULT_MIN_DISTANCE = 1 / 16

/*
 ************************** Every value is to be read in inches **************************
 * Roof pitch needs to be decimal like =1/12, =1/11, = 1/10, = 1/9, ... , 1/1
 */

//single-sloped building high side is the last side.
export default function steelBuilding(Building: Building) {
	const buildingX = Building.DATA.info.length
	const buildingY = Building.DATA.info.width
	const columnSeparationMax =
		60 /
		Math.round(
			Math.sqrt((Building.DATA.info.roofPitch / 12) * (Building.DATA.info.roofPitch / 12) + 1)
		)
	const buildingZ = 0

	if (Building.DATA.info.roofShape === 'Gable') {
		const buildingZ = Building.DATA.info.height + (Building.DATA.info.roofPitch * buildingY) / 2
	} else {
		const buildingZ = Building.DATA.info.height + Building.DATA.info.roofPitch * buildingY
	}

	const perimeter =
		buildingX * 2 +
		buildingY * 2 +
		Building.DATA.exteriorPanels.wallAlterationsGroup.endwall1.length +
		Building.DATA.exteriorPanels.wallAlterationsGroup.sidewall2.length +
		Building.DATA.exteriorPanels.wallAlterationsGroup.endwall3.length +
		Building.DATA.exteriorPanels.wallAlterationsGroup.sidewall4.length

	// Make Framed Openings
	const framedOpeningList: threeD[] = []

	// First: Personnel Doors
	for (let index = 0; index < Building.DATA.BuildingData.personnelDoors.numOfDoors; index++) {
		const element = Building.DATA.BuildingData.personnelDoors.doors[index]
		if (element.PersonnelDoorWall === 'Endwall 1') {
			const newFO = new threeD()
			newFO.xPos = 0
			newFO.yPos = element.leftEdgePos
			newFO.zPos = 0
			newFO.height_Z = 7 * 12
			if (element.PersonnelDoorSize === 3070) {
				newFO.width_Y = 3 * 12
			} else {
				newFO.width_Y = 4 * 12
			}
			framedOpeningList.push(newFO)
		} else if (element.PersonnelDoorWall === 'Sidewall 2') {
			const newFO = new threeD()
			newFO.xPos = buildingX - element.leftEdgePos
			newFO.yPos = 0
			newFO.zPos = 0
			newFO.height_Z = 7 * 12
			if (element.PersonnelDoorSize === 3070) {
				newFO.length_X = 3 * 12
			} else {
				newFO.length_X = 4 * 12
			}
			framedOpeningList.push(newFO)
		} else if (element.PersonnelDoorWall === 'Endwall 3') {
			const newFO = new threeD()
			newFO.xPos = buildingX
			newFO.yPos = buildingY - element.leftEdgePos
			newFO.zPos = 0
			newFO.height_Z = 7 * 12
			if (element.PersonnelDoorSize === 3070) {
				newFO.width_Y = 3 * 12
			} else {
				newFO.width_Y = 4 * 12
			}
			framedOpeningList.push(newFO)
		} else if (element.PersonnelDoorWall === 'Sidewall 4') {
			const newFO = new threeD()
			newFO.xPos = element.leftEdgePos
			newFO.yPos = buildingY
			newFO.zPos = 0
			newFO.height_Z = 7 * 12
			if (element.PersonnelDoorSize === 3070) {
				newFO.length_X = 3 * 12
			} else {
				newFO.length_X = 4 * 12
			}
			framedOpeningList.push(newFO)
		}
	}
	// Second: Overhead Doors

	for (let index = 0; index < Building.DATA.BuildingData.overheadDoors.numOfDoors; index++) {
		const element = Building.DATA.BuildingData.overheadDoors.doors[index]
		if (element.wall === 'Endwall 1') {
			const newFO = new threeD()
			newFO.xPos = 0
			newFO.yPos = element.leftEdgePos
			newFO.zPos = 0
			newFO.height_Z = element.height
			newFO.width_Y = element.width
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Sidewall 2') {
			const newFO = new threeD()
			newFO.xPos = buildingX - element.leftEdgePos
			newFO.yPos = 0
			newFO.zPos = 0
			newFO.height_Z = element.height
			newFO.length_X = element.width
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Endwall 3') {
			const newFO = new threeD()
			newFO.xPos = buildingX
			newFO.yPos = buildingY - element.leftEdgePos
			newFO.zPos = 0
			newFO.height_Z = element.height
			newFO.width_Y = element.width
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Sidewall 4') {
			const newFO = new threeD()
			newFO.xPos = element.leftEdgePos
			newFO.yPos = buildingY
			newFO.zPos = 0
			newFO.height_Z = element.height
			newFO.length_X = element.width
			framedOpeningList.push(newFO)
		}
	}

	// Third: Windows
	for (let index = 0; index < Building.DATA.BuildingData.windows.numOfWindows; index++) {
		const element = Building.DATA.BuildingData.windows.windows[index]
		if (element.wall === 'Endwall 1') {
			const newFO = new threeD()
			newFO.xPos = 0
			newFO.yPos = element.leftEdgePos
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.width_Y = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Sidewall 2') {
			const newFO = new threeD()
			newFO.xPos = buildingX - element.leftEdgePos
			newFO.yPos = 0
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.length_X = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Endwall 3') {
			const newFO = new threeD()
			newFO.xPos = buildingX
			newFO.yPos = buildingY - element.leftEdgePos
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.width_Y = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Sidewall 4') {
			const newFO = new threeD()
			newFO.xPos = element.leftEdgePos
			newFO.yPos = buildingY
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.length_X = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		}
	}
	// Fourth: Miscellaneous
	for (
		let index = 0;
		index < Building.DATA.BuildingData.framedOpenings.numOfFramedOpenings;
		index++
	) {
		const element = Building.DATA.BuildingData.framedOpenings.group[index]
		if (element.wall === 'Endwall 1') {
			const newFO = new threeD()
			newFO.xPos = 0
			newFO.yPos = element.leftEdgePos
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.width_Y = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Sidewall 2') {
			const newFO = new threeD()
			newFO.xPos = buildingX - element.leftEdgePos
			newFO.yPos = 0
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.length_X = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Endwall 3') {
			const newFO = new threeD()
			newFO.xPos = buildingX
			newFO.yPos = buildingY - element.leftEdgePos
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.width_Y = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		} else if (element.wall === 'Sidewall 4') {
			const newFO = new threeD()
			newFO.xPos = element.leftEdgePos
			newFO.yPos = buildingY
			newFO.zPos = element.bottomEdgePos
			newFO.height_Z = element.height
			newFO.length_X = element.width
			newFO.height_Z = element.topEdgePos - element.bottomEdgePos
			framedOpeningList.push(newFO)
		}
	}

	// Make Columns
	const columnList: threeD[] = []

	// First generation of Columns includes all perimeter and interior columns.

	for (let indexI = 0; indexI <= Building.DATA.info.numOfBays; indexI++) {
		for (let indexJ = 0; indexJ < Math.ceil(buildingY / 30 / 12); indexJ++) {
			const newColumn = new threeD()
			newColumn.xPos = 0 + indexI * Building.DATA.bays[indexI].length
			newColumn.yPos = 0 + ((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30)
			newColumn.zPos = 0
			newColumn.height_Z = roofHeight(Building, newColumn.yPos)
			newColumn.name = 'Column'
			newColumn.type = steelTableValue(
				columnTbl,
				Building.DATA.bays[indexI].length / 12,
				newColumn.height_Z / 12
			)
			columnList.push(newColumn)
		}
	}

	// Make Rafters
	const rafterList: threeD[] = []
	for (let indexI = 0; indexI <= Building.DATA.info.numOfBays; indexI++) {
		const newRafter = new threeD()
		newRafter.xPos = 0 + (1 + indexI) * Building.DATA.bays[indexI].length
		newRafter.yPos = 0
		newRafter.zPos = Building.DATA.info.roofHeight
		if (Building.DATA.roofShape === 'Gable') {
			newRafter.height_Z = (Building.DATA.roofPitch * Building.DATA.info.width) / 2
		} else {
			newRafter.height_Z = Building.DATA.roofPitch * Building.DATA.info.width
		}
		newRafter.width_Y = Building.DATA.info.width
		newRafter.name = 'Rafter'
		newRafter.type =
			rafterTbl[Math.ceil(Building.DATA.bays[indexI].length / 12 / 10) - 1][
				Math.ceil(newRafter.height_Z / 12 / 10) - 1
			]
		rafterList.push(newRafter)
	}

	// Make Purlins & Eave Struts & "Receiver Cees" (Receiver Channels)
	// New Building Property = Purlin Spacing Max
	//
	// TODO:
	// Confirmation that Building.DATA.info.MaxPurlinSpacing Exists ?
	//

	const purlinList: threeD[] = []
	const purlinCount = Math.ceil(buildingY / Building.DATA.info.MaxPurlinSpacing)
	let purlinSpace = Math.ceil((buildingY / purlinCount) * 100) / 100
	for (let indexI = 0; indexI <= purlinCount; indexI++) {
		const newPurlin = new threeD()
		newPurlin.xPos = 0
		newPurlin.length_X = buildingX
		newPurlin.yPos = 0 + indexI * purlinSpace
		newPurlin.zPos = buildingZ

		if (indexI === purlinCount) {
			purlinSpace = buildingY / indexI
			newPurlin.name = 'Eave Strut'
			newPurlin.type = 'Eave Strut'
		} else if (indexI === 0) {
			newPurlin.name = 'Eave Strut'
			newPurlin.type = 'Eave Strut'
		} else {
			newPurlin.name = 'Purlin'
			newPurlin.type = 'C'
		}
		purlinList.push(newPurlin)
	}

	// Make Reciever Channels
	// Two Reciever Channels for each side of shed. Connects the purlins together at the ends.
	const recieverChannel1 = new threeD()
	recieverChannel1.xPos = 0
	recieverChannel1.yPos = 0
	recieverChannel1.width_Y = buildingY
	recieverChannel1.name = 'Reciever Channel'
	recieverChannel1.type = 'C'
	purlinList.push(recieverChannel1)

	const recieverChannel2 = new threeD()
	recieverChannel2.xPos = buildingX
	recieverChannel2.yPos = 0
	recieverChannel2.width_Y = buildingY
	recieverChannel2.name = 'Reciever Channel'
	recieverChannel2.type = 'C'
	purlinList.push(recieverChannel2)

	// Make Girts
	const girtList: threeD[] = []
	const firstGirt = 7 + 1 / 6

	// Endwall 1
	let girtSpace = 5
	let girtCount = Math.ceil((buildingZ - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new threeD()
		if (indexI * girtSpace + firstGirt > Building.DATA.info.roofHeight) {
			newGirt.xPos = 0
			newGirt.yPos = pos_Y_fromMid_givenRoofHeight(Building, indexI * girtSpace)
			newGirt.width_Y = newGirt.yPos * 2
		} else {
			newGirt.xPos = 0
			newGirt.yPos = 0
			newGirt.width_Y = buildingY
		}
		if ((indexI = 1)) {
			girtSpace = Math.ceil(((buildingZ - firstGirt) / girtCount) * 100) / 100
		}
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = 0
		newGirt.name = 'Girt'
		newGirt.type = 'C'
		girtList.push(newGirt)
	}

	// Sidewall 2
	girtSpace = 5
	girtCount = Math.ceil((Building.DATA.info.roofHeight - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new threeD()
		newGirt.xPos = 0
		newGirt.yPos = 0

		if ((indexI = 1)) {
			girtSpace = Math.ceil(((Building.DATA.info.roofHeight - firstGirt) / girtCount) * 100) / 100
		}
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = buildingX
		newGirt.width_Y = 0
		newGirt.name = 'Girt'
		newGirt.type = 'C'
		girtList.push(newGirt)
	}

	// Endwall 3
	girtSpace = 5
	girtCount = Math.ceil((buildingZ - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new threeD()
		if (indexI * girtSpace + firstGirt > Building.DATA.info.roofHeight) {
			newGirt.xPos = buildingX
			newGirt.yPos = pos_Y_fromMid_givenRoofHeight(Building, indexI * girtSpace)
			newGirt.width_Y = newGirt.yPos * 2
		} else {
			newGirt.xPos = buildingX
			newGirt.yPos = buildingY
			newGirt.width_Y = buildingY
		}
		if ((indexI = 1)) {
			girtSpace = Math.ceil(((buildingZ - firstGirt) / girtCount) * 100) / 100
		}
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = 0

		newGirt.name = 'Girt'
		newGirt.type = 'C'
		girtList.push(newGirt)
	}

	// Sidewall 4
	girtSpace = 5
	girtCount = Math.ceil((Building.DATA.info.roofHeight - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		const newGirt = new threeD()
		newGirt.xPos = 0
		newGirt.yPos = buildingY

		if ((indexI = 1)) {
			girtSpace = Math.ceil(((Building.DATA.info.roofHeight - firstGirt) / girtCount) * 100) / 100
		}
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = buildingX
		newGirt.width_Y = 0
		newGirt.name = 'Girt'
		newGirt.type = 'C'
		girtList.push(newGirt)
	}

	// Possibly add bracing
}
function roofHeight(
	Building: {
		DATA: { info: { roofShape: string; width: number; roofHeight: number }; roofPitch: number }
	},
	POS_Y: number
) {
	if (Building.DATA.info.roofShape === 'Gable' && POS_Y > Building.DATA.info.width / 2) {
		return (
			Building.DATA.info.roofHeight + Building.DATA.roofPitch * (POS_Y - Building.DATA.info.width)
		)
	}
	return Building.DATA.info.roofHeight + POS_Y * Building.DATA.roofPitch
}

function pos_Y_fromMid_givenRoofHeight(
	Building: {
		DATA: { info: { roofShape: string; width: number; roofHeight: number }; roofPitch: number }
	},
	roofHeight: number
) {
	if (Building.DATA.info.roofShape === 'Gable') {
		return (
			Building.DATA.info.width / 2 -
			1 / ((roofHeight - Building.DATA.info.roofHeight) * Building.DATA.roofPitch)
		)
	}
	return (
		Building.DATA.info.width -
		1 / ((roofHeight - Building.DATA.info.roofHeight) * Building.DATA.roofPitch)
	)
}

class threeD {
	length_X = 0
	width_Y = 0
	height_Z = 0
	xPos = 0
	yPos = 0
	zPos = 0
	name = ''
	type = ''
}
