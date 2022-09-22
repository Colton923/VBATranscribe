class Panel {
    //Fractional Inches
    PanelLength As Double
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
    bEdgeHeight As Double

    constructor() {
        this.clsType = "Panel"
        this.FootageCost = "N/A"
    }

    lEdgePosition() {
        return this.rEdgePosition + 3*12
    }
    tEdgeHeight() {
        return this.bEdgeHeight = this.PanelLength
    }
}
