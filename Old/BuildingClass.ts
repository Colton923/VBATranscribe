import { Member } from './MemberClass'
import { FO } from './FOClass'
undefined
export class Building {
	bLength: number
	bHeight: number
	rPitch: number
	RafterLength: number
	s2RafterSheetLength: number
	s4RafterSheetLength: number
	bWidth: number
	rShape: string
	s2Overhang: number
	s4Overhang: number
	e1Overhang: number
	e3Overhang: number
	s2Extension: number
	s4Extension: number
	e1Extension: number
	e3Extension: number
	e1ExtensionPanelQty: number
	e3ExtensionPanelQty: number
	Gutters: boolean
	BaseTrim: boolean
	//endwall wall panel overlaps
	e1WallPanelOverlaps: number
	e3WallPanelOverlaps: number

	//extension pitches
	s2ExtensionPitch: number
	s4ExtensionPitch: number

	//extension Heights
	s2ExtensionHeight: number
	s4ExtensionHeight: number

	//extension widths
	s2ExtensionWidth: number
	s4ExtensionWidth: number

	//Panel Shapes
	wPanelShape: string //sidewall panel shapes
	rPanelShape: string //roof panel shapes

	//Panel Types, Colors
	rPanelType: string
	rPanelColor: string
	wPanelType: string
	wPanelColor: string

	//Trim Colors
	RakeTrimColor: string
	OutsideCornerTrimColor: string

	//soffit booleans
	e1GableOverhangSoffit: boolean
	e3GableOverhangSoffit: boolean
	s2EaveOverhangSoffit: boolean
	s4EaveOverhangSoffit: boolean
	e1GableExtensionSoffi: boolean
	e3GableExtensionSoffi: boolean
	s2EaveExtensionSoffit: boolean
	s4EaveExtensionSoffit: boolean

	// this for totaling eave extension string
	EaveExtLength: number

	//roof panel overage
	bLengthRoofPanelOverage: number

	//Interior Columns Collection
	InteriorColumns: any[]
	s2ColumnWidth: number
	s4ColumnWidth: number

	//'Weld Clips
	WeldClips: number

	//'Structural Steel total cost
	SSTotalCost: number

	//''''''''''''''''''''''''''''''''''''''''''''''''' FO Collections
	e1FOs: any[]
	s2FOs: any[]
	e3FOs: any[]
	s4FOs: any[]
	fieldlocateFOs: any[]

	//''''''''''''''''''''''''''''''''''''''''''''''''' Column Collections
	e1Columns: any[]
	s2Columns: any[]
	e3Columns: any[]
	s4Columns: any[]

	//''''''''''''''''''''''''''''''''''''''''''''''''' Girt Collections
	e1Girts: any[]
	s2Girts: any[]
	e3Girts: any[]
	s4Girts: any[]

	//''''''''''''''''''''''''''''''''''''''''''''''''' Rafter Collections
	e1Rafters: any[]
	intRafters: any[]
	e3Rafters: any[]

	//''''''''''''''''''''''''''''''''''''''''''''''''' Roof Purlin Collection
	RoofPurlins = []

	//''''''''''''''''''''''''''''''''''''''''''''''''' Overhang Members
	e1OverhangMembers = []
	s2OverhangMembers = []
	e3OverhangMembers = []
	s4OverhangMembers = []

	//''''''''''''''''''''''''''''''''''''''''''''''''' Extension Members
	e1ExtensionMembers = []
	s2ExtensionMembers = []
	e3ExtensionMembers = []
	s4ExtensionMembers = []

	//''''''''''''''''''''''''''''''''''''''''''''''''' Base Angle Trim
	BaseAngleTrim = []

	//''''''''''''''''''''''''''''''''''''''''''''''''' Weld Plates
	WeldPlates = []

	e1LinerPanels: string
	e3LinerPanels: string
	s2LinerPanels: string
	s4LinerPanels: string
	roofLinerPanel: string

	wainscote1: string
	wainscots2: string
	wainscote3: string
	wainscots4: string

	wallStatuse1: string
	wallStatuss2: string
	wallStatuse3: string
	wallStatuss4: string

	WallAlteratione1Length: number
	WallAlterations2Length: number
	WallAlteratione3Length: number
	WallAlterations4Length: number

