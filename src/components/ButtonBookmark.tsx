interface ButtonBookmarkProps {
  bookmark: boolean
  handleBookmarkClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonBookmark = ({ bookmark, handleBookmarkClick }: ButtonBookmarkProps) => {
  const setBtnClassName = (): string => {
    const btnBgClassName = !bookmark ? 'btn-secondary' : 'btn-primary'
    const btnClasses = ['btn', btnBgClassName]
    return btnClasses.join(' ')
  }
  const setBtnText = (): string => {
    return !bookmark ? 'False' : 'True'
  }
  return (
    <button onClick={(e) => handleBookmarkClick(e)} className={setBtnClassName()}>
      {setBtnText()}
    </button>
  )
}

export default ButtonBookmark
