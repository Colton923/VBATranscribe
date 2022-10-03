## Windows, Framed Openings, Overhead and Personnel doors

- The VB is using Framed Openings as a base for Misc FOs and Windows.

- Refactor the Framed Opening class to be a base for the others while
  creating MiscFO to be used for the current FramedOpenings type

- Track all the FramedOpenings subclasses in arrays for their respective walls

## Overhead doors

- Width: 8 - 26 feet
- Height 8 - 24 feet

## Personnel doors

- Add the width and height properties, which will be calculated based on
  the door size selected.

## Additional Options > Sidewall Extension

- If the Sidewall2 Extension Pitch measurement is greater than 0
  and the Sidewall2 Eave Extension Pitch is set to "Match Roof",
  then set the Sidewall2 Eave Extension Pitch to the Roof Pitch.

- Same for Sidewall4

## Bays

- An array of columns are created for each bay. Their CenterLine,
  length, and Top Edge height are calculated based on the building's height

- Add Columns property and type

Column = {
centerLine: TotalBayLength _ 12,
length: buildingHeight _ 12,
topEdgeHeight: buildingHeight \* 12,
}

## Building

- Added the `roofLength` property to the Building class. This is calculated
  on submission of the building form.

```js
const roofLength = buildingLength * 12 + Endwall1Overhang + Endwall3Overhang + Endwall3Extension
```

- Added the `highSideEaveHeight` property to the Building class.

```js
const highSideEaveHeight = buildingHeight * 12 + buildingWith + roofPitch
```

- Added the `sidewall2ExtRafterLength` property to the Building class.

```js
const sidewall2ExtRafterLength = !sidewall2Extension
	? 0
	: (sidewall2Extension / 12) * Math.sqrt(144 + sidewall2ExtensionPitch * sidewall2ExtensionPitch)
```

- Added the `sidewall4ExtRafterLength` property to the Building class.

```js
const sidewall2ExtRafterLength = !sidewall4Extension
	? 0
	: (sidewall4Extension / 12) * Math.sqrt(144 + sidewall4ExtensionPitch * sidewall4ExtensionPitch)
```

- Added the `netSingleRoofPanelQty` property to the Building class.

```js
const netSingleRoofPanelQty = Math.ceil(
	(buildingLength * 12 +
		Endwall1Overhang +
		Endwall3Overhang +
		Endwall1Extension +
		Endwall3Extension) /
		36
)
```
