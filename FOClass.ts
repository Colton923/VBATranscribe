//VB-Dev Notes:
//For the purposes of structural steel, all numeric values are in inches for now. Previous declarations of height and
//width as integers remain as legacy. New declarations as double probably unnecessary - integers should suffice
//Possible FO types for structural steel: "PDoor","OHDoor","Window","MiscFO"
export class FO {
	height: number
	width: number
	foType: string
	rEdgePosition: number
	bEdgeHeight: number
	wall: string
	description: string
	foMaterials: any[]
	structuralSteelOptions: string

	constructor() {
		this.bEdgeHeight = 0
	}
	setbEdgeHeight(x: number) {
		this.bEdgeHeight = x
	}
	setWall(wallName: string) {
		this.wall = wallName
	}
	setDescription(x: number, wallName: string) {
		this.description = 
		this.foType + ' #' + x + ', an FO located on ' + wallName + '. rEdge: ' + (this.rEdgePosition / 12) + ', lEdge: ' + (this.lEdgePosition() / 12 + '')
	}
	setrEdgePosition(x: number) {
		this.rEdgePosition = x
	}
	setWidth(w: number) {
		this.width = w
	}
	setHeight(h: number) {
		this.height = h
	}
	setType(type: string) {
		this.foType = type
	}
	tEdgeHeight() {
		return this.bEdgeHeight + this.height
	}
	lEdgePosition() {
		return this.rEdgePosition + this.width
	}
}
