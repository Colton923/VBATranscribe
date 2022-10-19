import { Building } from './Main'
import type { buildingComponents } from './types/buildingComponents'
import { rafterTbl, columnTbl, nonExpandableColumnTbl } from './constTables/Steel'
import steelTableValue from './functions/steelTableIndexer'

const DOORHEIGHT = 84
const DOORWIDTH_3070 = 36
const DOORWIDTH_4070 = 48
const WALL_PANEL_OVERLAP = 3.5
const ROOF_PANEL_OVERLAP = 6
const PANEL_WIDTH = 36
//smallest thing we are measuring by
const DEFAULT_MIN_DISTANCE = 1 / 16

function roofHeight(Building: Building, POS_Y: number) {
  if (Building.info.roofShape === 'Gable' && POS_Y > Building.info.width / 2) {
    return Building.info.height + Building.info.roofPitch * (POS_Y - Building.info.width)
  }
  return Building.info.height + POS_Y * Building.info.roofPitch
}

export class ThreeD {
  length_X = 0
  width_Y = 0
  height_Z = 0
  xPos = 0
  yPos = 0
  zPos = 0
  name = ''
  type = ''
}

/*
 ************************** Every value is to be read in inches **************************
 * Unsure about the below... TODO: Roll through the algo and make sure it can be read this way. It's a ratio.
 * Roof pitch needs to be decimal like =1/12, =1/11, = 1/10, = 1/9, ... , 1/1
 */

