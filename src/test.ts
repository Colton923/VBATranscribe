import { Building } from 'Main'

const TestBuilding = new Building({
  info: {
    numOfBays: 2,
    bays: [
      {
        length: 360,
      },
      {
        length: 360,
      },
    ],
    gutters: true,
    roofShape: 'Gable',
    roofPitch: 12,
    width: 360,
    height: 240,
    length: 720,
    maxPurlinSpacing: 48,
  },
  exteriorPanels: {
    wallPanelShape: 'M-Loc',
    linerPanels: true,
    roofPanelShape: 'M-Loc',
    roofPanelType: 'Prime SMP Colors (Lifetime Warranty)',
    roofColor: 'Brilliant (White)',
    wallPanelType: 'Prime SMP Colors (Lifetime Warranty)',
    wallColor: 'Black',
    linerPanelsGroup: {
      endwall1: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
        panelShape: 'M-Loc',
      },
      sidewall2: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
        panelShape: 'M-Loc',
      },
      endwall3: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
        panelShape: 'M-Loc',
      },
      sidewall4: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelShape: 'M-Loc',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
      },
      roof: {
        linerPanel: 'Full Height',
        panelColor: 'Brilliant (White)',
        panelShape: 'M-Loc',
        panelType: 'Prime SMP Colors (Lifetime Warranty)',
      },
    },
    wallAlterations: false,
    wallAlterationsGroup: {
      endwall1: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
      sidewall2: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
      endwall3: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
      sidewall4: {
        length: 0,
        wallStatus: 'Include',
        expandableEndwall: false,
      },
    },
  },
  trim: {
    baseTrim: 'None',
    corner: 'Black',
    eave: 'Black',
    framedOpenings: 'Black',
    guttersAndDownspouts: true,
    guttersAndDownspoutsColors: {
      downspout: 'Black',
      gutter: 'Black',
    },
    rake: 'Black',
    wainscot: false,
    wainscotWalls: {
      trim: 'None',
      walls: {
        endwall1: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
        sidewall2: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
        endwall3: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
        sidewall4: {
          type: '36" Masonry',
          panelColor: 'Brilliant (White)',
          panelType: 'Prime Acrylic AZ55 Galvalume (25yr Warranty)',
        },
      },
    },
  },
  personnelDoors: {
    numOfDoors: 2,
    doors: [
      {
        wall: 'Endwall 1',
        size: 3070,
        canopy: "4' x 4'6\"",
        deadBolt: true,
        halfGlass: false,
        jambSize: 10.25,
        leftEdgePos: 0,
      },
      {
        wall: 'Endwall 1',
        size: 4070,
        canopy: "4' x 4'6\"",
        deadBolt: true,
        halfGlass: false,
        jambSize: 10.25,
        leftEdgePos: 0,
      },
    ],
  },
  overheadDoors: {
    numOfDoors: 2,
    doors: [
      {
        type: 'Sectional',
        width: 288,
        height: 168,
        wall: 'Sidewall 2',
        heightLift: true,
        insulation: 'None',
        leftEdgePos: 36,
        operation: 'Electric Opener',
        window: 'None',
      },
    ],
  },
  windows: {
    numOfWindows: 1,
    windows: [
      {
        wall: 'Endwall 1',
        width: 36,
        height: 72,
        bottomEdgePos: 12,
        leftEdgePos: 0,
        rightEdgePos: 36,
        topEdgePos: 84,
      },
    ],
  },
  framedOpenings: {
    numOfFramedOpenings: 0,
    group: [],
  },
  insulation: {
    roof: '1" Spray Foam',
    walls: "2' VRRR",
  },
  // additionalOptions: {},
})
