import ButtonBookmark from './components/ButtonBookmark'
import { IGuest } from './interfaces/models'
interface GuestProps {
  guest: IGuest
  removeGuest: (e: React.MouseEvent<HTMLButtonElement>, filteredId: string) => void
  switchBookmark: (elemId: string) => void
}

const Guest = ({ guest, removeGuest, switchBookmark }: GuestProps) => {
  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switchBookmark(guest._id)
  }
  return (
    <tr className="border-bottom align-middle">
      <td>{guest.name}</td>
      <td>
        {guest.qualities.map((quality) => (
          <span className={`m-1 badge bg-${quality.color}`} key={quality._id}>
            {quality.name}
          </span>
        ))}
      </td>
      <td>
        <span>{guest.profession.name}</span>
      </td>
      <td>
        <span>{guest.completedMeetings}</span>
      </td>
      <td>
        <span>{guest.rate}/5</span>
      </td>
      <td>
        <ButtonBookmark bookmark={guest.bookmark} handleBookmarkClick={handleBookmarkClick} />
      </td>
      <td>
        <button onClick={(e) => removeGuest(e, guest._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  )
}
export default Guest
