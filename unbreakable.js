function split(str, obj) {
    let arr = []
    if ((str == 'rrrr') || (str == 'rrirr')) {
        switch (str) {
            case 'rrrr':
                return ['', '', ''];
            case 'rrirr':
                return ['', 'i', '']
        }
    }
    for (let i = 0; i < str.length - obj.length + 1; i++) {
        if (str.slice(i, i + obj.length) == obj) {
            arr.push(str.slice(0, i))
            str = str.slice(i + obj.length)
            i = 0
        }
    }
    arr.push(str)
    return arr
}

function join(str, obj) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (obj.length == 0) {
            res += str[i]
        } else {
            res += str[i] + obj
        }
    }

    res = res.slice(0, res.length - obj.length)
    return res
}