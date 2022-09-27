class Panel {
    //Fractional Inches
    PanelLength: number
    //Formatted Imperial Measurement
    PanelMeasurement: string
    Quantity: number
    //boolean for removing panel type from collection
    DeleteFlag: boolean
    PanelShape: string
    PanelType: string
    clsType: string
    PanelColor: string
    TotalCost: any
    UnitCost: any
    FootageCost: any
    SkipFlag: boolean
    rEdgePosition: number
    bEdgeHeight: number

    constructor() {
        this.clsType = "Panel"
        this.FootageCost = "N/A"
        this.DeleteFlag = false
    }

    lEdgePosition() {
        return this.rEdgePosition + 3*12
    }
    tEdgeHeight() {
        return this.bEdgeHeight = this.PanelLength
    }
}
