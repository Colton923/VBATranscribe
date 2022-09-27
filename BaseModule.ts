import { Building } from "./BuildingClass"

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
        if ( formPShape == 'Gable' ) {
            const rafterLength = formBWidth / 2 * roofPitchHypot
            b.RafterLength = rafterLength
            const s2RafterSheetLength = rafterLength + s2EaveOverhang - undercut
            b.s2RafterSheetLength = s2RafterSheetLength

            
        }
        if ( formRShape == 'Single Slope' ) {
            const rafterLength = formBWidth / 2 * roofPitchHypot
            b.RafterLength = rafterLength
            const s2RafterSheetLength = rafterLength + s2EaveOverhang - undercut
            b.s2RafterSheetLength = s2RafterSheetLength
            var s2RoofPanels = RoofPanelGen( s2RoofPanels, s2RafterSheetLength, s2EaveOverhang, roofLength, formRShape)
            for ( var indexI = 0; indexI < s2RoofPanels.length; indexI++ ) {
                s2RoofPanels[indexI].PanelShape = formPShape
                s2RoofPanels[indexI].PanelType = formPShape
                s2RoofPanels[indexI].PanelColor = formPShape
            }
            var s4RoofPanels = []
            var s2SidewallPanels = []
            var s4SidewallPanels = []
            var e1EndwallPanels = []
            var e3EndwallPanels = []
/*
*
*The beginning of generating sidewall panels within the materials list getn
*1600 lines in the module to go. Most functions are finished.
*The last 800 lines looks like printing the data. Almost there --- other than needing to re-write this all in a competent format
*
*/
            sidewallPanelGen( s2SidewallPanels, 's2', b)
            sidewallPanelGen( s4SidewallPanels, 's4', b)
        }
    }
