const slice = (str, strart, end) => {
    let strf = ''
    if (!end){
        end = str.length -1
    }
    for (let i = strart; i <= end; i++) {
        strf += str[i]
    }
    if (typeof str === 'string') {
        return strf
    }else if (Array.isArray(str)) {
        return strf.split('')
    }
}

// Array.prototype.slice = undefined
// String.prototype.slice = undefined


// console.log(slice(['d', 'a', 'i', 'b', 'o', 'u'], 2, 4))
