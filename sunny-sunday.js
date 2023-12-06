function sunnySunday(day2) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let day1 = new Date('0001-01-01')
  let weekDay = diffDates(day2, day1) % 6
  
      return days[weekDay]
}