	constructor(
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
		this.bHeight = formBHeight
		this.bWidth = formBWidth
		this.bLength = formBLength
		this.rPitch = formRPitch
		this.rShape = formRShape
		this.e1Overhang = e1GableOverhang
		this.e3Overhang = e3GableOverhang
		this.s2Overhang = s2EaveOverhang
		this.s4Overhang = s4EaveOverhang
		this.e1Extension = e1GableExtension
		this.e3Extension = e3GableExtension
		this.s2Extension = s2EaveExtension
		this.s4Extension = s4EaveExtension
		this.Gutters = formGutters
		this.wPanelShape = formWShape
		this.wPanelColor = formWColor
		this.wPanelType = formWType
		this.rPanelShape = formPShape
		this.rPanelType = formPType
		this.rPanelColor = formPColor
		this.RakeTrimColor = formRakeTrimColor
		this.OutsideCornerTrimColor = formOutsideCornerTrimColor


    /**
     * CHECK
     *
     * The base trim will contain the color that will be used for all trims,
     * each trim will have that color as the value, so we don't need to check
     * for a boolean, rather we check if the value is 'None' or not.
     *
     * src/types/building.ts line 161
     */
		if ( baseTrimColor = 'None' || typeof baseTrimColor == undefined ) {
			this.BaseTrim = false
		} else {
			this.BaseTrim = true
		}

    /**
     * CHECK
     *
     * not needed, checks if it is true and sets it to truesa
     */
		// if ( e1GableOverhangSoffit == true ) { this.e1GableOverhangSoffit = true }
		// if ( e3GableOverhangSoffit == true ) { this.e3GableOverhangSoffit = true }
		// if ( s2EaveOverhangSoffit == true ) { this.s2EaveOverhangSoffit = true }
		// if ( s4EaveOverhangSoffit == true ) { this.s4EaveOverhangSoffit = true }
		// if ( e1GableExtensionSoffit == true ) { this.e1GableExtensionSoffi = true }
		// if ( e3GableExtensionSoffit == true ) { this.e3GableExtensionSoffi = true }
		// if ( s2EaveExtensionSoffit == true ) { this.s2EaveExtensionSoffit = true }
		// if ( s4EaveExtensionSoffit == true ) { this.s4EaveExtensionSoffit = true }



    /**
     * CHECK
     *
     * Not needed, this is manually setting every single property when it will
     * be set anyways but not like this garbage.
     */
		this.setExtensionPitches( s2_EaveExtension, s4_EaveExtension, s2_EaveExtensionPitch, s4_EaveExtensionPitch)
		this.generateSidewall2ColumnCenterlines(
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
			bay12_length )
		this.generateSidewall4ColumnCenterlines(
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
			bay12_length )
		this.SetPersonnelDoors(
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
				rEdge12
			)
		this.SetOverheadDoors(
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
			rEdge12
		)
		this.SetWindows(
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
			b12
		)
		this.SetMisc(
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
			b12
		)
		this.SetWainscot( wainscote1Value, wainscots2Value, wainscote3Value, wainscots4Value )
		this.SetWallStatus( wallStatuse1, wallStatuss2, wallStatuse3, wallStatuss4 )
		this.SetWallAlterations(WallAlteratione1Length, WallAlterations2Length, WallAlteratione3Length, WallAlterations4Length)
	}

  /**
   * END OF CONSTRUCTOR
   */

  /**
   * CHECK
   *
   * Not needed, sets values but will be done better than this
   */
	SetWallAlterations( WallAlteratione1Length: number,
		WallAlterations2Length: number,
		WallAlteratione3Length: number,
		WallAlterations4Length: number,) {
			this.WallAlteratione1Length = WallAlteratione1Length
			this.WallAlterations2Length = WallAlterations2Length
			this.WallAlteratione3Length = WallAlteratione3Length
			this.WallAlterations4Length = WallAlterations4Length
		}
	SetWallStatus( wallStatuse1, wallStatuss2, wallStatuse3, wallStatuss4 ) {
		this.wallStatuse1 = wallStatuse1
		this.wallStatuss2 = wallStatuss2
		this.wallStatuse3 = wallStatuse3
		this.wallStatuss4 = wallStatuss4

	}
	SetWainscot(
		wainscote1Value: string,
		wainscots2Value: string,
		wainscote3Value: string,
		wainscots4Value: string
		) {
			this.wainscote1 = wainscote1Value
			this.wainscots2 = wainscots2Value
			this.wainscote3 = wainscote3Value
			this.wainscots4 = wainscots4Value
		}

