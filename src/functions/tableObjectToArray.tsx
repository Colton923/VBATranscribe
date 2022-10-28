export const tableObjectToArray = (table: any): any[][] =>
  Object.keys(table).map((rowVal) => Object.values(table[rowVal]))
