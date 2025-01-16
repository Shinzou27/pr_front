import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { getCalls } from "../features/call/callSlice";
import { getMockCalls } from "../utils/utils";
import CallCard from "./CallCard";
interface CallListProps {
  handleSelect: (id: number) => void
}
function CallList({handleSelect}: CallListProps) {
  const calls = useAppSelector((state) => state.call);
  const dispatch = useAppDispatch();
  const fakeRequest = () => {
    dispatch(getCalls(getMockCalls()));
    // setTimeout(() => {
    // }, 100);
  }
  useEffect(() => {
    fakeRequest();
  }, [])
  return (
    <div className="w-64 border-4 border-black dark:border-white rounded-md">
      {calls.map((call) => <CallCard onSelect={() => handleSelect(call.id)} key={call.id} creatorName={call.creator.name} date={call.creation_date} title={call.title}/>)}
    </div>
  );
}

export default CallList;