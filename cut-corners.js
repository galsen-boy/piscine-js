const round = (n) => {
    let ost
    let res
    let flag = false
    if (n < 0) {
        n = -n
        flag = true
    }
    ost = modulo(n, 1)
    if (ost > 0.5) {
        res = n + 1 - ost
    } else {
        res = n - ost
    }
    if (flag) {
        res = -res
    }
    return res
}
const ceil = (n) => {
    let ost
    let res
    ost = modulo(n, 1)
    if (n > 0 && ost != 0) {
        return res = n + 1 - ost
    } else {
        return res = n - ost
    }
    return n
}
const floor = (n) => {
    let ost
    let res
    ost = modulo(n, 1)
    if (n > 0 && ost != 0) {
        return res = n - ost
    } else if (ost === 0) {
        // console.log(n)
        return n
    } else {
        let x
        x = 1 + ost
        return res = n - x
    }
    return n
}
const trunc = (n) => {
    let ost
    let res
    ost = modulo(n, 1)
    if (n > 0 && ost != 0) {
        return res = n - ost
    } else {
        let x
        x = 1 + ost
        return res = n - ost
    }
    return n
}

const multiply = (a, b) => {
    let result = 0;
    let flag = false
    if (b < 0) {
        b = -b
        flag = true
    }
    while (b > 0) {
        result += a
        b--
    }
    if (flag) {
        result = -result
    }
    return result
}

const divide = (a, b) => {
    let count = 0
    let flag = false
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }

    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
        flag = true
    }
    let result = a
    while (result >= b) {
        result -= b
        count++
    }
    if (flag) {
        count = -count
    }
    return count
}
const modulo = (a, b) => {
    const quotient = divide(a, b);
    const remainder = a - multiply(b, quotient)
    return remainder;
}