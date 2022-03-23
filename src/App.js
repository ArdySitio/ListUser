import useListUser from "./hooks/useListUser";
import DataListUser from "./datalistuser/tableuser";
import "antd/dist/antd.css";

function App() {
  const data = useListUser();

  return (
    <div className="App">
      <DataListUser data={data} />
    </div>
  );
}

export default App;
