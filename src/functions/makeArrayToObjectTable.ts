export default function makeArrayToObjectTable(table: any[][]) {
  return table.reduce((obj, row) => {
    const key = row[0] as string
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    obj[key] = row[1]
    return obj
  }, {})
}