export function steelBuilding(Building: Building) {
  const buildingX = Building.info.length
  const buildingY = Building.info.width
  let buildingZ = 0

  if (Building.info.roofShape === 'Gable') {
    buildingZ = Building.info.height + (Building.info.roofPitch * buildingY) / 2
  } else {
    buildingZ = Building.info.height + Building.info.roofPitch * buildingY
  }

  // Make Framed Openings
  const framedOpeningList: ThreeD[] = []

  // Personnel Doors
  if (Building.personnelDoors.numOfDoors > 0) {
    for (let index = 0; index < Building.personnelDoors.numOfDoors; index++) {
      const personnelDoor = Building.personnelDoors.doors[index]
      const newFO = new ThreeD()

      if (personnelDoor.wall === 'Endwall 1') {
        newFO.xPos = 0
        newFO.yPos = personnelDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.width_Y = DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.width_Y = DOORWIDTH_4070
          newFO.type = '4070'
        }
      } else if (personnelDoor.wall === 'Sidewall 2') {
        newFO.xPos = buildingX - personnelDoor.leftEdgePos
        newFO.yPos = 0
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.length_X = -DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.length_X = -DOORWIDTH_4070
          newFO.type = '4070'
        }
      } else if (personnelDoor.wall === 'Endwall 3') {
        newFO.xPos = buildingX
        newFO.yPos = buildingY - personnelDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.width_Y = -DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.width_Y = -DOORWIDTH_4070
          newFO.type = '4070'
        }
      } else if (personnelDoor.wall === 'Sidewall 4') {
        newFO.xPos = personnelDoor.leftEdgePos
        newFO.yPos = buildingY
        newFO.zPos = 0
        newFO.height_Z = DOORHEIGHT
        newFO.name = 'Personnel Door'

        if (personnelDoor.size === 3070) {
          newFO.length_X = DOORWIDTH_3070
          newFO.type = '3070'
        } else {
          newFO.length_X = DOORWIDTH_4070
          newFO.type = '4070'
        }
      }

      framedOpeningList.push(newFO)
    }
  }

  // Second: Overhead Doors
  if (Building.overheadDoors.numOfDoors > 0) {
    for (let index = 0; index < Building.overheadDoors.numOfDoors; index++) {
      const overheadDoor = Building.overheadDoors.doors[index]
      const newFO = new ThreeD()

      if (overheadDoor.wall === 'Endwall 1') {
        newFO.xPos = 0
        newFO.yPos = overheadDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.width_Y = overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      } else if (overheadDoor.wall === 'Sidewall 2') {
        newFO.xPos = buildingX - overheadDoor.leftEdgePos
        newFO.yPos = 0
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.length_X = -overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      } else if (overheadDoor.wall === 'Endwall 3') {
        newFO.xPos = buildingX
        newFO.yPos = buildingY - overheadDoor.leftEdgePos
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.width_Y = -overheadDoor.width
        newFO.name = 'Overhead Door'
        newFO.type = ''
      } else if (overheadDoor.wall === 'Sidewall 4') {
        newFO.xPos = overheadDoor.leftEdgePos
        newFO.yPos = buildingY
        newFO.zPos = 0
        newFO.height_Z = overheadDoor.height
        newFO.length_X = overheadDoor.width
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
        newFO.xPos = 0
        newFO.yPos = window.leftEdgePos
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.width_Y = window.width
        newFO.name = 'Window'
        newFO.type = ''
      } else if (window.wall === 'Sidewall 2') {
        newFO.xPos = buildingX - window.leftEdgePos
        newFO.yPos = 0
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.length_X = -window.width
        newFO.name = 'Window'
        newFO.type = ''
      } else if (window.wall === 'Endwall 3') {
        newFO.xPos = buildingX
        newFO.yPos = buildingY - window.leftEdgePos
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.width_Y = -window.width
        newFO.name = 'Window'
        newFO.type = ''
      } else if (window.wall === 'Sidewall 4') {
        newFO.xPos = window.leftEdgePos
        newFO.yPos = buildingY
        newFO.zPos = window.bottomEdgePos
        newFO.height_Z = window.height
        newFO.length_X = window.width
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
        newFO.xPos = 0
        newFO.yPos = framedOpening.leftEdgePos
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.width_Y = framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      } else if (framedOpening.wall === 'Sidewall 2') {
        newFO.xPos = buildingX - framedOpening.leftEdgePos
        newFO.yPos = 0
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.length_X = -framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      } else if (framedOpening.wall === 'Endwall 3') {
        newFO.xPos = buildingX
        newFO.yPos = buildingY - framedOpening.leftEdgePos
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.width_Y = -framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      } else if (framedOpening.wall === 'Sidewall 4') {
        newFO.xPos = framedOpening.leftEdgePos
        newFO.yPos = buildingY
        newFO.zPos = framedOpening.bottomEdgePos
        newFO.height_Z = framedOpening.height
        newFO.length_X = framedOpening.width
        newFO.name = 'Miscellaneous'
        newFO.type = ''
      }

      framedOpeningList.push(newFO)
    }
  }

  // Make Columns
  const columnList: ThreeD[] = []

  // Columns are a max of 30' apart. Interior columns only needed if the span of the building (buildingY) > 80

  // Perimeter Column Gen
  for (let indexI = 0; indexI <= Building.info.numOfBays; indexI++) {
    for (let indexJ = 0; indexJ < 2; indexJ++) {
      const newColumn = new ThreeD()
      newColumn.xPos = 0 + indexI * Building.info.bays[indexI].length
      newColumn.yPos = 0 + indexJ * buildingY
      newColumn.zPos = 0
      newColumn.height_Z = roofHeight(Building, newColumn.yPos)
      newColumn.name = 'Column'

      if (
        (indexI === 0 &&
          Building.exteriorPanels.wallAlterationsGroup.endwall1.expandableEndwall === true) ||
        (indexI === Building.info.numOfBays &&
          Building.exteriorPanels.wallAlterationsGroup.endwall3.expandableEndwall === true)
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

      framedOpeningList.forEach((element) => {
        if (
          element.name === 'Overhead Door' &&
          (element.length_X > 10 * 12 || element.width_Y > 10 * 12)
        ) {
          if (newColumn.xPos > element.xPos && newColumn.xPos < element.xPos + element.length_X) {
            if (newColumn.yPos > element.yPos && newColumn.yPos < element.yPos + element.width_Y) {
              newColumn.xPos = element.xPos
              newColumn.yPos = element.yPos
              newColumn.height_Z = roofHeight(Building, newColumn.yPos)
              newColumn.type = steelTableValue(
                columnTbl,
                Building.info.bays[indexI].length / 12,
                newColumn.height_Z / 12
              )

              const extraColumn = new ThreeD()
              extraColumn.xPos = element.xPos + element.length_X
              extraColumn.yPos = element.yPos + element.width_Y
              extraColumn.zPos = 0
              extraColumn.height_Z = newColumn.height_Z
              extraColumn.length_X = newColumn.length_X
              extraColumn.width_Y = newColumn.width_Y
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
  if (buildingY > 80 * 12) {
    for (let indexI = 1; indexI < Building.info.numOfBays; indexI++) {
      for (let indexJ = 1; indexJ < Math.ceil(buildingY / 30 / 12); indexJ++) {
        const newColumn = new ThreeD()
        newColumn.xPos = indexI * Building.info.bays[indexI].length
        newColumn.yPos = (indexJ * buildingY) / Math.ceil(buildingY / 30 / 12)
        newColumn.zPos = 0

        framedOpeningList.forEach((element) => {
          if (
            element.name === 'Overhead Door' &&
            (element.length_X > 10 * 12 || element.width_Y > 10 * 12)
          ) {
            if (element.xPos === 0 || element.xPos === buildingX) {
              if (
                newColumn.yPos > element.yPos &&
                newColumn.yPos < element.yPos + element.width_Y
              ) {
                if (
                  Math.abs(newColumn.yPos - element.yPos) <
                  Math.abs(newColumn.yPos - (element.yPos + element.width_Y))
                ) {
                  newColumn.yPos = element.yPos
                } else {
                  newColumn.yPos = element.yPos + element.width_Y
                }
              }
            }

            if (element.yPos === 0 || element.yPos === buildingY) {
              if (
                newColumn.xPos > element.xPos &&
                newColumn.xPos < element.xPos + element.length_X
              ) {
                if (
                  Math.abs(newColumn.xPos - element.xPos) <
                  Math.abs(newColumn.xPos - (element.xPos + element.length_X))
                ) {
                  newColumn.xPos = element.xPos
                } else {
                  newColumn.xPos = element.xPos + element.length_X
                }
              }
            }
          }
        })
        newColumn.height_Z = roofHeight(Building, newColumn.yPos)
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
  for (let indexI = 0; indexI <= Building.info.numOfBays; indexI++) {
    const newRafter = new ThreeD()
    newRafter.xPos = 0 + (1 + indexI) * Building.info.bays[indexI].length
    newRafter.yPos = 0
    newRafter.zPos = roofHeight(Building, 0)

    if (Building.info.roofShape === 'Gable') {
      newRafter.height_Z = (Building.info.roofPitch * Building.info.width) / 2
    } else {
      newRafter.height_Z = Building.info.roofPitch * Building.info.width
    }

    newRafter.width_Y = Building.info.width
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
  const purlinCount = Math.ceil(buildingY / Building.info.maxPurlinSpacing)
  let purlinLengthX = 0
  let purlinCountX = 0

  if (
    Math.ceil(buildingX / (20 * 12)) <=
    Math.min(Math.ceil(buildingX / (25 * 12)), Math.ceil(buildingX / (30 * 12)))
  ) {
    purlinCountX = Math.ceil(buildingX / (20 * 12))
    purlinLengthX = 20 * 12
  } else if (Math.ceil(buildingX / (25 * 12)) <= Math.ceil(buildingX / (30 * 12))) {
    purlinCountX = Math.ceil(buildingX / (25 * 12))
    purlinLengthX = 25 * 12
  } else {
    purlinCountX = Math.ceil(buildingX / (30 * 12))
    purlinLengthX = 30 * 12
  }

  let purlinSpace = Math.ceil((buildingY / purlinCount) * 100) / 100

  for (let indexJ = 0; indexJ < purlinCountX; indexJ++) {
    for (let indexI = 0; indexI <= purlinCount; indexI++) {
      const newPurlin = new ThreeD()
      newPurlin.xPos = indexJ * purlinLengthX

      if (indexJ === purlinCountX - 1) {
        newPurlin.length_X = buildingX - newPurlin.xPos
      } else {
        newPurlin.length_X = purlinLengthX
      }

      newPurlin.yPos = 0 + indexI * purlinSpace
      newPurlin.zPos = buildingZ

      if (indexI === purlinCount) {
        purlinSpace = buildingY / indexI
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
  if (Building.info.roofPitch > 1) {
    for (let indexJ = 0; indexJ < 2; indexJ++) {
      const recieverChannel = new ThreeD()
      recieverChannel.xPos = indexJ * buildingX
      recieverChannel.yPos = 0
      recieverChannel.width_Y =
        2 *
        Math.sqrt(
          ((Building.info.roofPitch * buildingY) / 2) *
            ((Building.info.roofPitch * buildingY) / 2) +
            (buildingY / 2) * (buildingY / 2)
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
    Math.ceil(buildingY / (20 * 12)) <=
    Math.min(Math.ceil(buildingY / (25 * 12)), Math.ceil(buildingY / (30 * 12)))
  ) {
    girtCountY = Math.ceil(buildingY / (20 * 12))
    girtWidthY = 20 * 12
  } else if (Math.ceil(buildingY / (25 * 12)) <= Math.ceil(buildingY / (30 * 12))) {
    girtCountY = Math.ceil(buildingY / (25 * 12))
    girtWidthY = 25 * 12
  } else {
    girtCountY = Math.ceil(buildingY / (30 * 12))
    girtWidthY = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountY; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.xPos = 0
      newGirt.yPos = indexJ * girtWidthY
      if (indexJ === girtCountY - 1) {
        newGirt.width_Y = buildingY - newGirt.yPos
      } else {
        newGirt.width_Y = girtWidthY
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
    Math.ceil(buildingX / (20 * 12)) <=
    Math.min(Math.ceil(buildingX / (25 * 12)), Math.ceil(buildingX / (30 * 12)))
  ) {
    girtCountX = Math.ceil(buildingX / (20 * 12))
    girtLengthX = 20 * 12
  } else if (Math.ceil(buildingX / (25 * 12)) <= Math.ceil(buildingX / (30 * 12))) {
    girtCountX = Math.ceil(buildingX / (25 * 12))
    girtLengthX = 25 * 12
  } else {
    girtCountX = Math.ceil(buildingX / (30 * 12))
    girtLengthX = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountX; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.xPos = indexJ * girtLengthX
      newGirt.yPos = 0
      if (indexJ === girtCountX - 1) {
        newGirt.length_X = buildingX - newGirt.xPos
      } else {
        newGirt.length_X = girtLengthX
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
    Math.ceil(buildingY / (20 * 12)) <=
    Math.min(Math.ceil(buildingY / (25 * 12)), Math.ceil(buildingY / (30 * 12)))
  ) {
    girtCountY = Math.ceil(buildingY / (20 * 12))
    girtWidthY = 20 * 12
  } else if (Math.ceil(buildingY / (25 * 12)) <= Math.ceil(buildingY / (30 * 12))) {
    girtCountY = Math.ceil(buildingY / (25 * 12))
    girtWidthY = 25 * 12
  } else {
    girtCountY = Math.ceil(buildingY / (30 * 12))
    girtWidthY = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountY; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.xPos = buildingX
      newGirt.yPos = indexJ * girtWidthY
      if (indexJ === girtCountY - 1) {
        newGirt.width_Y = buildingY - newGirt.yPos
      } else {
        newGirt.width_Y = girtWidthY
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
    Math.ceil(buildingX / (20 * 12)) <=
    Math.min(Math.ceil(buildingX / (25 * 12)), Math.ceil(buildingX / (30 * 12)))
  ) {
    girtCountX = Math.ceil(buildingX / (20 * 12))
    girtLengthX = 20 * 12
  } else if (Math.ceil(buildingX / (25 * 12)) <= Math.ceil(buildingX / (30 * 12))) {
    girtCountX = Math.ceil(buildingX / (25 * 12))
    girtLengthX = 25 * 12
  } else {
    girtCountX = Math.ceil(buildingX / (30 * 12))
    girtLengthX = 30 * 12
  }

  for (let indexJ = 0; indexJ < girtCountX; indexJ++) {
    for (let indexI = 0; indexI <= girtCount; indexI++) {
      const newGirt = new ThreeD()
      newGirt.xPos = indexJ * girtLengthX
      newGirt.yPos = buildingY

      if (indexJ === girtCountX - 1) {
        newGirt.length_X = buildingX - newGirt.xPos
      } else {
        newGirt.length_X = girtLengthX
      }

      newGirt.zPos = girtSpace * indexI + firstGirt
      newGirt.name = 'Girt'
      newGirt.type = 'C'
      girtList.push(newGirt)
    }
  }

  // Make Panels
  const panelList: ThreeD[] = []
  const optimalCountY = Math.ceil(buildingY / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
  const optimalCountX = Math.ceil(buildingX / (PANEL_WIDTH + WALL_PANEL_OVERLAP))
  const optimalCountRoofX = optimalCountX
  const roofLen =
    2 *
    Math.sqrt(
      (buildingY / 2) * Building.info.roofPitch * ((buildingY / 2) * Building.info.roofPitch) +
        (buildingY / 2) * (buildingY / 2)
    )
  let optimalCountRoofY = Math.ceil(
    (2 *
      Math.sqrt(
        (buildingY / 2) * Building.info.roofPitch * ((buildingY / 2) * Building.info.roofPitch) +
          (buildingY / 2) * (buildingY / 2)
      )) /
      (41 * 12)
  )

  if (optimalCountRoofY % 2 !== 0) {
    optimalCountRoofY += 1
  }

  // Endwall 1
  for (let indexI = 0; indexI < optimalCountY; indexI++) {
    const newPanel = new ThreeD()
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
    const newPanel = new ThreeD()
    newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.yPos = 0
    newPanel.zPos = 0
    newPanel.length_X = PANEL_WIDTH
    newPanel.height_Z = Building.info.height

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_X > 10 * 12 || element.width_Y > 10 * 12)
      ) {
        if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.length_X) {
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
    const newPanel = new ThreeD()
    newPanel.xPos = indexI * (PANEL_WIDTH - WALL_PANEL_OVERLAP)
    newPanel.yPos = buildingY
    newPanel.zPos = 0
    newPanel.length_X = PANEL_WIDTH
    newPanel.height_Z = Building.info.height

    framedOpeningList.forEach((element) => {
      if (
        element.name === 'Overhead Door' &&
        (element.length_X > 10 * 12 || element.width_Y > 10 * 12)
      ) {
        if (newPanel.xPos > element.xPos && newPanel.xPos < element.xPos + element.length_X) {
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
