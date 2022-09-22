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
		let LookupTbl: any[]
		let LookupHeight: number
		let LookupHorizontalIndex: number
		let LookupSizeString: string
		let NearestHorizontalValue: number

		if (ColumnOrRafter === 'Rafter') {
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
				if (this.location === 'e1' || this.location === 'e3') {
					LookupHorizontalIndex = 12
				}
			}
			this.size = LookupTbl[(LookupHorizontalIndex, LookupHeight)]
			if (this.size.includes('TS')) {
				this.width = 4
			} else if (this.size.includes('W')) {
				//JFC what a line
				/*
				 *a = left(size, instr(1,size,"x") -1) <-This returns everything to the left of the "x"
				 *right(a,b) <- This returns everything to the right of the b: number counting right to left
				 *b = len(left(size, instr(1, size, "x") - 1)) - 1
				 * ^^ length of everything to the left of the x - 1
				 */
				this.width
			}
		} else if (ColumnOrRafter === 'Column') {
			if (CustomNonExpandable === 'NonExpandable') {
				//This is a worksheet function..
				//Set LookupTbl = SteelLookupSht.ListObjects("NonExpandableEndwallColumnTbl")
				//LookupTbl
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
				if (Location === 'e1' || Location === 'e3') {
					LookupHorizontalIndex = 6
				} else {
					//...VBA-Dev Error: "WHY IS S2 and S4 sending this to baddata"
					LookupHorizontalIndex = 6
				}
			}
			this.size = LookupTbl[(LookupHorizontalIndex, LookupHeight)]
			if (this.size.includes('TS')) {
				this.width = 4
			}
			if (this.size.includes('W')) {
				//The left, right, left right bullshit again for width =
			}
		}
	}
	/*Section here for error handling in VBA
	 *BadLookupData:
	 *If LookupHorizontalIndex > 80 Then
	 *    MsgBox "A horizontal lookup distance of greater than 80' has been calculated!", vbCritical, "Member Lookup Error"
	 *ElseIf LookupHorizontalIndex > 80 Then
	 *    MsgBox "A lookup height of greater than 80' has been calculated!", vbCritical, "Member Lookup Error"
	 *End If
	 *Stop
	 *Exit Sub
	 *LookupFail:
	 *MsgBox "Member size lookup failed! Bad lookup string returned.", vbCritical, "Member Lookup Error"
	 *Stop
	 */

	LookupTblMatch(b: Building, ColumnsOrRafters: string, Wall?: string) {
		if ((ColumnsOrRafters = 'Rafter')) {
			//Return Steel Lookup Sheet List Objects "MainRafterAndExpandableEndwallRafterTbl"
		} else if ((ColumnsOrRafters = 'Column')) {
			switch (Wall) {
				case 's2':
				//Return Steel Lookup Sheet stuff
				case 's4':
				//Return same as above
				case 'e1':
					if ((b.ExpandableEndwall('e1') = true)) {
						//return steel lookupsheet stuff
					} else {
						//return other table in sheet
					}
				case 'e3':
					if ((b.ExpandableEndwall('e3') = flase)) {
						//return steel lokoup sheet
					} else {
						//return other table in sheet
					}
				case 'Interior':
				//return other tbl
			}
		}
	}
	SetType(mType: any, mName?: string) {
		switch (mType) {
			case 'TS':
				this.depth = 4
				this.width = 4
			case 'W-Beam':
			//this.depth is another string manipulation
			//weird typos below in vba
			case '8 Receiver Cee':
				this.width = 8
			case '10 Receiver Cee':
				this.width = 10
			case 'C Purlin':
			//"Width Unknown - VBA-Dev Note"
		}
	}
}
