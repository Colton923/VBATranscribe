export default function imperialInputToInches(imperial: string) {
  let inches = 0
  for (let i = 0; i < imperial.length; i++) {
    if (imperial.indexOf("'", i) === 2) {
      inches += +imperial.substring(0, 2) * 12
      i = 2
    } else if (imperial.indexOf("'", i) === 1) {
      inches += +imperial.substring(0, 1) * 12
      i = 1
    } else if (imperial.indexOf("'", i) < 1) {
      if (imperial.indexOf('"', i) > 0) {
        inches += +imperial.substring(i, imperial.indexOf('"', i))
        i = imperial.length
      }
    }
  }
  return inches
}