  /**
   * CHECK
   *
   * this is setting all the Framed Openings manually
   */
	SetMisc(
		h1?: number,
		h2?: number,
		h3?: number,
		h4?: number,
		h5?: number,
		h6?: number,
		h7?: number,
		h8?: number,
		h9?: number,
		h10?: number,
		h11?: number,
		h12?: number,
		w1?: number,
		w2?: number,
		w3?: number,
		w4?: number,
		w5?: number,
		w6?: number,
		w7?: number,
		w8?: number,
		w9?: number,
		w10?: number,
		w11?: number,
		w12?: number,
		wall1?: string,
		wall2?: string,
		wall3?: string,
		wall4?: string,
		wall5?: string,
		wall6?: string,
		wall7?: string,
		wall8?: string,
		wall9?: string,
		wall10?: string,
		wall11?: string,
		wall12?: string,
		rEdge1?: number,
		rEdge2?: number,
		rEdge3?: number,
		rEdge4?: number,
		rEdge5?: number,
		rEdge6?: number,
		rEdge7?: number,
		rEdge8?: number,
		rEdge9?: number,
		rEdge10?: number,
		rEdge11?: number,
		rEdge12?: number,
		b1?: number,
		b2?: number,
		b3?: number,
		b4?: number,
		b5?: number,
		b6?: number,
		b7?: number,
		b8?: number,
		b9?: number,
		b10?: number,
		b11?: number,
		b12?: number
	) {
    // Checks that the values aren't empty for a wall
		if (typeof wall1 != undefined && typeof rEdge1 != undefined && typeof w1 != undefined && typeof h1 != undefined && typeof b1 != undefined ) {
      /**
       * CHECK
       *
       * Creates the Framed Opening and sets the values.
       *
       * The values are coming from the setMisc function
       *
       * Need to figure out what the b1-12 values are. They aren't bays and are required
       * to determine the bottom edge heights.
       *
       * Need to figure out the `rEdge` values. They are required to determine the top edge positions.
       */
			var FramedOpening = new FO()
			FramedOpening.setType('MiscFO')
			FramedOpening.setWidth( w1! * 12)
			FramedOpening.setHeight( h1! * 12 )
			FramedOpening.setbEdgeHeight( b1! * 12 )
			if ( wall1 == 'Endwall 1' || wall1 == 'Endwall 3' ) {
				FramedOpening.setrEdgePosition( this.bWidth * 12 - rEdge1! * 12)
			} else {
				FramedOpening.setrEdgePosition( this.bLength * 12 - rEdge1! * 12)
			}

      /**
       * CHECK
       *
       * Description???
       */
			FramedOpening.setDescription(1, wall1!)


      /**
       * VERIFY
       *
       * Keeps an array of all the different walls and their Framed Openings
       *
       * Not needed, can easily iterate through the Framed Openings and identify
       * the wall they are on.
       */
			if ( wall1 == 'Endwall 1' ) {
				FramedOpening.setWall( 'e1' )
				this.e1FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 2' ) {
				FramedOpening.setWall( 's2' )
				this.s2FOs.push( FramedOpening )
			}
			if ( wall1 == 'Endwall 3' ) {
				FramedOpening.setWall( 'e3' )
				this.e3FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 4' ) {
				FramedOpening.setWall( 's4' )
				this.s4FOs.push( FramedOpening )
			}
			if ( wall1 == 'Field Locate' ) {
				FramedOpening.setWall( 'Field Locate' )
				this.fieldlocateFOs.push( FramedOpening )
			}
		}

	}
	SetWindows(
		h1?: number,
		h2?: number,
		h3?: number,
		h4?: number,
		h5?: number,
		h6?: number,
		h7?: number,
		h8?: number,
		h9?: number,
		h10?: number,
		h11?: number,
		h12?: number,
		w1?: number,
		w2?: number,
		w3?: number,
		w4?: number,
		w5?: number,
		w6?: number,
		w7?: number,
		w8?: number,
		w9?: number,
		w10?: number,
		w11?: number,
		w12?: number,
		wall1?: string,
		wall2?: string,
		wall3?: string,
		wall4?: string,
		wall5?: string,
		wall6?: string,
		wall7?: string,
		wall8?: string,
		wall9?: string,
		wall10?: string,
		wall11?: string,
		wall12?: string,
		rEdge1?: number,
		rEdge2?: number,
		rEdge3?: number,
		rEdge4?: number,
		rEdge5?: number,
		rEdge6?: number,
		rEdge7?: number,
		rEdge8?: number,
		rEdge9?: number,
		rEdge10?: number,
		rEdge11?: number,
		rEdge12?: number,
		b1?: number,
		b2?: number,
		b3?: number,
		b4?: number,
		b5?: number,
		b6?: number,
		b7?: number,
		b8?: number,
		b9?: number,
		b10?: number,
		b11?: number,
		b12?: number
	) {
		if ( typeof wall1 != undefined && typeof rEdge1 != undefined && typeof w1 != undefined && typeof h1 != undefined && typeof b1 != undefined ) {
			/**
       * CHECK
       *
       * Using the FramedOpening class a base for both windows and misc FOs
       */
      var FramedOpening = new FO()
			FramedOpening.setType('Window')
			FramedOpening.setWidth( w1! * 12 )
			FramedOpening.setHeight( h1! * 12 )
			FramedOpening.setbEdgeHeight( b1! * 12 )
			if ( wall1 == 'Endwall 1' || wall1 == 'Endwall 3' ) {
				FramedOpening.setrEdgePosition( this.bWidth * 12 - rEdge1! * 12)
			} else {
				FramedOpening.setrEdgePosition( this.bLength * 12 - rEdge1! * 12)
			}
			FramedOpening.setDescription(1, wall1!)
			if ( wall1 == 'Endwall 1' ) {
				FramedOpening.setWall( 'e1' )
				this.e1FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 2' ) {
				FramedOpening.setWall( 's2' )
				this.s2FOs.push( FramedOpening )
			}
			if ( wall1 == 'Endwall 3' ) {
				FramedOpening.setWall( 'e3' )
				this.e3FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 4' ) {
				FramedOpening.setWall( 's4' )
				this.s4FOs.push( FramedOpening )
			}
			if ( wall1 == 'Field Locate' ) {
				FramedOpening.setWall( 'Field Locate' )
				this.fieldlocateFOs.push( FramedOpening )
			}
		}

	}
	SetOverheadDoors(
		h1?: number,
		h2?: number,
		h3?: number,
		h4?: number,
		h5?: number,
		h6?: number,
		h7?: number,
		h8?: number,
		h9?: number,
		h10?: number,
		h11?: number,
		h12?: number,
		w1?: number,
		w2?: number,
		w3?: number,
		w4?: number,
		w5?: number,
		w6?: number,
		w7?: number,
		w8?: number,
		w9?: number,
		w10?: number,
		w11?: number,
		w12?: number,
		wall1?: string,
		wall2?: string,
		wall3?: string,
		wall4?: string,
		wall5?: string,
		wall6?: string,
		wall7?: string,
		wall8?: string,
		wall9?: string,
		wall10?: string,
		wall11?: string,
		wall12?: string,
		rEdge1?: number,
		rEdge2?: number,
		rEdge3?: number,
		rEdge4?: number,
		rEdge5?: number,
		rEdge6?: number,
		rEdge7?: number,
		rEdge8?: number,
		rEdge9?: number,
		rEdge10?: number,
		rEdge11?: number,
		rEdge12?: number
	) {
		if ( typeof wall1 != undefined && typeof rEdge1 != undefined && typeof w1 != undefined && typeof h1 != undefined ) {
      /**
       * CHECK
       *
       * Overhead Doors contain a good amount of data that is different from the
       * Windows and Misc FOs. This is really bad use.
       *
       * VERIFY
       *
       * Need to definitely check if arrays of all the Misc. FOs, Windows, and Overhead Doors
       * are need to be tracked per wall.
       *
       * TODO
       *
       * Verify and update the code to calulate the correct position of the Overhead Door
       */
			var FramedOpening = new FO()
			FramedOpening.setType('OHDoor')
			FramedOpening.setWidth( w1! * 12 )
			FramedOpening.setHeight( h1! * 12 )
			FramedOpening.setbEdgeHeight( 0 )
			if ( wall1 == 'Endwall 1' || wall1 == 'Endwall 3' ) {
				FramedOpening.setrEdgePosition( this.bWidth * 12 - rEdge1! * 12)
			} else {
				FramedOpening.setrEdgePosition( this.bLength * 12 - rEdge1! * 12)
			}
			FramedOpening.setDescription(1, wall1!)
			if ( wall1 == 'Endwall 1' ) {
				FramedOpening.setWall( 'e1' )
				this.e1FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 2' ) {
				FramedOpening.setWall( 's2' )
				this.s2FOs.push( FramedOpening )
			}
			if ( wall1 == 'Endwall 3' ) {
				FramedOpening.setWall( 'e3' )
				this.e3FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 4' ) {
				FramedOpening.setWall( 's4' )
				this.s4FOs.push( FramedOpening )
			}
			if ( wall1 == 'Field Locate' ) {
				FramedOpening.setWall( 'Field Locate' )
				this.fieldlocateFOs.push( FramedOpening )
			}
		}

	}
	SetPersonnelDoors(
		size1?: string,
		size2?: string,
		size3?: string,
		size4?: string,
		size5?: string,
		size6?: string,
		size7?: string,
		size8?: string,
		size9?: string,
		size10?: string,
		size11?: string,
		size12?: string,
		wall1?: string,
		wall2?: string,
		wall3?: string,
		wall4?: string,
		wall5?: string,
		wall6?: string,
		wall7?: string,
		wall8?: string,
		wall9?: string,
		wall10?: string,
		wall11?: string,
		wall12?: string,
		rEdge1?: number,
		rEdge2?: number,
		rEdge3?: number,
		rEdge4?: number,
		rEdge5?: number,
		rEdge6?: number,
		rEdge7?: number,
		rEdge8?: number,
		rEdge9?: number,
		rEdge10?: number,
		rEdge11?: number,
		rEdge12?: number
	) {
		if ( typeof wall1 != undefined && typeof rEdge1 != undefined ) {
      /**
       *
       * TODO
       *
       * Makes the updates to values!
       *
       * Add the width and height of the Personnel Door, which will be calculated
       *
       * height = 7 * 12 ??magic numbers (where are these values derived from)??
       * width = size == 3070 ? 3 * 12 : 4 * 12
       *
       */
			var FramedOpening = new FO()
			FramedOpening.setType('PDoor')
			FramedOpening.setHeight( 7 * 12 )
			if ( size1 == '3070' ) {
				FramedOpening.setWidth( 3 * 12 )
			}
			if ( size1 == '4070' ) {
				FramedOpening.setWidth( 4 * 12 )
			}
			if ( wall1 == 'Endwall 1' || wall1 == 'Endwall 3' ) {
				FramedOpening.setrEdgePosition( this.bWidth * 12 - rEdge1! * 12 )
			} else {
				FramedOpening.setrEdgePosition( this.bLength * 12 - rEdge1! * 12 )
			}
			FramedOpening.setDescription(1, wall1!)
			if ( wall1 == 'Endwall 1' ) {
				FramedOpening.setWall( 'e1' )
				this.e1FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 2' ) {
				FramedOpening.setWall( 's2' )
				this.s2FOs.push( FramedOpening )
			}
			if ( wall1 == 'Endwall 3' ) {
				FramedOpening.setWall( 'e3' )
				this.e3FOs.push( FramedOpening )
			}
			if ( wall1 == 'Sidewall 4' ) {
				FramedOpening.setWall( 's4' )
				this.s4FOs.push( FramedOpening )
			}
			if ( wall1 == 'Field Locate' ) {
				FramedOpening.setWall( 'Field Locate' )
				this.fieldlocateFOs.push( FramedOpening )
			}
		}

	}


