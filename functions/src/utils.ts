export const toSeconds = (duration, unit) => {
  switch (unit) {
    case 'h':
    case 'hour':
    case 'hours':
    case 'hrs': {
      return 60 * 60 * duration
    }

    case 'm':
    case 'min':
    case 'minutes':
    case 'mins':
    case 'minute': {
      return 60 * duration
    }

    default: {
      return duration
    }
  }
}

export const humanizeUnit = unit => {
  switch (unit) {
    case 's': {
      return 'seconds'
    }

    case 'hr':
    case 'h': {
      return 'hours'
    }

    case 'm':
    case 'min':
    case 'mins': {
      return 'minutes'
    }

    default: {
      return 'invalid unit'
    }
  }
}