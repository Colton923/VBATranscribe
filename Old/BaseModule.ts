import { Building } from "./BuildingClass"
import { Panel } from "./PanelClass"

function main(
    BayCount: number,
    formBHeight: number,
    formBWidth: number,
    formBLength: number,
    formRPitch: number,
    formRShape: string,
    s2_EaveExtension: number, 
    s4_EaveExtension: number,
    s2_EaveExtensionPitch: string, 
    s4_EaveExtensionPitch: string,
    bayNums: number,
    bay1_length: number,
    bay2_length: number,
    bay3_length: number,
    bay4_length: number,
    bay5_length: number,
    bay6_length: number,
    bay7_length: number,
    bay8_length: number,
    bay9_length: number,
    bay10_length: number,
    bay11_length: number,
    bay12_length: number,
    size1: string,
    size2: string,
    size3: string,
    size4: string,
    size5: string,
    size6: string,
    size7: string,
    size8: string,
    size9: string,
    size10: string,
    size11: string,
    size12: string,
    wall1: string,
    wall2: string,
    wall3: string,
    wall4: string,
    wall5: string,
    wall6: string,
    wall7: string,
    wall8: string,
    wall9: string,
    wall10: string,
    wall11: string,
    wall12: string,
    rEdge1: number,
    rEdge2: number,
    rEdge3: number,
    rEdge4: number,
    rEdge5: number,
    rEdge6: number,
    rEdge7: number,
    rEdge8: number,
    rEdge9: number,
    rEdge10: number,
    rEdge11: number,
    rEdge12: number,
    h1: number,
    h2: number,
    h3: number,
    h4: number,
    h5: number,
    h6: number,
    h7: number,
    h8: number,
    h9: number,
    h10: number,
    h11: number,
    h12: number,
    w1: number,
    w2: number,
    w3: number,
    w4: number,
    w5: number,
    w6: number,
    w7: number,
    w8: number,
    w9: number,
    w10: number,
    w11: number,
    w12: number,
    b1: number,
    b2: number,
    b3: number,
    b4: number,
    b5: number,
    b6: number,
    b7: number,
    b8: number,
    b9: number,
    b10: number,
    b11: number,
    b12: number,
    e1GableOverhang: number,
    e3GableOverhang: number,
    s2EaveOverhang: number,
    s4EaveOverhang: number,
    e1GableExtension: number,
    e3GableExtension: number,
    s2EaveExtension: number,
    s4EaveExtension: number,
    formGutters: boolean,
    formWShape: string,
    formWColor: string,
    formWType: string,
    formPShape: string,
    formPColor: string,
    formPType: string,
    formRakeTrimColor: string,
    formOutsideCornerTrimColor: string,
    baseTrimColor: string,
    e1GableOverhangSoffit: boolean,
    e3GableOverhangSoffit: boolean,
    s2EaveOverhangSoffit: boolean,
    s4EaveOverhangSoffit: boolean,
    e1GableExtensionSoffit: boolean,
    e3GableExtensionSoffit: boolean,
    s2EaveExtensionSoffit: boolean,
    s4EaveExtensionSoffit: boolean,
    wainscote1Value: string,
    wainscots2Value: string,
    wainscote3Value: string,
    wainscots4Value: string,
    wallStatuse1: string,
    wallStatuss2: string,
    wallStatuse3: string,
    wallStatuss4: string,
    WallAlteratione1Length: number,
    WallAlterations2Length: number,
    WallAlteratione3Length: number,
    WallAlterations4Length: number
) {
   const undercut: number = 4.25
    var b = new Building(
        formBHeight,
        formBWidth,
        formBLength,
        formRPitch,
        formRShape,
        s2_EaveExtension,
        s4_EaveExtension,
        s2_EaveExtensionPitch,

        s4_EaveExtensionPitch,
        bayNums,
        bay1_length,
        bay2_length,
        bay3_length,
        bay4_length,
        bay5_length,
        bay6_length,
        bay7_length,
        bay8_length,
        bay9_length,
        bay10_length,
        bay11_length,
        bay12_length,
        size1,
        size2,
        size3,
        size4,
        size5,
        size6,
        size7,
        size8,
        size9,
        size10,
        size11,
        size12,
        wall1,
        wall2,
        wall3,
        wall4,
        wall5,
        wall6,
        wall7,
        wall8,
        wall9,
        wall10,
        wall11,
        wall12,
        rEdge1,
        rEdge2,
        rEdge3,
        rEdge4,
        rEdge5,
        rEdge6,
        rEdge7,
        rEdge8,
        rEdge9,
        rEdge10,
        rEdge11,
        rEdge12,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        h12,
        w1,
        w2,
        w3,
        w4,
        w5,
        w6,
        w7,
        w8,
        w9,
        w10,
        w11,
        w12,
        b1,
        b2,
        b3,
        b4,
        b5,
        b6,
        b7,
        b8,
        b9,
        b10,
        b11,
        b12,
        e1GableOverhang,
        e3GableOverhang,
        s2EaveOverhang,
        s4EaveOverhang,
        e1GableExtension,
        e3GableExtension,
        s2EaveExtension,
        s4EaveExtension,
        formGutters,
        formWShape,
        formWColor,
        formWType,
        formPShape,
        formPColor,
        formPType,
        formRakeTrimColor,
        formOutsideCornerTrimColor,
        baseTrimColor,
        e1GableOverhangSoffit,
        e3GableOverhangSoffit,
        s2EaveOverhangSoffit,
        s4EaveOverhangSoffit,
        e1GableExtensionSoffit,
        e3GableExtensionSoffit,
        s2EaveExtensionSoffit,
        s4EaveExtensionSoffit,
        wainscote1Value,
		wainscots2Value,
		wainscote3Value,
		wainscots4Value,
		wallStatuse1,
		wallStatuss2,
		wallStatuse3,
		wallStatuss4,
		WallAlteratione1Length,
		WallAlterations2Length,
		WallAlteratione3Length,
		WallAlterations4Length
        )
        const pitchString = formRPitch + ':12'
        const roofPitchHypot = Math.sqrt( formRPitch*formRPitch + 144 )
        const roofLength = formBLength + ( e1GableOverhang / 12 ) + ( e3GableOverhang / 12 )
        const rafterLength = formBWidth / 2 * roofPitchHypot
        b.RafterLength = rafterLength
        const s2RafterSheetLength = rafterLength + s2EaveOverhang - undercut
        b.s2RafterSheetLength = s2RafterSheetLength
        var s2RoofPanels = RoofPanelGen( s2RoofPanels, s2RafterSheetLength, s2EaveOverhang, roofLength, formRShape)
        var s4RoofPanels:Panel[] = []
        var s2SidewallPanels:Panel[] = []
        var s4SidewallPanels:Panel[] = []
        var e1EndwallPanels:Panel[] = []
        var e3EndwallPanels:Panel[] = []
        var s4RoofPanels:Panel[] = []

        if ( formRShape == 'Single Slope' ) {
            for ( var indexI = 0; indexI < s2RoofPanels.length; indexI++ ) {
                s2RoofPanels[indexI].PanelShape = formPShape
                s2RoofPanels[indexI].PanelType = formPShape
                s2RoofPanels[indexI].PanelColor = formPShape
            }
            sidewallPanelGen( s2SidewallPanels, 's2', b)
            sidewallPanelGen( s4SidewallPanels, 's4', b)
            endwallPanelGen( e1EndwallPanels, 'e1', b)
            endwallPanelGen( e3EndwallPanels, 'e3', b)
        } else if ( formRShape == 'Gable' ) {
            for ( var indexI = 0; indexI < s2RoofPanels.length; indexI++ ) {
                s2RoofPanels[indexI].PanelShape = formPShape
                s2RoofPanels[indexI].PanelType = formPShape
                s2RoofPanels[indexI].PanelColor = formPShape
            }
            const s4RafterSheetLength = rafterLength + s4EaveOverhang - undercut
            b.s4RafterSheetLength = s4RafterSheetLength
            s4RoofPanels = RoofPanelGen( s2RoofPanels, s2RafterSheetLength, s2EaveOverhang, roofLength, formRShape)
            for ( var indexI = 0; indexI < s4RoofPanels.length; indexI++ ) {
                s4RoofPanels[indexI].PanelShape = formPShape
                s4RoofPanels[indexI].PanelType = formPShape
                s4RoofPanels[indexI].PanelColor = formPShape
            }
            const ridgeCapQty = Math.ceil(((b.bLength =(b.e1Overhang / 12 + b.e3Overhang / 12 + b.e1Extension / 12 + b.e3Extension / 12) / 3) * 100 ) ) / 100
            sidewallPanelGen( s2SidewallPanels, 's2', b)
            sidewallPanelGen( s4SidewallPanels, 's4', b)
            endwallPanelGen( e1EndwallPanels, 'e1', b)
            endwallPanelGen( e3EndwallPanels, 'e3', b)
        }

    }
