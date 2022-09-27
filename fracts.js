    var thisStr = ""
    var divisor = 16
    var ft = Math.floor( inches / 12 )
    console.log(ft)
    var inch = inches - ft* 12 - ((inches - ft * 12) - Math.floor(inches - ft * 12))
    console.log(inch)
    var fracthigh = Math.floor((inches - ft * 12 - inch) * 100) / 100
    console.log(fracthigh)
    var top = Math.round(fracthigh * 16)
    var bot = 16
    if (top % 2 == 0) {
        top = top / 2
        bot = bot / 2
        divisor = 8
    }
    if (top % 2 == 0) {
        top = top / 2
        bot = bot / 2
        divisor = 4
    }
    if (top % 2 == 0) {
        top = top / 2
        bot = bot / 2
        divisor = 2
    }
    fracthigh = top
    if ( fracthigh / bot == 1 ) { 
        fracthigh = 0
        inch += 1
    }
    console.log(ft)
    console.log(inch)
    console.log(fracthigh)
    if ( fracthigh > 0 ) {
        if ( inch > 0 ) {
            if ( ft > 0 ) {
                thisStr = ft + "' " + inch + '" ' + fracthigh + '/' + divisor + '"'
            } else {
                thisStr = inch + '" ' + fracthigh + '/' + divisor + '"'
            }
        } else {
            if ( ft > 0 ) {
                thisStr =  ft + "' " + fracthigh + '/' + divisor + '"'
            } else {
                thisStr = fracthigh + '/' + divisor + '"'
            }
        }
    } else {
        if ( inch > 0 ) {
            if ( ft > 0 ) {
                thisStr =  ft + "' " + inch + '"'
            } else {
                thisStr = inch + '"'
            }
        } else {
            thisStr = ft + "'"
        }
    }
    console.log(thisStr)
