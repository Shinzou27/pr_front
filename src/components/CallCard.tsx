interface CallCardProps {
  title: string,
  date: string,
  creatorName: string,
  onSelect: () => void
}
function CallCard({onSelect, title, date, creatorName}: CallCardProps) {
  return (
    <div onClick={onSelect} className="border-2 py-2">
      <div className="flex align-start ml-2">
        <h6>{title}</h6>
      </div>
      <div className="flex justify-between mx-2">
        <p>{date}</p>
        <p>{creatorName}</p>
      </div>
    </div>
  );
}

export default CallCard;