function endwallPanelGen( endwallPanels, sWall, b, fullHeightLinerPanels?, wainscote1Color?, wainscots2Color?, wainscote3Color?, wainscots4Color?, wainscote1Type?, wainscots2Type?, wainscote3Type?, wainscots4Type?) {
    var wainscotFtLength
    var specialBottomPurlin = false
    var eP1 = new Panel
    var eP2 = new Panel
    var eP3 = new Panel
    var wainscotPanel = new Panel
    var FOCutoutpl = new Panel
    const ePanelCount = Math.ceil( b.bWidth / 3 * 100 ) / 100
    var panelLengthMax = 0
    var unsplicedPanels: any[] = []
    var FOCollection = []
    var MaxSegments = 0
    var Segment1Length = 0
    var Segment2Length = 0

    switch ( sWall ) {
        case 'e1':
            if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Partial'
                ||b.WallStatus( sWall, undefined, undefined, undefined ) == 'Gable Only') {
                    specialBottomPurlin = true
            }
            if ( b.Wainscot( sWall, undefined, undefined, undefined ) != 'None' ) {
                wainscotPanel.PanelLength = b.wainscote1Type.substring(0,2)
            }
            if ( fullHeightLinerPanels == false ) {
                wainscotFtLength = wainscotPanel.PanelLength / 12
            }
        case 'e3':
            if ( b.WallStatus( undefined, undefined, sWall, undefined ) == 'Partial'
            ||b.WallStatus( undefined, undefined, sWall, undefined ) == 'Gable Only') {
                specialBottomPurlin = true
            }
            if ( b.Wainscot( undefined, undefined, sWall, undefined ) != 'None' ) {
                wainscotPanel.PanelLength = b.wainscote3Type.substring(0,2)
            }
            if ( fullHeightLinerPanels == false ) {
                wainscotFtLength = wainscotPanel.PanelLength / 12
            }
    }
    if ( b.rShape == 'Gable' ) {
        switch ( sWall ) {
            case 'e1':
                if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Exclude' ) {
                    return false
                }
                if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Include' 
                || b.WallStatus( sWall, undefined, undefined, undefined ) == 'Partial' ) {
                    if ( (ePanelCount % 2) == 0 ) {
                        for (let index = 1; index <= ePanelCount / 2; index++) {
                            var eP1 = new Panel
                            if ( index == 1 ) {
                                if ( b.rPitch == 1 ) {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( sWall, undefined, undefined, undefined ) ) - wainscotFtLength) * 12
                                } else {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( sWall, undefined, undefined, undefined ) ) - wainscotFtLength) * 12 + b.rPitch * 3
                                }
                            } else {
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                            }
                            eP1.Quantity = 1
                            eP1.rEdgePosition = ( index - 1 ) * 36
                            unsplicedPanels.push( eP1 )
                            var eP1 = new Panel
                            eP1.Quantity = 1
                            eP1.PanelLength = unsplicedPanels[unsplicedPanels.length].PanelLength
                            eP1.rEdgePosition = (Math.ceil(b.bWidth / 3 * 100) / 100 * 3 - unsplicedPanels.length * 3) * 12
                            unsplicedPanels.push(eP1)
                            panelLengthMax = eP1.PanelLength
                        }
                    } else {
                        var iterate = 0
                        for (let index = 1; index <= ( ePanelCount - 1 ) / 2; index++) {
                            iterate += 1
                            var eP1 = new Panel
                            if ( index == 1 ) {
                                if ( b.rPitch == 1 ) {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( sWall, undefined, undefined, undefined ) ) - wainscotFtLength) * 12
                                } else {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( sWall, undefined, undefined, undefined ) ) - wainscotFtLength) * 12 + b.rPitch * 3
                                }
                            } else {
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                            }
                            eP1.Quantity = 1
                            eP1.rEdgePosition = ( index - 1 ) * 36
                            unsplicedPanels.push( eP1 )
                            var eP1 = new Panel
                            eP1.Quantity = 1
                            eP1.PanelLength = unsplicedPanels[unsplicedPanels.length].PanelLength
                            eP1.rEdgePosition = (Math.ceil(b.bWidth / 3 * 100) / 100 * 3 - unsplicedPanels.length * 3) * 12
                            unsplicedPanels.push(eP1)
                            panelLengthMax = eP1.PanelLength
                        }
                        var eP1 = new Panel
                        eP1.Quantity = 1
                        eP1.PanelLength = panelLengthMax + (b.rPitch * 3)
                        eP1.rEdgePosition = iterate * 3
                        unsplicedPanels.push(eP1)
                        panelLengthMax = eP1.PanelLength
                    }
                }
                if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Gable Only' ) {
                    if ( (ePanelCount % 2) == 0 ) {
                        for (let index = 1; index <= ePanelCount / 2; index++) {
                            if ( index == 1 ) {
                                if ( b.rPitch != 1 ) {
                                    eP1 = new Panel
                                    eP1.PanelLength = b.rPitch * 3
                                } 
                            } else {
                                eP1 = new Panel
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                            }
                            if ( eP1.PanelLength > 0 ) {
                                eP1.Quantity = 2
                                unsplicedPanels.push(eP1)
                                panelLengthMax = eP1.PanelLength
                            }
                        }
                    } else {
                        var iterate = 0
                        for (let index = 1; index <= ( ePanelCount - 1 ) / 2; index++) {
                            iterate += 1
                            if ( index == 1 ) {
                                if ( b.rPitch != 1 ) {
                                    eP1 = new Panel
                                    eP1.PanelLength = b.rPitch * 3 + b.bHeight * 12
                                    eP1.Quantity = 2
                                    unsplicedPanels.push(eP1)
                                    panelLengthMax = eP1.PanelLength
                                } 
                            } else {
                                eP1 = new Panel
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                                eP1.Quantity = 2
                                unsplicedPanels.push(eP1)
                                panelLengthMax = eP1.PanelLength
                            }
                        }
                        var eP1 = new Panel
                        eP1.Quantity = 1
                        eP1.PanelLength = panelLengthMax + (b.rPitch * 3)
                        eP1.rEdgePosition = iterate * 3
                        unsplicedPanels.push(eP1)
                        panelLengthMax = eP1.PanelLength
                    }
                }
            case 'e3':
                if ( b.WallStatus( undefined, undefined, sWall, undefined ) == 'Exclude' ) {
                    return false
                }
                if ( b.WallStatus(  undefined, undefined, sWall, undefined  ) == 'Include' 
                || b.WallStatus(  undefined, undefined, sWall, undefined  ) == 'Partial' ) {
                    if ( (ePanelCount % 2) == 0 ) {
                        for (let index = 1; index <= ePanelCount / 2; index++) {
                            var eP1 = new Panel
                            if ( index == 1 ) {
                                if ( b.rPitch == 1 ) {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus(  undefined, undefined, sWall, undefined  ) ) - wainscotFtLength) * 12
                                } else {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus(  undefined, undefined, sWall, undefined  ) ) - wainscotFtLength) * 12 + b.rPitch * 3
                                }
                            } else {
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                            }
                            eP1.Quantity = 1
                            eP1.rEdgePosition = ( index - 1 ) * 36
                            unsplicedPanels.push( eP1 )
                            var eP1 = new Panel
                            eP1.Quantity = 1
                            eP1.PanelLength = unsplicedPanels[unsplicedPanels.length].PanelLength
                            eP1.rEdgePosition = (Math.ceil(b.bWidth / 3 * 100) / 100 * 3 - unsplicedPanels.length * 3) * 12
                            unsplicedPanels.push(eP1)
                            panelLengthMax = eP1.PanelLength
                        }
                    } else {
                        var iterate = 0
                        for (let index = 1; index <= ( ePanelCount - 1 ) / 2; index++) {
                            iterate += 1
                            var eP1 = new Panel
                            if ( index == 1 ) {
                                if ( b.rPitch == 1 ) {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus(  undefined, undefined, sWall, undefined  ) ) - wainscotFtLength) * 12
                                } else {
                                    eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus(  undefined, undefined, sWall, undefined  ) ) - wainscotFtLength) * 12 + b.rPitch * 3
                                }
                            } else {
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                            }
                            eP1.Quantity = 1
                            eP1.rEdgePosition = ( index - 1 ) * 36
                            unsplicedPanels.push( eP1 )
                            var eP1 = new Panel
                            eP1.Quantity = 1
                            eP1.PanelLength = unsplicedPanels[unsplicedPanels.length].PanelLength
                            eP1.rEdgePosition = (Math.ceil(b.bWidth / 3 * 100) / 100 * 3 - unsplicedPanels.length * 3) * 12
                            unsplicedPanels.push(eP1)
                            panelLengthMax = eP1.PanelLength
                        }
                        var eP1 = new Panel
                        eP1.Quantity = 1
                        eP1.PanelLength = panelLengthMax + (b.rPitch * 3)
                        eP1.rEdgePosition = iterate * 3
                        unsplicedPanels.push(eP1)
                        panelLengthMax = eP1.PanelLength
                    }
                }
                if ( b.WallStatus(  undefined, undefined, sWall, undefined  ) == 'Gable Only' ) {
                    if ( (ePanelCount % 2) == 0 ) {
                        for (let index = 1; index <= ePanelCount / 2; index++) {
                            if ( index == 1 ) {
                                if ( b.rPitch != 1 ) {
                                    eP1 = new Panel
                                    eP1.PanelLength = b.rPitch * 3
                                    eP1.Quantity = 2
                                    unsplicedPanels.push(eP1)
                                    panelLengthMax = eP1.PanelLength
                                } 
                            } else {
                                eP1 = new Panel
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                                eP1.Quantity = 2
                                unsplicedPanels.push(eP1)
                                panelLengthMax = eP1.PanelLength
                            }
                        }
                    } else {
                        var iterate = 0
                        for (let index = 1; index <= ( ePanelCount - 1 ) / 2; index++) {
                            iterate += 1
                            if ( index == 1 ) {
                                if ( b.rPitch != 1 ) {
                                    eP1 = new Panel
                                    eP1.PanelLength = b.rPitch * 3 + b.bHeight * 12
                                    eP1.Quantity = 2
                                    unsplicedPanels.push(eP1)
                                    panelLengthMax = eP1.PanelLength
                                } 
                            } else {
                                eP1 = new Panel
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                                eP1.Quantity = 2
                                unsplicedPanels.push(eP1)
                                panelLengthMax = eP1.PanelLength
                            }
                        }
                        var eP1 = new Panel
                        eP1.Quantity = 1
                        eP1.PanelLength = panelLengthMax + (b.rPitch * 3)
                        eP1.rEdgePosition = iterate * 3
                        unsplicedPanels.push(eP1)
                        panelLengthMax = eP1.PanelLength
                    }
                }
        }
    } else if ( b.rShape == 'Single Slope' ) {
        switch ( sWall ) {
            case 'e1':
                if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Exclude' ) {
                    return false
                }
                if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Include' 
                || b.WallStatus( sWall, undefined, undefined, undefined ) == 'Partial' ) {
                    for (let index = 1; index <= ePanelCount / 2; index++) {
                        var eP1 = new Panel
                        if ( index == 1 ) {
                            if ( b.rPitch == 1 ) {
                                eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( sWall, undefined, undefined, undefined ) ) - wainscotFtLength) * 12
                            } else {
                                eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( sWall, undefined, undefined, undefined ) ) - wainscotFtLength) * 12 + b.rPitch * 3
                            }
                        } else {
                            eP1.PanelLength = panelLengthMax + b.rPitch * 3
                        }
                        eP1.Quantity = 1
                        eP1.rEdgePosition = ( index - 1 ) * 36
                        unsplicedPanels.push( eP1 )
                        panelLengthMax = eP1.PanelLength
                    }
                }
                if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Gable Only' ) {
                        for (let index = 1; index <= ePanelCount / 2; index++) {
                            if ( index == 1 ) {
                                if ( b.rPitch != 1 ) {
                                    eP1 = new Panel
                                    eP1.PanelLength = b.rPitch * 3
                                    eP1.Quantity = 2
                                    unsplicedPanels.push(eP1)
                                    panelLengthMax = eP1.PanelLength
                                } 
                            } else {
                                eP1 = new Panel
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                                eP1.Quantity = 2
                                unsplicedPanels.push(eP1)
                                panelLengthMax = eP1.PanelLength
                            }
                        }
                }
            case 'e3':
                if ( b.WallStatus( undefined, undefined, sWall, undefined ) == 'Exclude' ) {
                    return false
                }
                if ( b.WallStatus( undefined, undefined, sWall, undefined ) == 'Include' 
                || b.WallStatus( undefined, undefined, sWall, undefined ) == 'Partial' ) {
                    for (let index = 1; index <= ePanelCount / 2; index++) {
                        var eP1 = new Panel
                        if ( index == 1 ) {
                            if ( b.rPitch == 1 ) {
                                eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( undefined, undefined, sWall, undefined ) ) - wainscotFtLength) * 12
                            } else {
                                eP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( b.WallStatus( undefined, undefined, sWall, undefined ) ) - wainscotFtLength) * 12 + b.rPitch * 3
                            }
                        } else {
                            eP1.PanelLength = panelLengthMax + b.rPitch * 3
                        }
                        eP1.Quantity = 1
                        eP1.rEdgePosition = ( index - 1 ) * 36
                        unsplicedPanels.push( eP1 )
                        panelLengthMax = eP1.PanelLength
                    }
                }
                if ( b.WallStatus( undefined, undefined, sWall, undefined ) == 'Gable Only' ) {
                        for (let index = 1; index <= ePanelCount / 2; index++) {
                            if ( index == 1 ) {
                                if ( b.rPitch != 1 ) {
                                    eP1 = new Panel
                                    eP1.PanelLength = b.rPitch * 3
                                    eP1.Quantity = 2
                                    unsplicedPanels.push(eP1)
                                    panelLengthMax = eP1.PanelLength
                                } 
                            } else {
                                eP1 = new Panel
                                eP1.PanelLength = panelLengthMax + b.rPitch * 3
                                eP1.Quantity = 2
                                unsplicedPanels.push(eP1)
                                panelLengthMax = eP1.PanelLength
                            }
                        }
                }
        }
    }
    if ( sWall = 'e1' ) { 
        FOCollection = b.e1FOs
    } else {
        FOCollection = b.e3FOs
    }
    if ( panelLengthMax <= 42 * 12 ) {
        MaxSegments = 1
        unsplicedPanels.forEach(p => {
            FOCollection.forEach(fo => {
                if ( (fo.foType == 'OHDoor' || fo.foType == 'MiscFO') && fo.width >= 7 * 12 && fo.bEdgeHeight == 0 ) {
                    if ( p.rEdgePosition >= fo.rEdgePosition + 3 * 12  && p.lEdgePosition <= fo.lEdgePosition - 3 * 12 ) {
                        p.PanelLength = p.PanelLength - (fo.height - wainscotFtLength * 12)
                    }
                } 
            });
            if ( fullHeightLinerPanels == true ) {
                p.PanelLength -= 8
            }
            if ( p.PanelLength > 0 ) {
                endwallPanels.push( p )
            }
        });
        if ( sWall = 'e1' ) {
            b.e1WallPanelOverlaps = 0
        } else if ( sWall = 'e3' ) {
            b.e3WallPanelOverlaps = 0
        }
        endwallPanels.forEach(element => {
            element.PanelShape = b.wPanelShape
            element.PanelType = b.wPanelType
            element.PanelColor = b.wPanelColor
            element.PanelMeasurement = inchesToStringFeet(element.PanelLength)
        });
        if ( wainscotPanel.PanelLength > 0 ) {
            wainscotPanel.PanelMeasurement = inchesToStringFeet(wainscotPanel.PanelLength)
            wainscotPanel.Quantity = Math.ceil(b.width / 3 * 100 ) / 100
            switch ( sWall ) {
                case 'e1':
                    wainscotPanel.PanelColor = b.wainscote1Color
                case 'e3':
                    wainscotPanel.PanelColor = b.wainscote3Color
                                
            }
            wainscotPanel.PanelShape = b.wPanelShape
            endwallPanels.push( wainscotPanel )
        }
        duplicateMaterialRemoval(endwallPanels, 'Panel' )
        return endwallPanels
    } else if ( panelLengthMax <= 79 * 12 + 3.5 ) {
        MaxSegments = 2
       Segment1Length = closestWallPurlin( panelLengthMax / 2, 0, specialBottomPurlin )
       if ( specialBottomPurlin == false ) {
        if ( Segment1Length > 37*12 + 3.5 ) {
            Segment1Length = 37* 12 + 3.5
        }
       }
       if ( sWall = 'e1' ) {
            b.e1WallPanelOverlaps = 1
       } else {
            b.e3WallPanelOverlaps = 1
       }
    } else {
        MaxSegments = 3
        Segment1Length = closestWallPurlin( panelLengthMax / 3, 0, specialBottomPurlin )
        Segment2Length = closestWallPurlin( panelLengthMax / 3 * 2, 0, specialBottomPurlin ) - Segment1Length
        if ( sWall = 'e1' ) {
            b.e1WallPanelOverlaps = 1
       } else {
            b.e3WallPanelOverlaps = 1
       }
    }
    
