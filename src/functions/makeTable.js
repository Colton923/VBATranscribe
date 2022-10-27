/**
 * Requires the input table string to be in csv format with comma delimiters
 */
export default function makeTable(table) {
  const [rawCol, ...lines] = table.split('\n')
  const cols = rawCol.split(',')

  return lines.reduce((obj, line) => {
    const [row, ...data] = line.split(',')

    obj[row] = data.reduce((lineObj, item, i) => {
      lineObj[cols[i]] = item
      return lineObj
    }, {})

    return obj
  }, {})
}