  /**
   * CHECK / TODO
   *
   * If the Sidewall2 Extension Pitch measurement is greater than 0
   * and the Sidewall2 Eave Extension Pitch is set to "Match Roof",
   * then set the Sidewall2 Eave Extension Pitch to the Roof Pitch
   */
	setExtensionPitches(
		s2_EaveExtension: number,
		s4_EaveExtension: number,
		s2_EaveExtensionPitch: string,
		s4_EaveExtensionPitch: string) {
		if (s2_EaveExtension > 0 && s2_EaveExtensionPitch == "Match Roof") {
			this.s2ExtensionPitch = this.rPitch
		}
		if (s4_EaveExtension > 0 && s4_EaveExtensionPitch == "Match Roof") {
			this.s4ExtensionPitch = this.rPitch
		}
	}

	generateSidewall2ColumnCenterlines(
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
		bay12_length: number) {
      /**
       * CHECK
       *
       * Gets a running total of the total bay lengths.
       *
       * Creates a new column for each bay
       *
       * The columns are stored for the Sidewall2
       */
			if ( bayNums > 0 ) {
				var TotalBayLength: number
				TotalBayLength = 0
				if ( bay1_length > 0 ) {
					TotalBayLength += bay1_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}


			}
		}

	generateSidewall4ColumnCenterlines(
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
		bay12_length: number) {
      /**
       * CHECK
       *
       * Repeats the same process above except, this one checks other
       * properties and creates the Sidewall4 columns.
       *
       * TODO
       *
       * Combine this into the one above
       */
			if ( bayNums > 0 ) {
				var TotalBayLength: number
				TotalBayLength = 0
				if ( bay1_length > 0 ) {
					TotalBayLength += bay1_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					if ( this.rShape == 'Gable' ) {
						Column.SetLength( this.bHeight * 12 )
					}
					if ( this.rShape == 'Single Slope' ) {
						Column.SetLength( this.HighSideEaveHeight() )
					}
					Column.SetTEdgeHeight ( Column.length )
					this.s4Columns.push(Column)
				}
      }
		}

