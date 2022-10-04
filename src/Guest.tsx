import { IGuest } from './models'
interface GuestProps {
  guest: IGuest
  removeGuest: (e: React.MouseEvent<HTMLButtonElement>, filteredId: string) => void
}

const Guest = ({ guest, removeGuest }: GuestProps) => {
  return (
    <tr>
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
        <button onClick={(e) => removeGuest(e, guest._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  )
}
export default Guest
