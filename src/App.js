import DropPages from "./components/DropPages";
import IntraPagePagination from "./components/SpaPages/";

function App() {
  const secret = process.env.REACT_APP_BASE_URL;

  return (
    <div className=''>
      {/* <DropPages /> */}
      <IntraPagePagination />
    </div>
  );
}

export default App;
