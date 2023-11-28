const arrToSet = (arr) => {
    return new Set(arr)
}
const arrToStr = (arr) => {
    return arr.join('')
}
const setToArray = (set) => {
    return Array.from(set)
}
const setToStr = (set) => {
    return setToArray(set).join('')
}
const strToArr = (str) => {
    return str.split('')
}
const strToSet = (str) => {
    return new Set(strToArr(str))
}
const mapToObject = (map) => {
    return Object.fromEntries(map)
}
const objToArray = (obj) => {
    return Object.values(obj)
}
const objToMap = (obj) => {
    return new Map(objToArray(obj))
}
const arrToObject = (arr) => {
    return Object.fromEntries(arr)
}
const strToObject = (str) => {
    return Object.fromEntries(strToArr(str))
}