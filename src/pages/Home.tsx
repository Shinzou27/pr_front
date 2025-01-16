import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import CallList from "../components/CallList";
import { toggleTheme } from "../features/theme/themeSlice";
import Call from "../types/call";
import CallDetail from "../components/CallDetail";

function Home() {
  const [selected, setSelected] = useState<Call>();
  const dispatch = useAppDispatch();
  const calls = useAppSelector((state) => state.call);
  const updateDetails = (id: number) => {
    setSelected(calls.filter((call) => call.id === id)[0]);
  }
  return (
    <div className="bg-white dark:bg-black m-auto h-full">
      <div className="flex gap-8">
        <CallList handleSelect={updateDetails}/>
        {selected != undefined && <CallDetail call={selected}/>}
      </div>
      {/* <h1 className="text-black dark:text-white">Título teste</h1>
      <p className="text-black dark:text-white">Teste</p>
      <button onClick={() => dispatch(toggleTheme())}>Trocar de tema</button> */}
    </div>
  );
}

export default Home;