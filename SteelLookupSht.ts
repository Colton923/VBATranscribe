export class MainRafterAndExpandableEndwallRafterTbl {
  tbl: any[]
  constructor() {
    this.tbl = []
    this.tbl = this.MakeTbl(this.tbl)

  }
  MakeTbl(tbl) {
    var tbl = tbl
    tbl[0] = ['Building Width or Horizontal Distance to Interior Endwall Column (ft)', 20, 30, 40, 50, 60, 70, 80]
    tbl[1] = [25, 'W8x10', 'W8x10', 'W8x10','W8x10', 'W8x10', 'W8x10', 'W8x10']
    tbl[2] = [30, 'W8x13', 'W8x13', 'W8x13', 'W8x13', 'W8x13', 'W8x13', 'W8x13']
    tbl[3] = [35, 'W10x14', 'W10x14', 'W10x14', 'W10x14', 'W10x14', 'W10x14', 'W10x14']
    tbl[4] = [40, 'W10x17', 'W10x17', 'W10x17', 'W10x17', 'W10x17', 'W10x17', 'W10x17']
    tbl[5] = [45, 'W12x19', 'W12x19', 'W12x19', 'W12x19', 'W12x19', 'W12x19', 'W12x19']
    tbl[6] = [50, 'W12x22', 'W12x22', 'W12x22', 'W12x22', 'W12x22', 'W12x22', 'W12x22']
    tbl[7] = [55, 'W12x26', 'W12x26', 'W12x26', 'W12x26', 'W12x26', 'W12x26', 'W12x26']
    tbl[8] = [60, 'W14x26', 'W14x26', 'W14x26', 'W14x26', 'W14x26', 'W14x26', 'W14x26']
    tbl[9] = [65, 'W16x36', 'W16x36', 'W16x36', 'W16x36', 'W16x36', 'W16x36', 'W16x36']
    tbl[10] = [70, 'W21x44', 'W21x44', 'W21x44', 'W21x44', 'W21x44', 'W21x44', 'W21x44']
    tbl[11] = [75, 'W21x50', 'W21x50', 'W21x50', 'W21x50', 'W21x50', 'W21x50', 'W21x50']
    tbl[12] = [80, 'W24x60', 'W24x60', 'W24x60', 'W24x60', 'W24x60', 'W24x60', 'W24x60']
    return tbl
  }
}

export class MainColumnAndExpandableEndwallColumnTbl {
  tbl: any[]
  constructor() {
    this.tbl = []
    this.tbl = this.MakeTbl(this.tbl)

  }
  MakeTbl(tbl) {
    var tbl = tbl
    tbl[0] = ['Building Width or Horizontal Distance to Interior Endwall Column (ft)', 20, 30, 40, 50, 60, 70, 80]
    tbl[1] = [30, 'W8x10', 'W10x12', 'W12x14', 'W12x19', 'W14x22', 'W16x26', 'W16x36']
    tbl[2] = [40, 'W10x12', 'W12x14', 'W12x19', 'W14x22', 'W16x26', 'W16x36', 'W18x40']
    tbl[3] = [50, 'W12x14', 'W12x19', 'W14x22', 'W16x26', 'W16x36', 'W18x40', 'W21x50']
    tbl[4] = [60, 'W12x19', 'W14x22', 'W16x26', 'W16x36', 'W18x40', 'W21x50', 'W24x60']
    tbl[5] = [70, 'W14x22', 'W16x26', 'W16x36', 'W18x40', 'W21x50', 'W24x60', 'W24x84']
    tbl[6] = [80, 'W16x26', 'W16x36', 'W18x40', 'W21x50', 'W24x60', 'W24x84', 'W27x102']
    return tbl
  }
}

export class NonExpandableEndwallColumnTbl {
  tbl: any[]
  constructor() {
    this.tbl = []
    this.tbl = this.MakeTbl(this.tbl)

  }
  MakeTbl(tbl) {
    var tbl = tbl
    tbl[0] = ['Building Width or Horizontal Distance to Interior Endwall Column (ft)', 20, 30, 40, 50, 60, 70, 80]
    tbl[1] = [30, 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19']
    tbl[2] = [40, 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19']
    tbl[3] = [50, 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19']
    tbl[4] = [60, 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19']
    tbl[5] = [70, 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19']
    tbl[6] = [80, 'TS 4x4x11GA', 'TS 4x4x3/16', 'TS 4x4x1/4', 'W8x13', 'W10x12', 'W12x14', 'W12x19']
    return tbl
  }
}

