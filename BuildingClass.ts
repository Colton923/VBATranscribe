import { Member } from './MemberClass'
import { FO } from './FOClass'

class Building {
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
	BaseTri: boolean
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
	rPanelColo: string
	wPanelType: string
	wPanelColor: string

	//Trim Colors
	RakeTrimColor: string
	OutsideCorner: string

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
		bay12_length: number
	) {
		this.bHeight = formBHeight
		this.bWidth = formBWidth
		this.bLength = formBLength
		this.rPitch = formRPitch
		this.rShape = formRShape

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
		
	}
	SetPersonnelDoors(
		DoorNums: number,
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

	) {
		var FramedOpening = new FO()
		FO.
	}
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

				if ( bay2_length > 0 ) {
					TotalBayLength += bay2_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay3_length > 0 ) {
					TotalBayLength += bay3_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay4_length > 0 ) {
					TotalBayLength += bay4_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay5_length > 0 ) {
					TotalBayLength += bay5_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay6_length > 0 ) {
					TotalBayLength += bay6_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay7_length > 0 ) {
					TotalBayLength += bay7_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay8_length > 0 ) {
					TotalBayLength += bay8_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay9_length > 0 ) {
					TotalBayLength += bay9_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay10_length > 0 ) {
					TotalBayLength += bay10_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay11_length > 0 ) {
					TotalBayLength += bay11_length
					if ( TotalBayLength == this.bLength ) {
						return
					}
					var Column = new Member()
					Column.SetCenterLine ( TotalBayLength * 12 )
					Column.SetLength ( this.bHeight * 12 )
					Column.SetTEdgeHeight ( this.bHeight * 12 )
					this.s2Columns.push(Column)
				}

				if ( bay12_length > 0 ) {
					TotalBayLength += bay12_length
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

				if ( bay2_length > 0 ) {
					TotalBayLength += bay2_length
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

				if ( bay3_length > 0 ) {
					TotalBayLength += bay3_length
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

				if ( bay4_length > 0 ) {
					TotalBayLength += bay4_length
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

				if ( bay5_length > 0 ) {
					TotalBayLength += bay5_length
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

				if ( bay6_length > 0 ) {
					TotalBayLength += bay6_length
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

				if ( bay7_length > 0 ) {
					TotalBayLength += bay7_length
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

				if ( bay8_length > 0 ) {
					TotalBayLength += bay8_length
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

				if ( bay9_length > 0 ) {
					TotalBayLength += bay9_length
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

				if ( bay10_length > 0 ) {
					TotalBayLength += bay10_length
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

				if ( bay11_length > 0 ) {
					TotalBayLength += bay11_length
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

				if ( bay12_length > 0 ) {
					TotalBayLength += bay12_length
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

	RoofLength() {
		return ( this.bLength * 12 +this.e1Overhang + this.e1Extension + this.e3Overhang + this.e3Extension )	
	}

	RoofFtLength() {
		return ( this.RoofLength() / 12 )
	}

	HighSideEaveHeight() {
		return ( this.bHeight * 12 + this.bWidth * this.rPitch )
	}

	s2ExtensionRafterLength() {
		if ( this.s2Extension == 0 ) {
			return 0
		}
		else {
			return ( this.s2Extension / 12 * Math.sqrt( 144 + this.s2ExtensionPitch * this.s2ExtensionPitch ))
		}
	}

	s4ExtensionRafterLength() {
		if ( this.s4Extension == 0 ) {
			return 0
		}
		else {
			return ( this.s4Extension / 12 * Math.sqrt( 144 + this.s4ExtensionPitch * this.s4ExtensionPitch ))
		}
	}

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

	NetSingleRoofPanelQty() {
		return ( Math.round(( this.bLength * 12 + this.e1Overhang + this.e3Overhang + this.e1Extension + this.e3Extension) / 36) )
	}

	WallStatus( 
			WallAlterationStatuse1?: string,
			WallAlterationStatuss2?: string,
			WallAlterationStatuse3?: string,
			WallAlterationStatuss4?: string
		) {
			if ( typeof WallAlterationStatuse1 != 'undefined' ) {
				return ( WallAlterationStatuse1 )
			}
			if ( typeof WallAlterationStatuss2 != 'undefined' ) {
				return ( WallAlterationStatuss2 )
			}
			if ( typeof WallAlterationStatuse3 != 'undefined' ) {
				return ( WallAlterationStatuse3 )
			}
			if ( typeof WallAlterationStatuss4 != 'undefined' ) {
				return ( WallAlterationStatuss4 )
			}
	}

	LengthAboveFinishedFloor( 
			WallAlterationStatuse1?: string,
			WallAlterationStatuss2?: string,
			WallAlterationStatuse3?: string,
			WallAlterationStatuss4?: string,
			WallAlteratione1Length?: number,
			WallAlterations2Length?: number,
			WallAlteratione3Length?: number,
			WallAlterations4Length?: number,
			
		) {
			if ( typeof WallAlterationStatuse1 != 'undefined' ) {
				if ( WallAlterationStatuse1 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuse1 == 'Partial' && typeof WallAlteratione1Length != 'undefined' ) {
					return WallAlteratione1Length
				}
				else if( WallAlterationStatuse1 == 'Gable Only' && typeof WallAlteratione1Length != 'undefined' ) {
					return this.bHeight
				}
			}
			if ( typeof WallAlterationStatuss2 != 'undefined' ) {
				if ( WallAlterationStatuss2 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuss2 == 'Partial' && typeof WallAlterations2Length != 'undefined' ) {
					return WallAlterations2Length
				}
				else if( WallAlterationStatuss2 == 'Gable Only' && typeof WallAlterations2Length != 'undefined' ) {
					return this.bHeight
				}
			}
			if ( typeof WallAlterationStatuse3 != 'undefined' ) {
				if ( WallAlterationStatuse3 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuse3 == 'Partial' && typeof WallAlteratione3Length != 'undefined' ) {
					return WallAlteratione3Length
				}
				else if( WallAlterationStatuse3 == 'Gable Only' && typeof WallAlteratione3Length != 'undefined' ) {
					return this.bHeight
				}
			}
			if ( typeof WallAlterationStatuss4 != 'undefined' ) {
				if ( WallAlterationStatuss4 == 'Include' ) {
					return 0
				}
				else if( WallAlterationStatuss4 == 'Partial' && typeof WallAlterations4Length != 'undefined' ) {
					return WallAlterations4Length
				}
				else if( WallAlterationStatuss4 == 'Gable Only' && typeof WallAlterations4Length != 'undefined' ) {
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
			if ( typeof LinerPanele1 != 'undefined' && LinerPanele1 == '') {
				return 'None'
			}
			if ( typeof LinerPanels2 != 'undefined' && LinerPanels2 == '') {
				return 'None'
			}
			if ( typeof LinerPanele3 != 'undefined' && LinerPanele3 == '') {
				return 'None'
			}
			if ( typeof LinerPanels4 != 'undefined' && LinerPanels4 == '') {
				return 'None'
			}
			if ( typeof LinerPanelRoof != 'undefined' && LinerPanelRoof == '') {
				return 'None'
			}
	}

	Wainscot( 
		Wainscote1?: string,
		Wainscots2?: string,
		Wainscote3?: string,
		Wainscots4?: string,
	) {
		if ( typeof Wainscote1 != 'undefined' && Wainscote1 == '') {
			return 'None'
		}
		if ( typeof Wainscots2 != 'undefined' && Wainscots2 == '') {
			return 'None'
		}
		if ( typeof Wainscote3 != 'undefined' && Wainscote3 == '') {
			return 'None'
		}
		if ( typeof Wainscots4 != 'undefined' && Wainscots4 == '') {
			return 'None'
		}
	}

	ExpandableEndwall( 
		ExpandableEndwalle1?: string,
		ExpandableEndwalls2?: string,
		ExpandableEndwalle3?: string,
		ExpandableEndwalls4?: string,
	) {
		if ( typeof ExpandableEndwalle1 != 'undefined' && ExpandableEndwalle1 != 'Yes' ) {
			return false
		} else if ( typeof ExpandableEndwalle1 != 'undefined' && ExpandableEndwalle1 == 'Yes' ) {
			return true
		}
		else if ( typeof ExpandableEndwalls2 != 'undefined' && ExpandableEndwalls2 != 'Yes' ) {
			return false
		} else if ( typeof ExpandableEndwalls2 != 'undefined' && ExpandableEndwalls2 == 'Yes' ) {
			return true
		}
		else if ( typeof ExpandableEndwalle3 != 'undefined' && ExpandableEndwalle3 != 'Yes' ) {
			return false
		}
		else if ( typeof ExpandableEndwalle3 != 'undefined' && ExpandableEndwalle3 == 'Yes' ) {
			return true
		}
		else if ( typeof ExpandableEndwalls4 != 'undefined' && ExpandableEndwalls4 != 'Yes') {
			return false
		}
		else if ( typeof ExpandableEndwalls4 != 'undefined' && ExpandableEndwalls4 == 'Yes' ) {
			return true
		}
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
				if ( typeof Walls2 != 'undefined' ) {
					return this.bHeight * 12 - StartingHeight
				}
				if ( typeof Walls4 != 'undefined' ) {
					return this.bHeight * 12 - StartingHeight
				}
				if ( typeof Walle1 != 'undefined' ) {
					if ( DistanceFromRightCorner / 12 <= this.bWidth / 2 ) {
						return ( DistanceFromRightCorner / 12 * this.rPitch + this.bHeight * 12 - StartingHeight)
					}
					else if ( DistanceFromRightCorner / 12 > this.bWidth / 2 ) {
						var DistanceFromCenter: number
						DistanceFromCenter = DistanceFromRightCorner - this.bWidth / 2 * 12
						return ( (this.bWidth - DistanceFromRightCorner / 12) * this.rPitch + this.bHeight * 12 - StartingHeight)
					}
				}
				if ( typeof Walle3 != 'undefined' ) {
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
				if ( typeof Walle1 != 'undefined' ) {
					return ( (this.bWidth - DistanceFromRightCorner / 12) * this.rPitch + this.bHeight * 12 - StartingHeight )
				}
				if ( typeof Walls2 != 'undefined' ) {
					return ( this.bHeight * 12 - StartingHeight )
				}
				if ( typeof Walle3 != 'undefined') {
					return ( DistanceFromRightCorner / 12 * this.rPitch + this.bHeight * 12 - StartingHeight )
				}
				if ( typeof Walls4 != 'undefined' ) {
					return ( this.bHeight * 12 + this.bWidth * this.rPitch - StartingHeight )
				}
			}
	}

	//Function for distance from right corner of an endwall at a given height
	DistanceFromCorner(
		HeightAlongRoof: number,
		Walle1?: string
	) {
		if ( this.rShape == 'Gable' ) {
			return ( (HeightAlongRoof - this.bHeight * 12) / this.rPitch )
		}
		if ( this.rShape == 'Single Slope' ) {
			if ( typeof Walle1 != 'undefined' ) {
				return ( this.bWidth * 12 - (HeightAlongRoof - this.bHeight * 12) / this.rPitch * 12 )
			}
			else {
				return ( (HeightAlongRoof - this.bHeight * 12) / this.rPitch * 12 )
			}
		}
	}
}
