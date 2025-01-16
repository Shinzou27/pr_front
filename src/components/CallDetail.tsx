import Call from "../types/call";

interface CallDetailProps {
  call: Call
}
function CallDetail({call}: CallDetailProps) {
  return (
    <div className="w-2/3 border-4 border-black dark:border-white rounded-md gap-4">
      <div className="flex mx-2 justify-between">
        <h6>{call.title}</h6>
        <p>{call.creation_date}</p>
      </div>
      <div>
        {call.transcriptions.map((item) => <p key={item.id}>{item.text}</p>)}
      </div>
    </div>
  );
}

export default CallDetail;