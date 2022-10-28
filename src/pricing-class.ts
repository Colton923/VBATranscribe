export default class Pricing {
  private _shape = ''
  private _description = ''
  private _material = ''
  // measurement is a string after it did the inchestoimperial fn
  private _measurement = ''
  private _color = ''
  private _units = ''
  private _cost_per_unit = 0
  private _size = ''
  private _cost = 0

  get shape() {
    return this._shape
  }
  set shape(val: string) {
    this._shape = val
  }
  get description() {
    return this._description
  }
  set description(val: string) {
    this._description = val
  }
  get material() {
    return this._material
  }
  set material(val: string) {
    this._material = val
  }
  get measurement() {
    return this._measurement
  }
  set measurement(val: string) {
    this._measurement = val
  }
  get color() {
    return this._color
  }
  set color(val: string) {
    this._color = val
  }
  get units() {
    return this._units
  }
  set units(val: string) {
    this._units = val
  }
  get cost_per_unit() {
    return this._cost_per_unit
  }
  set cost_per_unit(val: number) {
    this._cost_per_unit = val
  }
  get size() {
    return this._size
  }
  set size(val: string) {
    this._size = val
  }
  get cost() {
    return this._cost
  }
  set cost(val: number) {
    this._cost = Math.round(val * 100) / 100
  }
}
