import { Building } from './Main'
import { BuildingInfo } from "./types/Project"

const DOORHEIGHT = 84
const DOORWIDTH_3070 = 36
const DOORWIDTH_4070 = 48
const SIDEWALL2_POS_X = 0
//smallest thing we are measuring by
const DEFAULT_MIN_DISTANCE = 0.0625 // 1/16th of an inch

/*
 ************************** Every value is to be read in inches **************************
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

	// Make Purlins & Eave Struts
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
		if ((indexI = 1)) {
			girtSpace = Math.ceil(((buildingZ - firstGirt) / girtCount) * 100) / 100
		}
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = 0
		newGirt.name = 'Girt'
		// Need the steel lookup tables accessible.
		// TODO Use lookup table for type
		newGirt.type = 'W#x#'
		girtList.push(newGirt)
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
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = buildingX
		newGirt.width_Y = 0
		newGirt.name = 'Girt'
		// Need the steel lookup tables accessible.
		// TODO Use lookup table for type
		newGirt.type = 'W#x#'
		girtList.push(newGirt)
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
		if ((indexI = 1)) {
			girtSpace = Math.ceil(((buildingZ - firstGirt) / girtCount) * 100) / 100
		}
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = 0

		newGirt.name = 'Girt'
		// Need the steel lookup tables accessible.
		// TODO Use lookup table for type
		newGirt.type = 'W#x#'
		girtList.push(newGirt)
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
		newGirt.zPos = girtSpace * indexI + firstGirt
		newGirt.length_X = buildingX
		newGirt.width_Y = 0
		newGirt.name = 'Girt'
		// Need the steel lookup tables accessible.
		// TODO Use lookup table for type
		newGirt.type = 'W#x#'
		girtList.push(newGirt)
	}

	// Make Framed Openings

	// Possibly add bracing
}
function roofHeight(info: BuildingInfo,	POS_Y: number) {
	if (info.roofShape === 'Gable' && POS_Y > info.width / 2) {
		return info.roofHeight + info.roofPitch * (POS_Y - info.width)
	}
	return info.roofHeight + POS_Y * info.roofPitch
}

function pos_Y_fromMid_givenRoofHeight(info: BuildingInfo, otherRoofHeight: number) {
	if (info.roofShape === 'Gable') {
		return (info.width / 2 -	1) / ((otherRoofHeight - info.roofHeight) * info.roofPitch)
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