  /**
   * CHECK / TODO
   *
   * Perform the caluclation on the onSubmit handler in the form prior
   * to sending the data to the server.
   */

	RoofLength() {
		return ( this.bLength * 12 +this.e1Overhang + this.e1Extension + this.e3Overhang + this.e3Extension )
	}

  /**
   * CHECK
   *
   * Can omit this since we have the inch to imperial conversion
   */
	RoofFtLength() {
		return ( this.RoofLength() / 12 )
	}

  /**
   * TODO
   *
   * Perform the calculation on the onSubmit handler in the form prior
   * to sending the data to the server.
   *
   * Added type to BuildingData
   */
	HighSideEaveHeight() {
		return ( this.bHeight * 12 + this.bWidth * this.rPitch )
	}

  /**
   * TODO
   *
   * Perform the calculation on the onSubmit handler in the form prior
   * to sending the data to the server.
   *
   * Added type to BuildingData
   */
	s2ExtensionRafterLength() {
		if ( this.s2Extension == 0 ) {
			return 0
		}
		else {
			return ( this.s2Extension / 12 * Math.sqrt( 144 + this.s2ExtensionPitch * this.s2ExtensionPitch ))
		}
	}

  /**
   * TODO
   *
   * Perform the calculation on the onSubmit handler in the form prior
   * to sending the data to the server.
   *
   * Added type to BuildingData
   */
	s4ExtensionRafterLength() {
		if ( this.s4Extension == 0 ) {
			return 0
		}
		else {
			return ( this.s4Extension / 12 * Math.sqrt( 144 + this.s4ExtensionPitch * this.s4ExtensionPitch ))
		}
	}

