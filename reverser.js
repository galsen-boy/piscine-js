const reverse = (arr) => {
    let arrf = ''
    for (let i = arr.length-1 ; i>= 0; i--) {
        arrf += arr[i]
    }
    if (typeof arrf === 'string') {
        return arrf
    }
    if (Array.isArray(arrf)) {
        return arrf.split()
    }
}
