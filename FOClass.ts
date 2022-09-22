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
	tEdgeHeight() {
		return this.bEdgeHeight + this.height
	}
	lEdgetPosition() {
		return this.rEdgePosition + this.width
	}
}