  /**
   * CHECK / TODO
   *
   * There is only extension intersections for Sidewall4 -> Endwall 1
   * and Sidewall4 -> Endwall 3. Where are the others coming from relative
   * to the excel form?
   */
	s2e1ExtensionIntersection( s2e1_Intersection: string ) {
		if ( s2e1_Intersection == 'N/A' || s2e1_Intersection == 'Exclude' ) {
			return false
		}
		if ( s2e1_Intersection == 'Include' ) {
			return true
		}
	}

	s2e3ExtensionIntersection( s2e3_Intersection: string ) {
		if ( s2e3_Intersection == 'N/A' || s2e3_Intersection == 'Exclude' ) {
			return false
		}
		if ( s2e3_Intersection == 'Include' ) {
			return true
		}
	}

	s4e1ExtensionIntersection( s4e1_Intersection: string ) {
		if ( s4e1_Intersection == 'N/A' || s4e1_Intersection == 'Exclude' ) {
			return false
		}
		if ( s4e1_Intersection == 'Include' ) {
			return true
		}
	}

	s4e3ExtensionIntersection( s4e3_Intersection: string ) {
		if ( s4e3_Intersection == 'N/A' || s4e3_Intersection == 'Exclude' ) {
			return false
		}
		if ( s4e3_Intersection == 'Include' ) {
			return true
		}
	}

  /**
   * CHECK / TODO
   *
   * Calculate the Sidewall2EaveExtension Building Length based on the
   * Sidewall2 to Endwall1 intersection and the Sidewall2 to Endwall3 intersection
   *
   * Need to find out where the value returned is used
   */
	s2EaveExtensionBuildingLength( s2e1_Intersection: string, s2e3_Intersection: string ) {
		var EaveExtLength: number = 0
		EaveExtLength = this.bLength * 12 + this.e1Overhang + this.e3Overhang
		if ( this.s2e1ExtensionIntersection( s2e1_Intersection ) == true ) {
			EaveExtLength += this.e1Extension
		}
		if ( this.s2e3ExtensionIntersection( s2e3_Intersection ) == true ) {
			EaveExtLength += this.e1Extension
		}
		return EaveExtLength
	}

  /**
   * CHECK / TODO
   *
   * Calculate the Sidewall4EaveExtension Building Length based on the
   * Sidewall4 to Endwall1 intersection and the Sidewall4 to Endwall3 intersection
   *
   * Need to find out where the value returned is used
   */
	s4EaveExtensionBuildingLength( s4e1_Intersection: string, s4e3_Intersection: string ) {
		var EaveExtLength: number = 0
		EaveExtLength = this.bLength * 12 + this.e1Overhang + this.e3Overhang
		if ( this.s4e1ExtensionIntersection( s4e1_Intersection ) == true ) {
			EaveExtLength += this.e1Extension
		}
		if ( this.s4e3ExtensionIntersection( s4e3_Intersection ) == true ) {
			EaveExtLength += this.e1Extension
		}
		return EaveExtLength
	}

