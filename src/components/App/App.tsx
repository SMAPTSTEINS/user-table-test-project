import "./App.css";
import Table from "../Table";
import { data } from "../../constants/data";

const App = () => (
  <div className='App'>
    <header className='App-header'>Тестовое задание</header>
    <Table data={data} />
  </div>
);

export default App;
