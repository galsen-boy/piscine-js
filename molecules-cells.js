const RNA = (adnstr) => {
    let res = ''
    for(let i = 0;i<adnstr.length;i++){
        if(adnstr[i] === 'A'){
            res += 'U'
        }else if(adnstr[i] === 'C'){
            res += 'G'
        }else if(adnstr[i] === 'G'){
            res += 'C'
        }else if(adnstr[i] === 'T'){
            res += 'A'
        }
    }
    return res
}
const DNA = (arnstr) => {
    let res = ''
    for(let i = 0;i<adnstr.length;i++){
        if(adnstr[i] === 'A'){
            res += 'T'
        }else if(adnstr[i] === 'C'){
            res += 'G'
        }else if(adnstr[i] === 'G'){
            res += 'C'
        }else if(adnstr[i] === 'U'){
            res += 'A'
        }
    }
    return res
}