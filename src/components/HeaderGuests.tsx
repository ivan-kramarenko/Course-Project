import { guestsCountByRussianGrammar } from '../core/utils/index'

interface HeaderGuestsProps {
  countOfGuests: number
}

const HeaderGuests = ({ countOfGuests }: HeaderGuestsProps) => {
  const setHeaderClassName = (): string => {
    const headerBgClassName = countOfGuests === 0 ? 'bg-danger' : 'bg-primary'
    const headerClasses = ['text-light text-center rounded p-1 float-left vw-30', headerBgClassName]
    return headerClasses.join(' ')
  }
  return (
    <h4 className={setHeaderClassName()}>
      <span>{guestsCountByRussianGrammar(countOfGuests)}</span>
    </h4>
  )
}

export default HeaderGuests