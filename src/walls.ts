import { Building } from './Main'
import { rafterTbl, columnTbl, nonExpandableColumnTbl } from './constTables/Steel'
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
	let buildingZ = 0
	const columnSeparationMax = 60 / Math.round((Math.sqrt( (Building.DATA.info.roofPitch / 12) * (Building.DATA.info.roofPitch / 12) + 1)))

	if (Building.DATA.info.roofShape === 'Gable') {
		let buildingZ = Building.DATA.info.height + (Building.DATA.info.roofPitch * buildingY) / 2
	} else {
		let buildingZ = Building.DATA.info.height + Building.DATA.info.roofPitch * buildingY
	}

	const perimeter =
		buildingX * 2 +
		buildingY * 2 +
		Building.DATA.exteriorPanels.wallAlterationsGroup.endwall1.length +
		Building.DATA.exteriorPanels.wallAlterationsGroup.sidewall2.length +
		Building.DATA.exteriorPanels.wallAlterationsGroup.endwall3.length +
		Building.DATA.exteriorPanels.wallAlterationsGroup.sidewall4.length
	// Make Columns
	let columnList: threeD[] = []

	// First generation of Columns includes all perimeter columns
	// .type only considers that the bay length is between 10 and 80 feet, and the height is between 20 and 80 feet.
	// .type doesn't consider endwalls being expandable.

	for (let indexI = 0; indexI <= Building.DATA.info.numOfBays; indexI++) {
		for (let indexJ = 0; indexJ < Math.ceil(buildingY / 30); indexJ++) {
			if (indexI === 0 || indexI === Building.DATA.info.numOfBays) {
				let newColumn = new threeD()
				newColumn.xPos = 0 + indexI * Building.DATA.bays[indexI].length
				newColumn.yPos = 0 + ((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30)
				newColumn.zPos = 0
				newColumn.height_Z = roofHeight(Building, newColumn.yPos)
				newColumn.name = 'Column'
				newColumn.type = columnTbl[ ( Math.ceil( Building.DATA.bays[indexI].length /12 / 10) - 1 ) ][ ( Math.ceil( newColumn.height_Z /12 / 10 ) ) - 1 ]
				columnList.push(newColumn)
			} else if (
				((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30) === 0 ||
				((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30) ===
					(Math.ceil(buildingY / 30) * buildingY) / Math.ceil(buildingY / 30)
			) {
				let newColumn = new threeD()
				newColumn.xPos = 0 + indexI * Building.DATA.bays[indexI].length
				newColumn.yPos = 0 + ((1 + indexJ) * buildingY) / Math.ceil(buildingY / 30)
				newColumn.zPos = 0
				newColumn.height_Z = roofHeight(Building, newColumn.yPos)
				newColumn.name = 'Column'
				newColumn.type = columnTbl[ ( Math.ceil( Building.DATA.bays[indexI].length /12 / 10) - 1 ) ][ ( Math.ceil( newColumn.height_Z /12 / 10 ) ) - 1 ]
				columnList.push(newColumn)
			}
		}
	}

	// Make Rafters
	let rafterList: threeD[] = []
	for (let indexI = 0; indexI <= Building.DATA.info.numOfBays; indexI++) {
		let newRafter = new threeD()
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
		newRafter.type = rafterTbl[ ( Math.ceil( Building.DATA.bays[indexI].length /12 / 10) - 1 ) ][ ( Math.ceil( newRafter.height_Z /12 / 10 ) ) - 1 ]
		rafterList.push(newRafter)
	}

	// Make Purlins & Eave Struts & "Receiver Cees" (Receiver Channels)
	// New Building Property = Purlin Spacing Max
	// 
	// TODO:
	// Confirmation that Building.DATA.info.MaxPurlinSpacing Exists ?
	//

	let purlinList: threeD[] = []
	const purlinCount = Math.ceil(buildingY / Building.DATA.info.MaxPurlinSpacing)
	let purlinSpace = Math.ceil((buildingY / purlinCount) * 100) / 100
	for (let indexI = 0; indexI <= purlinCount; indexI++) {
		let newPurlin = new threeD()
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
	let recieverChannel1 = new threeD()
	recieverChannel1.xPos = 0
	recieverChannel1.yPos = 0
	recieverChannel1.width_Y = buildingY
	recieverChannel1.name = 'Reciever Channel'
	recieverChannel1.type = 'C'
	purlinList.push(recieverChannel1)

	let recieverChannel2 = new threeD()
	recieverChannel2.xPos = buildingX
	recieverChannel2.yPos = 0
	recieverChannel2.width_Y = buildingY
	recieverChannel2.name = 'Reciever Channel'
	recieverChannel2.type = 'C'
	purlinList.push(recieverChannel2)

	// Make Girts
	let girtList: threeD[] = []
	const firstGirt = 7 + 1 / 6

	// Endwall 1
	let girtSpace = 5
	let girtCount = Math.ceil((buildingZ - firstGirt) / girtSpace) + 1
	for (let indexI = 0; indexI <= girtCount; indexI++) {
		let newGirt = new threeD()
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
		let newGirt = new threeD()
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
		let newGirt = new threeD()
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
		let newGirt = new threeD()
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

	// Make Framed Openings

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