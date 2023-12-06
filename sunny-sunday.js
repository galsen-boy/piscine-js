const sunnySunday = (date) => {
    let weekDays = [
        'Saturday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        
    ]
    let first = new Date('0001-01-01')
    let weekDayNum = date.getDay()
    let week = Math.ceil(((date - first + 1) / 86400000) / 6);
  return weekDays[weekDayNum]
}
console.log(sunnySunday(new Date('0001-01-01')))