/* Line 2448 of endwallpanelgen
/*     ''''''''' Splice using the segment lengths calculated above ''''''''''''''
''' Note: This occurs when we have an unspliced panel collection which we know must include panels which need to be segmented
For Each ePanel In UnsplicedPanels
    If ePanel.PanelLength <= Segment1Length Then
        ''' check for intersecting FOs
        For Each FO In FOCollection
            If (FO.FOType = "OHDoor" Or FO.FOType = "MiscFO") And FO.Width >= 7 * 12 And FO.bEdgeHeight = 0 Then
                If ePanel.rEdgePosition >= (FO.rEdgePosition + 3 * 12) And ePanel.lEdgePosition <= (FO.lEdgePosition - 3 * 12) Then
                    ePanel.PanelLength = ePanel.PanelLength - (FO.Height - (WainscotFtLength * 12))
                End If
            End If
        Next FO
        Set eP1 = New clsPanel
        eP1.PanelLength = ePanel.PanelLength
        'deduct 8" from full height liners
        If FullHeightLinerPanels = True Then eP1.PanelLength = eP1.PanelLength - 8
        'EndwallPanels.Add ePanel
    ElseIf MaxSegments = 2 Then
        If ePanel.PanelLength > Segment1Length Then
            ''' check for intersecting FOs
            For Each FO In FOCollection
                If (FO.FOType = "OHDoor" Or FO.FOType = "MiscFO") And FO.Width >= 7 * 12 And FO.bEdgeHeight = 0 Then
                    If ePanel.rEdgePosition >= (FO.rEdgePosition + 3 * 12) And ePanel.lEdgePosition <= (FO.lEdgePosition - 3 * 12) Then
                        'If FO takes up less than segment 1, create first panel from height remaining after cutout and create segment 2 normally (since it's above the FO and not effected)
                        If Segment1Length - (FO.Height - (WainscotFtLength * 12)) > 0 Then
                            Set eP1 = New clsPanel
                            eP1.PanelLength = Segment1Length - (FO.Height - (WainscotFtLength * 12)) + 1.5
                            Set eP2 = New clsPanel
                            eP2.PanelLength = ePanel.PanelLength - Segment1Length + 1.5
                            If FullHeightLinerPanels = True Then eP2.PanelLength = eP2.PanelLength - 8
                            GoTo AddSegmentedPanels
                        ''' If FO takes up the entirity of segment 1 or more, add segment 2 without overlap and subtract the height remaining after the FO cutout
                        ElseIf Segment1Length - (FO.Height - (WainscotFtLength * 12)) <= 0 Then
                            Set eP2 = New clsPanel
                            eP2.PanelLength = ePanel.PanelLength - (FO.Height - (WainscotFtLength * 12))
                            If FullHeightLinerPanels = True Then eP2.PanelLength = eP2.PanelLength - 8
                            GoTo AddSegmentedPanels
                        End If
                    End If
                End If
            Next FO
            '''''''''''' no intersecting FOs
            Set eP1 = New clsPanel
            eP1.PanelLength = Segment1Length + 1.5
            Set eP2 = New clsPanel
            eP2.PanelLength = ePanel.PanelLength - Segment1Length + 1.5
            If FullHeightLinerPanels = True Then eP2.PanelLength = eP2.PanelLength - 8
        End If
    ElseIf MaxSegments = 3 Then
        If ePanel.PanelLength <= (Segment1Length + Segment2Length) Then
            ''' check for intersecting FOs
            For Each FO In FOCollection
                If (FO.FOType = "OHDoor" Or FO.FOType = "MiscFO") And FO.Width >= 7 * 12 And FO.bEdgeHeight = 0 Then
                    If ePanel.rEdgePosition >= (FO.rEdgePosition + 3 * 12) And ePanel.lEdgePosition <= (FO.lEdgePosition - 3 * 12) Then
                        'If FO takes up less than segment 1, create first panel from height remaining after cutout and create segment 2 normally (since it's above the FO and not effected)
                        If Segment1Length - (FO.Height - (WainscotFtLength * 12)) > 0 Then
                            Set eP1 = New clsPanel
                            eP1.PanelLength = Segment1Length - (FO.Height - (WainscotFtLength * 12)) + 1.5
                            Set eP2 = New clsPanel
                            eP2.PanelLength = ePanel.PanelLength - Segment1Length + 1.5
                            GoTo AddSegmentedPanels
                        ''' If FO takes up the entirity of segment 1 or more, add segment 2 without overlap and subtract the height remaining after the FO cutout
                        ElseIf Segment1Length - (FO.Height - (WainscotFtLength * 12)) <= 0 Then
                            Set eP2 = New clsPanel
                            eP2.PanelLength = (Segment2Length + Segment1Length) - (FO.Height - (WainscotFtLength * 12)) + 1.5
                            GoTo AddSegmentedPanels
                        End If
                    End If
                End If
            Next FO
            '''''''''''' no intersecting FOs
            Set eP1 = New clsPanel
            eP1.PanelLength = Segment1Length + 1.5
            Set eP2 = New clsPanel
            eP2.PanelLength = ePanel.PanelLength - Segment1Length + 1.5
        ElseIf ePanel.PanelLength > (Segment1Length + Segment2Length) Then
            ''' check for intersecting FOs
            For Each FO In FOCollection
                If (FO.FOType = "OHDoor" Or FO.FOType = "MiscFO") And FO.Width >= 7 * 12 And FO.bEdgeHeight = 0 Then
                    If ePanel.rEdgePosition >= (FO.rEdgePosition + 3 * 12) And ePanel.lEdgePosition <= (FO.lEdgePosition - 3 * 12) Then
                        'If FO takes up less than segment 1, create first panel from height remaining after cutout and create segment 2 normally (since it's above the FO and not effected)
                        If Segment1Length - (FO.Height - (WainscotFtLength * 12)) > 0 Then
                            Set eP1 = New clsPanel
                            eP1.PanelLength = Segment1Length - (FO.Height - (WainscotFtLength * 12)) + 1.5
                            Set eP2 = New clsPanel
                            eP2.PanelLength = Segment2Length + 3
                            Set eP3 = New clsPanel
                            eP3.PanelLength = ePanel.PanelLength - Segment1Length - Segment2Length + 1.5
                            If FullHeightLinerPanels = True Then eP3.PanelLength = eP3.PanelLength - 8
                            GoTo AddSegmentedPanels
                        ''' If FO takes up the entirity of segment 1 or more, add segment 2 without overlap and subtract the height remaining after the FO cutout
                        ElseIf Segment1Length - (FO.Height - (WainscotFtLength * 12)) <= 0 Then
                            Set eP2 = New clsPanel
                            eP2.PanelLength = (Segment2Length + Segment1Length) - (FO.Height - (WainscotFtLength * 12)) + 1.5
                            Set eP3 = New clsPanel
                            eP3.PanelLength = ePanel.PanelLength - Segment1Length - Segment2Length + 1.5
                            If FullHeightLinerPanels = True Then eP3.PanelLength = eP3.PanelLength - 8
                            GoTo AddSegmentedPanels
                        End If
                    End If
                End If
            Next FO
            '''''''''''' no intersecting FOs
            Set eP1 = New clsPanel
            eP1.PanelLength = Segment1Length + 1.5
            Set eP2 = New clsPanel
            eP2.PanelLength = Segment2Length + 3
            Set eP3 = New clsPanel
            eP3.PanelLength = ePanel.PanelLength - Segment1Length - Segment2Length + 1.5
            'deduct 8" from full height liners
            If FullHeightLinerPanels = True Then eP3.PanelLength = eP3.PanelLength - 8
        End If
    End If
AddSegmentedPanels:
    '''''''''''''''add segmented panels to collection
    If Not eP1 Is Nothing Then
        eP1.Quantity = ePanel.Quantity
        If eP1.PanelLength > 0 Then EndwallPanels.Add eP1
        Set eP1 = Nothing
    End If
    If Not eP2 Is Nothing Then
        eP2.Quantity = ePanel.Quantity
        If eP2.PanelLength > 0 Then EndwallPanels.Add eP2
        Set eP2 = Nothing
    End If
    If Not eP3 Is Nothing Then
        eP3.Quantity = ePanel.Quantity
        If eP3.PanelLength > 0 Then EndwallPanels.Add eP3
        Set eP3 = Nothing
    End If
Next ePanel

'''


FinishCollection:

'add parameters
For Each ePanel In EndwallPanels
    ePanel.PanelShape = b.wPanelShape
    ePanel.PanelType = b.wPanelType
    ePanel.PanelColor = b.wPanelColor
    ePanel.PanelMeasurement = ImperialMeasurementFormat(ePanel.PanelLength)
Next ePanel

If Not WainscotPanel Is Nothing And FullHeightLinerPanels = False Then
    WainscotPanel.PanelMeasurement = ImperialMeasurementFormat(WainscotPanel.PanelLength)
    WainscotPanel.Quantity = Application.WorksheetFunction.RoundUp(b.bWidth / 3, 0)
    WainscotPanel.PanelColor = EstSht.Range(eWall & "_Wainscot").offset(0, 2).Value
    WainscotPanel.PanelType = EstSht.Range(eWall & "_Wainscot").offset(0, 1).Value
    WainscotPanel.PanelShape = b.wPanelShape
    EndwallPanels.Add WainscotPanel
End If

Call DuplicateMaterialRemoval(EndwallPanels, "Panel")

 */
}
function sidewallPanelGen( sidewallPanels, sWall, b, fullHeightLinerPanels?, wainscote1Color?, wainscots2Color?, wainscote3Color?, wainscots4Color?, wainscote1Type?, wainscots2Type?, wainscote3Type?, wainscots4Type?) {
    var wainscotFtLength
    var specialBottomPurlin = false
    var sP1 = new Panel
    var sP2 = new Panel
    var sP3 = new Panel
    var wainscotPanel = new Panel
    var FOCutoutpl = new Panel

    switch( sWall ) {
        case 's2': {
            if ( b.Wainscot(undefined, sWall, undefined, undefined) != 'None' ) {
                wainscotPanel.PanelLength = +b.wainscots2.substring( 0,2 )
                if ( fullHeightLinerPanels == false ) {
                    wainscotFtLength = wainscotPanel.PanelLength /12 }
            }
            switch( b.WallStatus(undefined, sWall, undefined, undefined)) {
                case 'Exclude':
                    return 0
                case 'Include' || 'Partial':
                    if ( b.WallStatus( undefined, sWall, undefined, undefined ) == 'Partial' ) { specialBottomPurlin = true }
                    if ( b.rShape == 'Single Slope' && sWall == 's4' ) {
                        if ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined )  - wainscotFtLength <= 42 ) {
                            sP1.PanelLength = b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) ) * 12)
                            if ( fullHeightLinerPanels == true ) {sP1.PanelLength -= 8}
                        } else if ( ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) > 42 &&
                            ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength) <= 79 + ( 3.5 / 12 ) ) {
                            sP1.PanelLength = closestWallPurlin((b.HighSideEaveHeight-(wainscotFtLength + b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) * 12 )) / 2, 0, specialBottomPurlin)
                            sP1.PanelLength += 1.5
                            sP2.PanelLength = (b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined )) * 12)) - sP1.PanelLength
                            sP2.PanelLength += 1.5
                            if ( fullHeightLinerPanels == true ) {
                                sP2.PanelLength -= 8
                            } 
                        } else {
                            if ( b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength <= 42 ) {
                                sP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) * 12
                                if ( fullHeightLinerPanels == true ) {sP1.PanelLength = sP1.PanelLength - 8}
                            } else if (b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength > 42 ) {
                                if ( closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin) > (42 * 12)) {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, -1, specialBottomPurlin)
                                } else {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin)
                                }
                                sP1.PanelLength += 1.5
                                sP2.PanelLength = ((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength * 12 ) - sP1.PanelLength)
                                sP2.PanelLength += 1.5
                                if ( fullHeightLinerPanels == true ) { sP2.PanelLength -= 8}
                            }
                        }
                    break
                    }
            }
            break
        }
        case 's4': {
            if ( b.Wainscot(undefined, undefined, undefined, sWall) != 'None' ) {
                wainscotPanel.PanelLength = +b.wainscots4.substring( 0,2 )
                if ( fullHeightLinerPanels == false ) {
                    wainscotFtLength = wainscotPanel.PanelLength /12 }
            }
            switch( b.WallStatus(undefined, undefined, undefined, sWall)) {
                case 'Exclude':
                    return 0
                case 'Include' || 'Partial':
                    if ( b.WallStatus( undefined, undefined, undefined, sWall ) == 'Partial' ) { specialBottomPurlin = true }
                    if ( b.rShape == 'Single Slope' && sWall == 's4' ) {
                        if ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall )  - wainscotFtLength <= 42 ) {
                            sP1.PanelLength = b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) ) * 12)
                            if ( fullHeightLinerPanels == true ) {sP1.PanelLength -= 8}
                        } else if ( ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) > 42 &&
                            ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength) <= 79 + ( 3.5 / 12 ) ) {
                            sP1.PanelLength = closestWallPurlin((b.HighSideEaveHeight-(wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) * 12 )) / 2, 0, specialBottomPurlin)
                            sP1.PanelLength += 1.5
                            sP2.PanelLength = (b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall )) * 12)) - sP1.PanelLength
                            sP2.PanelLength += 1.5
                            if ( fullHeightLinerPanels == true ) {
                                sP2.PanelLength -= 8
                            } 
                        } else {
                            if ( b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength <= 42 ) {

                                sP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) * 12
                                if ( fullHeightLinerPanels == true ) {sP1.PanelLength = sP1.PanelLength - 8}
                            } else if (b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength > 42 ) {

                                if ( closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin) > (42 * 12)) {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) / 2 ) * 12, -1, specialBottomPurlin)
                                } else {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin)
                                }
                                sP1.PanelLength += 1.5
                                sP2.PanelLength = ((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength * 12 ) - sP1.PanelLength)
                                sP2.PanelLength += 1.5
                                if ( fullHeightLinerPanels == true ) { sP2.PanelLength -= 8}
                            }
                        }
                    }
                }
            }           
        }
    if ( typeof sP1 != undefined ) {
        sP1.Quantity = Math.ceil(b.bLength / 3 * 100 ) / 100
    }
    if ( typeof sP2 != undefined ) {
        sP2.Quantity = sP1.Quantity
    }
    if ( typeof sP3 != undefined ) {
        sP3.Quantity = sP1.Quantity
    }
    if ( typeof sP1 != undefined ) {
        if ( sWall == 's2' ) {
            var FOCollection = b.s2FOs
        } else {
            var FOCollection = b.s4FOs
        }
        FOCollection.forEach(element => {
            if ( ( element.FOType == 'OHDoor' || element.FOType == 'MiscFO') && element.width >= 7 * 12 && element.bEdgeHeight == 0 ) {
                FOCutoutpl.Quantity = Math.ceil(element.width / (3 * 12) * 100 ) / 100 - 2
                FOCutoutpl.PanelLength = sP1.PanelLength - ( element.height - ( wainscotFtLength * 12 ) )
                sP1.Quantity = sP1.Quantity - FOCutoutpl.Quantity
                sidewallPanels.push(FOCutoutpl)

            }
        })
        sidewallPanels.push(sP1)
    }
    if ( typeof sP2 != undefined ) {
        sidewallPanels.push(sP2)
    }
    if ( typeof sP3 != undefined ) {
        sidewallPanels.push(sP3)
    }
    sidewallPanels.forEach(element => {
        element.PanelMeasurement = inchesToStringFeet(element.PanelLength)
        element.PanelShape = b.wPanelShape
        element.PanelType = b.wPanelType
        element.PanelColor = b.wPanelColor
    });
    switch (sWall){
        case 'e1':
            if ( wainscotPanel != undefined && fullHeightLinerPanels == false ) {
                wainscotPanel.PanelMeasurement = inchesToStringFeet(wainscotPanel.PanelLength)
                wainscotPanel.PanelColor = wainscote1Color
                wainscotPanel.PanelType = wainscote1Type
                wainscotPanel.PanelShape = b.wPanelShape
                sidewallPanels.push(wainscotPanel)
            }
            break
        case 's2':
            if ( wainscotPanel != undefined && fullHeightLinerPanels == false ) {
                wainscotPanel.PanelMeasurement = inchesToStringFeet(wainscotPanel.PanelLength)
                wainscotPanel.PanelColor = wainscots2Color
                wainscotPanel.PanelType = wainscots2Type
                wainscotPanel.PanelShape = b.wPanelShape
                sidewallPanels.push(wainscotPanel)
            }
            break
        case 'e3':
            if ( wainscotPanel != undefined && fullHeightLinerPanels == false ) {
                wainscotPanel.PanelMeasurement = inchesToStringFeet(wainscotPanel.PanelLength)
                wainscotPanel.PanelColor = wainscote3Color
                wainscotPanel.PanelType = wainscote3Type
                wainscotPanel.PanelShape = b.wPanelShape
                sidewallPanels.push(wainscotPanel)
            }
            break
        case 's4':
            if ( wainscotPanel != undefined && fullHeightLinerPanels == false ) {
                wainscotPanel.PanelMeasurement = inchesToStringFeet(wainscotPanel.PanelLength)
                wainscotPanel.PanelColor = wainscots4Color
                wainscotPanel.PanelType = wainscots4Type
                wainscotPanel.PanelShape = b.wPanelShape
                sidewallPanels.push(wainscotPanel)
            }
            break
    }
    return sidewallPanels
}
function closestWallPurlin( height, direction?, nonStandardFloorPurlin? ) {
    var algValue = 0
    var Purlins = [87.5, 147.5, 207.5, 267.5, 327.5, 387.5, 447.5, 507.5, 567.5, 627.5, 687.5, 747.5, 807.5, 867.5, 927.5, 987.5, 1047.5, 1107.5, 1167.5]
    var t = 999999
    if ( nonStandardFloorPurlin == false ) {
        for ( var indexI = 0; indexI < Purlins.length; indexI++ ) {
            var u = Math.abs(Purlins[indexI] - height)
            if ( direction > 0 && Purlins[indexI] >= height ) {
                if ( u < t ) {
                    t = 0
                    algValue = Purlins[indexI]
                }
            } else if ( direction < 0 && Purlins[indexI] <= height ) {
                if ( u < t ) {
                    t = 0
                    algValue = Purlins[indexI]
                }
            }else if ( direction == 0 ) {
                if ( u < t ) {
                    t = u
                    algValue = Purlins[indexI]
                }
            }
        } 
    } else if ( nonStandardFloorPurlin == true ) {
        var pBelow = Math.floor( height / 5 ) * 5
        var pAbove = Math.ceil( height / 5 ) * 5
        switch ( direction ) {
            case -1: algValue = pBelow
            case 1: algValue = pAbove
            case 0: if ( Math.abs(pAbove - height) < Math.abs(pBelow - height ) ) {
                algValue = pAbove

            } else {
                algValue = pAbove
            }
        }
    }
    return algValue
}
function RoofPanelGen( 
    RoofPanels, 
    RafterSheetLength, 
    EaveOverhang, 
    roofLength, 
    formRShape?,
    eaveExtension?) {
    var largeOverhang = false
    var onePanel =  false
    var p1Length, p1Measurement
    var p2Length, p2Measurement
    var p3Length, p3Measurement
    var p4Length, p4Measurement
    var p5Length, p5Measurement
    var panelQty
    var idealPLength
    var remainingLength
    var twoPanel = false
    var threePanel = false
    var fourPanel = false
    var fivePanel = false
    var sixPanel = false
    var p1 = new Panel
    var p2 = new Panel
    var p3 = new Panel
    var p4 = new Panel
    var p5 = new Panel
    const overlap = 6

    if ( EaveOverhang > ( 1.5 * 12 ) ) { 
        largeOverhang = true
    } else { 
        largeOverhang = false 
    }
    if ( RafterSheetLength <= ( 42 * 12 ) ) {
        onePanel = true
    } else if ( RafterSheetLength <= ( 83 * 12 ) ) {
        if ( largeOverhang == false ) {
            p1Length = ( 40 * 12 ) + EaveOverhang
        } else {
            p1Length = ( 35 * 12 ) + EaveOverhang
        }
        p2Length = RafterSheetLength - p1Length
        if ( p2Length <= ( 42 * 12 ) ) {
            twoPanel = true
        } else {
            threePanel = true
        }
    } else if ( RafterSheetLength <= ( 124 * 12 ) ) {
        if ( largeOverhang == false ) {
            p1Length = ( 40 * 12 ) + EaveOverhang
        } else {
            p1Length = ( 35 * 12 ) + EaveOverhang
        }
        p2Length = 40 * 12
        p3Length = RafterSheetLength - p1Length - p2Length
        if ( p3Length <= ( 42 * 12 ) ) {
            threePanel = true
        } else {
            fourPanel = true
        }
    } else if ( RafterSheetLength <= ( 165 * 12 ) ) {
        if ( largeOverhang == false ) {
            p1Length = ( 40 * 12 ) + EaveOverhang
        } else {
            p1Length = ( 35 * 12 ) + EaveOverhang
        }
        p2Length = 40 * 12
        p3Length = p2Length
        p4Length = RafterSheetLength - p1Length - p2Length - p3Length
        if ( p4Length <= ( 42 * 12 ) ) {
            fourPanel = true
        } else {
            fivePanel = true
        }
    } else if ( RafterSheetLength <= ( 206 * 12 ) ) {
        if ( largeOverhang == false ) {
            p1Length = ( 40 * 12 ) + EaveOverhang
        } else {
            p1Length = ( 35 * 12 ) + EaveOverhang
        }
        p2Length = 40 * 12
        p3Length = p2Length
        p4Length = p2Length
        p5Length = RafterSheetLength - p1Length - p2Length - p3Length - p4Length
        if ( p4Length <= ( 42 * 12 ) ) {
            fivePanel = true
        } else {
            sixPanel = true
        }
    } else {
        sixPanel = true
    } 
    panelQty = Math.ceil( roofLength / 3 )

    if ( onePanel == true ) {
        p1.PanelLength = RafterSheetLength
        if ( eaveExtension = true ) {
            p1.PanelLength = p1.PanelLength + 6
        }
        p1.PanelMeasurement = inchesToStringFeet( p1.PanelLength)
        p1.Quantity = panelQty
        RoofPanels.push(p1)
    } else if ( twoPanel == true ) {
        idealPLength = RafterSheetLength / 2
        if (largeOverhang == false) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 40 * 12 ) {
                p1.PanelLength = closestRoofPurlin( idealPLength, 1 ) + EaveOverhang
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
            }
        } else if ( largeOverhang == true ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 35 * 12 ) {
                if ( Math.abs( idealPLength - ( RafterSheetLength - ( 
                    closestRoofPurlin( idealPLength, 1 ) + EaveOverhang ) ) ) 
                    <  Math.abs( idealPLength - ( RafterSheetLength - ( 
                    closestRoofPurlin( idealPLength, -1 ) + EaveOverhang ) ) ) ) {
                        p1.PanelLength = closestRoofPurlin( idealPLength, 1 ) + EaveOverhang
                } else {
                    p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
                }
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
            }
        }
        p2.PanelLength = RafterSheetLength - p1.PanelLength
        p2.PanelLength += overlap
        p1.PanelLength += overlap
        p1.PanelMeasurement = inchesToStringFeet( p1.PanelLength )
        p2.PanelMeasurement = inchesToStringFeet( p2.PanelLength )
        p1.Quantity = panelQty
        p2.Quantity = panelQty
        RoofPanels.push(p1)
        RoofPanels.push(p2)
    } else if ( threePanel == true ) {
        idealPLength = RafterSheetLength / 3
        if ( largeOverhang == false ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 40 * 12 ) {
                p1.PanelLength = closestRoofPurlin( idealPLength, 1 ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ))
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, -1 )
            }
        } else if ( largeOverhang == true ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 35 * 12 ) {
                p1.PanelLength = closestRoofPurlin( idealPLength ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ))
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1) + EaveOverhang
                if ( closestRoofPurlin(idealPLength, 1 ) <= 40 * 12 ) {
                    p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ) )
                } else {
                    p2.PanelLength = closestRoofPurlin( idealPLength, -1 )
                }
            }
        }
        p3.PanelLength = RafterSheetLength - p1.PanelLength - p2.PanelLength
        p3.PanelLength += overlap
        p2.PanelLength += overlap * 2
        p1.PanelLength = p1.PanelLength + overlap

        p1.PanelMeasurement = inchesToStringFeet( p1.PanelLength )
        p2.PanelMeasurement = inchesToStringFeet( p2.PanelLength )
        p3.PanelMeasurement = inchesToStringFeet( p3.PanelLength )

        RoofPanels.push(p1)
        RoofPanels.push(p2)
        RoofPanels.push(p3)

        duplicateMaterialRemoval( RoofPanels, 'Panel' )
    } else if ( fourPanel == true ) {
        idealPLength = RafterSheetLength / 4

        if ( largeOverhang == false ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 40 * 12) {
                p1.PanelLength = closestRoofPurlin( idealPLength, 1 ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ) ) 
                p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 3, p1.PanelLength + p2.PanelLength ) )
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, -1 )
                p3.PanelLength = closestRoofPurlin( idealPLength, -1 )
            }
        } else if ( largeOverhang == true ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 35*12 ) {
                p1.PanelLength = closestRoofPurlin( idealPLength ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ) )
                p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 3, p2.PanelLength + p1.PanelLength) )
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
                if ( closestRoofPurlin( idealPLength, 1 ) <= 40 * 12 ) {
                    p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ))
                    p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 3, p1.PanelLength + p2.PanelLength) )
                } else {
                    p2.PanelLength = closestRoofPurlin( idealPLength, -1 )
                    p3.PanelLength = closestRoofPurlin( idealPLength, -1 )
                }
            }
        }
        p4.PanelLength = RafterSheetLength - p1.PanelLength - p2.PanelLength - p3.PanelLength
        p4.PanelLength += overlap
        p1.PanelLength += overlap
        p2.PanelLength += overlap * 2
        p3.PanelLength += overlap * 2

        p1.PanelMeasurement = inchesToStringFeet(p1.PanelLength)
        p2.PanelMeasurement = inchesToStringFeet(p2.PanelLength)
        p3.PanelMeasurement = inchesToStringFeet(p3.PanelLength)
        p4.PanelMeasurement = inchesToStringFeet(p4.PanelLength)

        p1.Quantity = panelQty
        p2.Quantity = panelQty
        p3.Quantity = panelQty
        p4.Quantity = panelQty

        RoofPanels.push(p1)
        RoofPanels.push(p2)
        RoofPanels.push(p3)
        RoofPanels.push(p4)
    } else if ( fivePanel == true ) {
        idealPLength = RafterSheetLength / 5

        if ( largeOverhang == false ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 40 * 12) {
                p1.PanelLength = closestRoofPurlin( idealPLength, 1 ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ) ) 
                p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 3, p1.PanelLength + p2.PanelLength ) )
                p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 4, p1.PanelLength + p2.PanelLength + p3.PanelLength) )
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, -1 )
                p3.PanelLength = closestRoofPurlin( idealPLength, -1 )
                p4.PanelLength = closestRoofPurlin( idealPLength, -1 )
            }
        } else if ( largeOverhang == true ) {
            if ( closestRoofPurlin( idealPLength, 1 ) <= 35*12 ) {
                p1.PanelLength = closestRoofPurlin( idealPLength ) + EaveOverhang
                p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ) )
                p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 3, p2.PanelLength + p1.PanelLength) )
                p4.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 4, p3.PanelLength + p2.PanelLength + p1.PanelLength) )
            } else {
                p1.PanelLength = closestRoofPurlin( idealPLength, -1 ) + EaveOverhang
                if ( closestRoofPurlin( idealPLength, 1 ) <= 40 * 12 ) {
                    p2.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 2, p1.PanelLength ))
                    p3.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 3, p1.PanelLength + p2.PanelLength) )
                    p4.PanelLength = closestRoofPurlin( idealPLength, panelOptionCompare( idealPLength, 4, p1.PanelLength + p2.PanelLength + p3.PanelLength) )
                } else {
                    p2.PanelLength = closestRoofPurlin( idealPLength, -1 )
                    p3.PanelLength = closestRoofPurlin( idealPLength, -1 )
                    p4.PanelLength = closestRoofPurlin( idealPLength, -1 )
                }
            }
        }
        p5.PanelLength = RafterSheetLength - p1.PanelLength - p2.PanelLength - p3.PanelLength - p4.PanelLength
        p5.PanelLength += overlap
        p1.PanelLength += overlap
        p2.PanelLength += overlap * 2
        p3.PanelLength += overlap * 2
        p4.PanelLength += overlap * 2

        p1.PanelMeasurement = inchesToStringFeet(p1.PanelLength)
        p2.PanelMeasurement = inchesToStringFeet(p2.PanelLength)
        p3.PanelMeasurement = inchesToStringFeet(p3.PanelLength)
        p4.PanelMeasurement = inchesToStringFeet(p4.PanelLength)
        p5.PanelMeasurement = inchesToStringFeet(p5.PanelLength)

        p1.Quantity = panelQty
        p2.Quantity = panelQty
        p3.Quantity = panelQty
        p4.Quantity = panelQty
        p5.Quantity = panelQty

        RoofPanels.push(p1)
        RoofPanels.push(p2)
        RoofPanels.push(p3)
        RoofPanels.push(p4)
        RoofPanels.push(p5)
    } else if ( sixPanel == true ) {
        return false
    }
    return RoofPanels
}
function duplicateMaterialRemoval( materialCollection, collectionType ) {
    if ( collectionType == 'Trim' ) {
        for ( var indexI = 0; indexI < materialCollection.length; indexI++ ) {
            if ( materialCollection[indexI].DeleteFlag == false && materialCollection[indexI].clsType == 'Trim' ) {
                for ( var indexJ = 0; indexJ < materialCollection.length; indexJ++ ) {
                    if ( indexJ != indexI &&
                        materialCollection[indexI].tType == materialCollection[indexJ].tType && 
                        materialCollection[indexI].Color == materialCollection[indexJ].Color &&
                        materialCollection[indexI].tMeasurement == materialCollection[indexJ].tMeasurement &&
                        materialCollection[indexJ].DeleteFlag == false
                        ) {
                            materialCollection[indexI].Quantity += materialCollection[indexJ].Quantity
                            materialCollection[indexJ].DeleteFlag = true
                    }
                }
            }
        }
    } else if ( collectionType == 'Panel' ) {
        for ( var indexI = 0; indexI < materialCollection.length; indexI++ ) {
            if ( materialCollection[indexI].DeleteFlag == false ) {
                for ( var indexJ = 0; indexJ < materialCollection.length; indexJ++ ) {
                    if ( indexJ != indexI &&
                        materialCollection[indexI].PanelType == materialCollection[indexJ].PanelType && 
                        materialCollection[indexI].PanelColor == materialCollection[indexJ].PanelColor &&
                        materialCollection[indexI].PanelMeasurement == materialCollection[indexJ].PanelMeasurement &&
                        materialCollection[indexJ].DeleteFlag == false
                        ) {
                            materialCollection[indexI].Quantity += materialCollection[indexJ].Quantity
                            materialCollection[indexJ].DeleteFlag = true
                    }
                }
            }
        }
    } else if ( collectionType == 'Misc' ) {
        for ( var indexI = 0; indexI < materialCollection.length; indexI++ ) {
            if ( materialCollection[indexI].DeleteFlag == false ) {
                for ( var indexJ = 0; indexJ < materialCollection.length; indexJ++ ) {
                    if ( indexJ != indexI &&
                        materialCollection[indexI].Name == materialCollection[indexJ].Name && 
                        materialCollection[indexI].Color == materialCollection[indexJ].Color &&
                        materialCollection[indexI].Measurement == materialCollection[indexJ].Measurement &&
                        materialCollection[indexJ].DeleteFlag == false
                        ) {
                            materialCollection[indexI].Quantity += materialCollection[indexJ].Quantity
                            materialCollection[indexJ].DeleteFlag = true
                    }
                }
            }
        }
    } else if ( collectionType == 'Steel' ) {
        for ( var indexI = 0; indexI < materialCollection.length; indexI++ ) {
            if ( materialCollection[indexI].DeleteFlag == false ) {
                for ( var indexJ = 0; indexJ < materialCollection.length; indexJ++ ) {
                    if ( indexJ != indexI && 
                        materialCollection[indexI].clsType == 'Member' && materialCollection[indexJ].clsType == 'Member' &&
                        materialCollection[indexI].length == materialCollection[indexJ].length && 
                        materialCollection[indexI].size == materialCollection[indexJ].size &&
                        materialCollection[indexJ].DeleteFlag == false
                        ) {
                            materialCollection[indexI].Quantity += materialCollection[indexJ].Quantity
                            materialCollection[indexJ].DeleteFlag = true
                    }
                }
            }
        }
    } 
    for( var indexI = materialCollection.length -1; indexI >=0; indexI-- ) {
        if ( materialCollection[indexI].deleteFlag == true ) {
            materialCollection.splice( indexI, 1 )
        }
    }
}
function panelOptionCompare( idealPLength, panelCount, currentTotalLength ) {
    if ( Math.abs( ( idealPLength * panelCount ) - ( currentTotalLength + closestRoofPurlin( idealPLength, 1 ) ) ) 
    < Math.abs( ( idealPLength * panelCount ) - ( currentTotalLength + closestRoofPurlin( idealPLength, -1 ) ) ) ) {
        return 1
    } else { return -1 }
}
function closestRoofPurlin( rafterLength, direction? ) {
    if ( typeof direction != undefined && direction == 1 ) {
        return Math.ceil( rafterLength / 60 ) * 60
    } else if ( typeof direction != undefined && direction == -1 ) {
        return Math.floor( rafterLength / 60 ) * 60
    } else {
        return Math.round( rafterLength / 60 ) * 60
    }
}
function inchesToStringFeet( inches ) {
    var divisor = 16
    var ft = Math.floor( inches / 12 )
    var inch = inches - ft* 12 - ((inches - ft * 12) - Math.floor(inches - ft * 12))
    var fracthigh = Math.floor((inches - ft * 12 - inch) * 100) / 100
    var top = Math.round(fracthigh * 16)
    var bot = 16
    if (top % 2 == 0) {
        top = top / 2
        bot = bot / 2
        divisor = 8
    }
    if (top % 2 == 0) {
        top = top / 2
        bot = bot / 2
        divisor = 4
    }
    if (top % 2 == 0) {
        top = top / 2
        bot = bot / 2
        divisor = 2
    }
    fracthigh = top
    if ( fracthigh / bot == 1 ) { 
        fracthigh = 0
        inch += 1
    }
    if ( fracthigh > 0 ) {
        if ( inch > 0 ) {
            if ( ft > 0 ) {
                return ft + "' " + inch + '" ' + fracthigh + '/' + divisor + '"'
            } else {
                return inch + '" ' + fracthigh + '/' + divisor + '"'
            }
        } else {
            if ( ft > 0 ) {
                return  ft + "' " + fracthigh + '/' + divisor + '"'
            } else {
                return fracthigh + '/' + divisor + '"'
            }
        }
    } else {
        if ( inch > 0 ) {
            if ( ft > 0 ) {
                return  ft + "' " + inch + '"'
            } else {
                return inch + '"'
            }
        } else {
            return ft + "'"
        }
    }
}