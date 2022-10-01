class Trim {
	//    ''' Trim Meaurement String
	tMeasurement: string
	tLength: number
	//''' Trim type (rake, short eave, high eave, etc.) field
	tType: string
	Quantity: number
	//        ''' boolean for removing Trim from collection
	DeleteFlag: boolean
	Color: string
	clsType: string
	tShape: string
	TotalCost: any
	UnitCost: any
	FootageCost: any
	constructor() {
		;(this.clsType = 'Trim'), (this.FootageCost = 'N/A'), (this.tShape = 'N/A')
	}
}