  /**
   * CHECK
   *
   * I think this calculates the number of roof panels?
   *
   * Added type to BuildingData
   */
	NetSingleRoofPanelQty() {
		return ( Math.ceil(( this.bLength * 12 + this.e1Overhang + this.e3Overhang + this.e1Extension + this.e3Extension) / 36) )
	}

  /**
   * CHECK
   *
   * Wtf lol.
   */
	WallStatus(
			WallAlterationStatuse1?: string,
			WallAlterationStatuss2?: string,
			WallAlterationStatuse3?: string,
			WallAlterationStatuss4?: string
		) {
			if ( typeof WallAlterationStatuse1 != undefined ) {
				return ( WallAlterationStatuse1 )
			}
			if ( typeof WallAlterationStatuss2 != undefined ) {
				return ( WallAlterationStatuss2 )
			}
			if ( typeof WallAlterationStatuse3 != undefined ) {
				return ( WallAlterationStatuse3 )
			}
			if ( typeof WallAlterationStatuss4 != undefined ) {
				return ( WallAlterationStatuss4 )
			}
			return false
	}

  /**
   * CHECK / TODO
   *
   * This is used to determine the height windows and stuff should be placed at.
   * In the form this must be the "above finished floor".
   *
   * The BottomEdgePosition for each window is calculated with this and depends
   * on the wall selected.
   */
	LengthAboveFinishedFloor(
			WallAlterationStatuse1?: string,
			WallAlterationStatuss2?: string,
			WallAlterationStatuse3?: string,
			WallAlterationStatuss4?: string,
		) {
			if ( typeof WallAlterationStatuse1 != undefined ) {
				if ( WallAlterationStatuse1 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuse1 == 'Partial' && typeof this.WallAlteratione1Length != undefined ) {
					return this.WallAlteratione1Length
				}
				else if( WallAlterationStatuse1 == 'Gable Only' && typeof this.WallAlteratione1Length != undefined ) {
					return this.bHeight
				}
			}
			if ( typeof WallAlterationStatuss2 != undefined ) {
				if ( WallAlterationStatuss2 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuss2 == 'Partial' && typeof this.WallAlterations2Length != undefined ) {
					return this.WallAlterations2Length
				}
				else if( WallAlterationStatuss2 == 'Gable Only' && typeof this.WallAlterations2Length != undefined ) {
					return this.bHeight
				}
			}
			if ( typeof WallAlterationStatuse3 != undefined ) {
				if ( WallAlterationStatuse3 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuse3 == 'Partial' && typeof this.WallAlteratione3Length != undefined ) {
					return this.WallAlteratione3Length
				}
				else if( WallAlterationStatuse3 == 'Gable Only' && typeof this.WallAlteratione3Length != undefined ) {
					return this.bHeight
				}
			}
			if ( typeof WallAlterationStatuss4 != undefined ) {
				if ( WallAlterationStatuss4 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuss4 == 'Partial' && typeof this.WallAlterations4Length != undefined ) {
					return this.WallAlterations4Length
				}
				else if( WallAlterationStatuss4 == 'Gable Only' && typeof this.WallAlterations4Length != undefined ) {
					return this.bHeight
				}
			}
	}

	LinerPanels(
		LinerPanele1?: string,
		LinerPanels2?: string,
		LinerPanele3?: string,
		LinerPanels4?: string,
		LinerPanelRoof?: string
		) {
			if ( typeof LinerPanele1 != undefined && LinerPanele1 == '') {
				this.e1LinerPanels = 'None'
			}
			if ( typeof LinerPanels2 != undefined && LinerPanels2 == '') {
				this.s2LinerPanels = 'None'
			}
			if ( typeof LinerPanele3 != undefined && LinerPanele3 == '') {
				this.e3LinerPanels = 'None'
			}
			if ( typeof LinerPanels4 != undefined && LinerPanels4 == '') {
				this.s4LinerPanels = 'None'
			}
			if ( typeof LinerPanelRoof != undefined && LinerPanelRoof == '') {
				this.roofLinerPanel = 'None'
			}
	}
	Wainscot(
		Wainscote1?: string,
		Wainscots2?: string,
		Wainscote3?: string,
		Wainscots4?: string,
	) {
		if ( typeof Wainscote1 != undefined && this.wainscote1 == '') {
			return 'None'
		}
		if ( typeof Wainscots2 != undefined && this.wainscots2 == '') {
			return 'None'
		}
		if ( typeof Wainscote3 != undefined && this.wainscote3 == '') {
			return 'None'
		}
		if ( typeof Wainscots4 != undefined && this.wainscots4 == '') {
			return 'None'
		}
		return false
	}