function sidewallPanelGen( sidewallPanels, sWall, b, fullHeightLinerPanels?) {
    var wainscotFtLength
    var specialBottomPurlin = false
    switch( sWall ) {
        case 's2': {
            if ( b.Wainscot(undefined, sWall, undefined, undefined) != 'None' ) {
                var wainscotPanel = new Panel
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
                            var sP1 = new Panel
                            sP1.PanelLength = b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) ) * 12)
                            if ( fullHeightLinerPanels == true ) {sP1.PanelLength -= 8}
                        } else if ( ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) > 42 &&
                            ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength) <= 79 + ( 3.5 / 12 ) ) {
                            var sP1 = new Panel
                            sP1.PanelLength = closestWallPurlin((b.HighSideEaveHeight-(wainscotFtLength + b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) * 12 )) / 2, 0, specialBottomPurlin)
                            sP1.PanelLength += 1.5
                            var sP2 = new Panel
                            sP2.PanelLength = (b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined )) * 12)) - sP1.PanelLength
                            sP2.PanelLength += 1.5
                            if ( fullHeightLinerPanels == true ) {
                                sP2.PanelLength -= 8
                            } 
                        } else {
                            if ( b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength <= 42 ) {
                                var sP1 = new Panel
                                sP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) * 12
                                if ( fullHeightLinerPanels == true ) {sP1.PanelLength = sP1.PanelLength - 8}
                            } else if (b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength > 42 ) {
                                var sP1 = new Panel
                                if ( closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin) > (42 * 12)) {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, -1, specialBottomPurlin)
                                } else {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin)
                                }
                                sP1.PanelLength += 1.5
                                var sP2 = new Panel
                                sP2.PanelLength = ((b.bHeight - b.LengthAboveFinishedFloor( undefined, sWall, undefined, undefined ) - wainscotFtLength * 12 ) - sP1.PanelLength)
                                sP2.PanelLength += 1.5
                                if ( fullHeightLinerPanels == true ) { sP2.PanelLength -= 8}
                            }
                        }
                    }
            }
        }
            break
        case 's4': {
            if ( b.Wainscot(undefined, undefined, undefined, sWall) != 'None' ) {
                var wainscotPanel = new Panel
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
                            var sP1 = new Panel
                            sP1.PanelLength = b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) ) * 12)
                            if ( fullHeightLinerPanels == true ) {sP1.PanelLength -= 8}
                        } else if ( ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) > 42 &&
                            ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength) <= 79 + ( 3.5 / 12 ) ) {
                            var sP1 = new Panel
                            sP1.PanelLength = closestWallPurlin((b.HighSideEaveHeight-(wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) * 12 )) / 2, 0, specialBottomPurlin)
                            sP1.PanelLength += 1.5
                            var sP2 = new Panel
                            sP2.PanelLength = (b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall )) * 12)) - sP1.PanelLength
                            sP2.PanelLength += 1.5
                            if ( fullHeightLinerPanels == true ) {
                                sP2.PanelLength -= 8
                            } 
                        } else {
                            if ( b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength <= 42 ) {
                                var sP1 = new Panel
                                sP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) * 12
                                if ( fullHeightLinerPanels == true ) {sP1.PanelLength = sP1.PanelLength - 8}
                            } else if (b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength > 42 ) {
                                var sP1 = new Panel
                                if ( closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin) > (42 * 12)) {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) / 2 ) * 12, -1, specialBottomPurlin)
                                } else {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin)
                                }
                                sP1.PanelLength += 1.5
                                var sP2 = new Panel
                                sP2.PanelLength = ((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, undefined, sWall ) - wainscotFtLength * 12 ) - sP1.PanelLength)
                                sP2.PanelLength += 1.5
                                if ( fullHeightLinerPanels == true ) { sP2.PanelLength -= 8}
                            }
                        }
                    }
            }
        }
            break
        case 'e1': {
            if ( b.Wainscot(sWall, undefined, undefined, undefined) != 'None' ) {
                var wainscotPanel = new Panel
                wainscotPanel.PanelLength = +b.wainscote1.substring( 0,2 )
                if ( fullHeightLinerPanels == false ) {
                    wainscotFtLength = wainscotPanel.PanelLength /12 }
            }
            switch( b.WallStatus(sWall, undefined, undefined, undefined)) {
                case 'Exclude':
                    return 0
                case 'Include' || 'Partial':
                    if ( b.WallStatus( sWall, undefined, undefined, undefined ) == 'Partial' ) { specialBottomPurlin = true }
                    if ( b.rShape == 'Single Slope' && sWall == 's4' ) {
                        if ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined )  - wainscotFtLength <= 42 ) {
                            var sP1 = new Panel
                            sP1.PanelLength = b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) ) * 12)
                            if ( fullHeightLinerPanels == true ) {sP1.PanelLength -= 8}
                        } else if ( ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength ) > 42 &&
                            ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength) <= 79 + ( 3.5 / 12 ) ) {
                            var sP1 = new Panel
                            sP1.PanelLength = closestWallPurlin((b.HighSideEaveHeight-(wainscotFtLength + b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) * 12 )) / 2, 0, specialBottomPurlin)
                            sP1.PanelLength += 1.5
                            var sP2 = new Panel
                            sP2.PanelLength = (b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined )) * 12)) - sP1.PanelLength
                            sP2.PanelLength += 1.5
                            if ( fullHeightLinerPanels == true ) {
                                sP2.PanelLength -= 8
                            } 
                        } else {
                            if ( b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength <= 42 ) {
                                var sP1 = new Panel
                                sP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength ) * 12
                                if ( fullHeightLinerPanels == true ) {sP1.PanelLength = sP1.PanelLength - 8}
                            } else if (b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength > 42 ) {
                                var sP1 = new Panel
                                if ( closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin) > (42 * 12)) {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, -1, specialBottomPurlin)
                                } else {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin)
                                }
                                sP1.PanelLength += 1.5
                                var sP2 = new Panel
                                sP2.PanelLength = ((b.bHeight - b.LengthAboveFinishedFloor( sWall, undefined, undefined, undefined ) - wainscotFtLength * 12 ) - sP1.PanelLength)
                                sP2.PanelLength += 1.5
                                if ( fullHeightLinerPanels == true ) { sP2.PanelLength -= 8}
                            }
                        }
                    }
            }
        }
            break
        case 'e3': {
            if ( b.Wainscot(undefined, undefined, sWall, undefined) != 'None' ) {
                var wainscotPanel = new Panel
                wainscotPanel.PanelLength = +b.wainscote3.substring( 0,2 )
                if ( fullHeightLinerPanels == false ) {
                    wainscotFtLength = wainscotPanel.PanelLength /12 }
            }
            switch( b.WallStatus(undefined, undefined, sWall, undefined)) {
                case 'Exclude':
                    return 0
                case 'Include' || 'Partial':
                    if ( b.WallStatus( undefined, undefined, sWall, undefined ) == 'Partial' ) { specialBottomPurlin = true }
                    if ( b.rShape == 'Single Slope' && sWall == 's4' ) {
                        if ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined )  - wainscotFtLength <= 42 ) {
                            var sP1 = new Panel
                            sP1.PanelLength = b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) ) * 12)
                            if ( fullHeightLinerPanels == true ) {sP1.PanelLength -= 8}
                        } else if ( ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength ) > 42 &&
                            ( ( b.HighSideEaveHeight / 12 ) - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength) <= 79 + ( 3.5 / 12 ) ) {
                            var sP1 = new Panel
                            sP1.PanelLength = closestWallPurlin((b.HighSideEaveHeight-(wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) * 12 )) / 2, 0, specialBottomPurlin)
                            sP1.PanelLength += 1.5
                            var sP2 = new Panel
                            sP2.PanelLength = (b.HighSideEaveHeight - ( ( wainscotFtLength + b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined )) * 12)) - sP1.PanelLength
                            sP2.PanelLength += 1.5
                            if ( fullHeightLinerPanels == true ) {
                                sP2.PanelLength -= 8
                            } 
                        } else {
                            if ( b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength <= 42 ) {
                                var sP1 = new Panel
                                sP1.PanelLength = (b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength ) * 12
                                if ( fullHeightLinerPanels == true ) {sP1.PanelLength = sP1.PanelLength - 8}
                            } else if (b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength > 42 ) {
                                var sP1 = new Panel
                                if ( closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin) > (42 * 12)) {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength ) / 2 ) * 12, -1, specialBottomPurlin)
                                } else {
                                    sP1.PanelLength = closestWallPurlin(((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength ) / 2 ) * 12, 0, specialBottomPurlin)
                                }
                                sP1.PanelLength += 1.5
                                var sP2 = new Panel
                                sP2.PanelLength = ((b.bHeight - b.LengthAboveFinishedFloor( undefined, undefined, sWall, undefined ) - wainscotFtLength * 12 ) - sP1.PanelLength)
                                sP2.PanelLength += 1.5
                                if ( fullHeightLinerPanels == true ) { sP2.PanelLength -= 8}
                            }
                        }
                    }
            }
        }
            break
    }
/*
*
*End of SidewallPanelGen first half, "Add Quantities" is up next
*
*/

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

    var p1 = new Panel
    if ( onePanel == true ) {
        p1.PanelLength = RafterSheetLength
        if ( eaveExtension = true ) {
            p1.PanelLength = p1.PanelLength + 6
        }
        p1.PanelMeasurement = inchesToStringFeet( p1.PanelLength)
        p1.Quantity = panelQty
        RoofPanels.push(p1)
    } else if ( twoPanel == true ) {
        var p2 = new Panel
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
        var p2 = new Panel
        var p3 = new Panel
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
        var p2 = new Panel
        var p3 = new Panel
        var p4 = new Panel
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
        var p2 = new Panel
        var p3 = new Panel
        var p4 = new Panel
        var p5 = new Panel
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
    if ( typeof direction != 'undefined' && direction == 1 ) {
        return Math.ceil( rafterLength / 60 ) * 60
    } else if ( typeof direction != 'undefined' && direction == -1 ) {
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