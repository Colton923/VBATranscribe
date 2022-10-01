import { Building } from './BuildingClass'
import { NonExpandableEndwallColumnTbl, MainColumnAndExpandableEndwallColumnTbl, MainRafterAndExpandableEndwallRafterTbl } from './SteelLookupSht'
export class Member {
	//Classified by Type: Column, Rafter, Girt, Eave Struct, etc.
	mType: string

	//Descriptive Location String
	location: string

	//Used for the main functional span dimension of the member
	length: number
	depth: number
	width: number
	tType: string

	//only used for trim, but helpful here for error checking when trim is in the same collection as members (in FOs)
	measurement: string
	qty: number
	cl: number

	//position of the column's centerline as measured from the right wall corner
	rEdgePosition: number

	//Position of the column's right edge. Since columns are currently modeled without width, the CL, right edge, and Left edge position are all equal
	deleteFlag
	bEdgeHeight: number
	clsType: string
	tEdgeHeight: number

	//string used to store misc descriptions
	placement: string
	componentMembers: any[]
	loadBearing: boolean

	//exclusively used for rafters
	rafterLeftEdge: number

	//Size string is the specific dimensions of the mType i.e. - "W8x12" or "8" C Purlin"
	size: string

	constructor() {
		this.qty = 1
		this.clsType = 'Member'
		this.loadBearing = false
	}

	SetCenterLine(cl: number) {
		this.cl = cl
	}

	SetLength ( length: number ) {
		this.length = length
	}

	SetTEdgeHeight( height: number ) {
		this.tEdgeHeight = height
	}
	
	lEdgePosition() {
		//for receiver cee's, 0 width for the purpose of positioning since purlins will essentually fit flush into it
		if (this.mType.includes('Receiver Cee')) {
			//receiver cee should never have a l/r edge position even if we're tracking other column's edges because of their orintation. *This is at least true when they're functioning as jambs*
			return this.rEdgePosition
		} else {
			return this.rEdgePosition + this.width
		}
	}
	
	SetSize(
		b: Building,
		ColumnOrRafter: string,
		Location: string,
		HorizontalReferenceDistance: number,
		CustomNonExpandable?: string
	) {
		let LookupTbl: any
		let LookupHeight: number
		let LookupHorizontalIndex: number
		let LookupSizeString: string
		let NearestHorizontalValue: number

		if (ColumnOrRafter == 'Rafter') {
			LookupTbl = this.LookupTblMatch(b, ColumnOrRafter, Location)
			LookupHeight = Math.round(this.tEdgeHeight / 12 / 10) * 10
			if (HorizontalReferenceDistance <= 25 * 12) {
				LookupHorizontalIndex = 1
			} else {
				LookupHorizontalIndex = Math.round(HorizontalReferenceDistance / 12 / 5 - 5) + 1
			}
			if (LookupHeight < 20) {
				LookupHeight = 20
			}

			if (LookupHorizontalIndex > 12) {
				if (LookupHeight > 80) {
					return 'Bad Lookup Data'
				}
				if (this.location == 'e1' || this.location == 'e3') {
					LookupHorizontalIndex = 12
				} else { 
					return 'Bad Lookup Data'
				}
			}
			switch ( LookupHeight ) {
				case 20:
					LookupHeight = 1
					break
				case 30:
					LookupHeight = 2
					break
				case 40:
					LookupHeight = 3
					break
				case 50:
					LookupHeight = 4
					break
				case 60:
					LookupHeight = 5
					break
				case 70:
					LookupHeight = 6
					break
				case 80:
					LookupHeight = 7
					break
			}
			this.size = LookupTbl[LookupHorizontalIndex][LookupHeight]
			var thisWidth = this.size.split('x')
			this.width = parseInt(thisWidth[1])
		} else if ( ColumnOrRafter == 'Column' ) {
		if (CustomNonExpandable == 'NonExpandable') {
			var tempTbl = new NonExpandableEndwallColumnTbl
			LookupTbl = tempTbl.tbl
		} else {
			LookupTbl = this.LookupTblMatch(b, ColumnOrRafter, Location)
		}
		LookupHeight = Math.round(this.tEdgeHeight / 12 / 10) * 10
		if (HorizontalReferenceDistance < 30 * 12) {
			LookupHorizontalIndex = 1
		} else {
			LookupHorizontalIndex =
				(Math.round(HorizontalReferenceDistance / 12 / 10) * 10 - 30) / 10 + 1
		}
		if (LookupHeight > 80) {
			return 'Bad Lookup Data'
		}
		if (LookupHeight < 20) {
			LookupHeight = 20
		}
		if (LookupHorizontalIndex > 6) {
			LookupHorizontalIndex = 6
		}
		switch ( LookupHeight ) {
			case 20:
				LookupHeight = 1
				break
			case 30:
				LookupHeight = 2
				break
			case 40:
				LookupHeight = 3
				break
			case 50:
				LookupHeight = 4
				break
			case 60:
				LookupHeight = 5
				break
			case 70:
				LookupHeight = 6
				break
			case 80:
				LookupHeight = 7
				break
		}
		this.size = LookupTbl[LookupHorizontalIndex][LookupHeight]
		if (this.size.includes('TS')) {
			this.width = 4
		}
		if (this.size.includes('W')) {
			var thisWidth = this.size.split('x')
			this.width = parseInt(thisWidth[1])
		}
		}
	}
	LookupTblMatch(b: Building, ColumnsOrRafters: string, Wall?: string) {
		if ( ColumnsOrRafters == 'Rafter' ) {
			var thisTbl = new MainRafterAndExpandableEndwallRafterTbl
					return thisTbl.tbl
		} else if ( ColumnsOrRafters == 'Column' && typeof Wall != undefined ) {
				switch (Wall) {
					case 's2':
						var thisTbl = new MainColumnAndExpandableEndwallColumnTbl
						return thisTbl.tbl
					case 's4':
						var thisTbl = new MainColumnAndExpandableEndwallColumnTbl
						return thisTbl.tbl
					case 'e1':
						if ((b.ExpandableEndwall('e1', undefined, undefined, undefined) == true)) {
							var thisTbl = new MainColumnAndExpandableEndwallColumnTbl
							return thisTbl.tbl
						} else {
							var thisTbl = new NonExpandableEndwallColumnTbl
							return thisTbl.tbl
						}
					case 'e3':
						if ((b.ExpandableEndwall(undefined, undefined, 'e3', undefined) == false)) {
							var thisTbl = new MainColumnAndExpandableEndwallColumnTbl
							return thisTbl.tbl
						} else {
							var thisTbl = new NonExpandableEndwallColumnTbl
							return thisTbl.tbl
						}
					case 'Interior':
						var thisTbl = new MainColumnAndExpandableEndwallColumnTbl
						return thisTbl.tbl
			}
		}
	}
	SetType(mType: any, mName?: string) {
		switch (mType) {
			case 'TS':
				this.depth = 4
				this.width = 4
			case 'W-Beam':
				//Apparently this doesn't even work in the VBA
				if ( typeof mName != undefined ) {
					var splitstr = mName!.split('x')
					this.depth = parseInt(splitstr[1])
				}
			case '8" Receiver Cee':
				this.width = 8
			case '10" Receiver Cee':
				this.width = 10
			case 'C Purlin':
			//"Width Unknown - VBA-Dev Note"
		}
	}
}