	ExpandableEndwall(
		ExpandableEndwalle1?: string,
		ExpandableEndwalls2?: string,
		ExpandableEndwalle3?: string,
		ExpandableEndwalls4?: string,
	) {
		if ( typeof ExpandableEndwalle1 != undefined && ExpandableEndwalle1 != 'Yes' ) {
			return false
		} else if ( typeof ExpandableEndwalle1 != undefined && ExpandableEndwalle1 == 'Yes' ) {
			return true
		}
		else if ( typeof ExpandableEndwalls2 != undefined && ExpandableEndwalls2 != 'Yes' ) {
			return false
		} else if ( typeof ExpandableEndwalls2 != undefined && ExpandableEndwalls2 == 'Yes' ) {
			return true
		}
		else if ( typeof ExpandableEndwalle3 != undefined && ExpandableEndwalle3 != 'Yes' ) {
			return false
		}
		else if ( typeof ExpandableEndwalle3 != undefined && ExpandableEndwalle3 == 'Yes' ) {
			return true
		}
		else if ( typeof ExpandableEndwalls4 != undefined && ExpandableEndwalls4 != 'Yes') {
			return false
		}
		else if ( typeof ExpandableEndwalls4 != undefined && ExpandableEndwalls4 == 'Yes' ) {
			return true
		}
		return false
	}

	DistanceToRoof(
		DistanceFromRightCorner: number,
		StartingHeight: number,
		Walle1?: string,
		Walls2?: string,
		Walle3?: string,
		Walls4?: string
		) {
			if ( this.rShape == 'Gable' ) {
				if ( typeof Walls2 != undefined ) {
					return this.bHeight * 12 - StartingHeight
				}
				if ( typeof Walls4 != undefined ) {
					return this.bHeight * 12 - StartingHeight
				}
				if ( typeof Walle1 != undefined ) {
					if ( DistanceFromRightCorner / 12 <= this.bWidth / 2 ) {
						return ( DistanceFromRightCorner / 12 * this.rPitch + this.bHeight * 12 - StartingHeight)
					}
					else if ( DistanceFromRightCorner / 12 > this.bWidth / 2 ) {
						var DistanceFromCenter: number
						DistanceFromCenter = DistanceFromRightCorner - this.bWidth / 2 * 12
						return ( (this.bWidth - DistanceFromRightCorner / 12) * this.rPitch + this.bHeight * 12 - StartingHeight)
					}
				}
				if ( typeof Walle3 != undefined ) {
					if ( DistanceFromRightCorner / 12 <= this.bWidth / 2 ) {
						return ( DistanceFromRightCorner / 12 * this.rPitch + this.bHeight * 12 - StartingHeight)
					}
					else if ( DistanceFromRightCorner / 12 > this.bWidth / 2 ) {
						var DistanceFromCenter: number
						DistanceFromCenter = DistanceFromRightCorner - this.bWidth / 2 * 12
						return ( (this.bWidth - DistanceFromRightCorner / 12) * this.rPitch + this.bHeight * 12 - StartingHeight)
					}
				}
			}
			if ( this.rShape == 'Single Slope' ) {
				if ( typeof Walle1 != undefined ) {
					return ( (this.bWidth - DistanceFromRightCorner / 12) * this.rPitch + this.bHeight * 12 - StartingHeight )
				}
				if ( typeof Walls2 != undefined ) {
					return ( this.bHeight * 12 - StartingHeight )
				}
				if ( typeof Walle3 != undefined) {
					return ( DistanceFromRightCorner / 12 * this.rPitch + this.bHeight * 12 - StartingHeight )
				}
				if ( typeof Walls4 != undefined ) {
					return ( this.bHeight * 12 + this.bWidth * this.rPitch - StartingHeight )
				}
			}
	}

	DistanceFromCorner(
		HeightAlongRoof: number,
		Walle1?: string
	) {
		if ( this.rShape == 'Gable' ) {
			return ( (HeightAlongRoof - this.bHeight * 12) / this.rPitch )
		}
		if ( this.rShape == 'Single Slope' ) {
			if ( typeof Walle1 != undefined ) {
				return ( this.bWidth * 12 - (HeightAlongRoof - this.bHeight * 12) / this.rPitch * 12 )
			}
			else {
				return ( (HeightAlongRoof - this.bHeight * 12) / this.rPitch * 12 )
			}
		}
	}
}
