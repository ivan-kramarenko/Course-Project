export const getFirstAndSecondDigitOfNumber = (num: number): number[] => {
  const splittedNumberArray = num.toString().split('')
  const firstDigitOfNumber = Number(splittedNumberArray[splittedNumberArray.length - 1])
  const secondDigitOfNumber = Number(splittedNumberArray[splittedNumberArray.length - 2])
  if (!secondDigitOfNumber) {
    return [firstDigitOfNumber, 0]
  } else {
    return [firstDigitOfNumber, secondDigitOfNumber]
  }
}

export const guestsCountByRussianGrammar = (guestsCount: number): string => {
  const [firstDigit, secondDigit] = getFirstAndSecondDigitOfNumber(guestsCount)
  if (!firstDigit && !guestsCount) {
    return 'Никто не тусанет с тобой сегодня'
  } else if (firstDigit > 1 && firstDigit < 5 && secondDigit !== 1) {
    return `${guestsCount} человека тусанет с тобой сегодня`
  } else {
    return `${guestsCount} человек тусанет с тобой сегодня`
  }
}
