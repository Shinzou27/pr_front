import { useAppDispatch } from "../app/hook";
import { toggleTheme } from "../features/theme/themeSlice";

function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white dark:bg-black m-auto">
      <h1 className="text-black dark:text-white">Título teste</h1>
      <p className="text-black dark:text-white">Teste</p>
      <button onClick={() => dispatch(toggleTheme())}>Trocar de tema</button>
    </div>
  );
}

export default Home;