import "./App.css";
import Access from "./component/Pages/Access/Access";
import Atmosphere from "./component/Pages/Atmosphere/Atmosphere";
import Home from "./component/Pages/Home/Home";
import Menu from "./component/Pages/Menu/Menu";
import Nav from "./component/Pages/Nav/Nav";
import Reservation from "./component/Pages/Reservation/Reservation";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Menu/>
      <Atmosphere/>
      <Reservation/>
      <Access/>
    </div>
  );
}

export default App;
