import { IGuest, IProfession } from '../interfaces'

export const getFirstAndSecondDigitOfNumber = (num: number): number[] => {
  const splittedNumberArray = num.toString().split('')
  const firstDigitOfNumber = Number(
    splittedNumberArray[splittedNumberArray.length - 1]
  )
  const secondDigitOfNumber = Number(
    splittedNumberArray[splittedNumberArray.length - 2]
  )
  if (secondDigitOfNumber === 0) {
    return [firstDigitOfNumber, 0]
  }
  return [firstDigitOfNumber, secondDigitOfNumber]
}

export const guestsCountByRussianGrammar = (guestsCount: number): string => {
  const [firstDigit, secondDigit] = getFirstAndSecondDigitOfNumber(guestsCount)
  if (firstDigit === 0 && guestsCount === 0) {
    return 'Никто не тусанет с тобой сегодня'
  }
  if (firstDigit > 1 && firstDigit < 5 && secondDigit !== 1) {
    return `${guestsCount} человека тусанут с тобой сегодня`
  }
  return `${guestsCount} человек тусанет с тобой сегодня`
}

export function paginate<T>(
  items: T[],
  pageNumber: number,
  pageSize: number
): T[] {
  const startIndex: number = (pageNumber - 1) * pageSize
  return [...items].splice(startIndex, pageSize)
}

export function filterGuestsByItem(
  guests: IGuest[],
  filterProfession: IProfession | undefined
): IGuest[] {
  if (filterProfession === undefined) {
    return guests
  }
  return guests.filter((guest) => guest.profession._id === filterProfession._id)
}

export function filterGuestsBySearch(
  guests: IGuest[],
  searchQuery: string
): IGuest[] {
  if (searchQuery.trim() === '') {
    return guests
  }
  return guests.filter((guest) =>
    guest.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
}

export function filterGuests(
  guests: IGuest[],
  filterProfession: IProfession | undefined,
  searchQuery: string
): IGuest[] {
  const byItem = filterGuestsByItem(guests, filterProfession)
  const bySearch = filterGuestsBySearch(byItem, searchQuery)
  return bySearch
}
