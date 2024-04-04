const formatedDate = (date, format) => {
  format = format || 'dd/mm/yyyy'

  if (format === 'dd/mm/yyyy') {
    // Transform date to this format : 01/01/2000
    const dateObj = new Date(date)

    const day = dateObj.getDate()
    const month = dateObj.getMonth()
    const year = dateObj.getFullYear()

    // Correct day number
    const getDay = () => {
      switch (day) {
        case 1:
          return '01'
        case 2:
          return '02'
        case 3:
          return '03'
        case 4:
          return '04'
        case 5:
          return '05'
        case 6:
          return '06'
        case 7:
          return '07'
        case 8:
          return '08'
        case 9:
          return '09'
        default:
          return day.toString()
      }
    }

    // Set month number
    const getMonth = () => {
      switch (month) {
        case 0:
          return '01'
        case 1:
          return '02'
        case 2:
          return '03'
        case 3:
          return '04'
        case 4:
          return '05'
        case 5:
          return '06'
        case 6:
          return '07'
        case 7:
          return '08'
        case 8:
          return '09'
        case 9:
          return '10'
        case 10:
          return '11'
        case 11:
          return '12'
      }
    }

    return getDay() + '/' + getMonth() + '/' + year
  }
  if (format === 'dd mon. year') {
    // Transform date to this format : 01 Jan. 2000
    const dateObj = new Date(date)

    const day = dateObj.getDate()
    const month = dateObj.getMonth()
    const year = dateObj.getFullYear()

    // Correct day number
    const getDay = () => {
      switch (day) {
        case 1:
          return '01'
        case 2:
          return '02'
        case 3:
          return '03'
        case 4:
          return '04'
        case 5:
          return '05'
        case 6:
          return '06'
        case 7:
          return '07'
        case 8:
          return '08'
        case 9:
          return '09'
        default:
          return day.toString()
      }
    }

    // Set month number
    const getMonth = () => {
      switch (month) {
        case 0:
          return 'Jan.'
        case 1:
          return 'Feb.'
        case 2:
          return 'Mar.'
        case 3:
          return 'Apr.'
        case 4:
          return 'May'
        case 5:
          return 'Jun.'
        case 6:
          return 'Jul.'
        case 7:
          return 'Aug.'
        case 8:
          return 'Sep.'
        case 9:
          return 'Oct.'
        case 10:
          return 'Nov.'
        case 11:
          return 'Dec.'
      }
    }

    return getDay() + ' ' + getMonth() + ' ' + year
  }
}

export default formatedDate
