class MiscItems {
	Quantity: number
	Shape: string
	Name: string
	Measurement: string
	Color: string
	TotalCost: number
	UnitCost: number
	FootageCost: any
	DeleteFlag: boolean
	clsType: string

	//Used for OH Doors:
	//ft
	Width: number
	Height: number
	//Used for Windows:
	//sf
	Area: number
	constructor() {
		this.clsType = 'MiscItem'
		//Default color and shape to "N/A"
		this.Color = 'N/A'
		this.Shape = 'N/A'
		this.FootageCost = 'N/A'
		this.Measurement = 'N/A'
	}
}
